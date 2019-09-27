import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @ViewChild('selectComponent', {static: true}) selectComponent;
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
