import { Component, Event, Prop, Element, EventEmitter, h, Host } from '@stencil/core';
import { UKHOOptions } from './select.types';

@Component({
  tag: 'admiralty-select',
  styleUrl: 'select.scss',
  scoped: true,
})
export class SelectComponent {
  @Element() el: HTMLElement;
  id: string = `admiralty-select-${++nextId}`;
  /**
   * If `true`, the user cannot interact with the select.
   */
  @Prop() disabled: boolean = false;
  /**
   * If 'true', the 'error' class is added to suggest an error
   */
  @Prop() error: boolean = false;
  /**
   * The hint that is used to inform the user of an error (displayed below the select box)
   */
  @Prop() errorHint: string = null;
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
  @Event() admiraltyChange: EventEmitter<EventTarget>;
  /**
   * Emitted when the component loses focus.
   */
  @Event() admiraltyBlur: EventEmitter<void>;

  componentWillRender() {
    this.getOptions();
  }

  options: Array<UKHOOptions>;

  handleSelect(event: Event) {
    this.admiraltyChange.emit(event.target);
  }

  handleBlur(_event: FocusEvent): void {
    this.admiraltyBlur.emit();
  }

  /**
   *  Summary. gets the options passed the user passes through the slots and
   *  extracs the text and value
   */
  getOptions() {
    const slotOptions = this.el.querySelectorAll('option');
    const options = [];

    // grab all the data from the slot and extract the data to be inserted into the template
    slotOptions.forEach(slot => {
      // remove the slotted option to keep the shadowDom clean
      slot.remove();

      options.push({
        text: slot.text,
        value: slot.value,
      });
    });

    this.options = options;
  }

  render() {
    const { disabled, error, errorHint, hint, id, label } = this;
    const disabledClass = disabled ? 'disabled' : '';

    return (
      <Host>
        <div class={`admiralty-select ${disabledClass}`}>
          <admiralty-label for={id}>{label}</admiralty-label>
          <admiralty-hint>{hint}</admiralty-hint>
          <div class="select-wrapper" style={this.width ? { maxWidth: `${this.width}px` } : {}}>
            <select
              id={id}
              class={{ 'admiralty-form-control': true, 'error': error, 'disabled': disabled }}
              aria-disabled={disabled ? 'true' : 'false'}
              aria-label={label}
              onChange={event => this.handleSelect(event)}
              onBlur={event => this.handleBlur(event)}
              disabled={disabled}
            >
              {this.options.map(option => (
                <option value={option.value}>{option.text}</option>
              ))}
            </select>
            <admiralty-icon class={`select-down-icon ${disabledClass}`} icon-name="angle-down"></admiralty-icon>
          </div>
          {this.error ? <admiralty-input-error>{errorHint}</admiralty-input-error> : ''}
        </div>
      </Host>
    );
  }
}

let nextId = 0;
