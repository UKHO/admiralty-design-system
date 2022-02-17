import { NgControl } from '@angular/forms';
import { createHostFactory } from '@ngneat/spectator/jest';

import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  const createHost = createHostFactory({ component: SelectComponent, providers: [NgControl] });

  it('should create', () => {
    const spectator = createHost(
      '<ukho-select>\
        <option>White</option>\
        <option>Blue</option>\
        <option>Black</option>\
        <option>Red</option>\
        <option>Green</option>\
        </ukho-select>',
    );
    expect(spectator.component).toBeTruthy();
  });
});
