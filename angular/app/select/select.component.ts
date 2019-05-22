import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  constructor() { }

  @ViewChild('selectComponent') selectComponent;

  @Input() options: OptionValue[] 

  @Output() changed = new EventEmitter();

  handleChange($event: MatSelectChange) {
    this.changed.emit($event)
  }
}

export interface OptionValue {
  value: string;
  viewValue: string;
}
