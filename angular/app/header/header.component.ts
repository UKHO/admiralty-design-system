import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../navtypes";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() src?: string = '/assets/svg/AdmiraltyUKHO linear logo.svg';
  @Input() alt?: string = 'Admiralty Marine Data Solutions | UK Hydrographic Office';
  @Input() text?: string;
  @Input() navigation?: MenuItem[];

  ngOnInit() {
  }

}
