import { Story } from '@storybook/angular';

export default {
  title: 'Typography/Lists',
};

export const unorderedList: Story = () => ({
  template: `<ul><li>Item 1</li><li>Multiline also works if you want it to <br/>See told you so</li><li>Something slightly longer so in order to provide some variation</li></ul>`,
});

export const orderedList: Story = () => ({
  template: `<ol><li>Item 1</li><li>Item 2</li><li>Item 3</li></ol>`,
});
