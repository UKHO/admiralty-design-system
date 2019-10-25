import { storiesOf } from '@storybook/angular';
import {
  DialogueComponent,
  DialogueContentDirective,
  DialogueTitleDirective,
} from './dialogue.component';

storiesOf('Dialogue', module)
  .add('basic', () => ({
    moduleMetadata: {
      declarations: [
        DialogueComponent,
        DialogueContentDirective,
        DialogueTitleDirective,
      ],
    },
    template: `<ukho-dialogue>
      <ukho-dialogue-title>Basic Title</ukho-dialogue-title>
      <ukho-dialogue-content>Some content in the dialogue</ukho-dialogue-content>
    </ukho-dialogue>`,
  }))
  .add('error', () => ({
    moduleMetadata: {
      declarations: [
        DialogueComponent,
        DialogueContentDirective,
        DialogueTitleDirective,
      ],
    },
    template: `<ukho-dialogue type="error">
        <ukho-dialogue-title>Error</ukho-dialogue-title>
        <ukho-dialogue-content>You did something wrong</ukho-dialogue-content>
      </ukho-dialogue>`,
  }));
