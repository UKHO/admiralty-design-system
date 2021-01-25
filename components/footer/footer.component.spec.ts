import { createHostFactory } from '@ngneat/spectator/jest';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  const createHost = createHostFactory(FooterComponent);

  it('should create', () => {
    const spectator = createHost('<ukho-footer></ukho-footer>');
    expect(spectator.component).toBeTruthy();
  });
});
