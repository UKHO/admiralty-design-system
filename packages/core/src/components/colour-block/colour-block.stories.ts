// import { Story } from '@storybook/html';
// import readme from './readme.md';
//
// export default {
//   title: 'Colour Block',
//   parameters: {
//     markdown: readme,
//     actions: {
//       handles: ['click'],
//     },
//   },
// };
//
// const Template: Story = args => {
//   return `<admiralty-colour-block
//       action-text="${args.actionText}"
//       width="${args.width}"
//       height="${args.height}"
//       heading="${args.heading}"
//       colour="${args.colour}"
//       click-action="${args.clickAction}"
//     >
//       <div>${args.content}</div>
//     </admiralty-colour-block>
//     <script>
//       document.querySelector('admiralty-colour-block').clickAction = () => console.log('click');
//     </script>`;
// };
//
// const squareArgs = {
//   width: 400,
//   height: 400,
//   heading: 'Colour Me Surprised',
//   content: `<p>This colour block is a component in the design system and we hope you enjoy it</p>`,
//   actionText: 'Click Here',
//   colour: 'admiralty-blue',
// };
//
// const rectangleArgs = {
//   width: 1000,
//   height: 400,
//   heading: 'Block by Block',
//   content: `<p>This colour block is a component in the design system and we hope you enjoy it</p>
//     <p>This block supports HTML such as <b>bold</b> text and <a href='#'>links</a>.</p>
//     <h5>Even Headings</h5>
//     <span>What about spans?</span>`,
//   actionText: 'Click Here',
//   colour: 'admiralty-blue',
// };
//
// export const AdmiraltyBlueSquare = Template.bind({});
// AdmiraltyBlueSquare.args = { ...squareArgs };
//
// export const TealSquare = Template.bind({});
// TealSquare.args = {
//   ...squareArgs,
//   colour: 'teal',
// };
//
// export const BrightBlueSquare = Template.bind({});
// BrightBlueSquare.args = {
//   ...squareArgs,
//   colour: 'bright-blue',
// };
//
// export const AdmiraltyBlueRectangle = Template.bind({});
// AdmiraltyBlueRectangle.args = { ...rectangleArgs };
//
// export const TealRectangle = Template.bind({});
// TealRectangle.args = {
//   ...rectangleArgs,
//   colour: 'teal',
// };
//
// export const BrightBlueRectangle = Template.bind({});
// BrightBlueRectangle.args = {
//   ...rectangleArgs,
//   colour: 'bright-blue',
// };
