import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

storiesOf('Button', module)
  .add('withText', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent]
    },
    template: `<ukho-button>Hello Button</ukho-button>`,
  }))
  .add('withEmoji', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent]
    },
    template: `<ukho-button>😀 😎 👍 💯</ukho-button>`,
  }))
  .add('withIcon', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent]
    },
    template: `<ukho-button icon="fa-angular">Hello Button</ukho-button>`,
  }))
  .add('onClick', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent]
    },
    template: `<ukho-button (click)="click($event)">Click Me</ukho-button>`,
    props: {
      click: action('click')
    },
  }))
  .add('disabled', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent]
    },
    template: `<ukho-button [disabled]="true">Disabled Button</ukho-button>`,
  }))
  .add('isSecondary', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent]
    },
    template: `<ukho-button [secondary]="true">Secondary Button</ukho-button>`,
  }));
