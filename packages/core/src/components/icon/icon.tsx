import { Component, h, Host, Prop } from '@stencil/core';
import icons from '@iconify-json/material-symbols/icons.json';
import { getIconData, iconToSVG, iconToHTML, replaceIDs } from '@iconify/utils';
import { IconifyJSON } from '@iconify/types';

type IconSize = number | 'unset';

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
  @Prop() size: IconSize = 'unset';

  getIcon(iconName: string, iconSize: IconSize) {
    const iconData = getIconData(icons as IconifyJSON, iconName);
    if (!iconData) {
      return '';
    }

    const renderData = iconToSVG(iconData, {
      height: iconSize,
    });

    return iconToHTML(replaceIDs(renderData.body), renderData.attributes);
  }

  render() {
    const icon = this.getIcon(this.name, this.size);
    if (icon)
      return (
        <Host
          style={{
            contain: this.size === 'unset' ? 'strict' : 'initial',
          }}
        >
          <div innerHTML={icon}></div>
        </Host>
      );
  }
}
