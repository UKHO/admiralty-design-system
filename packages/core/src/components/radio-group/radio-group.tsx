import { Component, Host, h, Prop, Element, Event, EventEmitter, ComponentInterface, Watch } from '@stencil/core';
import { RadioGroupChangeEventDetail } from './radio-group-interface';

@Component({
  tag: 'admiralty-radio-group',
  styleUrl: 'radio-group.scss',
  scoped: true,
})
export class RadioGroupComponent implements ComponentInterface {
  private internalId = ++radioGroupIds;
  private inputId: string = `admiralty-rg-${this.internalId}`;
  private hintId: string = `admiralty-rg-hint-${this.internalId}`;
  private errorId: string = `admiralty-rg-error-${this.internalId}`;

  @Element() el!: HTMLElement;

  /**
   * The name of the control, which is submitted with the form data
   */
  @Prop() name: string = this.inputId;

  /**
   * The label text to display above the control
   */
  @Prop() label: string;

  /**
   * The hint text to display below the label
   */
  @Prop() hint: string;

  /**
   * Whether the radio controls should be disabled
   */
  @Prop() disabled: boolean = false;

  /**
   * The value of the radio group
   */
  @Prop({ mutable: true }) value: any | null;

  /**
   * Setting this to false displays the radio options horizontally (defaults to true)
   */
  @Prop() displayVertical: boolean = true;

  /**
   * Whether to show the input in an invalid state
   */
  @Prop() invalid: boolean = false;

  /**
   * The message to show when the input is invalid
   */
  @Prop() invalidMessage: string;

  @Watch('value')
  valueChanged(value: any) {
    this.setRadioTabindex(value);
    this.admiraltyChange.emit({ value });
  }

  /**
   * Event fired when the checked radio button changes
   */
  @Event() admiraltyChange: EventEmitter<RadioGroupChangeEventDetail>;

  @Watch('invalid')
  invalidChanged(value: boolean) {
    this.getRadios().forEach(radio => {
      if (value) {
        radio.setAttribute('invalid', 'true');
      } else {
        radio.removeAttribute('invalid');
      }
    });
  }

  componentDidLoad(): void {
    this.setRadioTabindex(this.value);
    this.invalidChanged(this.invalid);
  }

  private setRadioTabindex = (value: any | undefined) => {
    const radios = this.getRadios();

    // Get the first radio that is not disabled and the checked one
    const first = radios.find(radio => !radio.disabled);
    const checked = radios.find(radio => radio.value === value && !radio.disabled);

    if (!first && !checked) {
      return;
    }

    // If an enabled checked radio exists, set it to be the focusable radio
    // otherwise we default to focus the first radio
    const focusable = checked || first;

    for (const radio of radios) {
      const tabindex = radio === focusable ? 0 : -1;
      radio.setButtonTabindex(tabindex);
    }
  };

  private getRadios(): HTMLAdmiraltyRadioElement[] {
    return Array.from(this.el.querySelectorAll('admiralty-radio'));
  }
  private onClick = (e: Event) => {
    if (this.disabled) return;
    const selectedRadio = e.target && (e.target as HTMLElement).closest('admiralty-radio');

    if (selectedRadio) {
      const currentValue = this.value;
      const newValue = selectedRadio.value;

      if (newValue !== currentValue) {
        this.value = newValue;
      }
    }
  };

  render() {
    const { displayVertical } = this;

    return (
      <Host>
        <fieldset
          disabled={this.disabled}
          role="radiogroup"
          aria-invalid={this.invalid ? 'true' : 'false'}
          aria-describedby={(this.hint ? this.hintId : '') + ' ' + (this.invalid ? this.errorId : '')}
        >
          {this.label ? <legend>{this.label}</legend> : null}
          {this.hint ? <admiralty-hint id={this.hintId}>{this.hint}</admiralty-hint> : null}
          <div class={{ 'radio-group': true, 'stack': displayVertical }} onClick={this.onClick}>
            <slot></slot>
          </div>
          <admiralty-input-invalid id={this.errorId} style={{ ...(!(this.invalid && this.invalidMessage) ? { display: 'none' } : {}) }}>
            {this.invalidMessage}
          </admiralty-input-invalid>
        </fieldset>
      </Host>
    );
  }
}

let radioGroupIds: number = 0;
