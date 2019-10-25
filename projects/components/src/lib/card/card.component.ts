import { Component, Input } from '@angular/core';

@Component({
  selector: 'ukho-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public title = '';
}
