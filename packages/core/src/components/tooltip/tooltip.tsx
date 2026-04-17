import { Component, h, Host, Prop, Element } from '@stencil/core';

type Placement = 'top' | 'bottom' | 'left' | 'right';
type Alignment = 'start' | 'centre' | 'end';

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
  private tooltipEl?: HTMLElement;
  private tooltipId?: string;
  private hideTimeout?: ReturnType<typeof setTimeout>;

  private map?: {
    top: () => void;
    bottom: () => void;
    left: () => void;
    right: () => void;
  };

  private positionTooltip = () => {
    if (!this.target) return;

    const r = this.target.getBoundingClientRect();
    const tooltip = this.tooltipEl ?? (this.host.querySelector('.tooltip') as HTMLElement);
    if (!tooltip) return;

    const gap = 8;

    this.map = {
      top: () => {
        tooltip.style.top = `${r.top - gap}px`;
        tooltip.style.left = `${r.left + r.width / 2}px`;
        tooltip.style.transform = `translate(-50%, calc(-100% - ${gap}px)) scale(1)`;
      },
      bottom: () => {
        tooltip.style.top = `${r.bottom + gap}px`;
        tooltip.style.left = `${r.left + r.width / 2}px`;
        tooltip.style.transform = `translate(-50%, ${gap}px) scale(1)`;
      },
      left: () => {
        tooltip.style.top = `${r.top + r.height / 2}px`;
        tooltip.style.left = `${r.left - 20}px`; // `${r.left - gap}px`;
        tooltip.style.transform = `translate(calc(-100% - ${gap}px), -50%) scale(1)`;
      },
      right: () => {
        tooltip.style.top = `${r.top + r.height / 2}px`;
        tooltip.style.left = `${r.right + 20}px`; // `${r.right - gap}px`;
        tooltip.style.transform = `translate(${gap}px, -50%) scale(1)`;
      },
    };

    if (this.map[this.placement]) {
      this.map[this.placement]();
      return;
    }

    const spaceAbove = r.top;
    const spaceBelow = window.innerHeight - r.bottom;
    const spaceLeft = r.left;
    const spaceRight = window.innerWidth - r.right;

    if (spaceLeft > spaceRight) {
      this.placement = 'left';
      this.map[this.placement]();
      this.handleOffScreen(tooltip, gap);
      return;
    }

    if (spaceRight > spaceLeft) {
      this.placement = 'right';
      this.map[this.placement]();
      this.handleOffScreen(tooltip, gap);
      return;
    }

    if (spaceAbove > spaceBelow) {
      this.placement = 'top';
      this.map[this.placement]();
      this.handleOffScreen(tooltip, gap);
      return;
    }

    if (spaceBelow > spaceAbove) {
      this.placement = 'bottom';
      this.map[this.placement]();
      this.handleOffScreen(tooltip, gap);
      return;
    }
  };

  private addPositionListeners = () => {
    if (!this.target) return;

    // Ensure updateTooltipPosition can be called repeatedly without duplicating handlers.
    this.removePositionListeners();
    this.target.addEventListener('mouseenter', this.positionTooltip);
    this.target.addEventListener('focus', this.positionTooltip, true);
  };

  private removePositionListeners = () => {
    if (!this.target) return;

    this.target.removeEventListener('mouseenter', this.positionTooltip);
    this.target.removeEventListener('focus', this.positionTooltip, true);
  };

  private show = () => {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = undefined;
    }

    this.host.setAttribute('data-open', '');
    this.setTooltipA11yState(true);
  };

  private hide = () => {
    this.host.removeAttribute('data-open');
    this.setTooltipA11yState(false);
  };

  private addTargetDescribedBy = () => {
    if (!this.target || !this.tooltipId) return;

    const current = this.target.getAttribute('aria-describedby') || '';
    const ids = current
      .split(/\s+/)
      .map(id => id.trim())
      .filter(Boolean);

    if (!ids.includes(this.tooltipId)) {
      ids.push(this.tooltipId);
      this.target.setAttribute('aria-describedby', ids.join(' '));
    }
  };

  private removeTargetDescribedBy = () => {
    if (!this.target || !this.tooltipId) return;

    const current = this.target.getAttribute('aria-describedby') || '';
    const ids = current
      .split(/\s+/)
      .map(id => id.trim())
      .filter(id => id && id !== this.tooltipId);

    if (ids.length > 0) {
      this.target.setAttribute('aria-describedby', ids.join(' '));
    } else {
      this.target.removeAttribute('aria-describedby');
    }
  };

  private setTooltipA11yState = (isOpen: boolean) => {
    if (!this.tooltipEl) return;

    this.tooltipEl.setAttribute('aria-hidden', isOpen ? 'false' : 'true');

    if (isOpen) {
      this.addTargetDescribedBy();
      return;
    }

    this.removeTargetDescribedBy();
  };

  private scheduleHide = () => {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
    }

    // Small delay prevents flicker when moving between trigger and tooltip.
    this.hideTimeout = setTimeout(() => {
      this.hide();
      this.hideTimeout = undefined;
    }, 120);
  };

  componentDidLoad(): void {
    this.target = document.getElementById(this.for) as HTMLElement;
    this.tooltipEl = this.host.querySelector('.tooltip') as HTMLElement;

    if (this.tooltipEl) {
      if (!this.tooltipEl.id) {
        this.tooltipEl.id = `${this.for}-tooltip`;
      }

      this.tooltipId = this.tooltipEl.id;
      this.tooltipEl.setAttribute('aria-hidden', 'true');
    }

    if (!this.target) return;

    this.target.addEventListener('mouseenter', this.show);
    this.target.addEventListener('mouseleave', this.scheduleHide);
    this.target.addEventListener('focus', this.show, true);
    this.target.addEventListener('blur', this.scheduleHide, true);

    this.tooltipEl?.addEventListener('mouseenter', this.show);
    this.tooltipEl?.addEventListener('mouseleave', this.scheduleHide);
    this.tooltipEl?.addEventListener('focusin', this.show);
    this.tooltipEl?.addEventListener('focusout', this.scheduleHide);

    this.updateTooltipPosition();
  }

  disconnectedCallback(): void {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = undefined;
    }

    this.removeTargetDescribedBy();

    if (!this.target) return;

    this.removePositionListeners();

    this.target.removeEventListener('mouseenter', this.show);
    this.target.removeEventListener('mouseleave', this.scheduleHide);
    this.target.removeEventListener('focus', this.show, true);
    this.target.removeEventListener('blur', this.scheduleHide, true);

    this.tooltipEl?.removeEventListener('mouseenter', this.show);
    this.tooltipEl?.removeEventListener('mouseleave', this.scheduleHide);
    this.tooltipEl?.removeEventListener('focusin', this.show);
    this.tooltipEl?.removeEventListener('focusout', this.scheduleHide);
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

    return status;
  }

  updateTooltipPosition() {
    this.addPositionListeners();
  }

  handleOffScreen(tooltip: HTMLElement, gap: number) {
    const isOffScreen = this.checkElementOffScreen(this.host.querySelector('.tooltip') as HTMLElement);

    const placementTransform =
      this.placement === 'top'
        ? `translate(-50%, calc(-100% - ${gap}px)) scale(1)`
        : this.placement === 'bottom'
          ? `translate(-50%, ${gap}px) scale(1)`
          : this.placement === 'left'
            ? `translate(calc(-100% - ${gap}px), -50%) scale(1)`
            : `translate(${gap}px, -50%) scale(1)`;

    if (isOffScreen.leftOff) {
      tooltip.style.transform = placementTransform;
      tooltip.style.left = '0';
      tooltip.style.right = '';
    }

    if (isOffScreen.rightOff) {
      tooltip.style.transform = placementTransform;
      tooltip.style.left = '';
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
    );
  }
}
