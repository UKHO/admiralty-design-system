import { createHostFactory } from '@ngneat/spectator/jest';

import { RadioGroupComponent } from './radio-group.component';

describe('RadioComponent', () => {
  const createHost = createHostFactory({ component: RadioGroupComponent, shallow: true });

  it('should create', () => {
    const spectator = createHost(
      '<ukho-radio-group> \
    <ukho-radio value="option1">Option 1</ukho-radio> \
    <ukho-radio value="option2">Option 2</ukho-radio> \
    </ukho-radio-group>'
    );
    expect(spectator.component).toBeTruthy();
  });
});
