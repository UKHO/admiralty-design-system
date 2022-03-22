import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { InputHeaderComponent } from './input-header.component';

describe('InputHeaderComponent', () => {
  let spectator: Spectator<InputHeaderComponent>;
  const createComponent = createComponentFactory(InputHeaderComponent);

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          label: 'Test label',
        },
      })),
  );

  it('should have one label displayed on initial load', () => {
    expect(spectator.query('label'));
  });

  test('label should be disabled when true', () => {
    spectator.component.disabled = true;
    const formFieldLabel: HTMLLabelElement = spectator.query('label disabled');
    expect(formFieldLabel);
  });

  test('label should display hint when one is provided', () => {
    spectator.component.hint = 'This is the hint for the label';
    const formFieldLabel: HTMLLabelElement = spectator.query('.form-field-hint');
    expect(formFieldLabel);
  });

  test('label and hint should be disabled when true', () => {
    spectator.component.hint = 'This is the hint for the label';
    spectator.component.disabled = true;

    const formFieldLabel: HTMLLabelElement = spectator.query('.form-field-label .disabled');
    expect(formFieldLabel);

    const formFieldHint: HTMLLabelElement = spectator.query('.form-field-hint .disabled');
    expect(formFieldHint);
  });
});
