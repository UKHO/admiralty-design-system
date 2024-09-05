import { Meta, StoryObj } from '@storybook/web-components';
import { RadioGroupComponent } from './radio-group';
import { html } from 'lit';

const meta: Meta = {
  component: 'admiralty-radio-group',
  title: 'Forms/Radio Group',
  parameters: {
    actions: {
      handles: ['radioChange'],
    },
  },
};

export default meta;

type RadioGroupComponentArgs = Partial<RadioGroupComponent & { content: string; addListener: boolean }>;

type Story = StoryObj<RadioGroupComponentArgs>;

export const Basic: Story = {
  render: args =>
    html` <admiralty-radio-group>
      <admiralty-radio name="basic" value="option1">Option 1</admiralty-radio>
      <admiralty-radio name="basic" value="option2">Option 2</admiralty-radio>
    </admiralty-radio-group>`,
  args: { displayVertical: true },
};

export const HintText: Story = {
  render: args =>
    html` <admiralty-radio-group label="Where do you live?" hint="Select the country you currently live in" value=${args.value}>
      <admiralty-radio name="hint" value="england">England</admiralty-radio>
      <admiralty-radio name="hint" value="scotland">Scotland</admiralty-radio>
      <admiralty-radio name="hint" value="wales">Wales</admiralty-radio>
      <admiralty-radio name="hint" value="northern ireland">Northern Ireland</admiralty-radio>
    </admiralty-radio-group>`,
  args: { value: 'england' },
};

export const Disabled: Story = {
  render: args =>
    html` <admiralty-radio-group label="Where do you live?" hint="Select the country you currently live in" value=${args.value} disabled>
      <admiralty-radio name="hint" value="england">England</admiralty-radio>
      <admiralty-radio name="hint" value="scotland">Scotland</admiralty-radio>
      <admiralty-radio name="hint" value="wales">Wales</admiralty-radio>
      <admiralty-radio name="hint" value="northern ireland">Northern Ireland</admiralty-radio>
    </admiralty-radio-group>`,
  args: { value: 'england' },
};

export const Horizontal: Story = {
  render: args =>
    html` <admiralty-radio-group label="Would you like to be contacted by phone?" value=${args.value} display-vertical=${args.displayVertical}>
      <admiralty-radio name="horizontal" value="true">Yes</admiralty-radio>
      <admiralty-radio name="horizontal" value="false">No</admiralty-radio>
    </admiralty-radio-group>`,
  args: { value: false, displayVertical: false },
};

export const Invalid: Story = {
  render: args =>
    html` <admiralty-radio-group display-vertical="true" invalid="${args.invalid}" invalid-message="${args.invalidMessage}">
      <admiralty-radio name="invalid" value="option1">Option 1</admiralty-radio>
      <admiralty-radio name="invalid" value="option2">Option 2</admiralty-radio>
    </admiralty-radio-group>`,
  args: { invalid: true, invalidMessage: 'This field is required' },
};

export const Conditional: Story = {
  render: args =>
    html` <admiralty-radio-group label="Type of observation" value=${args.value}>
      <admiralty-radio name="conditional" value="visual">Visual</admiralty-radio>
      <admiralty-radio name="conditional" value="auditory">Auditory</admiralty-radio>
      <admiralty-radio name="conditional" value="other"
        >Other
        <div slot="conditional"><admiralty-textarea label="Provide more details" hint="Describe in detail how the observation was made" /></div
      ></admiralty-radio>
    </admiralty-radio-group>`,
  args: { value: 'other' },
};

const style = 'max-width: 250px;';
export const ConditionalContact: Story = {
  render: args =>
    html` <admiralty-radio-group label="How would you like to be contacted?" value=${args.value}>
      <admiralty-radio name="conditional" value="post">Post</admiralty-radio>
      <admiralty-radio name="conditional" value="text"
        >Text
        <div slot="conditional" style=${style}><admiralty-input label="Mobile phone number" type="text" /></div
      ></admiralty-radio>
      <admiralty-radio name="conditional" value="email"
        >Email
        <div slot="conditional" style=${style}><admiralty-input label="Email address" type="text" /></div
      ></admiralty-radio>
    </admiralty-radio-group>`,
  args: { value: 'post' },
};
