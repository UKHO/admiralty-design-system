import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { UkhoAbstractFormField } from '../form-field/form-field';

@Component({
  selector: 'ukho-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  host: {
    class: 'text-area-wrap',
    '[class.is-disabled]': 'disabled',
    '[class.validated]': 'valid && touched && !errorsOnly',
    '[class.invalid]': '!valid && touched',
  },
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent extends UkhoAbstractFormField<any> {
  /**
   * The label which will be used as a placeholder in the unfilled state, and as a field label in the filled state.
   */
  @Input() label: string;

  /**
   * @ignore
   */
  @Input() disabled = false;

  /**
   * A reference to the select element within the wrapper component
   */
  @ViewChild('select', { static: true }) select: ElementRef;

  /**
   * @ignore
   */
  writeValue(obj: any): void {
    this.select.nativeElement.value = obj;

    super.writeValue(obj);
  }
}
