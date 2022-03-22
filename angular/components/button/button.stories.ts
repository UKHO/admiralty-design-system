import { ButtonComponent } from './button.component';
import { Story } from '@storybook/angular';
import { ButtonVariant } from './button.types';

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
  template: `<ukho-button [variant]="variant" [icon]="icon" [disabled]="disabled" [secondary]="secondary" (click)="click($event)">Hello Button</ukho-button>`,
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
  variant: ButtonVariant.Secondary,
};

export const secondaryDeprecated = template.bind({});
secondaryDeprecated.args = {
  secondary: true,
};

export const warning = template.bind({});
warning.args = {
  variant: ButtonVariant.Warning,
};

export const text = template.bind({});
text.args = {
  variant: ButtonVariant.Text,
};

export const textCustom: Story = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  template: `<ukho-button [variant]="variant" [icon]="icon" [disabled]="disabled" [secondary]="secondary" (click)="click($event)">
    <div style="font-size: 16px; color: black; text-decoration: underline;">Small type</div>
  </ukho-button>`,
});
textCustom.args = {
  variant: ButtonVariant.Text,
};

export const icon: Story = (args) => ({
  props: args,
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  template: `<ukho-button [variant]="variant" [icon]="icon" [disabled]="disabled" [secondary]="secondary" (click)="click($event)"></ukho-button>`,
});
icon.args = {
  variant: ButtonVariant.Icon,
  icon: 'fas fa-chevron-right',
};
