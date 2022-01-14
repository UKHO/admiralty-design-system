import { TextareaComponent } from './textarea.component';
import { createHostFactory } from '@ngneat/spectator/jest';

describe('TextareaComponent', () => {
  const createHost = createHostFactory({ component: TextareaComponent, shallow: true });
  it('should create', () => {
    const spectator = createHost('<ukho-textarea label="Description"></ukho-textarea>');
    expect(spectator.component).toBeTruthy();
  });

  it('should reflect textareaText', () => {
    const testText = 'Test Text';
    const spectator = createHost('<ukho-textarea [text]="text"></ukho-textarea>', {
      hostProps: {
        text: testText
      }
    });
    const textarea = spectator.query('textarea');
    expect(textarea.textContent).toBe(testText);
  });
});
