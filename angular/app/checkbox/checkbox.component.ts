import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  constructor() { }

  handleChange($event: MatCheckboxChange) {
    console.log('checkbox changed', $event)
  }
}
