import { Component, Input } from '@angular/core';

@Component({
  selector: 'ukho-phase-banner',
  templateUrl: './phase-banner.component.html',
  styleUrls: ['./phase-banner.component.scss'],
})
export class PhaseBannerComponent {
  @Input() link: string;
  @Input() phase: 'alpha' | 'beta' = 'alpha';
}
