import { createHostFactory } from '@ngneat/spectator/jest';
import { TabHeaderComponent } from './tab-header.component';

describe('TabHeaderComponent', () => {
  const createHost = createHostFactory({
    component: TabHeaderComponent,
  });

  it('should create', () => {
    const spectator = createHost('<ukho-tab-header></ukho-tab-header>');
    expect(spectator.component).toBeTruthy();
  });

  test('focus should call focus on the elementRef nativeElement', () => {
    const spectator = createHost('<ukho-tab-header></ukho-tab-header>');
    const component = spectator.component;
    const focusSpy = spyOn(spectator.element, 'focus');
    component.focus();
    expect(focusSpy).toHaveBeenCalledTimes(1);
  });
});
