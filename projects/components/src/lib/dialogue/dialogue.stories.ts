import { storiesOf } from '@storybook/angular';
import { DialogueComponent } from './dialogue.component';

storiesOf('Dialogue', module)
  .add('basic', () => ({
    moduleMetadata: {
      declarations: [DialogueComponent],
    },
    template: `<ukho-dialogue>
      <h3>Basic Title</h3>
      <div>Some content in the dialogue</div>
    </ukho-dialogue>`,
  }))
  .add('error', () => ({
    moduleMetadata: {
      declarations: [DialogueComponent],
    },
    template: `<ukho-dialogue type="error">
        <h3>Error</h3>
        <div>You did something wrong</div>
      </ukho-dialogue>`,
  }));
