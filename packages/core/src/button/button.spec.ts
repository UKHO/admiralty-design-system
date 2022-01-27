import { html, fixture } from '@open-wc/testing-helpers';
import { UKHOButton } from '..';

import './button';

describe('Button', () => {
  it('should be rendered to the DOM', async () => {
    const el = await fixture(html`<ukho-button>Test</ukho-button>`);
    expect(el.shadowRoot).not.toBeNull();
  });

  it('should have the slotted text', async () => {
    const el = await fixture(html`<ukho-button>Test</ukho-button>`);
    const slot: HTMLSlotElement = el.shadowRoot!.querySelector('slot:not([name])')!;
    const nodes = slot.assignedNodes();
    expect(nodes[0].textContent).toBe('Test');
  });

  it('should match the snapshot', async () => {
    const el = await fixture(html`<ukho-button>Test</ukho-button>`);
    expect(el.shadowRoot?.innerHTML).toMatchInlineSnapshot(`
      "<!---->
            <button class=\\"primary\\">
              <slot name=\\"start\\"></slot>
              <slot></slot>
              <slot name=\\"end\\"></slot>
            </button>
          <style></style>"
    `);
  });

  describe('properties', () => {
    it('should not be disabled', async () => {
      // ARRANGE
      const el: UKHOButton = await fixture(html`<ukho-button>Test</ukho-button>`);
      const button = el.shadowRoot!.querySelector('button')!;

      // ASSERT
      expect(button).not.toBeDisabled();
    });

    it('should be disabled', async () => {
      // ARRANGE
      const el: UKHOButton = await fixture(html`<ukho-button disabled></ukho-button>`);
      const button = el.shadowRoot!.querySelector('button')!;

      // ASSERT
      expect(button).toBeDisabled();
    });

    it('should have the default variant', async () => {
      // ARRANGE
      const el: UKHOButton = await fixture(html`<ukho-button>Test</ukho-button>`);
      const button = el.shadowRoot!.querySelector('button')!;

      // ASSERT
      expect(button).toHaveClass('primary');
      expect(button).not.toHaveClass('secondary');
    });

    it('should have the secondary variant', async () => {
      // ARRANGE
      const el: UKHOButton = await fixture(html`<ukho-button variant="secondary"></ukho-button>`);
      const button = el.shadowRoot!.querySelector('button')!;

      // ASSERT
      expect(button).toHaveClass('secondary');
      expect(button).not.toHaveClass('primary');
    });
  });

  describe('events', () => {
    it('should call the passed function when the button is pressed', async () => {
      // ARRANGE
      const testFn = jest.fn();
      const el: UKHOButton = await fixture(html`<ukho-button @click=${testFn}></ukho-button>`);
      const button = el.shadowRoot!.querySelector('button')!;

      // ACT
      button?.click();

      // ASSERT
      expect(testFn).toHaveBeenCalled();
    });

    it('should not call the passed function when the button is disabled and pressed', async () => {
      // ARRANGE
      const testFn = jest.fn();
      const el: UKHOButton = await fixture(html`<ukho-button disabled @click=${testFn}></ukho-button>`);
      const button = el.shadowRoot!.querySelector('button')!;

      // ACT
      button?.click();

      // ASSERT
      expect(testFn).not.toHaveBeenCalled();
    });
  });
});
