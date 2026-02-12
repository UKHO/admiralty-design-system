import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdmiraltySideNavItem } from '@ukho/admiralty-angular';
import { AdmiraltyAutocompleteCustomEvent, AutoCompleteChangeEventDetail } from '@ukho/admiralty-core';

export interface CommissioningOrganisation {
  id?: number;
  organisationName?: string;
}

interface ProgressTrackerStep {
  id: string;
  title: string;
  status: 'complete' | 'current' | 'upcoming' | 'error';
  summary?: string;
  errorMessage?: string;
  bulletSummaries?: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit {
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

  // Form-integrated progress tracker
  progressTrackerSteps: ProgressTrackerStep[] = [
    {
      id: 'location',
      title: 'Choose location',
      status: 'current'
    },
    {
      id: 'object',
      title: 'Choose object',
      status: 'upcoming'
    },
    {
      id: 'information-type',
      title: 'Choose information type',
      status: 'upcoming'
    },
    {
      id: 'date',
      title: 'Choose date',
      status: 'upcoming'
    },
    {
      id: 'download',
      title: 'Download data',
      status: 'upcoming',
    },
  ];

  // Form groups for each step
  locationForm = new FormGroup({
    latitude: new FormControl('', Validators.required),
    longitude: new FormControl('', Validators.required),
  });

  objectForm = new FormGroup({
    celestialObject: new FormControl('', Validators.required),
  });

  informationForm = new FormGroup({
    informationType: new FormControl('', Validators.required),
    depression: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  dateForm = new FormGroup({
    selectedDate: new FormControl('', Validators.required),
  });

  currentStepId = 'location';

  ngOnInit() {
    this.updateProgressTrackerSteps(this.currentStepId);
    this.updateProgressTrackerSummaries();

    this.locationForm.valueChanges.subscribe(() => this.updateProgressTrackerSummaries());
    this.objectForm.valueChanges.subscribe(() => this.updateProgressTrackerSummaries());
    this.informationForm.valueChanges.subscribe(() => this.updateProgressTrackerSummaries());
    this.dateForm.valueChanges.subscribe(() => this.updateProgressTrackerSummaries());
  }

  private getStepBullets(stepId: string): string[] | undefined {
    if (stepId === 'location') {
      const latitude = this.locationForm.controls.latitude.value || 'Not set';
      const longitude = this.locationForm.controls.longitude.value || 'Not set';
      if (latitude === 'Not set' || longitude === 'Not set') {
        return [];
      }
      return [
        `${latitude}`,
        `${longitude}`,
      ];
    }

    if (stepId === 'object') {
      const selected = this.objectForm.controls.celestialObject.value || 'Not selected';
      if (selected === 'Not selected') {
        return [];
      }
      return [
        `${selected}`,
      ];
    }

    if (stepId === 'information-type') {
      const informationType = this.informationForm.controls.informationType.value;
      const depression = this.informationForm.controls.depression.value;
      const isInformationTypeSet = informationType !== null && informationType !== undefined && informationType !== '';
      const isDepressionSet = depression !== null && depression !== undefined && depression !== '';

      if (!isInformationTypeSet || !isDepressionSet) {
        return [];
      }

      return [
        `${informationType}`,
        `${depression}`,
      ];
    }

    if (stepId === 'date') {
      const selectedDate = this.dateForm.controls.selectedDate.value;
      if (selectedDate === null || selectedDate === undefined || selectedDate === '') {
        return [];
      }

      return [
        `${selectedDate}`,
      ];
    }

    return undefined;
  }

  private updateProgressTrackerSummaries() {
    this.progressTrackerSteps = this.progressTrackerSteps.map(step => ({
      ...step,
      bulletSummaries: this.getStepBullets(step.id),
    }));
  }

  // Handle step navigation with form validation
  onProgressStepClicked(event: any) {
    const { stepId, stepIndex } = event.detail;
    console.log('Step clicked:', stepId, stepIndex);

    // Update current step
    this.currentStepId = stepId;
    this.updateProgressTrackerSteps(stepId);
  }

  // Validate current step before allowing navigation
  validateCurrentStep = (stepId: string, stepIndex: number): boolean => {
    const stepForms: { [key: string]: FormGroup } = {
      'location': this.locationForm,
      'object': this.objectForm,
      'information-type': this.informationForm,
      'date': this.dateForm,
    };

    const form = stepForms[stepId];
    if (form) {
      form.markAllAsTouched();
      const isValid = form.valid;

      if (!isValid) {
        // Update step to show error
        this.progressTrackerSteps = this.progressTrackerSteps.map(step =>
          step.id === stepId
            ? {
              ...step,
              status: 'error' as const,
              errorMessage: 'Please complete all required fields',
              bulletSummaries: this.getStepBullets(step.id),
            }
            : {
              ...step,
              bulletSummaries: this.getStepBullets(step.id),
            }
        );
      }

      return isValid;
    }

    return true;
  };

  // Update progress tracker steps based on current step
  updateProgressTrackerSteps(currentStepId: string) {
    const stepOrder = ['location', 'object', 'information-type', 'date', 'download'];
    const currentIndex = stepOrder.indexOf(currentStepId);

    this.progressTrackerSteps = this.progressTrackerSteps.map((step, index) => {
      if (index < currentIndex) {
        return {
          ...step,
          status: 'complete' as const,
          errorMessage: undefined,
          bulletSummaries: this.getStepBullets(step.id),
        };
      }
      if (step.id === currentStepId) {
        return {
          ...step,
          status: 'current' as const,
          errorMessage: undefined,
          bulletSummaries: this.getStepBullets(step.id),
        };
      }
      return {
        ...step,
        status: 'upcoming' as const,
        errorMessage: undefined,
        bulletSummaries: this.getStepBullets(step.id),
      };
    });
  }

  // Complete current step and move to next
  completeCurrentStep() {
    const stepOrder = ['location', 'object', 'information-type', 'date', 'download'];
    const currentIndex = stepOrder.indexOf(this.currentStepId);

    if (this.validateCurrentStep(this.currentStepId, currentIndex)) {
      const nextStepId = stepOrder[currentIndex + 1];
      if (nextStepId) {
        this.currentStepId = nextStepId;
        this.updateProgressTrackerSteps(nextStepId);
      }
    }
  }
}
