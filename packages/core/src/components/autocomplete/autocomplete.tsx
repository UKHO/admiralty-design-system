/**
 * This component takes heavy inspiration from the autocomplete component created by alphagov: https://github.com/alphagov/accessible-autocomplete
 */

import { Component, h, Listen, Prop, State, Element, EventEmitter, Event } from '@stencil/core';
import { AutoCompleteChangeEventDetail } from './autocomplete.interface';

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

  @Prop() name: string;
  @Prop() label: string;
  @Prop() hint: string;
  @Prop() placeholder: string;
  @Prop() defaultValue: string = '';
  @Prop() showNoOptionsFound: boolean = true;
  @Prop() minLength: number = 1;
  @Prop() autoSelect: boolean = false;
  @Prop() showAllValues: boolean = true;
  @Prop() assistiveHint: string =
    'When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.';

  @State() focused = null;
  @State() hovered = null;
  @State() menuOpen = false;
  @State() options: Option[] = this.defaultValue ? [{ text: this.defaultValue, value: this.defaultValue }] : [];
  @State() query = this.defaultValue;
  @State() validChoiceMade = false;
  @State() selected = null;
  @State() ariaHint = true;

  elementReferences = {};

  source: Option[] = [];

  connectedCallback() {
    this.source = this.childOpts.map(option => ({ text: option.textContent, value: option.getAttribute('value') }));
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
      this.handleInputChange(this.query);
    }
  }

  isQueryAnOption(query: string, options: Option[]) {
    return options.map(entry => entry.text.toLowerCase()).indexOf(query.toLowerCase()) !== -1;
  }

  handleComponentBlur(newState) {
    let newQuery;
    // if (this.confirmOnBlur) {
    //   newQuery = newState.query || query
    //   this.props.onConfirm(options[selected])
    // } else {
    //   newQuery = query
    // }
    newQuery = this.query;
    this.focused = null;
    this.menuOpen = newState.menuOpen || false;
    this.query = newQuery;
    this.selected = null;
    this.validChoiceMade = this.isQueryAnOption(newQuery, this.options);
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
    const newQuery = selectedOption;
    this.focused = -1;
    this.hovered = null;
    this.menuOpen = false;
    this.query = newQuery.text;
    this.selected = -1;
    this.validChoiceMade = true;
    this.admiraltyChange.emit({ value: newQuery.value });
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
        query: this.options[this.selected],
      });
    }
  }

  @Listen('admiraltyBlur')
  handleInputBlur(_: FocusEvent) {
    const focusingAnOption = this.focused !== -1;
    if (!focusingAnOption) {
      const keepMenuOpen = this.menuOpen && false; // isIosDevice();
      const newQuery = this.query; //: this.templateInputValue(options[selected]);
      this.handleComponentBlur({
        menuOpen: keepMenuOpen,
        query: newQuery,
      });
    }
  }

  handleInputChange(event: string) {
    const autoselect = this.autoSelect;
    const query = event;
    const queryEmpty = query.length === 0;
    const queryChanged = this.query !== query;
    const queryLongEnough = query.length >= this.minLength;

    this.query = query;
    this.ariaHint = queryEmpty;
    const searchForOptions = (this.showAllValues && !this.validChoiceMade) || (!queryEmpty && queryChanged && queryLongEnough);
    if (searchForOptions) {
      const matches = this.source.filter(r => r.text.toLowerCase().indexOf(query.toLowerCase()) !== -1);
      const optionsAvailable = matches.length > 0;
      this.menuOpen = optionsAvailable;
      this.options = matches;
      this.selected = autoselect && optionsAvailable ? 0 : -1;
      this.validChoiceMade = false;
    } else if (queryEmpty || !queryLongEnough) {
      this.menuOpen = false;
      this.options = [];
    }
  }

  handleInputClick() {
    this.handleInputChange(this.query);
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
          query: this.query,
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

    const dropdownIconName = this.menuOpen ? 'chevron-up' : 'chevron-down';

    return (
      <div class="autocomplete-wrapper" onKeyDown={event => this.handleKeyDown(event)}>
        <div class="autocomplete-input-wrapper">
          <admiralty-input
            {...ariaProps}
            class={inputClassList.join(' ')}
            value={this.query}
            onClick={() => this.handleInputClick()}
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
          ></admiralty-input>

          <admiralty-icon class="autocomplete-dropdown-icon" iconName={dropdownIconName}></admiralty-icon>
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
