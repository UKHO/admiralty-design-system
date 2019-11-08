import {AfterContentInit, Component, ContentChildren, forwardRef, Input, Optional, QueryList, Self} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import {RadioComponent} from '../radio/radio.component';

@Component({
  selector: 'ukho-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
})
export class RadioGroupComponent implements ControlValueAccessor, AfterContentInit {
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

  onChange = (value) => {};
  onTouch  = () => {};

  constructor(@Optional() @Self() private readonly controlDirective: NgControl) {
    if (controlDirective) {
      controlDirective.valueAccessor = this;
    }
  }

  ngAfterContentInit() {
    this.updateChild(this.updateName);
    this.updateChild(this.registerChangeCaptor);
  }

  updateName = button => button.name = this._name;
  updateDisability = button => button.disabled = this._disabled;
  registerChangeCaptor = button => button.registerOnChange(value => this.captureChildChangeEvent(button, value));

  private _name: string;
  private _disabled: boolean;

  captureChildChangeEvent(radioButton: RadioComponent, selected: boolean) {
    if (selected) {
      this.onChange(radioButton.value);
    }
  }

  private updateChild(fn: (child: RadioComponent) => {}) {
    if (this.childRadioButtons) {
      this.childRadioButtons.forEach(button => fn(button));
    }
  }

  registerOnChange(fn: (value) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
    this.updateChild(this.updateDisability);
  }

  writeValue(obj: any): void {
    this.updateChild((child) => child.checked = child.value === obj);
  }
}
