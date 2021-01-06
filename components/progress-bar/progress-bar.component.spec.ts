import { createHostFactory } from '@ngneat/spectator/jest';

import { ProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', () => {
  const createHost = createHostFactory(ProgressBarComponent);

  it('should create', () => {
    const spectator = createHost('<ukho-progress-bar></ukho-progress-bar>');
    expect(spectator.component).toBeTruthy();
  });
});
