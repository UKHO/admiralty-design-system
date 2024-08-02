import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'admiralty-autocomplete-option',
  styleUrl: 'autocomplete-option.scss',
  scoped: true,
})
export class AutocompleteOptionComponent {
  private inputId = `autocomplete-option-${selectOptionIds++}`;
  /**
   * The text value of the option.
   */
  @Prop() value?: any | null;

  render() {
    return <Host role="option" id={this.inputId}></Host>;
  }
}
let selectOptionIds = 0;
