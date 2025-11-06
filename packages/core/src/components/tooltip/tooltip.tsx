import { Component, h, Host, Prop } from "@stencil/core";

type Placement = 'top' | 'bottom' | 'left' | 'right'
type Alignment = 'start' | 'centre' | 'end'

@Component({
  tag: 'admiralty-tooltip',
  styleUrl: 'tooltip.scss',
  scoped: true,
})
export class TooltipComponent {
  @Prop({ mutable: true }) tooltipContent: string;
  @Prop({ reflect: true }) placement?: Placement = 'top';
  @Prop({ reflect: true }) alignment?: Alignment = 'start';

  render(): void {
    return (
      <Host>
        <span class="anchor">
          <span class="trigger">
            <slot name="trigger" />
          </span>
          <div role="tooltip" class="tooltip" data-placement={this.placement} data-alignment={this.alignment}>
            <slot />
            <span class="arrow" aria-hidden="true" />
          </div>
        </span>
      </Host>
    )
  }
}
