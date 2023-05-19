import { Story } from '@storybook/html';
import readme from './readme.md';

export default {
  title: 'Tab Group',
  parameters: {
    markdown: readme,
    actions: {
      handles: ['admiralTabSelected'],
    },
  },
};

const defaultArgs = {
};

const Template: Story = args => {
  return `<admiralty-tab-group>
  <admiralty-tab label="All Warnings">Test warnings</admiralty-tab>
  <admiralty-tab label="NAVAREA 1"><em>Scorchio!</em></admiralty-tab>
  <admiralty-tab label="UK Coastal">Wet and windy</admiralty-tab>
  <admiralty-tab label="UK Estuary"><em>test a</em></admiralty-tab>
  <admiralty-tab label="UK Swell"><b>test b</b></admiralty-tab>
  <admiralty-tab label="UK Other"><em>test c</em></admiralty-tab>
</admiralty-tab-group>`;
};

export const Basic = Template.bind({});
Basic.args = { ...defaultArgs };

export const WithSelectedIndex: Story = args => `
    <admiralty-tab-group selected-index=${args.selectedIndex}>
      <admiralty-tab label="'a'">test a</admiralty-tab>
      <admiralty-tab label="'b'"><b>test b</b></admiralty-tab>
    </admiralty-tab-group>
    `;

WithSelectedIndex.args = {
  selectedIndex: 1
};

export const WithComplexContent: Story = (args) => `
  <admiralty-tab-group>
    <admiralty-tab label="'a'">
      <admiralty-card heading="Title">You can put any html content in the body of a card. Such as <a href='#'>links</a> or <b>bold text</b></admiralty-card>
    </admiralty-tab>
    <admiralty-tab label="'b'"><b>test b</b></admiralty-tab>
  </admiralty-tab-group>`;
