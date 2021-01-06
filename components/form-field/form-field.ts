import { Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

let nextId = 0;

export abstract class UkhoAbstractFormField<T> implements ControlValueAccessor {
  /**
   * AUTOGENERATED
   * This is an auto-generated form-field ID
   */
  id = `ukho-form-field-${++nextId}`;

  /**
   * This dictates whether browser autocompletion should be disabled.
   */
  @Input() autocomplete = true;

  /**
   * This dictates whether the form field is disabled.
   */
  @Input() disabled = false;

  /**
   * A Record of string,string to provide custom messages to be used with Reactive Form validators
   * EG: `{ required: This field is required }` will cause the `required` validator to display the message specified.
   */
  @Input() validationMessages: Record<string, string> = { required: 'This field is required' };

  /**
   * Specifies whether only negative validation results should be displayed on the field.
   */
  @Input() errorsOnly = false;

  /**
   * The registered callback function called when an input event occurs on the input element.
   */
  public onChange = (value: T) => {};

  /**
   * The registered callback function called when a blur event occurs on the input element.
   */
  public onTouch = () => {};

  constructor(@Optional() @Self() protected readonly controlDirective?: NgControl) {
    if (controlDirective) {
      controlDirective.valueAccessor = this;
    }
  }

  get valid() {
    return this.controlDirective && this.controlDirective.valid;
  }

  get touched() {
    return this.controlDirective && this.controlDirective.touched;
  }

  get error() {
    if (!(this.controlDirective && this.controlDirective.errors)) {
      return null;
    }

    const errorKeys = Object.keys(this.controlDirective.errors);
    const activeErrors = errorKeys.filter((errorKey) => !!this.controlDirective.errors[errorKey]);
    return activeErrors[0];
  }
  /**
   * Registers a function called when the control value changes.
   * Used by ReactiveForms to check for changes
   */
  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  /**
   * Registers a function called when the control is touched.
   * Used by ReactiveForms to check for touched-ness
   */
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  /**
   * Sets the "disabled" property on the input element.
   * Used by ReactiveForms for setting the disablement of the element.
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  /**
   * Sets the "value" property on the input element.
   * Used by ReactiveForms for setting the element value.
   */
  writeValue(value: T): void {
    this.onChange(value);

    if (this.controlDirective && this.controlDirective.control) {
      this.controlDirective.control.updateValueAndValidity();
    }
  }
}