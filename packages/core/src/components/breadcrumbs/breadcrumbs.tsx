import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'admiralty-breadcrumbs',
  styleUrl: 'breadcrumbs.scss',
  shadow: true,
})
export class BreadcrumbsComponent {
  @Element() el!: HTMLElement;

  componentWillLoad() {
    this.breadcrumbsInit();
  }

  private breadcrumbsInit = () => {
    this.setActiveBreadcrumb();
  };

  private setActiveBreadcrumb = () => {
    const breadcrumbs = this.getBreadcrumbs();

    // Check if an active breadcrumb exists already
    const active = breadcrumbs.find(breadcrumb => breadcrumb.active);

    // Set the active status
    for (const breadcrumb of breadcrumbs) {
      const isFirst = breadcrumb === breadcrumbs[0];
      const isLast = breadcrumb === breadcrumbs[breadcrumbs.length - 1];

      if (isFirst) {
        breadcrumb.first = true;
      }

      // When no active breadcrumb, set the last one to active
      if (!active && isLast) {
        breadcrumb.active = true;
      }
    }
  };

  private getBreadcrumbs = (): HTMLAdmiraltyBreadcrumbElement[] => {
    return Array.from(this.el.querySelectorAll('admiralty-breadcrumb'));
  };

  render() {
    return (
      <nav class="breadcrumbs" aria-label="breadcrumbs">
        <slot></slot>
      </nav>
    );
  }
}
