import { Component, Input } from '@angular/core';

@Component({
  selector: 'ukho-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  /**
   * A value from 0 to 100 indicating progress.
   */
  @Input() value = 0;
  /**
   * Set to true to indicate an error.
   */
  @Input() error = false;
  /**
   * An accessible name for the progress bar. If a visible label is present, use `ariaLabelledBy` instead.
   */
  @Input() ariaLabel: string;
  /**
   * The ID of any element that labels the progress bar.
   */
  @Input() ariaLabelledBy: string;
}
