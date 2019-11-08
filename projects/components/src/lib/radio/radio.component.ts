import {Component, Input} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

let nextId = 0;

@Component({
  selector: 'ukho-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements ControlValueAccessor {
  @Input() name: string;
  @Input() checked = false;
  @Input() disabled = false;
  @Input() value: any;

  id = `ukho-radio-${++nextId}`;

  onChange = (checked: boolean) => {};
  onTouch  = () => {};

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
