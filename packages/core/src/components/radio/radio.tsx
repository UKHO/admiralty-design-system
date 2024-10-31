import { Element, Component, Event, h, Prop, Watch, Host, State, Method, EventEmitter } from '@stencil/core';

@Component({
  tag: 'admiralty-radio',
  styleUrl: 'radio.scss',
  scoped: true,
})
export class RadioComponent {
  private internalId = ++radioButtonIds;
  private nativeInput!: HTMLInputElement;
  private radioGroup: HTMLAdmiraltyRadioGroupElement | null = null;

  @Element() el!: HTMLElement;

  /**
   * The tabindex of the radio button.
   * @internal
   */
  @State() buttonTabindex = -1;

  /**
   * The name of the radio button for use on selection within a radio group
   */
  @Prop() name: string;
  /**
   * The value of the radio button for use on selection within a radio group
   */
  @Prop({ mutable: true }) value: string | null;
  /**
   * Determines whether the radio button is disabled. A button in disabled state will not fire click output events.
   */
  @Prop() disabled?: boolean = false;

  /**
   * Determines whether the radio button is selected (or checked)
   */
  @Prop({ mutable: true }) checked?: boolean = false;

  /**
   * Determines whether to add the invalid stying to the radio button
   */
  @Prop() invalid: boolean = false;

  /**
   * Emitted when the radio button gains focus.
   */
  @Event() admiraltyFocus!: EventEmitter<void>;

  /**
   * Emitted when the radio button loses focus.
   */
  @Event() admiraltyBlur!: EventEmitter<void>;

  /**
   * Emitted when the radio is selected
   */
  @Event() admiraltyChange!: EventEmitter<void>;

  @Watch('value')
  valueChanged() {
    /**
     * The new value of the radio may
     * match the radio group's value,
     * so we see if it should be checked.
     */
    this.updateState();
  }

  connectedCallback() {
    if (this.value === undefined) {
      // radio buttons should always be used with a value
      this.value = `admiralty-radio-${this.internalId}`;
    }
    const radioGroup = (this.radioGroup = this.el.closest('admiralty-radio-group'));

    if (radioGroup) {
      this.updateState();
      radioGroup.addEventListener('admiraltyChange', this.updateState);
    }
  }

  disconnectedCallback() {
    const radioGroup = this.radioGroup;
    if (radioGroup) {
      radioGroup.removeEventListener('admiraltyChange', this.updateState);
      this.radioGroup = null;
    }
  }

  /** @internal */
  @Method()
  async setButtonTabindex(value: number) {
    this.buttonTabindex = value;
  }

  private updateState = () => {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this.value;
      if (this.nativeInput && this.checked) {
        this.nativeInput.focus();
      }
    }
  };

  private onClick = () => {
    this.checked = this.nativeInput.checked;
  };

  private onFocus = () => {
    this.admiraltyFocus.emit();
  };

  private onBlur = () => {
    this.admiraltyBlur.emit();
  };

  render() {
    const { buttonTabindex, checked, disabled, name, value } = this;
    const id = this.el.id != '' ? this.el.id : `admiralty-radio-${this.internalId}`;
    const inputId = `${id}-input`;
    return (
      <Host>
        <div class={{ 'admiralty-radio': true, 'checked': checked }}>
          <input
            class={{ 'invalid': this.invalid, 'admiralty-radio': true }}
            aria-checked={`${checked}`}
            aria-hidden={disabled ? 'true' : null}
            aria-labelledby={inputId}
            id={inputId}
            name={name}
            tabindex={buttonTabindex}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onClick={this.onClick}
            type="radio"
            value={value}
            checked={checked}
            disabled={disabled ? true : null}
            ref={nativeEl => (this.nativeInput = nativeEl as HTMLInputElement)}
          />
          <label htmlFor={inputId}>
            <slot />
          </label>
        </div>
        <div class={{ conditional: true, checked: checked, unchecked: !checked }}>
          <slot name="conditional"></slot>
        </div>
      </Host>
    );
  }
}

let radioButtonIds = 0;
