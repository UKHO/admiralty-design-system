/**
 * This component takes heavy inspiration from the autocomplete component created by alphagov: https://github.com/alphagov/accessible-autocomplete
 */

import { Component, forceUpdate, Prop, State, h, Element, EventEmitter, Event, Watch } from '@stencil/core';
import { watchForOptions } from './optionsWatcher';
import { AutoCompleteChangeEventDetail } from './autocomplete.interface';

const keyCodes = {
  13: 'enter',
  27: 'escape',
  32: 'space',
  38: 'up',
  40: 'down',
};

function isIosDevice() {
  return typeof navigator !== 'undefined' && !!(navigator.userAgent.match(/(iPod|iPhone|iPad)/g) && navigator.userAgent.match(/AppleWebKit/g));
}

function isPrintableKeyCode(keyCode) {
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

@Component({
  tag: 'admiralty-autocomplete',
  styleUrl: 'autocomplete.scss',
  scoped: true,
})
export class AutocompleteComponent {
  @Element() el!: HTMLAdmiraltyAutocompleteElement;

  @Prop() autoselect: boolean = false;
  @Prop() cssNamespace: string = 'autocomplete';
  @Prop() displayMenu: string = 'inline';
  @Prop() minLength: number = 0;
  @Prop() name: string = 'input-autocomplete';
  @Prop() placeholder: string = '';
  @Prop() confirmOnBlur: boolean = true;
  @Prop() showNoOptionsFound: boolean = true;
  @Prop() showAllValues: boolean = true;
  @Prop() required: boolean = false;
  @Prop() assistiveHint: string =
    'When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.';
  @Prop() dropdownArrow: any;
  @Prop() menuAttributes: any;
  @Prop() inputClasses: string;
  @Prop() hintClasses: string;
  @Prop() menuClasses: string;
  /**
   * The text that will be used as a field label.
   */
  @Prop() label: string = null;
  /**
   * TThe text which will be used under the label to describe the input.
   */
  @Prop() hint: string = null;
  /**
   * Whether to show that the component is in an invalid state.
   */
  @Prop() invalid: boolean = false;
  /**
   * The message to show when the component is invalid.
   */
  @Prop() invalidMessage: string = null;
  /**
   * When `true`, the component cannot be interacted with.
   */
  @Prop() disabled: boolean = false;
  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | null = '';

  /**
   * Emitted when the value has changed.
   */
  @Event() admiraltyChange: EventEmitter<AutoCompleteChangeEventDetail>;

  elementReferences = {};
  $pollInput: NodeJS.Timeout;
  id = '1';

  source: string[] = [];

  @State() focused: number | null = null;
  @State() hovered: number | null = null;
  @State() menuOpen: boolean = false;
  @State() options: any = this.value ? [this.value] : [];
  @State() query: string = this.value;
  @State() validChoiceMade: boolean = false;
  @State() selected: number | null = null;
  @State() ariaHint: boolean = true;

  @Watch('value')
  onValueChange(newVal: string, _: string) {
    const query = newVal;
    const queryEmpty = !query || query.length === 0;
    const queryChanged = this.query !== query;
    const queryLongEnough = query?.length >= this.minLength;

    this.query = query;
    this.ariaHint = queryEmpty;

    const searchForOptions = !queryEmpty && queryChanged && queryLongEnough;
    if (searchForOptions) {
      const matches = this.source.filter(r => r.toLowerCase().indexOf(this.query.toLowerCase()) !== -1);
      const matchFound = matches.length === 1;
      this.options = matches;
      this.selected = matchFound ? 0 : -1;
      this.validChoiceMade = matchFound;

      this.focused = -1;
      this.menuOpen = false;
    } else if (queryEmpty || !queryLongEnough) {
      this.options = [];
    }

    this.admiraltyChange.emit({ value: newVal });
  }

  @Watch('focused')
  onFocusedChange(newVal: number | null, oldVal: number | null) {
    const componentLostFocus = this.focused === null;
    const focusedChanged = oldVal !== newVal;
    const focusDifferentElement = focusedChanged && !componentLostFocus;
    if (focusDifferentElement) {
      this.elementReferences[this.focused].focus();
    }
    const focusedInput = this.focused === -1;
    const componentGainedFocus = focusedChanged && oldVal === null;
    const selectAllText = focusedInput && componentGainedFocus;
    if (selectAllText) {
      const inputElement = this.elementReferences[this.focused];
      inputElement.setSelectionRange(0, inputElement.value.length);
    }
  }

  isQueryAnOption(query, options) {
    return options.map(entry => this.templateInputValue(entry).toLowerCase()).indexOf(query.toLowerCase()) !== -1;
  }

  connectedCallback() {
    this.mutation = watchForOptions<HTMLAdmiraltyAutocompleteOptionElement>(this.el, 'admiralty-autocomplete-option', async () => {
      this.source = this.childOpts.map(option => option.value);
      forceUpdate(this);
    });
    // this.pollInputElement();
  }

  disconnectedCallback() {
    clearTimeout(this.$pollInput);
  }

  // Applications like Dragon NaturallySpeaking will modify the
  // `input` field by directly changing its `.value`. These events
  // don't trigger our JavaScript event listeners, so we need to poll
  // to handle when and if they occur.
  pollInputElement() {
    this.getDirectInputChanges();
    this.$pollInput = setTimeout(() => {
      this.pollInputElement();
    }, 100);
  }

  getDirectInputChanges() {
    const inputReference = this.elementReferences[-1];
    const queryHasChanged = inputReference && inputReference.value !== this.query;

    if (queryHasChanged) {
      this.handleInputChange({ target: { value: inputReference.value } });
    }
  }

  onConfirm(value: string) {
    this.value = value;
  }

  mutation: MutationObserver;

  private get childOpts() {
    return Array.from(this.el.querySelectorAll('admiralty-autocomplete-option'));
  }

  hasAutoselect() {
    return isIosDevice() ? false : this.autoselect;
  }

  // This template is used when converting from a state.options object into a state.query.
  templateInputValue(value) {
    // const inputValueTemplate = this.templates && this.templates.inputValue;
    // return inputValueTemplate ? inputValueTemplate(value) : value;
    return value;
  }

  // This template is used when displaying results / suggestions.
  templateSuggestion(value) {
    // const suggestionTemplate = this.templates && this.templates.suggestion;
    // return suggestionTemplate ? suggestionTemplate(value) : value;
    return value;
  }

  handleComponentBlur(newState) {
    let newQuery;
    if (this.confirmOnBlur) {
      newQuery = newState.query || this.query;

      const matches = this.source.filter(r => r.toLowerCase().indexOf(newQuery.toLowerCase()) !== -1);
      const matchFound = newQuery?.length > 0 && matches.length === 1;
      this.onConfirm(matchFound ? matches[0] : '');
    } else {
      newQuery = this.query;
    }
    this.focused = null;
    this.menuOpen = newState.menuOpen || false;
    this.query = newQuery;
    this.selected = null;
    this.validChoiceMade = this.isQueryAnOption(newQuery, this.options);
  }

  handleListMouseLeave() {
    this.hovered = null;
  }

  handleOptionBlur(event, index) {
    const focusingOutsideComponent = event.relatedTarget === null;
    const focusingInput = event.relatedTarget === this.elementReferences[-1];
    const focusingAnotherOption = this.focused !== index && this.focused !== -1;
    const blurComponent = (!focusingAnotherOption && focusingOutsideComponent) || !(focusingAnotherOption || focusingInput);
    if (blurComponent) {
      const keepMenuOpen = this.menuOpen && isIosDevice();
      this.handleComponentBlur({
        menuOpen: keepMenuOpen,
        query: this.templateInputValue(this.options[this.selected]),
      });
    }
  }

  handleInputBlur(_) {
    const focusingAnOption = this.focused !== -1;
    if (!focusingAnOption) {
      const keepMenuOpen = this.menuOpen && isIosDevice();
      this.handleComponentBlur({
        menuOpen: keepMenuOpen,
        query: this.query,
      });
    }
  }

  handleInputChange(event) {
    const autoselect = this.hasAutoselect();
    const query = event.target.value;
    const queryEmpty = query.length === 0;
    const queryChanged = this.query !== query;
    const queryLongEnough = query.length >= this.minLength;

    this.query = query;
    this.ariaHint = queryEmpty;

    const searchForOptions = this.showAllValues || (!queryEmpty && queryChanged && queryLongEnough);
    if (searchForOptions) {
      const matches = this.source.filter(r => r.toLowerCase().indexOf(this.query.toLowerCase()) !== -1);
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

  handleInputClick(event) {
    this.handleInputChange(event);
  }

  handleInputFocus(_) {
    const shouldReopenMenu = !this.validChoiceMade && this.query.length >= this.minLength && this.options.length > 0;

    if (shouldReopenMenu) {
      this.focused = -1;
      this.menuOpen = shouldReopenMenu || this.menuOpen;
      this.selected = -1;
    } else {
      this.focused = -1;
    }
  }

  handleOptionFocus(index) {
    this.focused = index;
    this.hovered = null;
    this.selected = index;
  }

  handleOptionMouseEnter(index) {
    // iOS Safari prevents click event if mouseenter adds hover background colour
    // See: https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW4
    if (!isIosDevice()) {
      this.hovered = index;
    }
  }

  handleOptionClick(_, index) {
    const selectedOption = this.options[index];
    const newQuery = this.templateInputValue(selectedOption);
    this.onConfirm(selectedOption);
    this.focused = -1;
    this.hovered = null;
    this.menuOpen = false;
    this.query = newQuery;
    this.selected = index;
    this.validChoiceMade = true;
    forceUpdate(this);
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
      const matches = this.source.filter(r => r.toLowerCase().indexOf(''.toLowerCase()) !== -1);
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
      const matches = this.source.filter(r => r.toLowerCase().indexOf(''.toLowerCase()) !== -1);
      this.menuOpen = true;
      this.options = matches;
    }
    const focusIsOnOption = this.focused !== -1;
    if (focusIsOnOption) {
      event.preventDefault();
      this.handleOptionClick(event, this.focused);
    }
  }

  handleEnter(event) {
    if (this.menuOpen) {
      event.preventDefault();
      const hasSelectedOption = this.selected >= 0;
      if (hasSelectedOption) {
        this.handleOptionClick(event, this.selected);
      }
    }
  }

  handlePrintableKey(event) {
    const inputElement = this.elementReferences[-1];
    const eventIsOnInput = event.target === inputElement;
    if (!eventIsOnInput) {
      // FIXME: This would be better if it was in componentDidUpdate,
      // but using setState to trigger that seems to not work correctly
      // in preact@8.1.0.
      inputElement.focus();
    }
  }

  handleKeyDown(event) {
    switch (keyCodes[event.keyCode]) {
      case 'up':
        this.handleUpArrow(event);
        break;
      case 'down':
        this.handleDownArrow(event);
        break;
      case 'space':
        this.handleSpace(event);
        break;
      case 'enter':
        this.handleEnter(event);
        break;
      case 'escape':
        this.handleComponentBlur({
          query: this.query,
        });
        break;
      default:
        if (isPrintableKeyCode(event.keyCode)) {
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

    const wrapperClassName = `${this.cssNamespace}__wrapper`;
    const optionFocused = this.focused !== -1 && this.focused !== null;

    const optionClassName = `${this.cssNamespace}__option`;

    const assistiveHintID = this.id + '__assistiveHint';
    const ariaProps = {
      'aria-describedby': this.ariaHint ? assistiveHintID : null,
      'aria-expanded': this.menuOpen ? 'true' : 'false',
      'aria-activedescendant': optionFocused ? `${this.id}__option--${this.focused}` : null,
      'aria-owns': `${this.id}__listbox`,
      'aria-autocomplete': this.hasAutoselect() ? 'both' : 'list',
    };

    const inputClassName = `${this.cssNamespace}__input`;
    const inputClassList = [inputClassName, this.showAllValues ? `${inputClassName}--show-all-values` : `${inputClassName}--default`];

    const componentIsFocused = this.focused !== null;
    if (componentIsFocused) {
      inputClassList.push(`${inputClassName}--focused`);
    }

    if (this.inputClasses) {
      inputClassList.push(this.inputClasses);
    }

    if (this.invalid && this.invalidMessage) {
      inputClassList.push(`${inputClassName}--invalid`);
    }

    if (this.disabled) {
      inputClassList.push(`${inputClassName}--disabled`);
    }

    const menuClassName = `${this.cssNamespace}__menu`;
    const menuModifierDisplayMenu = `${menuClassName}--${this.displayMenu}`;
    const menuIsVisible = this.menuOpen || showNoOptionsFound;
    const menuModifierVisibility = `${menuClassName}--${menuIsVisible ? 'visible' : 'hidden'}`;

    const menuClassList = [menuClassName, menuModifierDisplayMenu, menuModifierVisibility];

    if (this.menuClasses) {
      menuClassList.push(this.menuClasses);
    }

    if (this.menuAttributes?.class || this.menuAttributes?.className) {
      menuClassList.push(this.menuAttributes?.class || this.menuAttributes?.className);
    }

    const computedMenuAttributes = {
      // Copy the attributes passed as props
      ...this.menuAttributes,
      // And add the values computed for the autocomplete
      id: `${this.id}__listbox`,
      role: 'listbox',
      onMouseLeave: this.handleListMouseLeave,
    };

    // Preact would override our computed `className`
    // with the `class` from the `menuAttributes` so
    // we need to clean it up from the computed attributes
    delete computedMenuAttributes.class;

    return (
      <div class={wrapperClassName} onKeyDown={event => this.handleKeyDown(event)}>
        {this.label ? (
          <admiralty-label disabled={this.disabled} for={this.id}>
            {this.label}
          </admiralty-label>
        ) : null}
        {this.hint ? <admiralty-hint disabled={this.disabled}>{this.hint}</admiralty-hint> : null}
        <div class="autocomplete__input-wrapper">
          <input
            {...ariaProps}
            disabled={this.disabled}
            aria-disabled={this.disabled ? 'true' : 'false'}
            autoComplete="off"
            class={inputClassList.join(' ')}
            id={this.id}
            onClick={event => this.handleInputClick(event)}
            onBlur={event => this.handleInputBlur(event)}
            onInput={event => this.handleInputChange(event)}
            onFocus={event => this.handleInputFocus(event)}
            name={this.name}
            placeholder={this.placeholder}
            ref={inputElement => {
              this.elementReferences[-1] = inputElement;
            }}
            type="text"
            role="combobox"
            required={this.required}
            value={this.query}
          />
          <admiralty-icon class={`autocomplete-down-icon ${this.disabled ? 'disabled' : ''}`} icon-name={this.menuOpen || showNoOptionsFound ? 'angle-up' : 'angle-down'} />
        </div>

        <ul {...computedMenuAttributes} class={menuClassList.join(' ')}>
          {this.options.map((option, index) => {
            const showFocused = this.focused === -1 ? this.selected === index : this.focused === index;
            const optionModifierFocused = showFocused && this.hovered === null ? ` ${optionClassName}--focused` : '';
            const iosPosinsetHtml = isIosDevice()
              ? `<span id=${this.id}__option-suffix--${index} style="border:0;clip:rect(0 0 0 0);height:1px;` +
                'marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;' +
                'whiteSpace:nowrap;width:1px">' +
                ` ${index + 1} of ${this.options.length}</span>`
              : '';

            return (
              <li
                aria-selected={this.focused === index ? 'true' : 'false'}
                class={`${optionClassName}${optionModifierFocused}`}
                innerHTML={this.templateSuggestion(option) + iosPosinsetHtml}
                id={`${this.id}__option--${index}`}
                key={index}
                onBlur={event => this.handleOptionBlur(event, index)}
                onClick={event => this.handleOptionClick(event, index)}
                onMouseDown={event => this.handleOptionMouseDown(event)}
                onMouseEnter={() => this.handleOptionMouseEnter(index)}
                ref={optionEl => {
                  this.elementReferences[index] = optionEl;
                }}
                role="option"
                tabIndex={-1}
                aria-posinset={index + 1}
                aria-setsize={this.options.length}
              />
            );
          })}

          {showNoOptionsFound && <li class={`${optionClassName} ${optionClassName}--no-results`}>No results found</li>}
        </ul>

        <span id={assistiveHintID} style={{ display: 'none' }}>
          {this.assistiveHint}
        </span>
        <admiralty-input-invalid style={{ visibility: this.invalid && this.invalidMessage ? 'visible' : 'hidden' }}>{this.invalidMessage}</admiralty-input-invalid>
      </div>
    );
  }
}
