import { Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

let nextId = 0;

export abstract class UkhoAbstractFormField implements ControlValueAccessor {
  id = `ukho-form-field-${++nextId}`;

  @Input() disabled = false;
  @Input() validationMessages: Record<string, string> = { required: 'This field is required' };

  public onChange = (value: unknown) => {};
  public onTouch = () => {};

  constructor(@Optional() @Self() protected readonly controlDirective?: NgControl) {
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

  get error() {
    if (!(this.controlDirective && this.controlDirective.errors)) {
      return null;
    }

    const errorKeys = Object.keys(this.controlDirective.errors);
    const activeErrors = errorKeys.filter(errorKey => !!this.controlDirective.errors[errorKey]);
    return activeErrors[0];
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: unknown): void {
    this.onChange(value);

    if (this.controlDirective && this.controlDirective.control) {
      this.controlDirective.control.updateValueAndValidity();
    }
  }
}
