import { newSpecPage } from '@stencil/core/testing';
import { ModalDialogComponent } from './modal-dialog';

describe('admiralty-modal-dialog', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: false,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      })),
    });
  });

  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ModalDialogComponent],
      html: '<admiralty-modal-dialog></admiralty-modal-dialog>',
    });

    const dialog = root.querySelector('.modal-dialog');

    expect(dialog).not.toBeNull();
    expect(dialog?.getAttribute('role')).toBe('dialog');
    expect(dialog?.getAttribute('aria-modal')).toBe('true');
    expect(dialog?.getAttribute('tabindex')).toBe('-1');
    expect(root.querySelector('.modal-content')).not.toBeNull();
    expect(root.querySelector('.modal-actions')).not.toBeNull();
  });
  it('renders with heading when heading is passed', async () => {
    const { root } = await newSpecPage({
      components: [ModalDialogComponent],
      html: '<admiralty-modal-dialog heading="TESTHEADING"></admiralty-modal-dialog>',
    });

    expect(root.querySelector('.modal-heading')?.textContent).toBe('TESTHEADING');
  });
  it('renders with show classes when show is true', async () => {
    const { root } = await newSpecPage({
      components: [ModalDialogComponent],
      html: '<admiralty-modal-dialog show="true"></admiralty-modal-dialog>',
    });

    expect(root.querySelector('.modal-dialog')).toHaveClass('show');
    expect(root.querySelector('.modal-backdrop')).toHaveClass('show');
  });
  it('renders without show classes when show is false', async () => {
    const { root } = await newSpecPage({
      components: [ModalDialogComponent],
      html: '<admiralty-modal-dialog show="false"></admiralty-modal-dialog>',
    });

    expect(root.querySelector('.modal-dialog')).not.toHaveClass('show');
    expect(root.querySelector('.modal-backdrop')).not.toHaveClass('show');
  });
  it('renders with aria-label when label is passed', async () => {
    const { root } = await newSpecPage({
      components: [ModalDialogComponent],
      html: '<admiralty-modal-dialog label="TESTLABEL"></admiralty-modal-dialog>',
    });

    expect(root.querySelector('.modal-dialog')?.getAttribute('aria-label')).toBe('TESTLABEL');
  });
  it('renders with aria-description when description is passed', async () => {
    const { root } = await newSpecPage({
      components: [ModalDialogComponent],
      html: '<admiralty-modal-dialog description="TESTDESCRIPTION"></admiralty-modal-dialog>',
    });

    expect(root.querySelector('.modal-dialog')?.getAttribute('aria-description')).toBe('TESTDESCRIPTION');
  });

  it('reorders actions so the primary action is first on mobile', async () => {
    (window.matchMedia as jest.Mock).mockImplementation(() => ({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const { root, waitForChanges } = await newSpecPage({
      components: [ModalDialogComponent],
      html: `
        <admiralty-modal-dialog show="true">
          <div slot="actions">
            <admiralty-button variant="secondary">Leave page</admiralty-button>
            <admiralty-button>Continue survey</admiralty-button>
          </div>
        </admiralty-modal-dialog>
      `,
    });

    await waitForChanges();

    const actionButtons = root.querySelector("div[slot='actions']")?.children;

    expect(actionButtons?.[0]?.textContent?.trim()).toBe('Continue survey');
    expect(actionButtons?.[1]?.textContent?.trim()).toBe('Leave page');
  });

  it('reorders actions on mobile when button variants are only present on the rendered inner button', async () => {
    (window.matchMedia as jest.Mock).mockImplementation(() => ({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const { root, rootInstance, waitForChanges } = await newSpecPage({
      components: [ModalDialogComponent],
      html: `
        <admiralty-modal-dialog show="true">
          <div slot="actions">
            <admiralty-button>Continue survey</admiralty-button>
            <admiralty-button>Leave page</admiralty-button>
          </div>
        </admiralty-modal-dialog>
      `,
    });

    const actionButtons = Array.from(root.querySelector("div[slot='actions']")?.children ?? []);
    const secondaryButton = actionButtons[0] as HTMLElement;
    const primaryButton = actionButtons[1] as HTMLElement;

    secondaryButton.innerHTML = '<button class="secondary">Leave page</button>';
    primaryButton.innerHTML = '<button class="primary">Continue survey</button>';

    (rootInstance as unknown as { updateActionLayout: () => void }).updateActionLayout();

    await waitForChanges();

    const reorderedButtons = root.querySelector("div[slot='actions']")?.children;

    expect(reorderedButtons?.[0]?.textContent?.trim()).toBe('Continue survey');
    expect(reorderedButtons?.[1]?.textContent?.trim()).toBe('Leave page');
  });

  it('preserves consumer order on mobile when both actions are explicitly secondary', async () => {
    (window.matchMedia as jest.Mock).mockImplementation(() => ({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const { root, waitForChanges } = await newSpecPage({
      components: [ModalDialogComponent],
      html: `
        <admiralty-modal-dialog show="true">
          <div slot="actions">
            <admiralty-button variant="secondary">Leave page</admiralty-button>
            <admiralty-button variant="secondary">Continue survey</admiralty-button>
          </div>
        </admiralty-modal-dialog>
      `,
    });

    await waitForChanges();

    const actionButtons = root.querySelector("div[slot='actions']")?.children;

    expect(actionButtons?.[0]?.textContent?.trim()).toBe('Leave page');
    expect(actionButtons?.[1]?.textContent?.trim()).toBe('Continue survey');
  });

  it('responds to viewport changes and reorders actions when switching to mobile', async () => {
    let mediaQueryCallback: (event: MediaQueryListEvent) => void;
    (window.matchMedia as jest.Mock).mockImplementation(() => ({
      matches: false, // Desktop initially
      addEventListener: jest.fn((event: string, callback: (event: MediaQueryListEvent) => void) => {
        if (event === 'change') {
          mediaQueryCallback = callback;
        }
      }),
      removeEventListener: jest.fn(),
    }));

    const { root, waitForChanges } = await newSpecPage({
      components: [ModalDialogComponent],
      html: `
        <admiralty-modal-dialog show="true">
          <div slot="actions">
            <admiralty-button variant="secondary">Leave page</admiralty-button>
            <admiralty-button>Continue survey</admiralty-button>
          </div>
        </admiralty-modal-dialog>
      `,
    });

    // On desktop, actions should be in original order
    let actionButtons = root.querySelector("div[slot='actions']")?.children;
    expect(actionButtons?.[0]?.textContent?.trim()).toBe('Leave page');
    expect(actionButtons?.[1]?.textContent?.trim()).toBe('Continue survey');

    // Simulate viewport change to mobile
    (window.matchMedia as jest.Mock).mockImplementation(() => ({
      matches: true, // Mobile now
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    mediaQueryCallback!({} as MediaQueryListEvent);
    await waitForChanges();

    // On mobile, primary action should be first
    actionButtons = root.querySelector("div[slot='actions']")?.children;
    expect(actionButtons?.[0]?.textContent?.trim()).toBe('Continue survey');
    expect(actionButtons?.[1]?.textContent?.trim()).toBe('Leave page');
  });

  it('preserves focus on action buttons when layout changes due to viewport resize', async () => {
    let mediaQueryCallback: (event: MediaQueryListEvent) => void;
    (window.matchMedia as jest.Mock).mockImplementation(() => ({
      matches: false, // Desktop initially
      addEventListener: jest.fn((event: string, callback: (event: MediaQueryListEvent) => void) => {
        if (event === 'change') {
          mediaQueryCallback = callback;
        }
      }),
      removeEventListener: jest.fn(),
    }));

    const { root, waitForChanges } = await newSpecPage({
      components: [ModalDialogComponent],
      html: `
        <admiralty-modal-dialog show="true">
          <div slot="actions">
            <admiralty-button variant="secondary">Leave page</admiralty-button>
            <admiralty-button>Continue survey</admiralty-button>
          </div>
        </admiralty-modal-dialog>
      `,
    });

    // Focus on the first button
    const secondaryButton = root.querySelector("admiralty-button") as HTMLElement;
    secondaryButton.setAttribute('tabindex', '0');
    secondaryButton.focus();

    // Simulate viewport change to mobile
    (window.matchMedia as jest.Mock).mockImplementation(() => ({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    mediaQueryCallback!({} as MediaQueryListEvent);
    await waitForChanges();

    // Ensure the same secondary button element is preserved and moved to the expected position.
    const actionButtons = root.querySelector("div[slot='actions']")?.children;
    expect(actionButtons?.[1]).toBe(secondaryButton);
  });
});
