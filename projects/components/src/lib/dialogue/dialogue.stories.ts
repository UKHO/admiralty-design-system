import { DialogueComponent } from './dialogue.component';

export default {
  title: 'Dialogue',
  component: DialogueComponent,
};

export const basic = () => ({
  moduleMetadata: {
    declarations: [DialogueComponent],
  },
  template: `<ukho-dialogue>
      <h3>Basic Title</h3>
      <div>Some content in the dialogue</div>
    </ukho-dialogue>`,
});

basic.story = {
  name: 'basic',
};

export const error = () => ({
  moduleMetadata: {
    declarations: [DialogueComponent],
  },
  template: `<ukho-dialogue type="error">
        <h3>Error</h3>
        <div>You did something wrong</div>
      </ukho-dialogue>`,
});

error.story = {
  name: 'error',
};
