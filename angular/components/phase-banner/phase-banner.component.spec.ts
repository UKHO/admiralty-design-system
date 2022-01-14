import { createHostFactory } from '@ngneat/spectator/jest';

import { PhaseBannerComponent } from './phase-banner.component';

describe('PhaseBannerComponent', () => {
  const createHost = createHostFactory(PhaseBannerComponent);

  it('should create', () => {
    const spectator = createHost('<ukho-phase-banner [phase]="phase" [link]="link"></ukho-phase-banner>', {
      hostProps: {
        phase: 'test',
        link: 'test'
      }
    });
    expect(spectator.component).toBeTruthy();
  });
});
