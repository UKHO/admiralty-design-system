import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let spectator: SpectatorHost<ButtonComponent>;
  const createHost = createHostFactory({ component: ButtonComponent, disableAnimations: true });

  it('should create', () => {
    spectator = createHost('<ukho-button>Test</ukho-button>');
    expect(spectator.component).toBeTruthy();
  });

  it('should render the input label as button text', () => {
    spectator = createHost('<ukho-button>Test</ukho-button>');
    expect(spectator.element.textContent.trim()).toEqual('Test');
  });

  it('should not have an icon when no icon is passed', () => {
    spectator = createHost('<ukho-button>Test</ukho-button>');
    const icon = spectator.query('i');
    expect(icon).toBeNull();
  });

  it('should render an icon when an icon is passed', () => {
    spectator = createHost('<ukho-button icon="fab fa-angular">Test</ukho-button>');
    const icon = spectator.query('i');
    expect(icon).not.toBeNull();
    expect(icon).toHaveClass('fab fa-angular');
  });

  it('should have the secondary class when secondary is true', () => {
    spectator = createHost('<ukho-button secondary="true">Test</ukho-button>');
    const button = spectator.query('button');
    expect(button).toHaveClass('secondary');
  });

  it('should have the disabled attribute when is disabled input is true', () => {
    spectator = createHost('<ukho-button disabled="true">Test</ukho-button>');
    const button = spectator.query('button');
    expect(button).toHaveAttribute('disabled');
  });

  it('should trigger the passed function on click action', () => {
    const testFn = jest.fn();
    spectator = createHost('<ukho-button (click)="test()">Test</ukho-button>', {
      hostProps: {
        test: testFn
      }
    });
    spectator.click(spectator.element);

    expect(testFn).toHaveBeenCalled();
  });
});
