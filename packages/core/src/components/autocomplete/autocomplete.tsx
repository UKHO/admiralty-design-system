/**
 * This component takes heavy inspiration from the autocomplete component created by alphagov: https://github.com/alphagov/accessible-autocomplete
 */

import { Component, h, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'admiralty-autocomplete',
  styleUrl: 'autocomplete.scss',
  scoped: true,
})
export class AutocompleteComponent {
  @Prop() defaultValue: string = '';
  @Prop() showNoOptionsFound: boolean = true;
  @Prop() minLength: number = 1;
  @Prop() autoSelect: boolean = false;
  @Prop() showAllValues: boolean = true;

  @State() focused = null;
  @State() hovered = null;
  @State() menuOpen = false;
  @State() options = this.defaultValue ? [this.defaultValue] : [];
  @State() query = this.defaultValue;
  @State() validChoiceMade = false;
  @State() selected = null;
  @State() ariaHint = true;

  elementReferences = {};

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
  }

  isQueryAnOption(query, options) {
    return options.map(entry => entry.toLowerCase()).indexOf(query.toLowerCase()) !== -1;
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
    this.query = newQuery;
    this.selected = -1;
    this.validChoiceMade = true;
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

    let source: any = ['egg', 'balloon', 'turkey'];

    const searchForOptions = this.showAllValues || (!queryEmpty && queryChanged && queryLongEnough);
    if (searchForOptions) {
      const matches = source.filter(r => r.toLowerCase().indexOf(query.toLowerCase()) !== -1);
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

    return (
      <div class="autocomplete-wrapper">
        <admiralty-input
          value={this.query}
          onClick={() => this.handleInputClick()}
          onAdmiraltyInput={event => this.handleInputChange(event.detail.value)}
          ref={inputElement => {
            this.elementReferences[-1] = inputElement;
          }}
        ></admiralty-input>

        <admiralty-icon class="autocomplete-dropdown-icon" iconName="chevron-up"></admiralty-icon>

        <ul class={menuClassList.join(' ')}>
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
                // aria-selected={focused === index ? 'true' : 'false'}
                class={`${optionClassName}${optionModifierFocused}${optionModifierOdd}`}
                // dangerouslySetInnerHTML={{ __html: this.templateSuggestion(option) + iosPosinsetHtml }}
                id={`option-${index}`}
                key={index}
                onBlur={event => this.handleOptionBlur(event, index)}
                onClick={() => this.handleOptionClick(index)}
                onMouseDown={this.handleOptionMouseDown}
                onMouseEnter={() => this.handleOptionMouseEnter(index)}
                // ref={optionEl => {
                //   this.elementReferences[index] = optionEl;
                // }}
                role="option"
                // tabIndex="-1"
                // aria-posinset={index + 1}
                // aria-setsize={options.length}
              >
                {option}
              </li>
            );
          })}

          {showNoOptionsFound && <li class={`${optionClassName} ${optionClassName}-no-results`}>No results found</li>}
        </ul>

        {/*<span id={assistiveHintID} style={{ display: 'none' }}>*/}
        {/*  {tAssistiveHint()}*/}
        {/*</span>*/}
      </div>
    );
  }
}
