import { createHostFactory } from '@ngneat/spectator/jest';

import { ReadMoreComponent } from './readmore.component';

describe('ReadMoreComponent', () => {
  const createHost = createHostFactory(ReadMoreComponent);

  it('should create', () => {
    const spectator = createHost('<ukho-readmore></ukho-readmore>');
    expect(spectator.component).toBeTruthy();
  });
});
