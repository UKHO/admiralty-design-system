// import { Story, StoryFn } from '@storybook/html';
// import readme from './readme.md';
// import { FilterComponent } from './filter';
//
// export default {
//   title: 'Filter',
//   parameters: {
//     markdown: readme,
//     actions: {
//       handles: ['filterCleared', 'filterApplied'],
//     },
//   },
// };
//
// const template: Story<FilterComponent> = args => {
//   return `
// <admiralty-filter filter-title="${args.filterTitle}">
//   <admiralty-filter-group group-title="Group 1">
//     <div style="display: flex; flex-direction: column">
//       <admiralty-checkbox label-text="Filter 1"></admiralty-checkbox>
//       <admiralty-checkbox label-text="Filter 2"></admiralty-checkbox>
//       <admiralty-checkbox label-text="Filter 3"></admiralty-checkbox>
//     </div>
//   </admiralty-filter-group>
//   <admiralty-filter-group group-title="Group 2">
//     <div style="display: flex; flex-direction: column">
//       <admiralty-radio-group display-vertical={true}>
//         <admiralty-radio name="grp" value="option1">Option 1</admiralty-radio>
//         <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
//         <admiralty-radio name="grp" value="option3">Option 3</admiralty-radio>
//       </admiralty-radio-group>
//     </div>
//   </admiralty-filter-group>
//   <admiralty-filter-group group-title="Group 3">
//     <div style="display: flex; flex-direction: column">
//       <admiralty-radio-group display-vertical={true}>
//         <admiralty-input label="Input 1" type="text"></admiralty-input>
//         <admiralty-input label="Input 2" type="date"></admiralty-input>
//         <admiralty-input label="Input 3" type="text"></admiralty-input>
//       </admiralty-radio-group>
//     </div>
//   </admiralty-filter-group>
// </admiralty-filter>`;
// };
//
// export const Default: Story = template.bind({});
// Default.args = {
//   filterTitle: 'Awesome Filters',
// };
