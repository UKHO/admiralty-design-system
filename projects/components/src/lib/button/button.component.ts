import { Component, Input } from '@angular/core';

@Component({
  selector: 'ukho-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string;
  @Input() isSecondary: boolean;
  @Input() icon: string;
  @Input() click: () => any;

  handleClick() {
    this.click();
  }
}
