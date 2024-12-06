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
   * The number of the pill.
   */
  @Prop() number: string;
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
          'pill': true,
          'admiralty-blue': this.colour === 'admiralty-blue' || (this.colour !== 'white' && this.colour !== 'bright-blue'),
          'white': this.colour === 'white',
          'bright-blue': this.colour === 'bright-blue',
        }}
      >
        <span class="pill-item pill-item-text">{this.text}</span>
        {this.number ? <span class="pill-item pill-item-number">{this.number}</span> : undefined}
        {this.selected ? (
          <span class="pill-item pill-item-selected">
            <admiralty-icon icon-name={faCheck.iconName}></admiralty-icon>
          </span>
        ) : undefined}
      </span>
    );
  }
}
