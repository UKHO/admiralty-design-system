import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'admiralty-pill',
  styleUrl: 'pill.scss',
  scoped: true,
})
export class PillComponent {
  /**
   * The text of the pill.
   */
  @Prop() text: string;
  /**
   * Label the pill.
   */
  @Prop() label: string;
  /**
   * The background colour of the pill.
   */
  @Prop() colour: 'admiralty-blue' | 'white' | 'bright-blue' = 'admiralty-blue';
  /**
   * Whether to show the pill is selected.
   */
  @Prop() selected: boolean = false;

  render() {
    return (
      <span
        class={{
          'admiralty-blue': this.colour === 'admiralty-blue' || (this.colour !== 'white' && this.colour !== 'bright-blue'),
          'white': this.colour === 'white',
          'bright-blue': this.colour === 'bright-blue',
        }}
      >
        {this.text}
        {this.selected ? <admiralty-icon icon-name={faCheck.iconName}></admiralty-icon> : undefined}
      </span>
    );
  }
}
