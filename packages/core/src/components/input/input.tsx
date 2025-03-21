import { Component, ComponentInterface, Element, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';
import { InputChangeEventDetail } from './input.interface';

/**
 * Once this component works, review whether a form field component should be created so
 * that shared properties such as `label`, `hint`, `disabled` etc. can be defined once.
 * Examples of similar components that can extend that base component are area, select
 * and checkbox.
 */

@Component({
  tag: 'admiralty-input',
  styleUrl: 'input.scss',
  scoped: true,
})
export class InputComponent implements ComponentInterface {
  private internalId = ++nextId;
  private nativeInput?: HTMLInputElement;

  @Element() el!: HTMLElement;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string;

  /**
   * The label which will be used above the input to describe the input.
   */
  @Prop() label: string;

  /**
   * The hint which will be used under the label to describe the input.
   */
  @Prop() hint: string;

  /**
   * This dictates whether the form field is disabled.
   */
  @Prop() disabled = false;

  /**
   * The input type, options are: text; number; date; time; email; password; tel; url
   */
  @Prop() type: 'text' | 'number' | 'date' | 'time' | 'email' | 'password' | 'tel' | 'url' = 'text';

  /**
   * The placeholder text to show in the input
   */
  @Prop() placeholder: string;

  /**
   * The maximum width for the input field.
   */
  @Prop() width: number;

  /**
   * This dictates whether the input is required or not
   */
  @Prop() required: boolean = false;

  /**
   * Whether to show the input in an invalid state
   */
  @Prop() invalid: boolean = false;

  /**
   * The message to show when the input is invalid
   */
  @Prop() invalidMessage: string;

  /**
   * Indicates whether the value of the control can be automatically completed by the browser.
   */
  @Prop() autocomplete: string = 'off';

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | number | null = '';

  /**
   * Emitted when the value has changed.
   */
  @Event() admiraltyInput: EventEmitter<InputChangeEventDetail>;

  /**
   * Emitted when the input gains focus.
   */
  @Event() admiraltyFocus: EventEmitter<FocusEvent>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() admiraltyBlur: EventEmitter<FocusEvent>;

  /**
   * Update the native input element when the value changes
   */

  @Watch('value')
  protected valueChanged() {
    const nativeInput = this.nativeInput;
    const value = this.getValue();
    if (nativeInput && nativeInput.value !== value) {
      nativeInput.value = value;
    }
    this.admiraltyInput.emit({ value: this.value == null ? this.getValue() : this.value.toString() });
  }

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
  };

  private getValue(): string {
    return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
  }

  private onBlur = (ev: FocusEvent) => {
    this.admiraltyBlur.emit(ev);
  };

  private onFocus = (ev: FocusEvent) => {
    this.admiraltyFocus.emit(ev);
  };

  render() {
    const value = this.getValue();
    const id = this.el.id != '' ? this.el.id : `admiralty-input-${this.internalId}`;
    const inputId = `${id}-input`;
    const hintId = `${id}-hint`;
    const errorId = `${id}-error`;

    return (
      <div class="text-input-container">
        {this.label ? (
          <admiralty-label disabled={this.disabled} for={inputId}>
            {this.label}
          </admiralty-label>
        ) : null}
        {this.hint ? (
          <admiralty-hint id={hintId} disabled={this.disabled}>
            {this.hint}
          </admiralty-hint>
        ) : null}
        <input
          ref={input => (this.nativeInput = input)}
          class={{ disabled: this.disabled, invalid: this.invalid }}
          disabled={this.disabled}
          id={inputId}
          name={this.name}
          type={this.type}
          value={value}
          onInput={this.onInput}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          placeholder={this.placeholder}
          autoComplete={this.autocomplete}
          required={this.required}
          style={{
            maxWidth: this.width ? `${this.width}px` : null,
          }}
          aria-invalid={this.invalid ? 'true' : 'false'}
          {...(this.hint ? {'aria-describedby':hintId + (this.invalid ? ' '+ errorId : '')} : this.invalid ? {'aria-describedby':errorId} : null)}
        />
        <admiralty-input-invalid id={errorId} style={{ ...(!(this.invalid && this.invalidMessage) ? { display: 'none' } : {}) }}>
          {this.invalidMessage}
        </admiralty-input-invalid>
      </div>
    );
  }
}

let nextId = 0;
