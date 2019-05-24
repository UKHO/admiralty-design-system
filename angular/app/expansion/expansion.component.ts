import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss']
})
export class ExpansionComponent {

  isExpanded: boolean = false;

  toggleExpanded() {
    console.log('toggled')
    this.isExpanded = !this.isExpanded;
  }
  
  constructor() { }

}
