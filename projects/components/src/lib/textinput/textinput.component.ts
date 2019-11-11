import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { UkhoAbstractFormField } from '../form-field/form-field';

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
export class TextinputComponent extends UkhoAbstractFormField {
  @ViewChild('input', { static: true }) input: ElementRef;

  @Input() type: 'text' | 'date' | 'time' | 'email' | 'password' | 'tel' | 'url' = 'text';
  @Input() label: string;

  writeValue(value: unknown): void {
    this.input.nativeElement.value = value;

    super.writeValue(value);
  }
}
