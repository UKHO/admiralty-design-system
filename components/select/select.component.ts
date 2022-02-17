import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UkhoAbstractFormField } from '../form-field/form-field';

@Component({
  selector: 'ukho-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent extends UkhoAbstractFormField<string> {
  /**
   * The label which will be used as a placeholder in the unfilled state, and as a field label in the filled state.
   */
  @Input() label: string;

  /**
   * The hint that is used to instruct the user what to do. For example, 'Select an item from the dropdown'.
   */
  @Input() hint: string;

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
