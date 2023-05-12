import { Component, Prop, h } from '@stencil/core';

/**
 * @slot - You can place any content inside this element that you wish to use inside your filter component.
 */
@Component({
  tag: 'admiralty-filter-group',
  styleUrl: 'filter-group.scss',
  scoped: true,
})
export class FilterGroupComponent {
  /**
   * The title of the filter group
   */
  @Prop() groupTitle: string;

  render() {
    return (
      <admiralty-expansion heading={this.groupTitle} hide-border={true} expanded={true}>
        <slot></slot>
      </admiralty-expansion>
    );
  }
}
