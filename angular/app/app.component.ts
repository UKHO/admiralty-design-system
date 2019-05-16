import { Component } from '@angular/core';
import { TABLE } from './mock-table-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ukho-components';

  table = TABLE;

  logClick() {
    console.log('Button clicked...');
  }
}
