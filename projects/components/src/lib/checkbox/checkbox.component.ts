import {Component, forwardRef, Input, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

let nextId = 0;

@Component({
  selector: 'ukho-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  host: {
    class: 'checkbox-wrapper'
  },
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  id = `ukho-checkbox-${++nextId}`;

  @Input() checked = false;
  @Input() disabled = false;

  onChange = (checked: boolean) => {};
  onTouch = () => {};

  registerOnChange(fn: (checked: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: any): void {
    this.checked = !!value;
  }
}
