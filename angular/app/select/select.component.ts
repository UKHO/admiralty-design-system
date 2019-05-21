import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  constructor() { }

  @ViewChild('selectComponent') selectComponent;

  foods: OptionValue[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  handleChange() {
    console.log('select has changed', this.selectComponent.panelOpen)
  }

  getIconClass() {
    return "fa-chevron-down'"
  }

}

export interface OptionValue {
  value: string;
  viewValue: string;
}
