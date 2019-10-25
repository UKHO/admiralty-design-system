import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'ukho-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() options: OptionValue[];
  @Output() changed = new EventEmitter();

  handleChange($event: MatSelectChange) {
    this.changed.emit($event);
  }
}

export interface OptionValue {
  value: string;
  viewValue: string;
}
