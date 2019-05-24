import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss']
})
export class ExpansionComponent {

  constructor() { }

  isExpanded: boolean = false;

  expandText: string = "Read more...";
  
  toggleExpanded() {
    this.isExpanded = !this.isExpanded;
    this.expandText = this.isExpanded ? "Read less..." : "Read more...";
  }
  
}
