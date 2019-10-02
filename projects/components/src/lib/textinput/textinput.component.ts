import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ukho-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss']
})
export class TextinputComponent {
  @Input() isDisabled: boolean;
  @Input() isValid: boolean;
  @Input() inputText: { value: string };
  @Input() validation: FormControl;
  @Input() invalidMessage: string;
}
