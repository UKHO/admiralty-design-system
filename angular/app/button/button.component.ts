import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  constructor() { }

  @Input() label: string;

  @Input() isSecondary: boolean;

  @Input() icon: string;

}
