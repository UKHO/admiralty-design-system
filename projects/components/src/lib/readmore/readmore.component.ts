import {Component, Input } from '@angular/core';

@Component({
  selector: 'ukho-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.scss']
})
export class ReadMoreComponent {
  static labelCounter = 0;

  @Input() initialExpanded = false;
  @Input() heading: string;

  id: string = 'ukho-readmore-' + ReadMoreComponent.labelCounter;

  constructor() {
    ReadMoreComponent.labelCounter++;
  }
}
