import { Component, Element, h, Prop, Watch } from '@stencil/core';

let modalDialogIds = 0;

/**
 * @slot content - Content of the dialog.
 * @slot actions - Actions for the dialog.
 */
@Component({
  tag: 'admiralty-modal-dialog',
  styleUrl: 'modal-dialog.scss',
  scoped: true,
})
export class ModalDialogComponent {
  @Element() el!: HTMLElement;

  private dialogElement?: HTMLDivElement;
  private previouslyFocusedElement: HTMLElement | null = null;
  private shouldMoveFocus = false;
  private readonly headingId = `admiralty-modal-dialog-heading-${modalDialogIds}`;
  private readonly contentId = `admiralty-modal-dialog-content-${modalDialogIds++}`;
  private readonly mobileMediaQuery = typeof window === 'undefined' ? undefined : window.matchMedia('(max-width: 479px)');
  private originalActionOrder: HTMLElement[] = [];

  /**
   * The title of the modal dialog.
   */
  @Prop() heading?: string;
  /**
   * Label the dialog.
   */
  @Prop() label?: string;
  /**
   * Describe the contents of the dialog.
   */
  @Prop() description?: string;
  /**
   * Whether to show the modal dialog.
   */
  @Prop({ mutable: true, reflect: true }) show: boolean = false;

  connectedCallback() {
    if (!this.mobileMediaQuery) {
      return;
    }

    if ('addEventListener' in this.mobileMediaQuery) {
      this.mobileMediaQuery.addEventListener('change', this.handleViewportChange);
      return;
    }

    (this.mobileMediaQuery as MediaQueryList & { addListener: (listener: (event: MediaQueryListEvent) => void) => void }).addListener(this.handleViewportChange);
  }

  componentDidLoad() {
    if (this.show) {
      this.capturePreviouslyFocusedElement();
      this.shouldMoveFocus = true;
    }

    this.updateActionLayout();
  }

  componentDidRender() {
    this.updateActionLayout();

    if (this.show && this.shouldMoveFocus) {
      this.focusFirstInteractiveElement();
      this.shouldMoveFocus = false;
    }
  }

  disconnectedCallback() {
    if (!this.mobileMediaQuery) {
      return;
    }

    if ('removeEventListener' in this.mobileMediaQuery) {
      this.mobileMediaQuery.removeEventListener('change', this.handleViewportChange);
      return;
    }

    (this.mobileMediaQuery as MediaQueryList & { removeListener: (listener: (event: MediaQueryListEvent) => void) => void }).removeListener(this.handleViewportChange);
  }

  @Watch('show')
  protected handleShowChange(newValue: boolean, oldValue: boolean) {
    if (newValue === oldValue) {
      return;
    }

    if (newValue) {
      this.capturePreviouslyFocusedElement();
      this.shouldMoveFocus = true;
      return;
    }

    this.restoreFocus();
  }

  private handleViewportChange = () => {
    this.updateActionLayout();
  };

  private handleActionsSlotChange = () => {
    this.originalActionOrder = [];
    this.updateActionLayout();
  };

  private handleDialogKeyDown = (event: KeyboardEvent) => {
    if (!this.show) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.show = false;
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusableElements = this.getFocusableElements();

    if (!focusableElements.length) {
      event.preventDefault();
      this.dialogElement?.focus();
      return;
    }

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement as HTMLElement | null;

    if (event.shiftKey) {
      if (!activeElement || activeElement === firstFocusableElement || !this.dialogElement?.contains(activeElement)) {
        event.preventDefault();
        lastFocusableElement.focus();
      }

      return;
    }

    if (!activeElement || activeElement === lastFocusableElement || !this.dialogElement?.contains(activeElement)) {
      event.preventDefault();
      firstFocusableElement.focus();
    }
  };

  private capturePreviouslyFocusedElement() {
    const activeElement = document.activeElement;

    if (activeElement instanceof HTMLElement && !this.el.contains(activeElement)) {
      this.previouslyFocusedElement = activeElement;
    }
  }

  private restoreFocus() {
    if (this.previouslyFocusedElement?.isConnected) {
      this.previouslyFocusedElement.focus();
    }

    this.previouslyFocusedElement = null;
  }

