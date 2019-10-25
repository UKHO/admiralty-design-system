import { Component, Directive, Input } from '@angular/core';

@Component({
  selector: 'ukho-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss'],
})
export class DialogueComponent {
  @Input() type: 'info' | 'warning' | 'success' | 'error' = 'info';
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ukho-dialogue-title',
})
export class DialogueTitleDirective {}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ukho-dialogue-content',
})
export class DialogueContentDirective {}
