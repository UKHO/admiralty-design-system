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
  /**
   * A reference to the input element within the wrapper component
   */
  @ViewChild('input', { static: true }) input: ElementRef;

  /**
   * The input type, options are: `text | date | time | email | password | tel | url`
   */
  @Input() type: 'text' | 'date' | 'time' | 'email' | 'password' | 'tel' | 'url' = 'text';

  /**
   * The label which will be used as a placeholder in the unfilled state, and as a field label in the filled state.
   */
  @Input() label: string;

  /**
   * @ignore
   */
  writeValue(value: unknown): void {
    this.input.nativeElement.value = value;
    super.writeValue(value);
  }
}
