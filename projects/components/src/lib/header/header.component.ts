import { Component, Input } from '@angular/core';
import { MenuItem } from '../navtypes';

@Component({
  selector: 'ukho-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() src = '/svg/Admiralty linear logo.svg';
  @Input() alt = 'Admiralty Maritime Data Solutions | UK Hydrographic Office';
  @Input() text?: string;
  @Input() navigation?: MenuItem[];
}
