import { Component } from '@angular/core';
import { TABLE } from './mock-table-data';
import { mockNavigation } from './navigation/mocknavigation';
import { mockSideNav } from './sidenav/mocknavigation';
import { Validators, FormControl } from '@angular/forms';
import { OptionValue } from './select/select.component';
import {MenuItem} from './navtypes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ukho-components';

  table = TABLE;

  navigation = mockNavigation;
  sideNav = mockSideNav;
  breadcrumbs: MenuItem[] = [
    { title: 'Design System', href: '/' },
    { title: 'Section 1', href: '/section1/' },
    { title: 'Subsection A', href: '/section1/subsectiona/' },
    { title: 'Page 1', href: '/section1/subsectiona/page1.html' },
  ];
  
  inputText = {
    value: ''
  };

  textareaText = {
    value: ''
  };
  
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
