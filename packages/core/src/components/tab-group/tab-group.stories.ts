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
  <admiralty-tab label="All Warnings">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in placerat turpis. Morbi rhoncus urna quis dui dictum
    laoreet. Nam pellentesque ullamcorper nibh vitae accumsan. Integer mattis suscipit tellus placerat blandit. Integer
    imperdiet tellus lacus, a accumsan tellus fringilla sit amet. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia curae; Morbi rhoncus pretium mauris, a blandit magna fermentum sed. Donec suscipit orci
    justo, ut varius arcu eleifend ac.
  </admiralty-tab>
  <admiralty-tab label="NAVAREA 1"><em>Scorchio!</em></admiralty-tab>
  <admiralty-tab label="UK Coastal">Wet and windy</admiralty-tab>
  <admiralty-tab label="UK Estuary"><em>test a</em></admiralty-tab>
  <admiralty-tab label="UK Swell"><b>test b</b></admiralty-tab>
  <admiralty-tab label="UK Other">test c</admiralty-tab>
</admiralty-tab-group>`;
};

export const Basic = Template.bind({});
Basic.args = { ...defaultArgs };

export const WithSelectedIndex: Story = args => `
    <admiralty-tab-group selected-index=${args.selectedIndex}>
      <admiralty-tab label="First header">test a</admiralty-tab>
      <admiralty-tab label="Second header"><b>test b</b></admiralty-tab>
    </admiralty-tab-group>
    `;

WithSelectedIndex.args = {
  selectedIndex: 1
};

export const WithComplexContent: Story = (args) => `
  <admiralty-tab-group>
    <admiralty-tab label="Heading A">
      <div style="margin: 5px;">
      <admiralty-card heading="Title">You can put any html content in the body of a card. Such as <a href='#'>links</a> or <b>bold text</b></admiralty-card>
      </div>
    </admiralty-tab>
    <admiralty-tab label="Heading B"><b>test b</b></admiralty-tab>
  </admiralty-tab-group>`;

  export const LongHeaders: Story = args => `
  <admiralty-tab-group>
    <admiralty-tab label="First very long header name">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in placerat turpis. Morbi rhoncus urna quis dui dictum
      laoreet. Nam pellentesque ullamcorper nibh vitae accumsan. Integer mattis suscipit tellus placerat blandit. Integer
      imperdiet tellus lacus, a accumsan tellus fringilla sit amet. Vestibulum ante ipsum primis in faucibus orci luctus
      et ultrices posuere cubilia curae; Morbi rhoncus pretium mauris, a blandit magna fermentum sed. Donec suscipit orci
      justo, ut varius arcu eleifend ac.
    </admiralty-tab>
    <admiralty-tab label="Second very long header name"><b>test b</b></admiralty-tab>
    <admiralty-tab label="Third very long header name"><em>test c</em></admiralty-tab>
    <admiralty-tab label="Shorter header name">Phew!!!</admiralty-tab>
    <admiralty-tab label="Last header">Phew!!!</admiralty-tab>
  </admiralty-tab-group>
  `;

