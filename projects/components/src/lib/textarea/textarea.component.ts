import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { UkhoAbstractFormField } from '../form-field/form-field';

@Component({
  selector: 'ukho-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  host: {
    class: 'text-area-wrap',
    '[class.is-disabled]': 'disabled',
    '[class.validated]': 'valid && touched',
    '[class.invalid]': '!valid && touched',
  },
  encapsulation: ViewEncapsulation.None,
})
export class TextareaComponent extends UkhoAbstractFormField {
  @ViewChild('input', { static: true }) input: ElementRef;

  @Input() label: string;

  writeValue(value: unknown): void {
    this.input.nativeElement.value = value;

    super.writeValue(value);
  }
}
