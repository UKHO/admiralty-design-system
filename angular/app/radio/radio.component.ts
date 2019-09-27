import { Component, Input } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {
  @Input() isColumn: boolean;

  handleChange($event: MatRadioChange) {
    console.log($event);
  }
}
