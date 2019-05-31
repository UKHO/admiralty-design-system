import {Component, Input, OnInit} from '@angular/core';
import { generateUID } from '../utils.js'

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss']
})
export class ExpansionComponent {

  constructor() { }

  @Input() initialExpanded: boolean = false;
  @Input() heading: string;
  
  uid: string = generateUID();
  
}
