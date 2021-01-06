import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

export default {
  title: 'Form Elements/Button',
  component: ButtonComponent,
  parameters: {
    componentSubtitle: 'Buttons are intended for form actions.'
  }
};

export const withText = () => ({
  moduleMetadata: {
    declarations: [ButtonComponent]
  },
  template: `<ukho-button>Hello Button</ukho-button>`
});

withText.story = {
  name: 'withText'
};

export const withIcon = () => ({
  moduleMetadata: {
    declarations: [ButtonComponent]
  },
  template: `<ukho-button icon="fab fa-angular">Hello Button</ukho-button>`
});

withIcon.story = {
  name: 'withIcon'
};

export const onClick = () => ({
  moduleMetadata: {
    declarations: [ButtonComponent]
  },
  template: `<ukho-button (click)="click($event)">Click Me</ukho-button>`,
  props: {
    click: action('click')
  }
});

onClick.story = {
  name: 'onClick'
};

export const disabled = () => ({
  moduleMetadata: {
    declarations: [ButtonComponent]
  },
  template: `<ukho-button [disabled]="true">Disabled Button</ukho-button>`
});

disabled.story = {
  name: 'disabled'
};

export const isSecondary = () => ({
  moduleMetadata: {
    declarations: [ButtonComponent]
  },
  template: `<ukho-button [secondary]="true">Secondary Button</ukho-button>`
});

isSecondary.story = {
  name: 'isSecondary'
};
