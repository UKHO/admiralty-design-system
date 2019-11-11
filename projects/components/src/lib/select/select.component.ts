import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { UkhoAbstractFormField } from '../form-field/form-field';

@Component({
  selector: 'ukho-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  host: {
    class: 'text-area-wrap',
    '[class.is-disabled]': 'disabled',
    '[class.validated]': 'valid && touched',
    '[class.invalid]': '!valid && touched',
  },
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent extends UkhoAbstractFormField {
  @Input() label: string;
  @Input() disabled = false;

  @ViewChild('select', { static: true }) select: ElementRef;

  writeValue(obj: any): void {
    this.select.nativeElement.value = obj;

    super.writeValue(obj);
  }
}
