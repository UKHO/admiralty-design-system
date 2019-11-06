import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

let nextId = 0;

@Component({
  selector: 'ukho-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements ControlValueAccessor {
  id = `ukho-select-${++nextId}`;

  @Input() label: string;
  @Input() disabled = false;

  @ViewChild('select', { static: true }) select: ElementRef;

  onChange = (value: any) => {};
  onTouch = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.select.nativeElement.value = obj;
  }
}
