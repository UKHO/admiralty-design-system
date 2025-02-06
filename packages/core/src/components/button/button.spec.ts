import { newSpecPage } from '@stencil/core/testing';
import { ButtonComponent } from './button';

describe('admiralty-button', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ButtonComponent],
      html: '<admiralty-button></admiralty-button>',
    });
    expect(root).toEqualHtml(`
      <admiralty-button>
        <button class="primary" type="submit"></button>
      </admiralty-button>
    `);
  });

  it('renders secondary button', async () => {
    const { root } = await newSpecPage({
      components: [ButtonComponent],
      html: '<admiralty-button variant="secondary">Secondary</admiralty-button>',
    });
    expect(root).toEqualHtml(`
      <admiralty-button variant="secondary">
        <button class="secondary" type="submit">Secondary</button>
      </admiralty-button>
    `);
  });

  it('renders warning button', async () => {
    const { root } = await newSpecPage({
      components: [ButtonComponent],
      html: '<admiralty-button variant="warning">Warning</admiralty-button>',
    });
    expect(root).toEqualHtml(`
      <admiralty-button variant="warning">
        <button class="warning" type="submit">Warning</button>
      </admiralty-button>
    `);
  });

  it('renders text button', async () => {
    const { root } = await newSpecPage({
      components: [ButtonComponent],
      html: '<admiralty-button variant="text">Text</admiralty-button>',
    });
    expect(root).toEqualHtml(`
      <admiralty-button variant="text">
        <button class="text" type="submit">Text</button>
      </admiralty-button>
    `);
  });

  it('renders icon button', async () => {
    const { root } = await newSpecPage({
      components: [ButtonComponent],
      html: '<admiralty-button variant="icon" icon="fas fa-chevron-right">Icon</admiralty-button>',
    });
    expect(root).toEqualHtml(`
      <admiralty-button variant="icon" icon="fas fa-chevron-right">
        <button class="icon" type="submit">
          Icon
          <admiralty-icon class="icon-padding" icon-name="fas fa-chevron-right"></admiralty-icon>
        </button>
      </admiralty-button>
    `);
  });

  it('renders form, name and value', async () => {
    const { root } = await newSpecPage({
      components: [ButtonComponent],
      html: '<admiralty-button form="form1" name"button" value="ready">Ready</admiralty-button>',
    });
    expect(root).toEqualHtml(`
      <admiralty-button form="form1" name"button" value="ready">
        <button class="primary" form="form1" type="submit" value="ready">
          Ready
        </button>
      </admiralty-button>
    `);
  });
});
