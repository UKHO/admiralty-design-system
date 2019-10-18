import {Component, Input} from '@angular/core';

let nextId = 0;

@Component({
  selector: 'ukho-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss']
})
export class ExpansionComponent {
  @Input() initialExpanded = false;
  @Input() heading: string;

  id = `ukho-expansion-${++nextId}`;
}
