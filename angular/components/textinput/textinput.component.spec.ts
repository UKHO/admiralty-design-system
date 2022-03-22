import { TextinputComponent } from './textinput.component';
import { NgControl } from '@angular/forms';
import { createHostFactory } from '@ngneat/spectator/jest';
import { InputHeaderModule } from '../form-field/input-header/input-header.module';

describe('TextinputComponent', () => {
  const createHost = createHostFactory({
    component: TextinputComponent,
    imports: [InputHeaderModule],
    providers: [NgControl],
  });

  it('should create', () => {
    const spectator = createHost('<ukho-textinput label="Name"></ukho-textinput>');
    expect(spectator.component).toBeTruthy();
  });
});
