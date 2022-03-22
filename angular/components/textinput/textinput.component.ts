import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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
   * The ARIA role. If a list box is attached to this element (e.g. when used as a combobox) then this
   * should be set as "combobox".
   */
  @Input() ariaRole: string;

  /**
   * If a list box is attached to this element (e.g. when used as a combobox) then when that
   * element is expanded this should be true.
   */
  @Input() ariaExpanded: boolean;

  /**
   * The ID of any element that semantically should be owned by this component, regardless
   * of whether it is a sibling or parent.
   */
  @Input() ariaOwns: string;

  /**
   * The ID of any element that describes the input, in addition to the error section.
   */
  @Input() ariaDescribedBy: string;

  /**
   * @ignore
   */
  writeValue(value: string): void {
    this.input.nativeElement.value = value;
    super.writeValue(value);
  }
}
