import { Component, Input } from '@angular/core';

@Component({
  selector: 'ukho-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() secondary = false;
  @Input() icon: string;
}
