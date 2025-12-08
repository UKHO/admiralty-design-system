import { Component, EventEmitter, Event, Host, h, Prop, Watch } from '@stencil/core';
import { CheckboxChangeEventDetail } from './checkbox.interface';

@Component({
  tag: 'admiralty-checkbox',
  styleUrl: 'checkbox.scss',
  scoped: true,
})
export class CheckboxComponent {
  private inputId = `admiralty-${checkboxIds++}`;

  /**
   * Whether the checkbox should be positioned to the right of the label.
   */
  @Prop() checkboxRight: boolean = false;

  /**
   * This dictates whether the form field is disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * If `true`, the checkbox is selected.
   */
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;

  /**
   * The value of the checkbox does not mean if it's checked or not; use `checked` for that.
   */
  @Prop() value: any | null;

  /**
   * The label text must be provided and is displayed beside the checkbox, use the `labelHidden` property to control its visibility.
   */
  @Prop() labelText: string = null;

  /**
   * Visually hides the labelText while keeping it accessible.
   */
  @Prop() labelHidden: boolean = false;

  /**
   * Event fired when the form control changes state.
   */
  @Event() admiraltyChange: EventEmitter<CheckboxChangeEventDetail>;

  /**
   * Event fired when the input gains focus.
   */
  @Event() checkboxFocus: EventEmitter<FocusEvent>;

  /**
   * Event fired when the input loses focus.
   */
  @Event() checkboxBlur: EventEmitter<FocusEvent>;

  @Watch('checked')
  checkedChanged(isChecked: boolean) {
    this.admiraltyChange.emit({
      checked: isChecked,
      value: this.value,
    });
  }

  private onBlur = () => {
    this.checkboxBlur.emit();
  };

  private onFocus = () => {
    this.checkboxFocus.emit();
  };

  private onChange = (event: Event) => {
    if (!this.disabled) {
      const input = event.target as HTMLInputElement;
      this.checked = input.checked;
    }
  };

  render() {
    const { checked, checkboxRight, disabled, inputId, labelText, name, labelHidden } = this;

    return (
      <Host>
        <div
          aria-hidden={disabled ? 'true' : null}
          class={{ 'form-control': true, 'right-align': checkboxRight }}
        >
          <input
            id={inputId}
            aria-checked={`${checked}`}
            type="checkbox"
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onChange={this.onChange}
            disabled={disabled}
            name={name}
            checked={checked}
          />

          <label htmlFor={inputId}
                 class={{ disabled: disabled }}>
            <span {...(labelHidden && { class: 'visually-hidden' })}>
              {labelText}
            </span>
          </label>
        </div>
      </Host>
    );
  }
}

let checkboxIds = 0;
