import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss']
})
export class TextinputComponent {

  constructor() { }

  @Input() isDisabled: boolean;

}
