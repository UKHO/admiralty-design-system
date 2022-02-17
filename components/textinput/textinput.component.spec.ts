import { TextinputComponent } from './textinput.component';
import { NgControl } from '@angular/forms';
import { createHostFactory } from '@ngneat/spectator/jest';

describe('TextinputComponent', () => {
  const createHost = createHostFactory({ component: TextinputComponent, providers: [NgControl] });

  it('should create', () => {
    const spectator = createHost('<ukho-textinput label="Name"></ukho-textinput>');
    expect(spectator.component).toBeTruthy();
  });
});
