import { NgControl } from '@angular/forms';
import { createHostFactory } from '@ngneat/spectator/jest';
import { SelectComponent } from './select.component';
import { InputHeaderModule } from '../form-field/input-header/input-header.module';

describe('SelectComponent', () => {
  const createHost = createHostFactory({
    component: SelectComponent,
    imports: [InputHeaderModule],
    providers: [NgControl],
  });

  it('should create', () => {
    const spectator = createHost(
      '<ukho-select>\
        <option>White</option>\
        <option>Blue</option>\
        <option>Black</option>\
        <option>Red</option>\
        <option>Green</option>\
        </ukho-select>',
    );
    expect(spectator.component).toBeTruthy();
  });
});
