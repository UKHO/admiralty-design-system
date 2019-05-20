import { Component } from '@angular/core';
import { TABLE } from './mock-table-data';
import { mockNavigation } from './navigation/mocknavigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ukho-components';

  table = TABLE;

  navigation = mockNavigation;
  
  inputText = {
    value: ''
  }

  logClick() {
    console.log('Button clicked...');
  }
}
