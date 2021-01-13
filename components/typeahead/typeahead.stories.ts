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
    const filterResult = filterList
      .filter((animal) => {
        return animal.toLowerCase().indexOf(text.toLowerCase()) > -1;
      })
      .slice(0, 10);
    return filterResult;
  };
};

const Template: Story = ({ filterList, ...args }) => ({
  props: { ...args, filterFn: filter(filterList), formControl: new FormControl() },
  moduleMetadata: {
    declarations: [TypeaheadComponent],
    imports: [TextinputModule, ReactiveFormsModule, FormsModule],
  },
  template: `<ukho-typeahead [label]="label" [filterFn]="filterFn" [FormControl]="formControl" [selectionAction]="selectionAction"></ukho-typeahead>`,
});

export const WithoutAction: Story = Template.bind({});
WithoutAction.args = {
  label: 'Please Type',
  filterList: ['dog', 'cat', 'elephant', 'badger', 'donkey'],
};

export const WithAction: Story = Template.bind({});
WithAction.args = {
  label: 'Please Type',
  filterList: ['dog', 'cat', 'elephant', 'badger', 'donkey'],
  selectionAction: action('item selected!'),
};
