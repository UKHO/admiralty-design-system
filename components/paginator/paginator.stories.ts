import { PaginatorComponent } from './paginator.component';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/angular';

export default {
  title: 'Paginator',
  component: PaginatorComponent,
  argTypes: {},
};

// This extended class of PaginatorComponent will set the
// label of the Paginator when setPage is called.
// However, this is only used due to a limitation with Storybook whereby props
// cannot be changed from inside the emitted event handler.
// The pageChange event should be used instead.
class PaginatorWrapperComponent extends PaginatorComponent {
  setPage(page: number) {
    const perPage = 6;
    const first = page == 1 ? 1 : perPage * (page - 1);
    const last = page == 8 ? 45 : perPage * page;
    const total = 45;
    const label = `Showing ${first}-${last} of ${total}`;
    console.log('setLabel super');
    super.setLabel(label);

    console.log('setPage super');
    super.setPage(page);
  }
}

const LabelTemplate: Story = (args) => ({
  moduleMetadata: {
    declarations: [PaginatorWrapperComponent],
  },
  props: args,
  template: `<div style="width:350px;">
  <ukho-paginator [pages]="pages" [currentPage]="currentPage" [label]="label" (pageChange)="pageChange($event)" style="float:right;"></ukho-paginator>
  </div>`,
});

export const Basic: Story = LabelTemplate.bind({});
Basic.args = {
  pages: 8,
  currentPage: 1,
  label: 'Showing 1-6 of 45',
  pageChange: action('Page Change'),
};
Basic.parameters = {
  chromatic: { viewports: [400] },
};

// Non-label stories:
const Template: Story = (args) => ({
  moduleMetadata: {
    declarations: [PaginatorComponent],
  },
  props: args,
  template: `<ukho-paginator [pages]="pages" [currentPage]="currentPage" (pageChange)="pageChange($event)"></ukho-paginator>`,
});

export const WithoutLabel: Story = Template.bind({});
WithoutLabel.args = {
  pages: 10,
  currentPage: 5,
  pageChange: action('Page Change'),
};
WithoutLabel.parameters = {
  chromatic: { viewports: [320] },
};

export const FirstPage: Story = Template.bind({});
FirstPage.args = {
  pages: 10,
  currentPage: 1,
  pageChange: action('Page Change'),
};
FirstPage.parameters = {
  chromatic: { viewports: [320] },
};

export const LastPage: Story = Template.bind({});
LastPage.args = {
  pages: 10,
  currentPage: 10,
  pageChange: action('Page Change'),
};
LastPage.parameters = {
  chromatic: { viewports: [320] },
};
