import { PaginatorWrapperWithLabelComponent, PaginatorWrapperWithoutLabelComponent } from './paginator.stories.data';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/angular';

export default {
  title: 'Paginator',
  argTypes: {},
};

const LabelTemplate: Story<PaginatorWrapperWithLabelComponent> = (args) => ({
  moduleMetadata: {
    declarations: [PaginatorWrapperWithLabelComponent],
  },
  props: { ...args, pageChange: action('Page Change') },
  template: `<div style="width:350px;">
  <ukho-paginator-wrapper-with-label [pages]="pages" [currentPage]="currentPage" [label]="label" (pageChange)="pageChange($event)" style="float:right;"></ukho-paginator-wrapper-with-label>
  </div>`,
});

export const Basic: Story = LabelTemplate.bind({});
Basic.args = {
  pages: 8,
  currentPage: 1,
  label: 'Showing 1-6 of 45',
};
Basic.parameters = {
  chromatic: { viewports: [400] },
};

// Non-label stories:
const Template: Story<PaginatorWrapperWithoutLabelComponent> = (args) => ({
  moduleMetadata: {
    declarations: [PaginatorWrapperWithoutLabelComponent],
  },
  props: { ...args, pageChange: action('Page Change') },
  template: `<ukho-paginator-wrapper-without-label [pages]="pages" [currentPage]="currentPage" (pageChange)="pageChange($event)"></ukho-paginator-wrapper-without-label>`,
});

export const WithoutLabel: Story = Template.bind({});
WithoutLabel.args = {
  pages: 10,
  currentPage: 5,
};
WithoutLabel.parameters = {
  chromatic: { viewports: [320] },
};

export const FirstPage: Story = Template.bind({});
FirstPage.args = {
  pages: 10,
  currentPage: 1,
};
FirstPage.parameters = {
  chromatic: { viewports: [320] },
};

export const LastPage: Story = Template.bind({});
LastPage.args = {
  pages: 10,
  currentPage: 10,
};
LastPage.parameters = {
  chromatic: { viewports: [320] },
};
