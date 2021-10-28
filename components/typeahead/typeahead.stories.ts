import { TypeaheadComponent } from './typeahead.component';
import { Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { TextinputModule } from '../textinput/textinput.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'Typeahead',
  component: TypeaheadComponent,
  argTypes: {
    filterFn: {
      table: {
        disable: true,
      },
    },
    formControl: {
      table: {
        disable: true,
      },
    },
    selectionAction: {
      table: {
        disable: true,
      },
    },
  },
};

const filter = (filterList: string[]) => {
  return (text: string) => {
    const filterResult = filterList.filter((animal) => {
      return text === null || text.length < 1 || animal.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
    return filterResult;
  };
};

const Template: Story = ({ filterList, ...args }) => ({
  props: {
    ...args,
    filterFn: filter(filterList),
    onFieldChange: action('changed'),
  },
  moduleMetadata: {
    declarations: [TypeaheadComponent],
    imports: [TextinputModule, ReactiveFormsModule, FormsModule],
  },
  template: `<ukho-typeahead [label]="label" [filterFn]="filterFn" [value]="value" [selectionAction]="selectionAction" [showResultsOnInitialFocus]="showResultsOnInitialFocus" (valueChanged)="onFieldChange($event)"></ukho-typeahead>`,
});

export const WithoutSelectionAction: Story = Template.bind({});
WithoutSelectionAction.args = {
  label: 'Please Type',
  filterList: ['dog', 'cat', 'elephant', 'badger', 'donkey'],
};

export const Prefilled: Story = Template.bind({});
Prefilled.args = {
  label: 'Please Type',
  filterList: ['dog', 'cat', 'elephant', 'badger', 'donkey'],
  value: 'donke2y',
};

export const ShowResultsOnInitialFocus: Story = Template.bind({});
ShowResultsOnInitialFocus.args = {
  label: 'Please Type',
  filterList: [
    'dog',
    'cat',
    'elephant',
    'badger',
    'donkey',
    'horse',
    'lion',
    'ostrich',
    'rabbit',
    'tiger',
    'guinea pig',
  ],
  showResultsOnInitialFocus: true,
};

export const WithSelectionAction: Story = Template.bind({});
WithSelectionAction.args = {
  label: 'Please Type',
  filterList: ['dog', 'cat', 'elephant', 'badger', 'donkey'],
  selectionAction: action('item selected!'),
};
