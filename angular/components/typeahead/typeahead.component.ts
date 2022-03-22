import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { debounceTime, filter, mergeMap } from 'rxjs/operators';

enum Keys {
  UP_ARROW = 'ArrowUp',
  DOWN_ARROW = 'ArrowDown',
  ENTER = 'Enter',
}

let nextId = 0;

@Component({
  selector: 'ukho-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
})
export class TypeaheadComponent implements OnInit, OnDestroy {
  /**
   * Function that will be executed to filter the results shown in the typeahead
   */
  @Input() filterFn: (filterTerm: string) => string[] | Observable<string[]>;
  /**
   * Model that will track the contents of the input field
   *
   * @deprecated
   * - Use the `value` input property instead to set the `value`
   * - Use the `valueChanged` output or `value` input property to retrieve the current value
   */
  @Input() FormControl: FormControl = new FormControl();
  /**
   * The value of the textinput
   */
  @Input()
  get value(): string {
    return this.FormControl.value;
  }
  set value(value: string) {
    if (typeof value === 'undefined' || value === null || value.length < 1) {
      return;
    }
    this.FormControl.setValue(value);
  }
  /**
   * The text content of the label for the input box
   */
  @Input() label: string;
  /**
   * Optional property to show results when input box is initally focused
   */
  @Input() showResultsOnInitialFocus = false;

  /**
   * Event that is fired whenever the value of the typeahead changes
   * e.g. selection from the dropdown or manually typed entry
   */
  @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();

  /**
   * A reference to the typeahead list wrapper
   */
  @ViewChild('typeaheadListContainer') listContainer: ElementRef;

  /**
   * A reference to the typeahead list items
   */
  @ViewChildren('typeaheadListItems') listItems: QueryList<ElementRef>;

  filterResult: string[] = new Array<string>();
  selectedItemIndex = -1;
  isFocused = false;

  isSilenced = false;
  isDebounced = false;
  isAlternateStatusSection = false;
  statusText: string;

  id = `ukho-typeahead-${++nextId}`;
  hintId = `${this.id}-assistive-hint`;
  listId = `${this.id}-list`;

  private originalSearch = '';
  private hasBeenFocusedAtLeastOnce = false;

  private subscription: Subscription;
  private searchTextChanged$ = new Subject<string>();
  private selectedOption: string;

  /**
   * Optional function that will be executed when the user selects an item from the typeahead
   */
  @Input() selectionAction: (selectedItemText) => unknown = () => {};

  ngOnInit(): void {
    this.subscription = this.searchTextChanged$
      .pipe(
        debounceTime(1400),
        filter(() => !this.isSilenced),
        mergeMap(this.getStatusText),
      )
      .subscribe(this.setStatusText);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  focusIn() {
    if (this.showResultsOnInitialFocus && !this.hasBeenFocusedAtLeastOnce) {
      this.performFilter('');
      this.hasBeenFocusedAtLeastOnce = true;
    }

    this.isFocused = true;
    this.isSilenced = false;
    // Ensure the status text updates
    this.searchTextChanged$.next();
  }

  focusOut() {
    this.isFocused = false;
    this.statusText = null;
    this.isSilenced = true;
  }

  textChanged = (value: string): void => {
    this.originalSearch = value;
    this.selectedOption = null;
    this.performFilter(value);
    this.isDebounced = false;
    this.isSilenced = false;
    this.searchTextChanged$.next();
    this.valueChanged.emit(value);
  };

  keyPressed = (event: KeyboardEvent): void => {
    if (event.key === Keys.UP_ARROW || event.key === Keys.DOWN_ARROW) {
      this.navigateSuggestions(event.key);
      this.updateScroll();
    } else if (event.key !== Keys.ENTER) {
      this.textChanged(this.FormControl.value);
    }
  };

  itemSelected = (value: string): void => {
    this.FormControl.setValue(value);
    this.textChanged(value);
    this.selectedOption = value;
    this.searchTextChanged$.next();
    this.filterResult = new Array<string>();
    this.selectionAction(value);
  };

  performFilter(value: string) {
    const filterResult = this.filterFn(value);
    if (filterResult instanceof Array) {
      this.filterResult = filterResult;
    } else if (filterResult instanceof Observable) {
      filterResult.subscribe((filterValue) => {
        this.filterResult = filterValue;
      });
    }
    this.selectedItemIndex = -1;
  }

  selectCurrentItem(): void {
    if (this.selectedItemIndex >= 0) {
      const selectedItemText = this.filterResult[this.selectedItemIndex];
      this.itemSelected(selectedItemText);
    }
  }

  itemHovered(index: number): void {
    this.selectedItemIndex = index;
  }

  setStatusText = (text: string) => {
    // Switching between status sections ensures that screen readers will read out
    // the status message even if the result count remains the same
    this.isAlternateStatusSection = !this.isAlternateStatusSection;
    this.statusText = text;
    this.isDebounced = true;
  };

  /**
   * Status text to be read out by screen readers
   */
  getStatusText = (): Observable<string> => {
    const results = this.filterResult.length;
    if (!results) {
      return of('No search results');
    }
    const words = {
      result: results === 1 ? 'result' : 'results',
      is: results === 1 ? 'is' : 'are',
    };

    const contentSelectedOption = this.selectedOption
      ? `${this.selectedOption} ${this.selectedItemIndex + 1} of ${results} is highlighted.`
      : '';

    return of(`${results} ${words.result} ${words.is} available. ${contentSelectedOption}`);
  };

  /**
   * Check if the selected option is in view, and scroll if not
   */
  updateScroll() {
    const container = this.listContainer?.nativeElement;
    const selectedOption = this.listItems
      .toArray()
      .find((item) => item.nativeElement.ariaPosInSet === `${this.selectedItemIndex + 1}`)?.nativeElement;
    if (container && selectedOption && container.scrollHeight + container.clientHeight) {
      const scrollBottom = container.clientHeight + container.scrollTop;
      const elementBottom = selectedOption.offsetTop + selectedOption.offsetHeight;
      if (elementBottom > scrollBottom) {
        container.scrollTop = elementBottom - container.clientHeight;
      } else if (selectedOption.offsetTop < container.scrollTop) {
        container.scrollTop = selectedOption.offsetTop;
      }
    }
  }

  private navigateSuggestions(key: Keys) {
    if (key === Keys.UP_ARROW) {
      this.selectedItemIndex--;
      if (this.selectedItemIndex === -2) {
        this.selectedItemIndex = this.filterResult.length - 1;
      }
    }
    if (key === Keys.DOWN_ARROW) {
      this.selectedItemIndex++;
      if (this.selectedItemIndex > this.filterResult.length - 1) {
        this.selectedItemIndex = -1;
      }
    }
    if (this.selectedItemIndex === -1) {
      this.FormControl.setValue(this.originalSearch);
    } else {
      const value = this.filterResult[this.selectedItemIndex];
      this.FormControl.setValue(value);
      this.selectedOption = value;
      this.searchTextChanged$.next();
    }
  }
}
