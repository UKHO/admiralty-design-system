import { Component, EventEmitter, Input, Optional, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

enum Keys {
  UP_ARROW = 'ArrowUp',
  DOWN_ARROW = 'ArrowDown',
  ENTER = 'Enter',
}

@Component({
  selector: 'ukho-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
})
export class TypeaheadComponent {
  /**
   * Function that will be executed to filter the results shown in the typeahead
   */
  @Input() filterFn: (filterTerm: string) => string[] | Observable<string[]>;
  /**
   * Model that will track the contents of the input field
   */
  @Input() FormControl: FormControl;
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

  filterResult: string[] = new Array<string>();
  selectedItemIndex = -1;
  isFocused = false;

  private originalSearch: string;
  private hasBeenFocusedAtLeastOnce = false;

  /**
   * Optional function that will be executed when the user selects an item from the typeahead
   */
  @Input() selectionAction: (selectedItemText) => unknown = () => {};

  focusIn() {
    if (this.showResultsOnInitialFocus && !this.hasBeenFocusedAtLeastOnce) {
      this.performFilter('');
      this.hasBeenFocusedAtLeastOnce = true;
    }

    this.isFocused = true;
  }

  focusOut() {
    this.isFocused = false;
  }

  textChanged = (value: string): void => {
    this.originalSearch = value;
    this.performFilter(value);
    this.valueChanged.emit(value);
  };

  keyPressed = (event: KeyboardEvent): void => {
    if (event.key == Keys.UP_ARROW || event.key == Keys.DOWN_ARROW) {
      this.navigateSuggestions(event.key);
    } else if (event.key !== Keys.ENTER) {
      this.textChanged(this.FormControl.value);
    }
  };

  itemSelected = (value: string): void => {
    this.FormControl.setValue(value);
    this.textChanged(value);
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

  private navigateSuggestions(key: Keys) {
    if (key == Keys.UP_ARROW) {
      this.selectedItemIndex--;
      if (this.selectedItemIndex == -2) {
        this.selectedItemIndex = this.filterResult.length - 1;
      }
    }
    if (key == Keys.DOWN_ARROW) {
      this.selectedItemIndex++;
      if (this.selectedItemIndex > this.filterResult.length - 1) {
        this.selectedItemIndex = -1;
      }
    }
    if (this.selectedItemIndex == -1) {
      this.FormControl.setValue(this.originalSearch);
    } else {
      this.FormControl.setValue(this.filterResult[this.selectedItemIndex]);
    }
  }
}
