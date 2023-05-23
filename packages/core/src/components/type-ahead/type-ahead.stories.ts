// import { Story } from '@storybook/html';
// import readme from './readme.md';
//
// export default {
//   title: 'Typeahead',
//   parameters: {
//     markdown: readme,
//     actions: {
//       handles: ['valueChanged', 'selectionChanged'],
//     },
//   },
// };
//
// const defaultArgs = {
//   label: 'Please Type',
//   value: '',
//   placeholder: '',
//   resultsOnInitFocus: false,
// };
//
// const Template: Story = args => {
//   return `
//   <admiralty-type-ahead
//     value = "${args.value}"
//     label="${args.label}"
//     results-on-init-focus="${args.resultsOnInitFocus}"
//     placeholder="${args.placeholder}">
//     <admiralty-type-ahead-item value="dog"></admiralty-type-ahead-item>
//     <admiralty-type-ahead-item value="cat"></admiralty-type-ahead-item>
//     <admiralty-type-ahead-item value="elephant"></admiralty-type-ahead-item>
//     <admiralty-type-ahead-item value="badger"></admiralty-type-ahead-item>
//     <admiralty-type-ahead-item value="donkey"></admiralty-type-ahead-item>
//     <admiralty-type-ahead-item value="horse"></admiralty-type-ahead-item>
//     <admiralty-type-ahead-item value="lion"></admiralty-type-ahead-item>
//     <admiralty-type-ahead-item value="ostrich"></admiralty-type-ahead-item>
//     <admiralty-type-ahead-item value="rabbit"></admiralty-type-ahead-item>
//     <admiralty-type-ahead-item value="tiger"></admiralty-type-ahead-item>
//     <admiralty-type-ahead-item value="guinea pig"></admiralty-type-ahead-item>
//   </admiralty-type-ahead>
//   `;
// };
//
// export const WithoutSelectionAction: Story = Template.bind({});
// WithoutSelectionAction.args = {
//   ...defaultArgs,
// };
//
// export const Prefilled: Story = Template.bind({});
// Prefilled.args = {
//   ...defaultArgs,
//   value: 'donke2y',
// };
//
// export const ShowResultsOnInitFocus: Story = Template.bind({});
// ShowResultsOnInitFocus.args = {
//   ...defaultArgs,
//   resultsOnInitFocus: true,
// };
//
// export const withPlaceholderText: Story = Template.bind({});
// withPlaceholderText.args = {
//   ...defaultArgs,
//   placeholder: 'Start typing the name of an animal',
// };
