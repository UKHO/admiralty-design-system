import { Component, EventEmitter, Event, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'admiralty-checkbox',
  styleUrl: 'checkbox.scss',
  shadow: true,
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
  @Prop({ mutable: true }) checked: boolean = false;

  /**
   * The value of the checkbox does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a checkbox is analogous to the value of an `<input type="checkbox">`,
   * it's only used when the checkbox participates in a native `<form>`.
   */
  @Prop() value: any | null;

  /**
   * The text that's displayed alongside the checkbox
   */
  @Prop() labelText: string = null;

  /**
   * Event is fired when the form control changes state
   * @event radioChanges
   */
  @Event() checkboxChange: EventEmitter<any>;

  /**
   * Event is fired when the form control gains focus
   * @event checkboxFocus
   */
  @Event() checkboxFocus: EventEmitter<any>;

  /**
   * Event is fired when the form control loses focus
   * @event checkboxBlur
   */
  @Event() checkboxBlur: EventEmitter<any>;

  @Watch('checked')
  checkedChanged(isChecked: boolean) {
    this.checkboxChange.emit({
      checked: isChecked,
      value: this.value,
    });
  }

  private onBlur = () => {
    this.checkboxBlur.emit();
  };

  private onClick = (ev: any) => {
    if (!this.disabled) {
      ev.preventDefault();
      this.checked = !this.checked;
    }
  };

  private onFocus = () => {
    this.checkboxFocus.emit();
  };

  render() {
    const { checked, checkboxRight, disabled, inputId, labelText, name } = this;

    return (
      <Host>
        <div aria-checked={`${checked}`} aria-hidden={disabled ? 'true' : null} role="checkbox" class={{ 'form-control': true, 'right-align': checkboxRight }}>
          <input
            aria-checked={`${checked}`}
            type="checkbox"
            onBlur={() => this.onBlur()}
            onFocus={() => this.onFocus()}
            id={inputId}
            disabled={disabled}
            name={name}
            checked={checked}
          />
          <label class={{ disabled: disabled }} onClick={this.onClick} htmlFor={inputId}>
            {labelText}
          </label>
        </div>
      </Host>
    );
  }
}

let checkboxIds = 0;
