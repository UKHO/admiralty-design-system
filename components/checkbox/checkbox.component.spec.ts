import { CheckboxComponent } from './checkbox.component';
import { createHostFactory } from '@ngneat/spectator/jest';
import { NgControl } from '@angular/forms';

describe('CheckboxComponent', () => {
  const createHost = createHostFactory({ component: CheckboxComponent, providers: [NgControl] });

  it('should create', () => {
    const spectator = createHost('<ukho-checkbox>Hello</ukho-checkbox>');
    expect(spectator.component).toBeTruthy();
  });
});
