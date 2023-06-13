import { Component, EventEmitter, Host, Prop, Event, h, State, Element } from '@stencil/core';
import { Keys } from '../Keys';

@Component({
  tag: 'admiralty-type-ahead',
  styleUrl: 'type-ahead.scss',
  shadow: true,
})
export class TypeAheadComponent {
  private _id = `admiralty-typeahead-${++id}`;

  hintId = `${this._id}-assistive-hint`;
  listId = `${this._id}-list`;

  @Element() el: HTMLElement;

  listContainer!: HTMLDivElement;
  inputControl!: HTMLAdmiraltyInputElement;

  @State() filterResult: string[] = new Array<string>();

  filterList: Array<string> = [];

  selectedItemIndex = -1;
  isFocused = false;

  isSilenced = false;
  isAlternateStatusSection = false;
  statusText: string;

  private originalSearch = '';
  private hasBeenFocusedAtLeastOnce = false;

  private get inputValue() {
    return this.inputControl.value.toString();
  }

  private set inputValue(value: string) {
    this.inputControl.value = value;
  }

  /**
   * The value of the textinput
   */
  @Prop() value: string;

  /**
   * The text content of the label for the input box
   */
  @Prop() label: string;

  /**
   * The placeholder text for the input field
   */
  @Prop() placeholder: string;

  /**
   * Optional property to show results when input box is initally focused
   */
  @Prop() resultsOnInitFocus: boolean = false;

  /**
   * Optional function that will be executed when the user selects an item from the typeahead
   */
  @Event() selectionChanged: EventEmitter<string>;

  /**
   * Event that is fired whenever the value of the typeahead changes
   * e.g. selection from the dropdown or manually typed entry
   */
  @Event() valueChanged: EventEmitter<string>;

  connectedCallback() {
    const slotItems = this.el.querySelectorAll('admiralty-type-ahead-item');
    slotItems.forEach(el => {
      this.filterList.push(el.getAttribute('value'));
    });
  }

  componentDidLoad() {
    if (this.value) {
      this.inputValue = this.value;
    }
  }

  handleFocusIn() {
    if (this.resultsOnInitFocus && !this.hasBeenFocusedAtLeastOnce) {
      this.performFilter('');
      this.hasBeenFocusedAtLeastOnce = true;
    }

    this.isFocused = true;
    this.isSilenced = false;
  }

  handleFocusOut() {
    this.isFocused = false;
    this.statusText = null;
    this.isSilenced = true;
  }

  private textChanged(value: string): void {
    this.originalSearch = value;
    this.performFilter(value);
    this.isSilenced = false;
    this.valueChanged.emit(value);
  }

