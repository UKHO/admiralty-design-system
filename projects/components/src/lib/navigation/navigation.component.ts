import { Component, Input, AfterViewInit } from '@angular/core';
import { Navigation } from '../navtypes';
import { enhanceMainMenu } from '../nav-enhance';

@Component({
  selector: 'ukho-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements AfterViewInit {
  @Input() navigation: Navigation;

  ngAfterViewInit() {
    enhanceMainMenu();
  }
}
