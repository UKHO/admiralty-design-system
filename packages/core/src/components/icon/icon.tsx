import { Component, h, Host, Prop } from "@stencil/core";
import icons from '@iconify-json/material-symbols/icons.json';
import { getIconData, iconToSVG, iconToHTML, replaceIDs } from '@iconify/utils';
import { IconifyJSON } from '@iconify/types';

@Component({
  tag: 'admiralty-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconComponent {
  /**
   * Name of the icon to be rendered.
   *
   * A full list of available icons can be viewed at [https://fonts.google.com/icons](https://fonts.google.com/icons)
   */
  @Prop() name: string;
  /**
   * The size of the icon in pixels. When not set, the icon height will be determined by the parent font size.
   */
  @Prop() size: number | 'unset' = 'unset';

  /**
   * Whether the component is loading if so then show the skeleton
   */
  @Prop() loading: boolean = false;

  /**
   * Width of the loading bar
   */
  @Prop() loadingWidth?: string;

  /**
   * Height of the loading bar
   */
  @Prop() loadingHeight?: string;

  /**
   * Radius of the loading bar
   */
  @Prop() loadingRadius?: string;

  getIcon(iconName: string, iconSize: number | 'unset') {
    const iconData = getIconData(icons as IconifyJSON, iconName);
    if (!iconData) {
      return '';
    }

    const renderData = iconToSVG(iconData, {
      height: iconSize,
    });

    return iconToHTML(replaceIDs(renderData.body), renderData.attributes);
  }

  renderSkeleton() {
    return <Host>
      <div class="loading-wrapper">
        <admiralty-skeleton key={`${this.loadingWidth}-${this.loadingHeight}`}
                            width={this.loadingWidth}
                            height={this.loadingHeight}
                            radius={this.loadingRadius}></admiralty-skeleton>
      </div>
    </Host>
  }

  renderContent() {
    const icon = this.getIcon(this.name, this.size);
    if (icon)
      return (
        <Host style={{ contain: this.size === 'unset' ? 'strict' : 'initial' }}>
          <div innerHTML={icon}></div>
        </Host>
      );
  }

  render(): void {
    return this.loading? this.renderSkeleton() : this.renderContent();
  }
}
