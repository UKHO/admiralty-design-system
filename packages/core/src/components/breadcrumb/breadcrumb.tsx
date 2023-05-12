import { Component, Prop, h, Host } from '@stencil/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  tag: 'admiralty-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
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
        {!this.first && <admiralty-icon class="breadcrumb-icon" icon-name={faChevronRight.iconName}></admiralty-icon>}
        <a class={{ active: this.active }} href={this.href || '#'}>
          <slot></slot>
        </a>
      </Host>
    );
  }
}
