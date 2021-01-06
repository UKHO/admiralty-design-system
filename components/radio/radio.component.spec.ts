import { createHostFactory } from '@ngneat/spectator/jest';
import { RadioComponent } from './radio.component';

describe('RadioComponent', () => {
  const createHost = createHostFactory(RadioComponent);

  it('should create', () => {
    const spectator = createHost('<ukho-radio name="group1">Option 1</ukho-radio>');
    expect(spectator.component).toBeTruthy();
  });
});
