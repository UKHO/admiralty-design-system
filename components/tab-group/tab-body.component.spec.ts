import { createHostFactory } from '@ngneat/spectator/jest';

import { TabBodyComponent } from './tab-body.component';

describe('TabBodyComponent', () => {
  const createHost = createHostFactory({
    component: TabBodyComponent,
    detectChanges: false,
  });

  test('should create', () => {
    const fixture = createHost('<ukho-tab-body></ukho-tab-body>');
    expect(fixture.component).toBeTruthy();
  });
});
