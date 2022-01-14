import {
  AfterContentInit,
  Component,
  ContentChildren,
  forwardRef,
  Input,
  Optional,
  QueryList,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { RadioComponent } from '../radio/radio.component';

@Component({
  selector: 'ukho-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent implements ControlValueAccessor, AfterContentInit {
  /**
   * The currently selected child radio button value
   */
  private currentValue: any;

  /**
   * The name of the radio group for use within a form
   */
  @Input()
  set name(name: string) {
    this._name = name;
    this.updateChild(this.updateName);
  }
  get name(): string {
    return this._name;
  }

  get valid() {
    return this.controlDirective && this.controlDirective.control.valid;
  }

  get touched() {
    return this.controlDirective && this.controlDirective.control.touched;
  }

  @ContentChildren(RadioComponent, { descendants: true }) childRadioButtons!: QueryList<RadioComponent>;

  /**
   * The registered callback function called when an input event occurs on the input element.
   */
  onChange = value => {};
  /**
   * The registered callback function called when an input event occurs on the input element.
   */
  onTouch = () => {};

  constructor(@Optional() @Self() private readonly controlDirective: NgControl) {
    if (controlDirective) {
      controlDirective.valueAccessor = this;
    }
  }

  /**
   * @ignore
   */
  ngAfterContentInit() {
    this.updateChild(this.updateName);
    this.updateChild(this.registerChangeCaptor);
    this.writeValue(this.currentValue);
  }

  /**
   * @ignore
   */
  private updateName = button => (button.name = this.name);

  /**
   * @ignore
   */
  private updateDisability = button => (button.disabled = this._disabled);

  /**
   * @ignore
   */
  private registerChangeCaptor = button =>
    button.registerOnChange(value => this.captureChildChangeEvent(button, value));

  /**
   * @ignore
   */
  private _name: string;

  /**
   * @ignore
   */
  private _disabled: boolean;

  /**
   * INTERNAL
   * Method which is called when any child radio button changes value
   */
  captureChildChangeEvent(radioButton: RadioComponent, selected: boolean) {
    if (selected) {
      this.writeValue(radioButton.value);
      this.onChange(radioButton.value);
    }
  }

  /**
   * INTERNAL
   * Run a function against all child radio buttons
   */
  private updateChild(fn: (child: RadioComponent) => {}) {
    if (this.childRadioButtons) {
      this.childRadioButtons.forEach(button => fn(button));
    }
  }

  /**
   * Registers a function called when the control value changes.
   * Used by ReactiveForms to check for changes
   */
  registerOnChange(fn: (value) => {}): void {
    this.onChange = fn;
  }

  /**
   * Registers a function called when the control is touched.
   * Used by ReactiveForms to check for touched-ness
   */
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  /**
   * Sets the "disabled" property on the input element.
   * Used by ReactiveForms for setting the disablement of the element.
   */
  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
    this.updateChild(this.updateDisability);
  }

  /**
   * Sets the "value" property on the input element.
   * Used by ReactiveForms for setting the element value.
   */
  writeValue(obj: any): void {
    this.currentValue = obj;
    this.updateChild(child => (child.checked = child.value === obj));
  }
}
