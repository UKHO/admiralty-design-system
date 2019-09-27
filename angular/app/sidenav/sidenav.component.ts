import { Component, Input, AfterViewInit } from '@angular/core';
import { SubSection } from '../navtypes';
import { enhanceMainMenu } from '../nav-enhance';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements AfterViewInit {
  @Input() navigation: SubSection[];

  ngAfterViewInit() {
    enhanceMainMenu();
  }
}