  private focusFirstInteractiveElement() {
    const firstFocusableElement = this.getFocusableElements()[0];

    if (firstFocusableElement) {
      firstFocusableElement.focus();
      return;
    }

    this.dialogElement?.focus();
  }

  private getFocusableElements(): HTMLElement[] {
    if (!this.dialogElement) {
      return [];
    }

    const focusableSelector = [
      'a[href]',
      'area[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]',
    ].join(',');

    return Array.from(this.dialogElement.querySelectorAll<HTMLElement>(focusableSelector)).filter(element => {
      if (element.tabIndex < 0) {
        return false;
      }

      if (element.hasAttribute('disabled') || element.getAttribute('aria-hidden') === 'true') {
        return false;
      }

      return element.getClientRects().length > 0;
    });
  }

  private updateActionLayout() {
    const actionContainer = this.el.querySelector<HTMLElement>("[slot='actions']");

    if (!actionContainer) {
      return;
    }

    const actionChildren = Array.from(actionContainer.children) as HTMLElement[];

    if (!actionChildren.length) {
      return;
    }

    if (!this.originalActionOrder.length || !this.hasSameActionChildren(this.originalActionOrder, actionChildren)) {
      this.originalActionOrder = actionChildren.slice();
    }

    const isMobileViewport = this.mobileMediaQuery?.matches ?? false;
    const nextOrder = isMobileViewport ? this.getMobileActionOrder(this.originalActionOrder) : this.originalActionOrder;

    if (nextOrder.every((child, index) => actionContainer.children[index] === child)) {
      return;
    }

    // Preserve focus during reordering if applicable
    const activeElement = document.activeElement as HTMLElement | null;
    nextOrder.forEach(child => actionContainer.appendChild(child));

    // Restore focus if it was on an action button
    if (activeElement && actionContainer.contains(activeElement)) {
      activeElement.focus();
    }
  }

  private hasSameActionChildren(previousChildren: HTMLElement[], nextChildren: HTMLElement[]) {
    return previousChildren.length === nextChildren.length && previousChildren.every(child => nextChildren.includes(child));
  }

  private getMobileActionOrder(actionChildren: HTMLElement[]) {
    const primaryActions: HTMLElement[] = [];
    const secondaryActions: HTMLElement[] = [];

    actionChildren.forEach(actionChild => {
      if (this.isPrimaryAction(actionChild)) {
        primaryActions.push(actionChild);
        return;
      }

      secondaryActions.push(actionChild);
    });

    return [...primaryActions, ...secondaryActions];
  }

  private isPrimaryAction(actionChild: HTMLElement) {
    if (actionChild.tagName.toLowerCase() !== 'admiralty-button') {
      return actionChild.getAttribute('data-admiralty-primary-action') === 'true';
    }

    const buttonVariant =
      (actionChild as HTMLElement & { variant?: string }).variant ??
      actionChild.getAttribute('variant') ??
      actionChild
        .querySelector('button')
        ?.className.split(' ')
        .find(className => className === 'primary' || className === 'secondary' || className === 'warning' || className === 'text' || className === 'icon') ??
      'primary';

    return buttonVariant === 'primary';
  }

  render() {
    return (
      <div>
        <div
          ref={element => (this.dialogElement = element)}
          class={{ 'modal-dialog': true, 'show': this.show }}
          role="dialog"
          aria-modal="true"
          aria-label={this.label}
          aria-labelledby={this.label || !this.heading ? undefined : this.headingId}
          aria-describedby={this.contentId}
          aria-description={this.description}
          tabindex={-1}
          onKeyDown={this.handleDialogKeyDown}
        >
          {this.heading ? (
            <p class="modal-heading" id={this.headingId}>
              {this.heading}
            </p>
          ) : null}
          <div class="modal-content" id={this.contentId}>
            <slot name="content" onSlotchange={this.handleActionsSlotChange}></slot>
          </div>
          <div role="navigation" class="modal-actions">
            <slot name="actions" onSlotchange={this.handleActionsSlotChange}></slot>
          </div>
        </div>
        <div class={{ 'modal-backdrop': true, 'show': this.show }}></div>
      </div>
    );
  }
}
