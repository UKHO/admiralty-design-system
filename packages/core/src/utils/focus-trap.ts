const FOCUSABLE_SELECTOR = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'summary',
  '[contenteditable]',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

/**
 * Returns the tabbable descendants of a container in DOM order, excluding anything
 * that is not currently rendered (e.g. hidden behind a `display: none` breakpoint rule).
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  if (!container) {
    return [];
  }

  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(element => {
    if (element.getAttribute('aria-hidden') === 'true') {
      return false;
    }

    // Not every test/SSR document implements layout, in which case assume visible.
    return typeof element.getClientRects !== 'function' || element.getClientRects().length > 0;
  });
}

export interface FocusTrapOptions {
  /**
   * Called when the Escape key is pressed while the trap is active.
   */
  onEscape?: () => void;
  /**
   * Move focus into the container on activation. Defaults to true.
   */
  focusOnActivate?: boolean;
}

/**
 * Keeps keyboard focus inside a container while it is active, and returns focus to
 * wherever it came from on deactivation.
 *
 * Shared utility so that any overlay-style component (header mobile menu, modal dialog)
 * behaves consistently for keyboard and screen reader users.
 */
export class FocusTrap {
  private container: HTMLElement = null;
  private previouslyFocused: HTMLElement = null;
  private options: FocusTrapOptions = {};

  get active(): boolean {
    return this.container !== null;
  }

  activate(container: HTMLElement, options: FocusTrapOptions = {}) {
    if (!container || this.active) {
      return;
    }

    this.container = container;
    this.options = options;
    this.previouslyFocused = document.activeElement as HTMLElement;

    document.addEventListener('keydown', this.handleKeyDown, true);

    if (options.focusOnActivate !== false) {
      this.focusFirstElement();
    }
  }

  deactivate(restoreFocus: boolean = true) {
    if (!this.active) {
      return;
    }

    document.removeEventListener('keydown', this.handleKeyDown, true);

    const toRestore = this.previouslyFocused;
    this.container = null;
    this.previouslyFocused = null;
    this.options = {};

    if (restoreFocus && toRestore && typeof toRestore.focus === 'function') {
      toRestore.focus();
    }
  }

  private focusFirstElement() {
    const focusable = getFocusableElements(this.container);

    if (focusable.length > 0) {
      focusable[0].focus();
      return;
    }

    // Nothing tabbable inside, so park focus on the container itself so that screen
    // reader users are moved into the newly revealed content.
    this.container.setAttribute('tabindex', '-1');
    this.container.focus();
  }

  private handleKeyDown = (ev: KeyboardEvent) => {
    if (!this.active) {
      return;
    }

    if (ev.key === 'Escape') {
      ev.preventDefault();
      this.options.onEscape?.();
      return;
    }

    if (ev.key !== 'Tab') {
      return;
    }

    const focusable = getFocusableElements(this.container);

    if (focusable.length === 0) {
      ev.preventDefault();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const activeElement = document.activeElement as HTMLElement;

    if (ev.shiftKey && (activeElement === first || !this.container.contains(activeElement))) {
      ev.preventDefault();
      last.focus();
    } else if (!ev.shiftKey && activeElement === last) {
      ev.preventDefault();
      first.focus();
    }
  };
}
