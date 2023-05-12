import { Component, h, Host, Prop } from '@stencil/core';
import { fas, IconName } from '@fortawesome/free-solid-svg-icons';
import { icon, IconPrefix, library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

@Component({
  tag: 'admiralty-icon',
  styleUrl: 'icon.scss',
  shadow: true,
})
export class IconComponent {
  /**
   * Name of the icon to be rendered
   *
   * Check out <a href="https://fontawesome.com/search?m=free}">FontAwesome</a>  for a list of icons
   */
  @Prop() iconName: IconName;
  /**
   * The style prefix to apply to the icon
   *
   * By default, icons use Font Awesome's solid style
   */
  @Prop() iconPrefix: IconPrefix = 'fas';
  render() {
    const iconObject = icon({ prefix: this.iconPrefix, iconName: this.iconName });
    if (iconObject)
      return (
        <Host>
          <div class="icon-inner fa-fw" innerHTML={iconObject.html[0]}></div>
        </Host>
      );
  }
}
