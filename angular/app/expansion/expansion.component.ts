import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss']
})
export class ExpansionComponent {
  static labelCounter = 0;

  @Input() initialExpanded = false;
  @Input() heading: string;

  id: string = 'ukho-expansion-' + ExpansionComponent.labelCounter;
}
