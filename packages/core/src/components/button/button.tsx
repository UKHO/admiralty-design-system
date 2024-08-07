import { Component, Prop, h } from '@stencil/core';
import { ButtonVariant } from './button.types';
import { IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  tag: 'admiralty-button',
  styleUrl: 'button.scss',
  scoped: true,
})
export class ButtonComponent {
  /**
   * The type of button to render. Valid values are `primary`, `secondary`, `warning`, `text` and `icon`.
   * Default value is `primary`.
   */
  @Prop() variant: ButtonVariant = 'primary';
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
  /**
   * The `<form>` element to associate the button with (its form owner).
   */
  @Prop() form: string;
  /**
   * The name of the button, submitted as a pair with the button's value as part of the form data,
   * when that button is used to submit the form.
   */
  @Prop() name: string;
  /**
   * Defines the value associated with the button's name when it's submitted with the form data.
   * This value is passed to the server in params when the form is submitted using this button.
   */
  @Prop() value: string;

  render() {
    const { form, name, value } = this;
    const props = {
      ...(form && { form }),
      ...(name && { name }),
      ...(value && { value }),
    };
    return (
      <button type={this.type} disabled={this.disabled} class={this.variant} {...props}>
        <slot></slot>
        {this.icon ? <admiralty-icon icon-name={this.icon}></admiralty-icon> : undefined}
      </button>
    );
  }
}
