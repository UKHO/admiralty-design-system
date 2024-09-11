import { Meta, StoryObj } from '@storybook/web-components';
import { ErrorSummaryComponent } from './error-summary';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const meta: Meta = {
  component: 'admiralty-error-summary',
  title: 'Error Summary',
  parameters: {
    actions: {},
  },
  args: {
    heading: 'Basic Title',
    content: 'Some content in the dialogue',
  },
};

export default meta;

type ErrorSummaryComponentArgs = Partial<ErrorSummaryComponent & { content: string }>;

type Story = StoryObj<ErrorSummaryComponentArgs>;

export const Basic: Story = {
  render: args => html` <admiralty-error-summary heading="${args.heading}">${unsafeHTML(args.content)}</admiralty-error-summary> `,
  args: {
    heading: "There's a problem",
    content: '<admiralty-link href="#fullname">Enter your full name</admiralty-link>',
  },
};

export const Detailed: Story = {
  render: args => html`
    <admiralty-error-summary heading="${args.heading}">${unsafeHTML(args.content)}</admiralty-error-summary>
    <h2 style="margin: 24px;">Complaint summary</h2>
    <div style="margin: 0 24px;display:flex;flex-direction: column;gap: 36px;">
      <admiralty-input identifier="name" label="What is your name?" hint="Enter your full name" type="text" invalid="true" invalid-message="Enter your full name"></admiralty-input>
      <admiralty-radio-group
        label="Where do you live?"
        hint="Select the country you currently live in"
        value="other"
        invalid="true"
        invalid-message="Select the country you live in"
      >
        <admiralty-radio identifier="country" value="england">England</admiralty-radio>
        <admiralty-radio identifier="country-2" value="scotland">Scotland</admiralty-radio>
        <admiralty-radio identifier="country-3" value="wales">Wales</admiralty-radio>
        <admiralty-radio identifier="country-4" value="northern ireland">Northern Ireland</admiralty-radio>
      </admiralty-radio-group>
      <admiralty-textarea
        identifier="description"
        label="What has happened?"
        hint="Enter a brief description of the issue"
        invalid="true"
        invalid-message="Enter a description of the issue"
      ></admiralty-textarea>
      <admiralty-file-input identifier="file-upload" invalid="true" invalid-message="Select the file that contains the issue"> </admiralty-file-input>
    </div>
  `,
  args: {
    heading: "There's a problem",
    content:
      '<admiralty-link href="#name">Enter your full name</admiralty-link>' +
      '<admiralty-link href="#country">Select the country you live in</admiralty-link>' +
      '<admiralty-link href="#description">Enter a description of the issue</admiralty-link>' +
      '<admiralty-link href="#file-upload">Select the file that contains the issue</admiralty-link>',
  },
};
