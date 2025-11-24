import { Component, h, Host, Prop, Element, Watch } from "@stencil/core";

type Placement = 'top' | 'bottom' | 'left' | 'right'
type Alignment = 'start' | 'centre' | 'end'

@Component({
  tag: 'admiralty-tooltip',
  styleUrl: 'tooltip.scss',
  scoped: true,
})
export class TooltipComponent {
  @Element() host!: HTMLElement;
  @Prop() for!: string;
  @Prop({ reflect: true }) placement?: Placement = 'top';
  @Prop({ reflect: true }) alignment?: Alignment = 'centre';
  private target?: HTMLElement;

  private map?: {
    top: () => void
    bottom: () => void
    left: () => void
    right: () => void
  };

  componentDidLoad(): void {
    this.target = document.getElementById(this.for) as HTMLElement;
    if (!this.target) return;

    const show = () => this.host.setAttribute('data-open', '');
    const hide = () => this.host.removeAttribute('data-open');

    this.target.addEventListener('mouseenter', show);
    this.target.addEventListener('mouseleave', hide);
    this.target.addEventListener('focus', show, true);
    this.target.addEventListener('blur', hide, true);

    this.updateTooltipPosition();
  }

  @Watch('placement')
  onPlacementChange(event: any) {
    console.log('changed: ', event)
  }

  checkElementOffScreen(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    const status = {
      topOff: rect.top < 0,
      bottomOff: rect.bottom > viewportHeight,
      leftOff: rect.left < 0,
      rightOff: rect.right > viewportWidth,
    };

    // Check if any side is off screen
    const isOffScreen = status.topOff || status.bottomOff || status.leftOff || status.rightOff;

    if (isOffScreen) {
      let message = 'Element is off screen. Sides off: ';
      const sides = [];
      if (status.topOff) sides.push('top');
      if (status.bottomOff) sides.push('bottom');
      if (status.leftOff) sides.push('left');
      if (status.rightOff) sides.push('right');

      console.log(message + sides.join(', '));
    } else {
      console.log('Element is on screen (at least partially).');
    }

    return status;
  }

  updateTooltipPosition() {

    const position = () => {
      const r = this.target!.getBoundingClientRect();
      const tooltip = this.host.querySelector('.tooltip') as HTMLElement;
      const gap = 8;

      this.map = {
        top: () => {
          console.log('top');
          tooltip.style.top = `${r.top - gap}px`;
          tooltip.style.left = `${r.left + r.width/2}px`;
          tooltip.style.transform = `translate(-50%, calc(-100% - ${gap}px)) scale(1)`;
        },
        bottom: () => {
          console.log('bottom');
          tooltip.style.top = `${r.bottom + gap}px`;
          tooltip.style.left = `${r.left + r.width/2}px`;
          tooltip.style.transform = `translate(-50%, ${gap}px) scale(1)`;
        },
        left: () => {
          console.log('left', r.left);
          tooltip.style.top = `${r.top + r.height/2}px`;
          tooltip.style.left = `${r.left - 20}px`; // `${r.left - gap}px`;
          tooltip.style.transform = `translate(calc(-100% - ${gap}px), -50%) scale(1)`;
        },
        right: () => {
          console.log('right', r.right);
          tooltip.style.top = `${r.top + r.height/2}px`;
          tooltip.style.left = `${r.right + 20}px`; // `${r.right - gap}px`;
          tooltip.style.transform = `translate(${gap}px, -50%) scale(1)`;
        },
      };

      if (this.map[this.placement]) {
        this.map[this.placement]();
      } else {
        const spaceAbove = r.top;
        const spaceBelow = window.innerHeight - r.bottom;
        const spaceLeft = r.left;
        const spaceRight = window.innerWidth - r.right;

        if (spaceLeft > spaceRight) {
          this.placement = 'left'
          console.log('will display on the left');
          this.map[this.placement]();
          this.handleOffScreen(tooltip, gap);
          return;
        }

        if (spaceRight > spaceLeft) {
          this.placement = 'right'
          console.log('will display on the right');
          this.map[this.placement]();
          this.handleOffScreen(tooltip, gap);
          return;
        }

        if (spaceAbove > spaceBelow) {
          this.placement = 'top'
          console.log('will display on the top');
          this.map[this.placement]();
          this.handleOffScreen(tooltip, gap);
          return;
        }

        if (spaceBelow > spaceAbove) {
          this.placement = 'bottom'
          console.log('will display on the below');
          this.map[this.placement]();
          this.handleOffScreen(tooltip, gap);
          return;
        }
      }
    }

    this.target.addEventListener('mouseenter', position);
    this.target.addEventListener('focus', position, true);
  }

  handleOffScreen(tooltip: HTMLElement, gap: number) {
    const isOffScreen = this.checkElementOffScreen(this.host.querySelector('.tooltip') as HTMLElement);
    if (isOffScreen.leftOff) {
      console.log('its off left')
      tooltip.style.transform = `translate(0, ${gap}px) scale(1)`;
      tooltip.style.left = '0';
    }

    if (isOffScreen.rightOff) {
      console.log('its off right')
      tooltip.style.transform = `translate(0, ${gap}px) scale(1)`;
      tooltip.style.right = '0';
    }
  }

  render(): void {
    return (
      <Host>
        <div role="tooltip" class="tooltip" data-placement={this.placement} data-alignment={this.alignment}>
          <slot />
          <span class="arrow" aria-hidden="true" />
        </div>
      </Host>
    )
  }
}
