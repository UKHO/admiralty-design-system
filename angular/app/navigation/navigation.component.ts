import { Component, Input } from '@angular/core';
import { Navigation } from './mocknavigation';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor() { }

  @Input() navigation: Navigation;

}
