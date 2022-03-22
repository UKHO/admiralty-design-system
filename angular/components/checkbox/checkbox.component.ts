import { Component, Input, ViewEncapsulation } from '@angular/core';
import { UkhoAbstractFormField } from '../form-field/form-field';

@Component({
  selector: 'ukho-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  host: {
    "[class.right-align]": "checkboxRight",
    "[class.justify]": "justify",
    class: 'checkbox-wrapper',
  },
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent extends UkhoAbstractFormField<boolean> {
  /**
   * Whether the checkbox is checked or not by default.
   */
  @Input() checked = false;

  /**
   * This is the value which the checkbox emits when selected..
   */
  @Input() value: unknown;

  /**
   * When set the checkbox appears to the right of the label
   */
  @Input() checkboxRight = false;

  /**
   * Whether the checkbox and label should be justified.
   */
  @Input() justify = false;

  onChange = (checked: boolean) => {};

  handleChange(checked: boolean) {
    this.checked = checked;
    this.onChange(checked);
  }

  writeValue(value: any): void {
    this.checked = !!value;

    super.writeValue(value);
  }
}
