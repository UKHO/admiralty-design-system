/**
 * This component takes heavy inspiration from the autocomplete component created by alphagov: https://github.com/alphagov/accessible-autocomplete
 */

import { Component, h, Listen, Prop, State, Element, EventEmitter, Event, Watch } from '@stencil/core';
import { AutoCompleteChangeEventDetail } from './autocomplete.interface';
import { watchForOptions } from './optionsWatcher';

const id = 1;

interface Option {
  text: string;
  value: any;
}

@Component({
  tag: 'admiralty-autocomplete',
  styleUrl: 'autocomplete.scss',
  scoped: true,
})
export class AutocompleteComponent {
  @Element() el!: HTMLAdmiraltyAutocompleteElement;

  /**
   * The name attribute to apply to the input field
   */
  @Prop() name: string;
  /**
   * The label text for the input
   */
  @Prop() label: string;
  /**
   * The hint text for the input
   */
  @Prop() hint: string;
  /**
   * The placeholder text for the input
   */
  @Prop() placeholder: string;
  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: any | null = '';
  /**
   * Whether to show 'no options found'
   */
  @Prop() showNoOptionsFound: boolean = true;
  /**
   * The minimum number of characters that must be entered before it starts filtering
   */
  @Prop() minLength: number = 1;
  /**
   * Whether to pick the first option by default
   */
  @Prop() autoSelect: boolean = false;
  /**
   * Whether to show all the values when clicked, much like a standard dropdown
   */
  @Prop() showAllValues: boolean = true;
  /**
   * The assistive hint that is read to the user when the focuses the component
   */
  @Prop() assistiveHint: string =
    'When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.';
  /**
   * This dictates whether the autocomplete is disabled
   */
  @Prop() disabled = false;
  /**
   * Whether to show the autocomplete in an invalid state
   */
  @Prop() invalid: boolean = false;
  /**
   * The message to show when the autocomplete is invalid
   */
  @Prop() invalidMessage: string;
  /**
   * This dictates whether the autocomplete should confirm the choice on blur
   */
  @Prop() confirmOnBlur: boolean = true;

  @State() focused = null;
  @State() hovered = null;
  @State() menuOpen = false;
  @State() options: Option[] = [];
  @State() query: string = this.getPossibleOption()?.text ?? '';
  @State() validChoiceMade = false;
  @State() selected = null;
  @State() ariaHint = true;

  @Watch('value')
  valueChanged() {
    const possibleOption = this.getPossibleOption();
    if (possibleOption) {
      this.validChoiceMade = true;
      this.query = possibleOption.text;
      this.admiraltyChange.emit({ value: this.value });
    }
  }

  private getPossibleOption() {
    return this.source.filter(r => r.value === this.value)[0];
  }

  @Watch('query')
  queryChanged() {
    const autoselect = this.autoSelect;
    const queryEmpty = this.query.length === 0;
    const queryLongEnough = this.query.length >= this.minLength;

    this.ariaHint = queryEmpty;
    const searchForOptions = (this.showAllValues && !this.validChoiceMade) || (!queryEmpty && queryLongEnough);
    if (searchForOptions) {
      const matches = this.source.filter(r => r.text.toLowerCase().indexOf(this.query.toLowerCase()) !== -1);
      const optionsAvailable = matches.length > 0;
      this.menuOpen = optionsAvailable;
      this.options = matches;
      this.selected = autoselect && optionsAvailable ? 0 : -1;
    } else if (queryEmpty || !queryLongEnough) {
      this.menuOpen = false;
      this.options = [];
    }

    this.validChoiceMade = this.isQueryAnOption(this.query, this.options);
  }

  elementReferences = {};
  mutationObserver: MutationObserver;

  connectedCallback() {
    this.mutationObserver = watchForOptions<HTMLAdmiraltyAutocompleteOptionElement>(this.el, 'admiralty-autocomplete-option', async () => {
      const possibleOption = this.getPossibleOption();
      if (possibleOption) {
        this.validChoiceMade = true;
        this.query = possibleOption.text;
      }
    });
  }

  private get source(): Option[] {
    return this.childOpts.map(option => ({ text: option.textContent, value: option.value }));
  }

  private setValue(selectedOption: Option) {
    this.value = selectedOption?.value ?? '';
  }

