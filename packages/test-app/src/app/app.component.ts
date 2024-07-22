import { Component } from '@angular/core';
import { QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdmiraltySideNavItem } from '@ukho/admiralty-angular';
import { AutoCompleteChangeEventDetail } from '@ukho/admiralty-core/src/components/autocomplete/autocomplete.interface';
import { AdmiraltyAutocompleteCustomEvent } from '@ukho/admiralty-core';

export interface CommissioningOrganisation {
  id?: number;
  organisationName?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChildren(AdmiraltySideNavItem) sideNavItems!: QueryList<AdmiraltySideNavItem>;

  title = 'test-app';
  group = new FormGroup({
    text: new FormControl('', Validators.required),
    number: new FormControl(''),
    checkbox: new FormControl(true),
    radio: new FormControl(''),
    select: new FormControl('test1'),
    textarea: new FormControl('This is a text area'),
    autocomplete: new FormControl('orange'),
    office: new FormControl(),
  });

  progress = 91;

  blah = this.group.get('text');

  onIncreaseProgressClick() {
    this.progress++;
    console.log('onIncreaseProgressClick', this.progress);
  }

  onColourBlockClick() {
    console.log('onColourBlockClick');
  }

  onSubmit() {
    console.log('onSubmit', this.group);
  }

  onSideNavItemSelected(event: Event) {
    const onSideNavItemSelectedEvent = event as CustomEvent<string>;

    const sideNavItemId: string = onSideNavItemSelectedEvent.detail;

    this.sideNavItems.forEach((sideNavItem: AdmiraltySideNavItem) => {
      sideNavItem.navActive = sideNavItem.sideNavItemId === sideNavItemId;
    });
  }

  typeahead() {
    console.log('gregtest');
    this.commissioningOrganisations = [{ id: 6, organisationName: 'third organisation name' }];
  }

  commissioningOrganisations: CommissioningOrganisation[] = [
    { id: 9, organisationName: 'first organisation name' },
    { id: 10, organisationName: 'second organisation name' },
  ];

  isModalDialogShown = false;

  showModalDialog() {
    this.isModalDialogShown = true;
  }

  hideModalDialog() {
    this.isModalDialogShown = false;
  }

  autocomplete(event: AdmiraltyAutocompleteCustomEvent<AutoCompleteChangeEventDetail>) {
    console.log(event.detail.value);
  }

  onOfficeChanged(event: AdmiraltyAutocompleteCustomEvent<AutoCompleteChangeEventDetail>) {
    console.log('onOfficeChanged', event.detail.value);
  }

  selectOffice() {
    this.group.controls.office.setValue('nottingham');
  }
}

