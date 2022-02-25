import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

export enum Variant {
  Primary = 'primary',
  Secondary = 'secondary',
  Warning = 'warning',
  Text = 'text',
  Icon = 'icon',
}

@Component({
  selector: 'ukho-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  /**
   * The type of button to render. Valid values are `primary`, `secondary`, `warning`, `text` and `icon`.
   * Default value is `primary`.
   */
  @Input() variant: Variant;
  /**
   * Deprecated. Whether the button should be rendered as a secondary type of button. Will take
   * precedent over `variant`.
   *
   * @deprecated
   * - Use the `variant` input property instead.
   */
  @Input() secondary = false;
  /**
   * When passed Font Awesome class names, then an icon will be rendered.
   */
  @Input() icon: string;
  /**
   * Determines whether the button is disabled. A button in disabled state will not fire click output events.
   */
  @Input() disabled = false;
  /**
   * The default behavior of the button. Valid values are `button`, `submit` and `reset`.
   * Default value is `submit`.
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'submit';

  ngOnInit(): void {
    if (!this.variant) {
      this.variant = Variant.Primary;
    }
    if (this.secondary) {
      this.variant = Variant.Secondary;
    }
  }
}
