import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() src: string = '/assets/svg/AdmiraltyUKHO linear logo.svg';
  @Input() alt: string = 'Admiralty Marine Data Solutions | UK Hydrographic Office';

  ngOnInit() {
  }

}
