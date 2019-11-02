import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ukho-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogueComponent {
  @Input() type: 'info' | 'warning' | 'success' | 'error' = 'info';
}
