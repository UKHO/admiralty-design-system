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
  @Prop() height?: string = '1rem';

  /**
   * Width of the skeleton component, default is set to 100%.
   */
  @Prop({ mutable: true, reflect: true }) width?: string = '100%';

  /**
   * Radius of the skeleton component, default is .5rem.
   */
  @Prop() radius?: string = '.5rem';

  /**
   * Hides the animation of a shimmer on the skeleton component, default is set to false, set to true if you require no animation.
   */
  @Prop({ mutable: true, reflect: true }) noAnimation: boolean = false;

  render() {

    const height: string = this.height ?? this.height;
    const width: string = this.width ?? this.width;
    const radius: string = this.radius ?? this.radius;

    return (<Host role="presentation"
                  aria-hidden="true"
                  key={`${height}-${width}-${radius}`}
                  style={{ 'height': height, 'width': width, 'border-radius': radius }}
                  class={{ 'no-animation': this.noAnimation }}>
      <div class="block"></div>
    </Host>)
  }
}
