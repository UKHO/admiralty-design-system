// import { Story } from '@storybook/html';
// import readme from './readme.md';
//
// export default {
//   title: 'Paginator',
//   parameters: {
//     markdown: readme,
//     actions: {
//       handles: ['pageChange'],
//     },
//   },
// };
//
// export const Basic: Story = args => {
//   return `<admiralty-paginator-wrapper>
//     <admiralty-paginator pages="${args.pages}" current-page="${args.currentPage}" label="${args.label}">
//     </admiralty-paginator>
//   </admiralty-paginator-wrapper>`;
// };
// Basic.args = {
//   pages: 8,
//   currentPage: 1,
//   label: 'Showing 1-6 of 45',
// };
//
// const Template: Story = args => {
//   return `<admiralty-paginator-wrapper>
//     <admiralty-paginator pages="${args.pages}" current-page="${args.currentPage}">
//     </admiralty-paginator>
//   </admiralty-paginator-wrapper>`;
// };
//
// export const WithoutLabel: Story = Template.bind({});
// WithoutLabel.args = {
//   pages: 10,
//   currentPage: 5,
// };
//
// export const FirstPage: Story = Template.bind({});
// FirstPage.args = {
//   pages: 10,
//   currentPage: 1,
// };
//
// export const LastPage: Story = Template.bind({});
// LastPage.args = {
//   pages: 10,
//   currentPage: 10,
// };
