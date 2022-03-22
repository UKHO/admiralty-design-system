import { Component, Input } from '@angular/core';

@Component({
  selector: 'ukho-input-header',
  templateUrl: './input-header.component.html',
  styleUrls: ['./input-header.component.scss'],
})
export class InputHeaderComponent {
  /**
   * This is an identifier for the label
   */
  @Input() id: string;

  /**
   * The label which will be used above the input to describe the input.
   */
  @Input() label: string;

  /**
   * The hint which will be used under the label to describe the input.
   */
  @Input() hint: string;

  /**
   * The disabled option can be used to disable the component.
   */
  @Input() disabled: boolean;
}
