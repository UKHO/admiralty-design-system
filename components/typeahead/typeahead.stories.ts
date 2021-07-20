import { TypeaheadComponent } from './typeahead.component';
import { Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { TextinputModule } from '../textinput/textinput.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'Typeahead',
  component: TypeaheadComponent,
  argTypes: {
    filterFn: {
      table: {
        disable: true,
      },
    },
    FormControl: {
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
    formControl: new FormControl(),
    onFieldChange: action('changed'),
  },
  moduleMetadata: {
    declarations: [TypeaheadComponent],
    imports: [TextinputModule, ReactiveFormsModule, FormsModule],
  },
  template: `<ukho-typeahead [label]="label" [filterFn]="filterFn" [FormControl]="formControl" [selectionAction]="selectionAction" [showResultsOnInitialFocus]="showResultsOnInitialFocus" (valueChanged)="onFieldChange($event)"></ukho-typeahead>`,
});

export const WithoutAction: Story = Template.bind({});
WithoutAction.args = {
  label: 'Please Type',
  filterList: ['dog', 'cat', 'elephant', 'badger', 'donkey'],
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

export const WithAction: Story = Template.bind({});
WithAction.args = {
  label: 'Please Type',
  filterList: ['dog', 'cat', 'elephant', 'badger', 'donkey'],
  selectionAction: action('item selected!'),
};
