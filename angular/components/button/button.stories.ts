import { ButtonComponent } from './button.component';
import { Story } from '@storybook/angular';

export default {
  title: 'Form Elements/Button',
  component: ButtonComponent,
  parameters: {
    componentSubtitle: 'Buttons are intended for form actions.',
  },
  argTypes: { click: { action: 'button clicked' } },
};

const template: Story = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  template: `<ukho-button [icon]="icon" [disabled]="disabled" [secondary]="secondary" (click)="click($event)">Hello Button</ukho-button>`,
});

export const standard = template.bind({});

export const withIcon = template.bind({});
withIcon.args = {
  icon: 'fab fa-angular',
};

export const disabled = template.bind({});
disabled.args = {
  disabled: true,
};

export const secondary = template.bind({});
secondary.args = {
  secondary: true,
};
