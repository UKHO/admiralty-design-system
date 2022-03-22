import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() change = new EventEmitter<boolean>();

  id: string = `ukho-expansion-${++nextId}`;
  headerId: string = `${this.id}-header`;
  contentId: string = `${this.id}-content`;

  onToggle() {
    this.initialExpanded = !this.initialExpanded;
    this.change.emit(this.initialExpanded);
  }
}
