import {Component, ElementRef, forwardRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

let nextId = 0;

@Component({
  selector: 'ukho-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss'],
  host: {
    class: 'text-input-wrap',
    '[class.is-disabled]': 'disabled',
    '[class.validated]': 'valid && touched',
    '[class.invalid]': '!valid && touched',
  },
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TextinputComponent),
    }
  ],
})
export class TextinputComponent implements ControlValueAccessor {
  id = `ukho-textinput-${++nextId}`;

  @ViewChild('input', {static: true}) input: ElementRef;

  @Input() type = 'text';
  @Input() label: string;
  @Input() disabled = false;

  get valid() {
     return this.controlDirective &&
       this.controlDirective.control.valid;
  }

  get touched() {
    return this.controlDirective &&
      this.controlDirective.control.touched;
  }

  get validationMessages() {
    return this.controlDirective &&
      this.controlDirective.errors;
  }

  onChange = (value: string) => {};
  onTouch = () => {};

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: any): void {
    this.input.nativeElement.value = value;
  }
}
