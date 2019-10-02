import {Component, Input} from '@angular/core';
import {MenuItem} from '../navtypes';

@Component({
  selector: 'ukho-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() src = '/assets/svg/AdmiraltyUKHO linear logo.svg';
  @Input() alt = 'Admiralty Marine Data Solutions | UK Hydrographic Office';
  @Input() text?: string;
  @Input() navigation?: MenuItem[];
}
