import { createHostFactory } from '@ngneat/spectator/jest';

import { HorizontalRuleComponent } from './horizontal-rule.component';

describe('HorizontalRuleComponent', () => {
  const createHost = createHostFactory(HorizontalRuleComponent);

  it('should create', () => {
    const spectator = createHost('<ukho-hr></ukho-hr>');
    expect(spectator.component).toBeTruthy();
  });
});
