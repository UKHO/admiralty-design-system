import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'admiralty-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  scoped: true,
})
export class BreadcrumbComponent {
  /**
   * When `true` the breadcrumb will by styled to show that it is the
   * currently active breadcrumb. Defaults to `true` for the
   * last breadcrumb if it is not set on any.
   */
  @Prop() active = false;

  /**
   * @internal
   * When set to `true` the breadcrumb will not be prefixed with a chevron.
   */
  @Prop() first!: boolean;

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   */
  @Prop() href: string | undefined;

  render() {
    return (
      <Host>
        {!this.first && <admiralty-icon class="breadcrumb-icon" name="arrow-forward-ios-rounded"></admiralty-icon>}
        <a class={{ active: this.active }} href={this.href || '#'}>
          <slot></slot>
        </a>
      </Host>
    );
  }
}
