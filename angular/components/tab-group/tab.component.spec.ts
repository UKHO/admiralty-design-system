import { createHostFactory } from '@ngneat/spectator/jest';

import { TabComponent } from './tab.component';

describe('TabComponent', () => {
  const createHost = createHostFactory({
    component: TabComponent,
  });

  it('should create', () => {
    const spectator = createHost('<ukho-tab></ukho-tab>');
    expect(spectator.component).toBeTruthy();
  });
});
