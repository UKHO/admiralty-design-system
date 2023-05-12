import { Element, Component, Event, h, Prop, Watch, Host, State, Method, EventEmitter } from '@stencil/core';

@Component({
  tag: 'admiralty-radio',
  styleUrl: 'radio.scss',
  scoped: true,
})
export class RadioComponent {
  private inputId = `admiralty-radio-${radioButtonIds++}`;
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
  @Prop() name: string = this.inputId;
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
   * Emitted when the radio button gains focus.
   */
  @Event() admiraltyFocus!: EventEmitter<void>;

  /**
   * Emitted when the radio button loses focus.
   */
  @Event() admiraltyBlur!: EventEmitter<void>;

  connectedCallback() {
    if (this.value === undefined) {
      this.value = this.inputId;
    }
    const radioGroup = (this.radioGroup = this.el.closest('admiralty-radio-group'));

    if (radioGroup) {
      this.updateState();
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

  @Watch('checked')
  @Watch('disabled')
  render() {
    const { buttonTabindex, checked, disabled, inputId, name, value } = this;

    return (
      <Host>
        <div class="admiralty-radio">
          <input
            aria-checked={`${checked}`}
            aria-hidden={disabled ? 'true' : null}
            aria-labelledby={inputId}
            id={inputId}
            name={name}
            tabindex={buttonTabindex}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onClick={this.onClick}
            class="admiralty-radio"
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
      </Host>
    );
  }
}

let radioButtonIds = 0;
