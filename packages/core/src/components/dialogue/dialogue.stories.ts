import { Meta, StoryObj } from '@storybook/web-components';
import { DialogueComponent } from './dialogue';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const meta: Meta = {
  component: 'admiralty-dialogue',
  title: 'Dialogue',
  parameters: {
    actions: {},
  },
  args: {
    type: 'info',
    heading: 'Basic Title',
    content: 'Some content in the dialogue',
  },
};

export default meta;

type DialogueComponentArgs = Partial<DialogueComponent & { content: string }>;

type Story = StoryObj<DialogueComponentArgs>;

const template: Story = {
  render: args => html` <admiralty-dialogue type="${args.type}" heading="${args.heading}"> ${unsafeHTML(args.content)} </admiralty-dialogue>`,
};

export const Basic: Story = { ...template };

export const Error: Story = {
  ...template,
  args: {
    type: 'error',
    heading: 'Error',
    content: 'You did something wrong',
  },
};

export const Success: Story = {
  ...template,
  args: {
    type: 'success',
    heading: 'Your details have been saved',
    content: 'Thanks for updating your contact details. Our system has now been updated.',
  },
};

export const Warning: Story = {
  ...template,
  args: {
    type: 'warning',
    heading: 'Check your application before submitting',
    content:
      'Once you’ve submitted the details of your application you won’t be able to go back and change anything. Take a moment to double check everything is correct before submitting.',
  },
};

export const LongContent: Story = {
  ...template,
  args: {
    heading: 'Basic Title',
    content:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut vulputate justo. Nulla tincidunt gravida condimentum. Vivamus elementum malesuada sem. Nulla consequat semper fermentum. Etiam et tempus massa. Nunc condimentum rhoncus dui. Duis viverra erat eu velit fringilla, eu pretium orci tincidunt. Maecenas nec ipsum at arcu viverra eleifend.</p>' +
      '<p>Pellentesque volutpat, turpis a sagittis facilisis, nisl nisi consequat neque, in luctus https://www.example.com/?test=DD4453ADF31B80239DE00C39C90FFC23DD48994A26522F983F25CAEE41CB125426F7905EE1736F7259DD5A3940E0EE217CBD836F39439BF82E3D37A11E21DBBB tortor enim iaculis neque.Curabitur nec mattis ex. In tincidunt quis nunc eu congue. Phasellus odio dui, aliquam a aliquet vel, fermentum id dolor. Nullam neque elit, interdum et mauris et, tempus imperdiet arcu. Cras erat odio, volutpat vel bibendum quis, malesuada non quam.</p>' +
      '<p>Etiaminbibendumlacus.Inhachabitasseplateadictumst.Proinjustonunc,gravidanecmagnaid,faucibusplaceratdui.Phasellusluctusviverraimperdiet.Maecenassedloremligula.Maecenasnecvelitutlectusportaullamcorperveletante.Sedpretiummetusvitaesagittistincidunt.Integeraliquamconsecteturexettempus.Aliquamfaucibusullamcorperlibero.</p>',
  },
};

export const ErrorSummary: Story = {
  render: args => html`
    <admiralty-dialogue type="${args.type}" heading="${args.heading}" section-role="${args.sectionRole}"> ${unsafeHTML(args.content)} </admiralty-dialogue>
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
    type: 'error',
    heading: "There's a problem",
    content:
      '<div style="display:flex;flex-direction: column;gap: 8px;">' +
      '<admiralty-link href="#name">Enter your full name</admiralty-link>' +
      '<admiralty-link href="#country">Select the country you live in</admiralty-link>' +
      '<admiralty-link href="#description">Enter a description of the issue</admiralty-link>' +
      '<admiralty-link href="#file-upload">Select the file that contains the issue</admiralty-link>' +
      '</div>',
    sectionRole: 'alert',
  },
};
