import {Component, Input } from '@angular/core';
import { generateUID } from '../utils.js'

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.scss']
})
export class ReadMoreComponent {

  constructor() { }

  @Input() initialExpanded: boolean = false;
  @Input() heading: string;
  
  uid: string = generateUID();
  
}
