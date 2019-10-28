import { Component, Input } from '@angular/core';

@Component({
  selector: 'ukho-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() value = 0;
}
