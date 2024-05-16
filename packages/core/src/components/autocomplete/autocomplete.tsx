import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'admiralty-autocomplete',
  styleUrl: 'autocomplete.scss',
  scoped: true,
})
export class AutocompleteComponent {
  @Prop() id: string;
  @Prop() defaultValue: string = 'blah';
  @Prop() showNoOptionsFound: boolean = true;
  @Prop() minLength: number = 1;

  @State() focused = null;
  @State() hovered = null;
  @State() menuOpen = false;
  @State() options = this.defaultValue ? [this.defaultValue] : [];
  @State() query = this.defaultValue;
  @State() validChoiceMade = false;
  @State() selected = null;
  @State() ariaHint = true;

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
        <admiralty-input></admiralty-input>

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
                id={`${this.id}-option-${index}`}
                // key={index}
                // onBlur={event => this.handleOptionBlur(event, index)}
                // onClick={event => this.handleOptionClick(event, index)}
                // onMouseDown={this.handleOptionMouseDown}
                // onMouseEnter={event => this.handleOptionMouseEnter(event, index)}
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
