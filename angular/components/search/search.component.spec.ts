import { SearchComponent } from './search.component';
import { NgControl } from '@angular/forms';
import { createHostFactory } from '@ngneat/spectator/jest';

describe('SearchComponent', () => {
  const createHost = createHostFactory({ component: SearchComponent, shallow: true, providers: [NgControl] });
  it('should create', () => {
    const spectator = createHost('<ukho-search></ukho-search>');
    expect(spectator.component).toBeTruthy();
  });
});
