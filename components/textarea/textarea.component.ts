import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { UkhoAbstractFormField } from '../form-field/form-field';

@Component({
  selector: 'ukho-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent extends UkhoAbstractFormField<string> {
  /**
   * A reference to the input element within the wrapper component
   */
  @ViewChild('input', { static: true }) input: ElementRef;

  /**
   * The label which will be used as a placeholder in the unfilled state, and as a field label in the filled state.
   */
  @Input() label: string;
  @Input() text: string;
  /**
   * @ignore
   */
  writeValue(value: string): void {
    this.input.nativeElement.value = value;

    super.writeValue(value);
  }
}
