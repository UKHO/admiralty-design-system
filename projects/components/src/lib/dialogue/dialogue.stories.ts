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
  name: 'default (information)',
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

export const success = () => ({
  moduleMetadata: {
    declarations: [DialogueComponent],
  },
  template: `<ukho-dialogue type="success">
        <h3>Your details have been saved</h3>
        <div>Thanks for updating your contact details. Our system has now been updated.</div>
      </ukho-dialogue>`,
});

success.story = {
  name: 'success',
};


export const warning = () => ({
  moduleMetadata: {
    declarations: [DialogueComponent],
  },
  template: `<ukho-dialogue type="warning">
        <h3>Check your application before submitting</h3>
        <div>Once you’ve submitted the details of your application you won’t be able to go back and change anything. Take a moment to double check everything is correct before submitting.</div>
      </ukho-dialogue>`,
});

warning.story = {
  name: 'warning',
};
