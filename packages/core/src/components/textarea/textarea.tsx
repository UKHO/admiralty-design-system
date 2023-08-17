import { Component, Host, h, Prop, Event, EventEmitter, Watch } from '@stencil/core';
import { TextAreaChangeEventDetail } from './textarea.interface';

let textareaIds = 0;

@Component({
  tag: 'admiralty-textarea',
  styleUrl: 'textarea.scss',
  scoped: true,
})
export class TextareaComponent {
  private inputId = `admiralty-textarea-${textareaIds++}`;

  private nativeTextArea?: HTMLTextAreaElement;

  /**
   * The label which will be used as a placeholder in the unfilled state, and as a field label in the filled state.
   */
  @Prop() label: string = '';

  /**
   * The hint which will be used under the label to describe the input.
   */
  @Prop() hint: string;

  /**
   * The maximum width for the input field.
   */
  @Prop() width?: number;

  /**
   * The maximum string length for the input field.
   */
  @Prop() maxLength?: number;

  /**
   * This dictates whether the form field is disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * Whether to show the input in an invalid state
   */
  @Prop() invalid: boolean = false;

  /**
   * The message to show when the input is invalid
   */
  @Prop() invalidMessage: string;

  /**
   * Event is fired when the form control loses focus
   * @event textareaBlur
   */
  @Event({ eventName: 'textareaBlur' }) textareaBlur: EventEmitter<any>;

  /**
   * Event is fired when the form control changes
   * @event admiraltyChange
   */
  @Event() admiraltyChange: EventEmitter<TextAreaChangeEventDetail>;

  /**
   * The value of the textarea.
   */
  @Prop({ mutable: true }) value?: string | number | null = '';

  /**
   * Update the native textarea element when the value changes
   */
  @Watch('value')
  protected valueChanged() {
    const nativeInput = this.nativeTextArea;
    const value = this.getValue();
    if (nativeInput && nativeInput.value !== value) {
      nativeInput.value = value;
    }
    this.admiraltyChange.emit({ value: this.value == null ? this.getValue() : this.value.toString() });
  }

  private onBlur = () => {
    this.textareaBlur.emit();
  };

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
    }
  };

  private getValue(): string {
    return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
  }

  render() {
    const value = this.getValue();
    return (
      <Host>
        <div class="text-area-container">
          {this.label ? (
            <admiralty-label for={this.inputId} disabled={this.disabled}>
              {this.label}
            </admiralty-label>
          ) : null}
          {this.hint ? <admiralty-hint disabled={this.disabled}>{this.hint}</admiralty-hint> : null}
          <textarea
            ref={textArea => (this.nativeTextArea = textArea)}
            class={{ disabled: this.disabled, invalid: this.invalid }}
            style={this.width ? { maxWidth: `${this.width}px` } : {}}
            id={this.inputId}
            value={value}
            maxLength={this.maxLength}
            onInput={this.onInput}
            onBlur={this.onBlur}
          ></textarea>
          {this.invalid && this.invalidMessage ? <admiralty-input-error>{this.invalidMessage}</admiralty-input-error> : null}
        </div>
      </Host>
    );
  }
}
