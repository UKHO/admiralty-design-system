import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

let textareaIds = 0;

@Component({
  tag: 'admiralty-textarea',
  styleUrl: 'textarea.scss',
  scoped: true,
})
export class TextareaComponent {
  private inputId = `admiralty-textarea-${textareaIds++}`;

  /**
   * The label which will be used as a placeholder in the unfilled state, and as a field label in the filled state.
   */
  @Prop() label: string = '';

  /**
   * The contents of the textarea
   */
  @Prop() text: string = '';

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
   * @event textareaChanged
   */
  @Event({ eventName: 'textareaChanged' }) textareaChanged: EventEmitter<string>;

  private onBlur = () => {
    this.textareaBlur.emit();
  };

  private onChange = (_ev: any) => {
    this.textareaChanged.emit(this.text);
  };
  render() {
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
            class={{ disabled: this.disabled, invalid: this.invalid }}
            style={this.width ? { maxWidth: `${this.width}px` } : {}}
            id={this.inputId}
            maxlength={this.maxLength}
            onChange={this.onChange}
            onBlur={this.onBlur}
          >
            {this.text}
          </textarea>
          {this.invalid ? <admiralty-input-error>{this.invalidMessage}</admiralty-input-error> : null}
        </div>
      </Host>
    );
  }
}
