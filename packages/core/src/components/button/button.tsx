import { Component, Prop, h } from '@stencil/core';
import { ButtonVariant } from './button.types';
import { IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  tag: 'admiralty-button',
  styleUrl: 'button.scss',
  shadow: false,
})
export class ButtonComponent {
  /**
   * The type of button to render. Valid values are `primary`, `secondary`, `warning`, `text` and `icon`.
   * Default value is `primary`.
   */
  @Prop() variant: ButtonVariant;
  /**
   * When passed Font Awesome Icon name, then an icon will be rendered.
   */
  @Prop() icon: IconName;
  /**
   * Determines whether the button is disabled. A button in disabled state will not fire click output events.
   */
  @Prop({ reflect: true }) disabled = false;
  /**
   * The default behavior of the button. Valid values are `button`, `submit` and `reset`.
   * Default value is `submit`.
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'submit';

  render() {
    return (
      <button type={this.type} disabled={this.disabled} class={this.variant || ButtonVariant.Primary}>
        <slot></slot>
        {this.icon ? <admiralty-icon icon-name={this.icon}></admiralty-icon> : undefined}
      </button>
    );
  }
}
