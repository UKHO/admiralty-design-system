import { Component, h } from '@stencil/core';

@Component({
  tag: 'admiralty-hr',
  styleUrl: 'horizontal-rule.scss',
  scoped: true,
})
export class HorizontalRuleComponent {
  render() {
    return <hr />;
  }
}
