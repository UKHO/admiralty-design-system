import {Component} from '@angular/core';

let nextId = 0;

@Component({
  selector: 'ukho-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  id = `ukho-checkbox-${++nextId}`;
}
