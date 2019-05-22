import { Component } from '@angular/core';
import { TABLE } from './mock-table-data';
import { mockNavigation } from './navigation/mocknavigation';
import { Validators, FormControl } from '@angular/forms';
import { OptionValue } from './select/select.component';

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

  textareaText = {
    value: ''
  }
  
  selectOptions: OptionValue[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  inputFormControl = new FormControl('', [Validators.required, Validators.email]);

  logClick() {
    console.log('Button clicked...');
  }

  logSelectChanged(value) {
    console.log('select has changed to ', value)
  }
}
