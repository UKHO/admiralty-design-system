import { Component, Input } from '@angular/core';

let nextId = 0;

@Component({
  selector: 'ukho-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss'],
})
export class ExpansionComponent {
  @Input() initialExpanded: boolean = false;
  @Input() heading: string;
  @Input() alignHeadingRight: boolean = false;
  @Input() hideBorder: boolean = false;

  id = `ukho-expansion-${++nextId}`;
}
