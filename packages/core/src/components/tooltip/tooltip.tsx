import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: 'admiralty-tooltip',
  styleUrl: 'tooltip.scss',
  scoped: true,
})
export class TooltipComponent {
  @Prop({ mutable: true }) tooltipContent: string;
  @Prop({ mutable: true }) x: number = 0;
  @Prop({ mutable: true }) y: number = 0;
  @Prop({ mutable: true }) visible: boolean = false;

  render(): void {
    if (!this.visible) {
      return null
    }

    const style = {
      left: `${this.x}px`,
      top: `${this.y}px`,
    };

    return (
      <div class="tooltip" style={style}>
        <slot></slot>
      </div>
    )
  }
}
