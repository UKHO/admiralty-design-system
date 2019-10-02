import {Component, Input} from '@angular/core';
import {MenuItem} from '../navtypes';

@Component({
  selector: 'ukho-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input() navigation: MenuItem[];
}
