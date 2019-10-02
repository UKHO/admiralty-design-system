import {Component, Input} from '@angular/core';

@Component({
  selector: 'ukho-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent {
  @Input() title: string;
  @Input() type: 'info' | 'warning' | 'success' | 'error';
}
