import { Component, Input } from '@angular/core';
import { FooterItem } from './footer.types';

@Component({
  selector: 'ukho-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() imageLink = 'https://www.admiralty.co.uk/';
  @Input() imageSrc = '/svg/UKHO stacked logo.svg';
  @Input() imageAlt = 'Admiralty Maritime Data Solutions | UK Hydrographic Office';
  @Input() text = `© Crown copyright ${new Date().getFullYear()} UK Hydrographic Office`;
  @Input() navigation: FooterItem[] = [];
}
