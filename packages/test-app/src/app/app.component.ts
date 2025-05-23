import { Component, ElementRef, ViewChild } from '@angular/core';
import { QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdmiraltySideNavItem } from '@ukho/admiralty-angular';
import { AdmiraltyAutocompleteCustomEvent, AutoCompleteChangeEventDetail } from '@ukho/admiralty-core';

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

  @ViewChild('errorSummary') errorSummary!: ElementRef;

  title = 'test-app';
  group = new FormGroup({
    text: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    checkbox: new FormControl(true),
    radio: new FormControl(''),
    select: new FormControl('test1'),
    textarea: new FormControl('This is a text area'),
    autocomplete: new FormControl('orange'),
    office: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    direction: new FormControl('', Validators.required),
  });

  progress = 91;

  text = this.group.get('text');
  number = this.group.get('number');
  office = this.group.get('office');
  country = this.group.get('country');
  direction = this.group.get('direction');

  active = 0;

  headerItems = [
    {
      title: 'Item 1',
      index: 0,
      items: [
        {
          title: 'Sub item 1',
          index: 0,
        },
        {
          title: 'Sub item 2',
          index: 1,
        },
      ],
    },
  ];

  autocompleteItems = Array.from({ length: 6000 }, (_, i) => i);
  autoCompleteFilter = (query: string) => {
    return this.autocompleteItems
      .filter((x) => x.toString().toLowerCase().indexOf(query.toLowerCase()) !== -1)
      .map((x) => ({ text: x.toString(), value: x.toString() }));
  };

  addHeaderItems() {
    this.headerItems.push({
      title: `Item ${this.headerItems.length + 1}`,
      index: this.headerItems.length,
      items: [],
    });
  }

  onHeaderItemClick(index: number) {
    this.active = index;
  }

  onFileInputChange(event: CustomEvent) {
    console.log('onFileInputChange', event.detail);
  }

  onIncreaseProgressClick() {
    this.progress++;
    console.log('onIncreaseProgressClick', this.progress);
  }

  onColourBlockClick() {
    console.log('onColourBlockClick');
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onSubmit() {
    console.log('onSubmit', this.group, this.group.valid);
    if (this.group.valid) {
      console.log('form submitted');
      alert('success');
    } else {
      console.log('form has errors');
      this.validateAllFormFields(this.group);
      this.errorSummary.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

  onCountryChanged(event: AdmiraltyAutocompleteCustomEvent<AutoCompleteChangeEventDetail>) {
    console.log('onCountryChanged', event.detail.value);
  }

  onDirectionChanged(event: AdmiraltyAutocompleteCustomEvent<AutoCompleteChangeEventDetail>) {
    console.log('onDirectionChanged', event.detail.value);
  }

  selectOffice() {
    this.group.controls.office.setValue('Nottingham');
  }

  selectCountry() {
    this.group.controls.country.setValue('gb');
  }

  selectDirection() {
    this.group.controls.direction.setValue('South');
  }
}
