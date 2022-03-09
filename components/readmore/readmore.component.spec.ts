import { createHostFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { ButtonComponent } from '../button/button.module';

import { ReadMoreComponent } from './readmore.component';

describe('ReadMoreComponent', () => {
  const createHost = createHostFactory({
    component: ReadMoreComponent,
    declarations: [ReadMoreComponent, MockComponent(ButtonComponent)],
  });

  it('should create', () => {
    const spectator = createHost('<ukho-readmore></ukho-readmore>');
    expect(spectator.component).toBeTruthy();
  });
});
