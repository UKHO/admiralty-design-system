import { Component, Input, ViewEncapsulation } from '@angular/core';
import { UkhoAbstractFormField } from '../form-field/form-field';

@Component({
  selector: 'ukho-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  host: {
    class: 'checkbox-wrapper',
  },
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent extends UkhoAbstractFormField {
  @Input() checked = false;

  onChange = (checked: boolean) => {};

  writeValue(value: any): void {
    this.checked = !!value;

    super.writeValue(value);
  }
}
