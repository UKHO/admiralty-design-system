import { Component, ElementRef, Input, Optional, Self, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

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
})
export class TextinputComponent implements ControlValueAccessor {
  id = `ukho-textinput-${++nextId}`;

  @ViewChild('input', { static: true }) input: ElementRef;

  @Input() type = 'text';
  @Input() label: string;
  @Input() disabled = false;

  constructor(@Optional() @Self() private readonly controlDirective: NgControl) {
    if (controlDirective) {
      controlDirective.valueAccessor = this;
    }
  }

  get valid() {
    return this.controlDirective && this.controlDirective.control.valid;
  }

  get touched() {
    return this.controlDirective && this.controlDirective.control.touched;
  }

  get validationMessages() {
    return this.controlDirective && this.controlDirective.errors;
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

    if (this.controlDirective && this.controlDirective.control) {
      this.controlDirective.control.updateValueAndValidity();
    }
  }
}
