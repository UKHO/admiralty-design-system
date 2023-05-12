import { Component } from '@angular/core';
import { QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdmiraltySideNavItem } from '@ukho/admiralty-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChildren(AdmiraltySideNavItem) sideNavItems!: QueryList<AdmiraltySideNavItem>;

  title = 'test-app';
  group = new FormGroup({
    blah: new FormControl('', Validators.required),
  });

  blah = this.group.get('blah');

  onColourBlockClick() {
    console.log('onColourBlockClick');
  }

  onSubmit() {
    console.log(this.group);
  }

  onSideNavItemSelected(event: Event) {
    const onSideNavItemSelectedEvent = event as CustomEvent<string>;

    const sideNavItemId: string = onSideNavItemSelectedEvent.detail;

    this.sideNavItems.forEach((sideNavItem: AdmiraltySideNavItem) => {
      sideNavItem.navActive = sideNavItem.sideNavItemId === sideNavItemId;
    });
  }
}
