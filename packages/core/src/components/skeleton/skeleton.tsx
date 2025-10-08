import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: 'admiralty-skeleton',
  styleUrl: 'skeleton.scss',
  scoped: true,
})
export class SkeletonComponent {
  /**
   * Height of the skeleton component, default is set to 1rem.
   */
  @Prop() height?: string;

  /**
   * Width of the skeleton component, default is set to 100%.
   */
  @Prop({ mutable: true, reflect: true }) width?: string;

  /**
   * Radius of the skeleton component, default is .5rem.
   */
  @Prop() radius?: string;

  /**
   * Hides the animation of a shimmer on the skeleton component, default is set to false, set to true if you require no animation.
   */
  @Prop({ mutable: true, reflect: true }) noAnimation: boolean = false;

  render() {
    const styles: Record<string, string> = {};
    if (this.height) styles['--_height'] = this.height;
    if (this.width) styles['--_width'] = this.width;
    if (this.radius) styles['--_radius'] = this.radius;

    return (<Host role="presentation"
                  aria-hidden="true"
                  style={styles}
                  class={{ 'no-animation': this.noAnimation }}>
      <div class="block"></div>
    </Host>)
  }
}
