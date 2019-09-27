import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent {
  @Input() title: string;
  @Input() type: 'info' | 'warning' | 'success' | 'error';
}
