import { Component, Input } from '@angular/core';

@Component({
  selector: 'ukho-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class TextareaComponent {
  @Input() textareaText: { value: string };
}
