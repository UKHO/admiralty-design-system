import { FilterComponent } from './filter.component';
import { FilterGroup } from './filter.types';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/angular';
import { ButtonModule } from '../button/button.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { ExpansionModule } from '../expansion/expansion.module';

export default {
  title: 'Filter',
  component: FilterComponent,
  argTypes: {
    groups: {
      table: {
        disable: true,
      },
    },
  },
};

const mockGroups: FilterGroup[] = [
  {
    title: 'Product',
    items: [
      {
        title: 'AVCS',
      },
      {
        title: 'ADP',
      },
      {
        title: 'eNP',
      },
    ],
  },
  {
    title: 'Media type',
    items: [
      {
        title: 'DVD',
      },
      {
        title: 'CD',
      },
      {
        title: 'BASE',
      },
      {
        title: 'ZIP',
      },
    ],
  },
  {
    title: 'Week number',
    items: [
      {
        title: 'Week 39',
      },
      {
        title: 'Week 40',
      },
    ],
  },
  {
    title: 'Year',
    items: [
      {
        title: '2022',
      },
      {
        title: '2021',
      },
      {
        title: '2020',
      },
    ],
  },
];

const Template: Story<FilterComponent> = (args: FilterComponent) => ({
  props: { ...args, filtersChange: action('Filters changed') },
  moduleMetadata: {
    declarations: [FilterComponent],
    imports: [ButtonModule, CheckboxModule, ExpansionModule],
  },
  template: `<ukho-filter [groups]="groups" [heading]="heading" (filtersChange)="filtersChange($event)"></ukho-filter>`,
});

export const Empty: Story = Template.bind({});

export const Default: Story = Template.bind({});
Default.args = {
  groups: mockGroups,
};

export const Selected: Story = Template.bind({});
Selected.args = {
  groups: [
    {
      ...mockGroups[0],
      expanded: true,
      items: [
        { ...mockGroups[0].items[0], selected: true },
        { ...mockGroups[0].items[1], selected: true },
        ...mockGroups[0].items.slice(2),
      ],
    },
    {
      ...mockGroups[1],
      expanded: true,
      items: [
        ...mockGroups[1].items.slice(0, 1),
        { ...mockGroups[1].items[1], selected: true },
        { ...mockGroups[1].items[2], selected: true },
        ...mockGroups[1].items.slice(3),
      ],
    },
    ...mockGroups.slice(2),
  ],
};

export const Constrained: Story<FilterComponent> = () => ({
  props: {
    groups: [...mockGroups.slice(0, 3), { ...mockGroups[3], title: 'Year of publication' }],
    filtersChange: action('Filters changed'),
  },
  moduleMetadata: {
    declarations: [FilterComponent],
    imports: [ButtonModule, CheckboxModule, ExpansionModule],
  },
  template: `<div style="width:160px;"><ukho-filter [groups]="groups" (filtersChange)="filtersChange($event)"></ukho-filter></div>`,
});

export const AlternateHeading: Story = Template.bind({});
AlternateHeading.args = {
  groups: mockGroups,
  heading: 'Refine',
};