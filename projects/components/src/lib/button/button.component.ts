import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[ukho-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  /**
   * This dictates whether the button is secondary.
   */
  @HostBinding('class.secondary') @Input() secondary = false;

  /**
   * This is the icon to be used on the button
   * This must be one of the font-awesome icons
   * E.G: fa-chevron-down
   */
  @HostBinding('class.icon') @Input() icon: string;
}
