import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { UkhoAbstractFormField } from '../form-field/form-field';

@Component({
  selector: 'ukho-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss'],
})
export class TextinputComponent extends UkhoAbstractFormField<string> {
  /**
   * A reference to the input element within the wrapper component
   */
  @ViewChild('input', { static: true }) input: ElementRef;

  /**
   * The input type, options are: `text | date | time | email | password | tel | url`
   */
  @Input() type: 'text' | 'date' | 'time' | 'email' | 'password' | 'tel' | 'url' = 'text';

  /**
   * The label which will be used above the input to describe the input.
   */
  @Input() label: string;

  /**
   * The placeholder text to show in the input
   */
  @Input() placeholder: string;

  /**
   * The name of the input, used by the browser to give the user autocompletion.
   * Use in conjunction with the 'autocomplete' attribute
   */
  @Input() name: string;

  /**
   * The autocompletion attribute is used to tell the browser what to try and autocomplete the input as.
   * To switch autocompletion off, pass 'off'
   * @see https://developers.google.com/web/fundamentals/design-and-ux/input/forms#recommended_input_name_and_autocomplete_attribute_values
   */
  @Input() autocomplete: string;

  /**
   * @ignore
   */
  writeValue(value: string): void {
    this.input.nativeElement.value = value;
    super.writeValue(value);
  }
}
