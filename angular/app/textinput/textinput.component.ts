import { Component, Input } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss']
})
export class TextinputComponent {

  constructor() { }

  @Input() isDisabled: boolean;

  @Input() isValid: boolean;

  @Input() inputText: { value: string };

  @Input() validation: FormControl;

  @Input() invalidMessage: string;
}
