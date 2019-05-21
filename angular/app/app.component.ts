import { Component } from '@angular/core';
import { TABLE } from './mock-table-data';
import { mockNavigation } from './navigation/mocknavigation';
import { Validators, FormControl } from '@angular/forms';

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

  inputFormControl = new FormControl('', [Validators.required, Validators.email]);

  logClick() {
    console.log('Button clicked...');
  }
}
