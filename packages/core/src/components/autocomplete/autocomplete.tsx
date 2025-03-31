/**
 * This component takes heavy inspiration from the autocomplete component created by alphagov: https://github.com/alphagov/accessible-autocomplete
 */

import { Component, forceUpdate, Prop, State, h, Element, EventEmitter, Event, Watch } from '@stencil/core';
import { watchForOptions } from './optionsWatcher';
import { AutoCompleteChangeEventDetail } from './autocomplete.interface';

interface Option {
  text: string;
  value: any;
}

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

function filterOptions(options: Option[], searchTerm: string) {
  return options.filter(({ text }) => text.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
}

function filterOptionsByValue(options: Option[], searchTerm: string) {
  return options.filter(({ value }) => value.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
}

@Component({
  tag: 'admiralty-autocomplete',
  styleUrl: 'autocomplete.scss',
  scoped: true,
})
export class AutocompleteComponent {
  private internalId = ++nextId;

  @Element() el!: HTMLAdmiraltyAutocompleteElement;

  /**
   * Automatically select the first matching option.
   */
  @Prop() autoselect: boolean = false;
  /**
   * The default CSS namespace.
   */
  @Prop() cssNamespace: string = 'autocomplete';
  /**
   * When set to `overlay` this option will display the menu as an absolutely positioned overlay instead of inline.
   */
  @Prop() displayMenu: string = 'inline';
  /**
   * Prevent displaying options until the minimum string length is reached. Ignored when show all values is enabled.
   */
  @Prop() minLength: number = 0;
  /**
   * The name for the `<input>` element.
   */
  @Prop() name: string;
  /**
   * Populate the placeholder attribute on the `<input>` element.
   */
  @Prop() placeholder: string = '';
  /**
   * Toggle automatically confirming a selection when the field is blurred.
   */
  @Prop() confirmOnBlur: boolean = true;
  /**
   * Toggle whether to display the "No results found" message.
   */
  @Prop() showNoOptionsFound: boolean = true;
  /**
   * Toggle showing all values when the input is clicked, like a default dropdown. This will hide the chevron when set to false.
   */
  @Prop() showAllValues: boolean = true;
  /**
   * Populates the required field on the `<input>` element.
   */
  @Prop() required: boolean = false;
  /**
   * The hint that is provided to assistive users.
   */
  @Prop() assistiveHint: string =
    'When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.';

  /**
   * Sets HTML attributes and their values on the generated `ul` menu element. Useful for adding `aria-labelledby`
   * and setting to the value of the `id` attribute on your existing label, to provide context to an assistive
   * technology user. e.g.
   * ```
   * const menuAttributes = {
   *   className: 'custom-className',
   *   class: 'custom-class',
   *   id: 'custom-id',
   *   role: 'custom-role'
   * }
   * ```
   * */
  @Prop() menuAttributes: any;
  /**
   * Classes to add to the component's `<input>` element.
   */
  @Prop() inputClasses: string;
  /**
   * Classes to add to the menu displaying the options.
   */
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
  @Prop({ mutable: true }) value?: string | null = null;

  /**
   * Custom filter function that can be used instead of rendering options into the DOM.
   */
  @Prop() filterFunction: (query: string) => Option[];

  /**
   * Emitted when the value has changed.
   */
  @Event() admiraltyChange: EventEmitter<AutoCompleteChangeEventDetail>;

  elementReferences = {};
  $pollInput: NodeJS.Timeout;

  source: Option[] = [];

  @State() focused: number | null = null;
  @State() hovered: number | null = null;
  @State() menuOpen: boolean = false;
  @State() options: Option[] = [];
  @State() option: Option = null;
  @State() query: string = null;
  @State() validChoiceMade: boolean = false;
  @State() selected: number | null = null;
  @State() ariaHint: boolean = true;

  @Watch('value')
  onValueChange(newVal: string, _: string) {
    if (this.source.length === 0) {
      // If this is the initial render, the options won't have been set yet, so do nothing
      return;
    }
    if (newVal && newVal.length > 0) {
      const matches = filterOptionsByValue(this.source, newVal);
      const matchFound = matches.length > 0;
      this.options = matches;
      this.validChoiceMade = matchFound;
      this.option = matches[0];
      this.query = matchFound ? matches[0].text : '';
      this.menuOpen = false;
      this.ariaHint = false;
    } else {
      this.options = [];
      this.option = null;
      this.query = '';
      this.ariaHint = true;
    }

    this.admiraltyChange.emit({ value: this.option?.value ?? '' });
  }

  @Watch('focused')
  onFocusedChange(newVal: number | null, oldVal: number | null) {
    const componentLostFocus = this.focused === null;
    const focusedChanged = oldVal !== newVal;
    const focusDifferentElement = focusedChanged && !componentLostFocus;
    if (focusDifferentElement) {
      this.elementReferences[this.focused]?.focus();
    }
    const focusedInput = this.focused === -1;
    const componentGainedFocus = focusedChanged && oldVal === null;
    const selectAllText = focusedInput && componentGainedFocus;
    if (selectAllText) {
      const inputElement = this.elementReferences[this.focused];
      inputElement.setSelectionRange(0, inputElement.value.length);
    }
  }

  isQueryAnOption(query: string, options: Option[]) {
    return options.map(({ text }) => this.templateInputValue(text).toLowerCase()).indexOf(query.toLowerCase()) !== -1;
  }

  connectedCallback() {
    this.mutation = watchForOptions<HTMLAdmiraltyAutocompleteOptionElement>(this.el, 'admiralty-autocomplete-option', async () => {
      this.source = this.filterFunction
        ? this.filterFunction('')
        : this.childOpts.map(({ textContent, value }) => ({
            text: textContent?.length > 0 ? textContent : value,
            value: value ?? textContent,
          }));
      if (this.query === null && this.value?.length > 0) {
        const matches = filterOptionsByValue(this.source, this.value);
        this.options = matches;
        this.option = matches[0];
        this.query = matches[0]?.text ?? '';
      }
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

  handleComponentBlur(newState: { menuOpen: boolean; query: string }) {
    let newQuery: string;
    if (this.confirmOnBlur) {
      newQuery = newState.query || this.query;
      const matches = filterOptions(this.source, newQuery);
      const matchFound = newQuery?.length > 0 && matches.length > 0;
      const option = matchFound ? matches[0] : { value: null, text: '' };
      this.value = option.value;
    } else {
      newQuery = this.query;
    }
    this.focused = null;
    this.menuOpen = newState.menuOpen || false;
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
        query: this.templateInputValue(this.options[this.selected]?.text ?? ''),
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
      const matches = this.filterFunction ? this.filterFunction(this.query) : filterOptions(this.source, this.query);
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
    const shouldReopenMenu = !this.validChoiceMade && this.query?.length >= this.minLength && this.options.length > 0;

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
    this.value = selectedOption.value;
    this.focused = -1;
    this.hovered = null;
    this.menuOpen = false;
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
      const matches = filterOptions(this.source, '');
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
      const matches = filterOptions(this.source, '');
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
          menuOpen: this.menuOpen,
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
    const id = this.el.id != '' ? this.el.id : `admiralty-autocomplete-${this.internalId}`;
    const inputId = `${id}-input`;
    const hintId = `${id}-hint`;
    const errorId = `${id}-error`;

    const inputFocused = this.focused === -1;
    const noOptionsAvailable = this.options.length === 0;
    const queryNotEmpty = this.query?.length !== 0;
    const queryLongEnough = this.query?.length >= this.minLength;
    const showNoOptionsFound = this.showNoOptionsFound && inputFocused && noOptionsAvailable && queryNotEmpty && queryLongEnough;

    const wrapperClassName = `${this.cssNamespace}__wrapper`;
    const optionFocused = this.focused !== -1 && this.focused !== null;

    const optionClassName = `${this.cssNamespace}__option`;

    const assistiveHintID = id + '__assistiveHint';
    const ariaProps = {
      'aria-describedby': `${this.hint ? hintId : ''} ${this.ariaHint ? assistiveHintID : ''} ${this.invalid ? errorId : ''}`,
      'aria-expanded': this.menuOpen ? 'true' : 'false',
      'aria-activedescendant': optionFocused ? `${id}__option--${this.focused}` : null,
      'aria-owns': `${id}__listbox`,
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
      id: `${id}__listbox`,
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
          <admiralty-label class="autocomplete__label" disabled={this.disabled} for={inputId}>
            {this.label}
          </admiralty-label>
        ) : null}
        {this.hint ? (
          <admiralty-hint id={hintId} disabled={this.disabled}>
            {this.hint}
          </admiralty-hint>
        ) : null}
        <div class="autocomplete__input-wrapper">
          <input
            {...ariaProps}
            disabled={this.disabled}
            aria-disabled={this.disabled}
            autoComplete="off"
            class={inputClassList.join(' ')}
            id={inputId}
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
          {this.showAllValues &&
            <admiralty-icon class={`autocomplete-down-icon ${this.disabled ? "disabled" : ""}`}
                            name={this.menuOpen || showNoOptionsFound ? "keyboard-arrow-up-rounded" : "keyboard-arrow-down-rounded"} />
          }
        </div>

        <ul {...computedMenuAttributes} class={menuClassList.join(" ")}>
          {this.options.map((option, index) => {
            const showFocused = this.focused === -1 ? this.selected === index : this.focused === index;
            const optionModifierFocused = showFocused && this.hovered === null ? ` ${optionClassName}--focused` : '';
            const iosPosinsetHtml = isIosDevice()
              ? `<span id=${id}__option-suffix--${index} style="border:0;clip:rect(0 0 0 0);height:1px;` +
                'marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;' +
                'whiteSpace:nowrap;width:1px">' +
                ` ${index + 1} of ${this.options.length}</span>`
              : '';

            return (
              <li
                aria-selected={this.focused === index ? 'true' : 'false'}
                class={`${optionClassName}${optionModifierFocused}`}
                innerHTML={this.templateSuggestion(option.text) + iosPosinsetHtml}
                id={`${id}__option--${index}`}
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
        {this.invalid && this.invalidMessage && (
          <admiralty-input-invalid id={errorId} style={{ visibility: this.invalid && this.invalidMessage ? 'visible' : 'hidden' }}>
            {this.invalidMessage}
          </admiralty-input-invalid>
        )}
      </div>
    );
  }
}
let nextId = 0;
