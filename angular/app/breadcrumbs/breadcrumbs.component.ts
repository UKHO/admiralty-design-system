import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../navtypes";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor() { }

  @Input() navigation: MenuItem[];

  ngOnInit() {
  }

}