  componentDidUpdate() {
    if (this.focused) {
      this.elementReferences[this.focused].focus();
    }
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() admiraltyChange: EventEmitter<AutoCompleteChangeEventDetail>;

  private get childOpts() {
    return Array.from(this.el.querySelectorAll('admiralty-autocomplete-option'));
  }

  @Listen('admiraltyFocus')
  handleInputFocus(_: FocusEvent) {
    const shouldReopenMenu = !this.validChoiceMade && this.query.length >= this.minLength && this.options.length > 0;
    if (shouldReopenMenu) {
      this.focused = -1;
      this.menuOpen = shouldReopenMenu || this.menuOpen;
      this.selected = -1;
    } else {
      this.focused = -1;
    }
    if (this.showAllValues) {
      this.queryChanged();
    }
  }

  isQueryAnOption(query: string, options: Option[]) {
    return options.map(entry => entry.text.toLowerCase()).indexOf(query.toLowerCase()) !== -1;
  }

  handleComponentBlur(newState: { menuOpen: boolean }) {
    if (this.confirmOnBlur) {
      //check if the query exactly matches an item and take the first
      const matches = this.source.filter(r => r.text.toLowerCase() == this.query.toLowerCase());
      const firstMatch = matches[0];
      if (firstMatch) {
        this.setValue(firstMatch);
      } else if (this.selected !== -1) {
        this.setValue(this.options[this.selected]);
      } else {
        // if the query is not an option, clear the query and set the value to empty string
        this.query = '';
        this.setValue({ text: '', value: '' });
      }
    }
    this.focused = null;
    this.menuOpen = newState.menuOpen || false;
    this.selected = null;
  }

  handleOptionFocus(index: number) {
    this.focused = index;
    this.hovered = null;
    this.selected = index;
  }

  handleOptionMouseEnter(index: number) {
    // iOS Safari prevents click event if mouseenter adds hover background colour
    // See: https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW4
    //if (!isIosDevice()) {
    this.hovered = index;
    //}
  }

  handleOptionClick(index: number) {
    const selectedOption = this.options[index];
    const newOption = selectedOption;
    this.focused = -1;
    this.hovered = null;
    this.menuOpen = false;
    this.query = newOption.text;
    this.selected = -1;
    this.setValue(newOption);
  }

  handleOptionMouseDown(event) {
    // Safari triggers focusOut before click, but if you
    // preventDefault on mouseDown, you can stop that from happening.
    // If this is removed, clicking on an option in Safari will trigger
    // `handleOptionBlur`, which closes the menu, and the click will
    // trigger on the element underneath instead.
    // See: http://stackoverflow.com/questions/7621711/how-to-prevent-blur-running-when-clicking-a-link-in-jquery
    event.preventDefault();
  }

  handleListMouseLeave(_) {
    this.hovered = null;
  }

  handleOptionBlur(event, index: number) {
    const focusingOutsideComponent = event.relatedTarget === null;
    const focusingInput = event.relatedTarget === this.elementReferences[-1];
    const focusingAnotherOption = this.focused !== index && this.focused !== -1;
    const blurComponent = (!focusingAnotherOption && focusingOutsideComponent) || !(focusingAnotherOption || focusingInput);
    if (blurComponent) {
      const keepMenuOpen = this.menuOpen && false; // isIosDevice()
      this.handleComponentBlur({
        menuOpen: keepMenuOpen,
      });
    }
  }

  handleInputBlur(_: FocusEvent) {
    const focusingAnOption = this.focused !== -1;
    if (!focusingAnOption) {
      const keepMenuOpen = this.menuOpen && false; // isIosDevice();
      this.handleComponentBlur({
        menuOpen: keepMenuOpen,
      });
    }
  }

  handleInputChange(event: string) {
    const query = event;
    const queryEmpty = query.length === 0;

    this.query = query;
    this.ariaHint = queryEmpty;
  }

  handleInputClick() {
    if (this.disabled) {
      return;
    }
    this.queryChanged();
  }

  handleUpArrow(event) {
    event.preventDefault();
    const isNotAtTop = this.selected !== -1;
    const allowMoveUp = isNotAtTop && this.menuOpen;
    if (allowMoveUp) {
      this.handleOptionFocus(this.selected - 1);
    }
  }

  handleDownArrow(event) {
    event.preventDefault();
    // if not open, open
    if (this.showAllValues && this.menuOpen === false) {
      event.preventDefault();
      const matches = this.source.filter(r => r.text.toLowerCase().indexOf(''.toLowerCase()) !== -1);
      this.menuOpen = true;
      this.options = matches;
      this.selected = 0;
      this.focused = 0;
      this.hovered = null;
    } else if (this.menuOpen === true) {
      const isNotAtBottom = this.selected !== this.options.length - 1;
      const allowMoveDown = isNotAtBottom && this.menuOpen;
      if (allowMoveDown) {
        this.handleOptionFocus(this.selected + 1);
      }
    }
  }

  handleSpace(event) {
    // if not open, open
    if (this.showAllValues && this.menuOpen === false && this.query === '') {
      event.preventDefault();
      const matches = this.source.filter(r => r.text.toLowerCase().indexOf(''.toLowerCase()) !== -1);
      this.menuOpen = true;
      this.options = matches;
    }
    const focusIsOnOption = this.focused !== -1;
    if (focusIsOnOption) {
      event.preventDefault();
      this.handleOptionClick(this.focused);
    }
  }

  handleEnter(event) {
    if (this.menuOpen) {
      event.preventDefault();
      const hasSelectedOption = this.selected >= 0;
      if (hasSelectedOption) {
        this.handleOptionClick(this.selected);
      }
    }
  }

  isPrintableKeyCode(keyCode) {
    return (
      (keyCode > 47 && keyCode < 58) || // number keys
      keyCode === 32 ||
      keyCode === 8 || // spacebar or backspace
      (keyCode > 64 && keyCode < 91) || // letter keys
      (keyCode > 95 && keyCode < 112) || // numpad keys
      (keyCode > 185 && keyCode < 193) || // ;=,-./` (in order)
      (keyCode > 218 && keyCode < 223) // [\]' (in order)
    );
  }

  handlePrintableKey(event) {
    const inputElement = this.elementReferences[-1];
    const eventIsOnInput = event.target === inputElement;
    if (!eventIsOnInput) {
      inputElement.focus();
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    switch (event.code) {
      case 'ArrowUp':
        this.handleUpArrow(event);
        break;
      case 'ArrowDown':
        this.handleDownArrow(event);
        break;
      case 'Space':
        this.handleSpace(event);
        break;
      case 'Enter':
        this.handleEnter(event);
        break;
      case 'Escape':
        this.handleComponentBlur({
          menuOpen: false,
        });
        break;
      default:
        if (this.isPrintableKeyCode(event.keyCode)) {
          this.handlePrintableKey(event);
        }
        break;
    }
  }

  render() {
    const inputFocused = this.focused === -1;
    const noOptionsAvailable = this.options.length === 0;
    const queryNotEmpty = this.query.length !== 0;
    const queryLongEnough = this.query.length >= this.minLength;
    const showNoOptionsFound = this.showNoOptionsFound && inputFocused && noOptionsAvailable && queryNotEmpty && queryLongEnough;

    const menuClassName = `autocomplete-menu`;
    const menuIsVisible = this.menuOpen || showNoOptionsFound;
    const menuModifierVisibility = `${menuClassName}-${menuIsVisible ? 'visible' : 'hidden'}`;
    const menuClassList = [menuClassName, menuModifierVisibility];

    const optionClassName = `autocomplete-option`;
    const optionFocused = this.focused !== -1 && this.focused !== null;

    const assistiveHintID = id + '-assistiveHint';
    const ariaProps = {
      'aria-describedby': this.ariaHint ? assistiveHintID : null,
      'aria-expanded': this.menuOpen ? 'true' : 'false',
      'aria-activedescendant': optionFocused ? `${id}-option-${this.focused}` : null,
      'aria-owns': `${id}-listbox`,
      'aria-autocomplete': this.autoSelect ? 'both' : 'list',
    };

    const inputClassName = `autocomplete-input`;
    const inputClassList = [inputClassName, this.showAllValues ? `${inputClassName}-show-all-values` : `${inputClassName}-default`];

    return (
      <div class={{ 'autocomplete-wrapper': true, 'invalid': this.invalid }} onKeyDown={event => this.handleKeyDown(event)}>
        <div class="autocomplete-input-wrapper">
          <admiralty-input
            {...ariaProps}
            class={inputClassList.join(' ')}
            value={this.query}
            onClick={() => this.handleInputClick()}
            onAdmiraltyBlur={event => this.handleInputBlur(event.detail)}
            onAdmiraltyInput={event => this.handleInputChange(event.detail.value)}
            ref={inputElement => {
              this.elementReferences[-1] = inputElement;
            }}
            name={this.name}
            placeholder={this.placeholder}
            type="text"
            role="combobox"
            label={this.label}
            hint={this.hint}
            disabled={this.disabled}
            invalid={this.invalid}
            invalidMessage={this.invalidMessage}
          ></admiralty-input>

          <admiralty-icon class="autocomplete-dropdown-icon" iconName="chevron-down"></admiralty-icon>
        </div>
        <ul class={menuClassList.join(' ')} role="listbox" id={`${id}-listbox`} onMouseLeave={this.handleListMouseLeave}>
          {this.options.map((option, index) => {
            const showFocused = this.focused === -1 ? this.selected === index : this.focused === index;
            const optionModifierFocused = showFocused && this.hovered === null ? ` ${optionClassName}--focused` : '';
            const optionModifierOdd = index % 2 ? ` ${optionClassName}--odd` : '';
            // const iosPosinsetHtml = isIosDevice()
            //   ? `<span id=${id}__option-suffix--${index} style="border:0;clip:rect(0 0 0 0);height:1px;` +
            //     'marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;' +
            //     'whiteSpace:nowrap;width:1px">' +
            //     ` ${index + 1} of ${options.length}</span>`
            //   : '';

            return (
              <li
                aria-selected={this.focused === index ? 'true' : 'false'}
                class={`${optionClassName}${optionModifierFocused}${optionModifierOdd}`}
                id={`option-${index}`}
                key={index}
                onBlur={event => this.handleOptionBlur(event, index)}
                onClick={() => this.handleOptionClick(index)}
                onMouseDown={this.handleOptionMouseDown}
                onMouseEnter={() => this.handleOptionMouseEnter(index)}
                ref={optionEl => {
                  this.elementReferences[index] = optionEl;
                }}
                role="option"
                tabIndex={-1}
                aria-posinset={index + 1}
                aria-setsize={this.options.length}
              >
                {option.text}
              </li>
            );
          })}

          {showNoOptionsFound && <li class={`${optionClassName} ${optionClassName}-no-results`}>No results found</li>}
        </ul>

        <span id={assistiveHintID} style={{ display: 'none' }}>
          {this.assistiveHint}
        </span>
      </div>
    );
  }
}
