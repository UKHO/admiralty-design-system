import { Component, Input } from '@angular/core';
import { BreadcrumbItem } from './breadcrumbs.types';

@Component({
  selector: 'ukho-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  /**
   * This takes an array of items to display in the breadcrumb.
   * MenuItem: {
   *   title: string;
   *   href?: string;
   *   active?: boolean;
   * }
   */
  @Input() items: BreadcrumbItem[];
}
