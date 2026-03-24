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
   * The value of the checkbox does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a checkbox is analogous to the value of an `<input type="checkbox">`,
   * it's only used when the checkbox participates in a native `<form>`.
   */
  @Prop() value: any | null;

  /**
   * The label text must be provided and is displayed beside the checkbox, use the `labelHidden` property to control its visibility.
   */
  @Prop() labelText: string = null;

  /**
   * This visually hides the labelText while preserving accessibility.
   */
  @Prop() labelHidden: boolean = false;

  /**
   * Event is fired when the form control changes state
   * @event admiraltyChange
   */
  @Event() admiraltyChange: EventEmitter<CheckboxChangeEventDetail>;

  /**
   * Event is fired when the form control gains focus
   * @event checkboxFocus
   */
  @Event() checkboxFocus: EventEmitter<FocusEvent>;

  /**
   * Event is fired when the form control loses focus
   * @event checkboxBlur
   */
  @Event() checkboxBlur: EventEmitter<FocusEvent>;

  /**
   * Whether the component is loading if so then show the skeleton
   */
  @Prop() loading: boolean = false;

  /**
   * Width of the loading bar
   */
  @Prop() loadingWidth?: string;

  /**
   * Height of the loading bar
   */
  @Prop() loadingHeight?: string;

  /**
   * Radius of the loading bar
   */
  @Prop() loadingRadius?: string;

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

  private onClick = (event: Event) => {
    if (!this.disabled) {
      event.preventDefault();
      this.checked = !this.checked;
    }
  };

  private onFocus = () => {
    this.checkboxFocus.emit();
  };

  renderSkeleton() {
    return <Host>
      <div class="loading-wrapper">
        <admiralty-skeleton key={`${this.loadingWidth}-${this.loadingHeight}`}
                            width={this.loadingWidth}
                            height={this.loadingHeight}
                            radius={this.loadingRadius}></admiralty-skeleton>
      </div>
    </Host>
  }

  renderContent() {
    const { checked, checkboxRight, disabled, inputId, labelText, name, labelHidden } = this;

    return (
      <Host>
        <div aria-hidden={disabled ? 'true' : null}
             class={{ 'form-control': true, 'right-align': checkboxRight }}>
          <input id={inputId}
                 aria-checked={`${checked}`}
                 type="checkbox"
                 onBlur={this.onBlur}
                 onFocus={this.onFocus}
                 onClick={this.onClick}
                 disabled={disabled}
                 name={name}
                 checked={checked}/>
          <label htmlFor={inputId}
                 class={{ disabled: disabled }}
                 onClick={this.onClick}>
            <span {...(labelHidden && { class: 'visually-hidden' })}>{labelText}</span>
          </label>
        </div>
      </Host>
    );
  }

  render(): any {
    return this.loading? this.renderSkeleton() : this.renderContent();
  }
}

let checkboxIds = 0;
