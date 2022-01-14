import { createHostFactory } from '@ngneat/spectator/jest';

import { ExpansionComponent } from './expansion.component';

describe('ExpansionComponent', () => {
  const createHost = createHostFactory({ component: ExpansionComponent });

  it('should create', () => {
    const spectator = createHost(
      '<ukho-expansion heading="Expansion Heading">Some content for the expansion</ukho-expansion>'
    );
    expect(spectator.component).toBeTruthy();
  });
});
