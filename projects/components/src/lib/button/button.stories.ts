import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

export default {
  title: 'Form Elements|Button',
  component: ButtonComponent,
  parameters: {
    componentSubtitle: 'Buttons are intended for form actions.',
  },
};

export const withText = () => ({
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  template: `<button ukho-button>Hello Button</button>`,
});

withText.story = {
  name: 'withText',
};

export const withEmoji = () => ({
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  template: `<button ukho-button>😀 😎 👍 💯</button>`,
});

withEmoji.story = {
  name: 'withEmoji',
};

export const withIcon = () => ({
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  template: `<button ukho-button icon="fa-angular">Hello Button</button>`,
});

withIcon.story = {
  name: 'withIcon',
};

export const onClick = () => ({
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  template: `<button ukho-button (click)="click($event)">Click Me</button>`,
  props: {
    click: action('click'),
  },
});

onClick.story = {
  name: 'onClick',
};

export const disabled = () => ({
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  template: `<button ukho-button [disabled]="true">Disabled Button</button>`,
});

disabled.story = {
  name: 'disabled',
};

export const isSecondary = () => ({
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  template: `<button ukho-button [secondary]="true">Secondary Button</button>`,
});

isSecondary.story = {
  name: 'isSecondary',
};
