import {Component, Input } from '@angular/core';

let nextId = 0;

@Component({
  selector: 'ukho-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.scss']
})
export class ReadMoreComponent {
  @Input() initialExpanded = false;
  @Input() heading: string;

  id = `ukho-readmore-${++nextId}`;
}
