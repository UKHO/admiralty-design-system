import { Component, h } from '@stencil/core';

@Component({
  tag: 'admiralty-hr',
  styleUrl: 'horizontal-rule.scss',
  shadow: false,
})
export class HorizontalRuleComponent {
  render() {
    return <hr />;
  }
}
