import { Component, Input, AfterViewInit } from '@angular/core';
import { Navigation } from './mocknavigation';
import { enhanceMenu }from './nav-enhance';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {

  constructor() { }

  @Input() navigation: Navigation;

  ngAfterViewInit() {
    enhanceMenu();
  }
}
