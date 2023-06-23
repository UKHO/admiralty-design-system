import { Component, Host, h, Prop, Element, Event, EventEmitter, ComponentInterface, Watch } from '@stencil/core';
import { RadioGroupChangeEventDetail } from './radio-group-interface';

@Component({
  tag: 'admiralty-radio-group',
  styleUrl: 'radio-group.scss',
  scoped: true,
})
export class RadioGroupComponent implements ComponentInterface {
  private inputId = `admiralty-rg-${radioGroupIds++}`;

  @Element() el!: HTMLElement;

  /**
   * The name of the control, which is submitted with the form data
   */
  @Prop() name: string = this.inputId;

  /**
   * The value of the radio group
   */
  @Prop({ mutable: true }) value: any | null;

  /**
   * Setting this true displays the radio options vertically (defaults to false)
   */
  @Prop() displayVertical: boolean = false;

  @Watch('value')
  valueChanged(value: any) {
    this.setRadioTabindex(value);

    this.admiraltyChange.emit({ value });
  }

  /**
   * Event fired when the checked radio button changes
   */
  @Event() admiraltyChange: EventEmitter<RadioGroupChangeEventDetail>;

  componentDidLoad(): void {
    this.setRadioTabindex(this.value);
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

  private getRadios(): any {
    return Array.from(this.el.querySelectorAll('admiralty-radio'));
  }
  private onClick = (e: Event) => {
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
        <div class={{ 'radio-group': true, 'stack': displayVertical }} role="radiogroup" onClick={this.onClick}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}

let radioGroupIds: number = 0;
