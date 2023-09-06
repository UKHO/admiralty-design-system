import { Component, Event, Prop, Element, EventEmitter, h, Host, Watch } from '@stencil/core';
import { SelectChangeEventDetail } from './select.interface';

@Component({
  tag: 'admiralty-select',
  styleUrl: 'select.scss',
  scoped: true,
})
export class SelectComponent {
  @Element() el?: HTMLElement;
  private nativeInput?: HTMLSelectElement;
  id: string = `admiralty-select-${++nextId}`;
  /**
   * If `true`, the user cannot interact with the select.
   */
  @Prop() disabled: boolean = false;
  /**
   * Whether to show that the select is in an invalid state.
   */
  @Prop() invalid: boolean = false;
  /**
   * The message to show when the select is invalid.
   */
  @Prop() invalidMessage: string = null;
  /**
   * The text that will be used as a field label.
   */
  @Prop() hint: string = null;
  /**
   * The text that will be used as a field label.
   */
  @Prop() label: string = 'Choose a colour';
  /**
   * The maximum width (px) for the input field.
   */
  @Prop() width?: number;
  /**
   * Emitted when the value has changed.
   */
  @Event() admiraltyChange: EventEmitter<SelectChangeEventDetail>;
  /**
   * Emitted when the component loses focus.
   */
  @Event() admiraltyBlur: EventEmitter<void>;

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | number | null = '';

  @Watch('value')
  protected valueChanged() {
    const nativeSelect = this.nativeInput;
    const value = this.getValue();
    if (nativeSelect && nativeSelect.value !== value) {
      nativeSelect.value = value;
    }
    this.admiraltyChange.emit({ value: this.value == null ? this.getValue() : this.value.toString() });
  }

  private getValue(): string {
    return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
  }

  handleSelect(event: Event) {
    const select = event.target as HTMLSelectElement | null;
    if (select) {
      this.value = select.value || '';
    }
  }

  handleBlur(_event: FocusEvent): void {
    this.admiraltyBlur.emit();
  }

  selectOption() {
    const options = this.el.querySelectorAll('option');
    options.forEach(option => {
      option.selected = option.value === this.getValue();
    });
  }

  componentWillRender() {
    this.selectOption();
  }

  render() {
    const { disabled, hint, id, label } = this;
    const disabledClass = disabled ? 'disabled' : '';
    return (
      <Host>
        <div class={`admiralty-select ${disabledClass}`}>
          <admiralty-label disabled={this.disabled} for={id}>
            {label}
          </admiralty-label>
          {hint ? <admiralty-hint disabled={this.disabled}>{hint}</admiralty-hint> : null}
          <div class="select-wrapper" style={this.width ? { maxWidth: `${this.width}px` } : {}}>
            <select
              ref={select => (this.nativeInput = select)}
              id={id}
              class={{ 'admiralty-form-control': true, 'invalid': this.invalid, 'disabled': disabled }}
              aria-disabled={disabled ? 'true' : 'false'}
              aria-label={label}
              onChange={event => this.handleSelect(event)}
              onBlur={event => this.handleBlur(event)}
              disabled={disabled}
            >
              <slot></slot>
            </select>
            <admiralty-icon class={`select-down-icon ${disabledClass}`} icon-name="angle-down"></admiralty-icon>
          </div>
          <admiralty-input-error style={{ visibility: this.invalid && this.invalidMessage ? 'visible' : 'hidden' }}>{this.invalidMessage}</admiralty-input-error>
        </div>
      </Host>
    );
  }
}

let nextId = 0;
