import { Component, EventEmitter, Input, Output } from '@angular/core';

let nextId = 0;

@Component({
  selector: 'ukho-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.scss'],
})
export class ReadMoreComponent {
  @Input() initialExpanded = false;
  @Input() heading: string;

  @Output() change = new EventEmitter<boolean>();

  id = `ukho-expansion-${++nextId}`;
  headerId = `${this.id}-header`;
  contentId = `${this.id}-content`;

  onToggle() {
    this.initialExpanded = !this.initialExpanded;
    this.change.emit(this.initialExpanded);
  }
}