  handleKeyPressed(event: KeyboardEvent): void {
    event.stopImmediatePropagation();

    if (event.key === Keys.UP_ARROW || event.key === Keys.DOWN_ARROW) {
      this.navigateSuggestions(event.key);
      this.updateScroll();
    } else if (event.key !== Keys.ENTER) {
      this.textChanged(this.inputValue);
      this.selectCurrentItem();
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    event.stopImmediatePropagation();

    if (event.key === Keys.TAB || event.key === Keys.ENTER) {
      this.selectCurrentItem();
    }
  }

  handleItemSelected(value: string): void {
    this.inputValue = value;
    this.textChanged(value);
    this.filterResult = new Array<string>();
    this.selectionChanged.emit(value);
  }

  private performFilter(value: string) {
    const filter = (filterList: string[], text: string) => {
      const filterResult = filterList.filter(value => {
        return text === null || text.length < 1 || value.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      return filterResult;
    };

    this.filterResult = filter(this.filterList, value);

    this.selectedItemIndex = -1;
  }

  private addHighlight() {
    if (this.selectedItemIndex > -1) {
      const listItem = this.el.shadowRoot.querySelector(`#${this.getListItemId(this.selectedItemIndex)}`);
      listItem.classList.add('highlighted');
    }
  }

  private removeHighlight(i: number) {
    if (i > -1) {
      const listItem = this.el.shadowRoot.querySelector(`#${this.getListItemId(i)}`);
      listItem.classList.remove('highlighted');
    }
  }

  private selectCurrentItem(): void {
    if (this.selectedItemIndex >= 0) {
      const selectedItemText = this.filterResult[this.selectedItemIndex];
      this.handleItemSelected(selectedItemText);
    }
  }

  handleItemHovered(index: number): void {
    this.removeHighlight(this.selectedItemIndex);
    this.selectedItemIndex = index;
    this.addHighlight();
  }

  handleComponentFocusOut() {
    // Ensure dropdown closed on clicking or tabbing away from this component
    if (this.filterResult?.length > 0) {
      this.filterResult = new Array<string>();
      this.hasBeenFocusedAtLeastOnce = false;
    }
  }

  /**
   * Check if the selected option is in view, and scroll if not
   */
  private updateScroll() {
    const container = this.listContainer;

    const ul = container.querySelector('ul');
    const selectedItem: any = Array.from(ul.childNodes).find((item: any) => item.ariaPosInSet === `${this.selectedItemIndex + 1}`);

    if (container && selectedItem && container.scrollHeight + container.clientHeight) {
      selectedItem.scrollIntoView();
    }
  }

  private navigateSuggestions(key: Keys) {
    if (key === Keys.UP_ARROW) {
      this.removeHighlight(this.selectedItemIndex);
      this.selectedItemIndex--;
      if (this.selectedItemIndex === -2) {
        this.selectedItemIndex = this.filterResult.length - 1;
      }
    }
    if (key === Keys.DOWN_ARROW) {
      this.removeHighlight(this.selectedItemIndex);
      this.selectedItemIndex++;
      if (this.selectedItemIndex > this.filterResult.length - 1) {
        this.selectedItemIndex = -1;
      }
    }
    if (this.selectedItemIndex === -1) {
      this.inputValue = this.originalSearch;
    } else {
      const value = this.filterResult[this.selectedItemIndex];

      this.inputValue = value;

      this.addHighlight();
    }
  }

  private getListItemId(i: number) {
    return `${this.listId}-item-${i}`;
  }

  render() {
    return (
      <Host onFocusout={_ev => this.handleComponentFocusOut()}>
        <div class="visually-hidden">
          <div class="results-status-a" role="status" aria-atomic="true" aria-live="polite">
            {!this.isSilenced && this.isAlternateStatusSection ? this.statusText : ''}
          </div>
          <div class="results-status-b" role="status" aria-atomic="true" aria-live="polite">
            {!this.isSilenced && !this.isAlternateStatusSection ? this.statusText : ''}
          </div>
        </div>
        <admiralty-input
          type="text"
          ref={el => (this.inputControl = el)}
          label={this.label}
          placeholder={this.placeholder}
          class="filterTextInput"
          onKeyUp={ev => this.handleKeyPressed(ev)}
          onKeyDown={ev => this.handleKeyDown(ev)}
          onFocusin={_ev => this.handleFocusIn()}
          onFocusout={_ev => this.handleFocusOut()}
          aria-expanded={this.isFocused && this.filterResult.length > 0}
        ></admiralty-input>

        <span id={this.hintId} class="visually-hidden">
          When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.
        </span>
        {this.filterResult.length > 0 ? (
          <div class="typeahead-list-container" ref={el => (this.listContainer = el)}>
            <ul class="typeahead-list" id={this.listId} role="listbox">
              {this.filterResult.map((item, i) => (
                <li
                  id={this.getListItemId(i)}
                  onMouseDown={_ev => this.handleItemSelected(item)}
                  onMouseOver={_ev => this.handleItemHovered(i)}
                  aria-selected={i === this.selectedItemIndex}
                  role="option"
                  tabindex="-1"
                  aria-posinset={i + 1}
                  aria-setsize={this.filterResult.length}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <slot></slot>
      </Host>
    );
  }
}

let id = 0;
