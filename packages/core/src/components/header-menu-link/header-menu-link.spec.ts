import { newSpecPage } from '@stencil/core/testing';
import { HeaderMenuLinkComponent } from './header-menu-link';

describe('menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeaderMenuLinkComponent],
      html: `<admiralty-header-menu-link href="/test">Test</admiralty-header-menu-link>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-header-menu-link href="/test">
        <div class="menu-item">
          <a href="/test">
            Test
          </a>
        </div>
      </admiralty-header-menu-link>
    `);
  });

  it('renders active menu item', async () => {
    const page = await newSpecPage({
      components: [HeaderMenuLinkComponent],
      html: `<admiralty-header-menu-link href="/test" active="true">Test</admiralty-header-menu-link>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-header-menu-link active="true" href="/test">
        <div class="active menu-item">
          <a href="/test">
            Test
          </a>
        </div>
      </admiralty-header-menu-link>
    `);
  });

  it('renders inactive menu item', async () => {
    const page = await newSpecPage({
      components: [HeaderMenuLinkComponent],
      html: `<admiralty-header-menu-link href="/test" active="false">Test</admiralty-header-menu-link>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-header-menu-link active="false" href="/test">
        <div class="menu-item">
          <a href="/test">
            Test
          </a>
        </div>
      </admiralty-header-menu-link>
    `);
  });

  it('renders the menu title', async () => {
    const page = await newSpecPage({
      components: [HeaderMenuLinkComponent],
      html: `<admiralty-header-menu-link href="/test" menu-title="Test"/>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-header-menu-link href="/test" menu-title="Test">
        <div class="menu-item">
          <a href="/test">
            Test
          </a>
        </div>
      </admiralty-header-menu-link>
    `);
  });

  it('emits an event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [HeaderMenuLinkComponent],
      html: `<admiralty-header-menu-link href="/test">Test</admiralty-header-menu-link>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('menuItemClick', eventSpy);

    const link = page.doc.querySelector('admiralty-header-menu-link a');
    link.dispatchEvent(new Event('click'));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('emits an event when the div is clicked', async () => {
    const page = await newSpecPage({
      components: [HeaderMenuLinkComponent],
      html: `<admiralty-header-menu-link href="/test">Test</admiralty-header-menu-link>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('menuItemClick', eventSpy);

    const link = page.doc.querySelector('admiralty-header-menu-link div.menu-item');
    link.dispatchEvent(new Event('click'));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('prevents default event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [HeaderMenuLinkComponent],
      html: `<admiralty-header-menu-link href="/test" suppress-redirect="true">Test</admiralty-header-menu-link>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('menuItemClick', eventSpy);

    const link = page.doc.querySelector('admiralty-header-menu-link a');
    const event = new Event('click');
    Object.assign(event, { preventDefault: jest.fn() });
    link.dispatchEvent(event);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('does not emit the default event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [HeaderMenuLinkComponent],
      html: `<admiralty-header-menu-link href="/test" suppress-redirect="false">Test</admiralty-header-menu-link>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('menuItemClick', eventSpy);

    const link = page.doc.querySelector('admiralty-header-menu-link a');
    const event = new Event('click');
    Object.assign(event, { preventDefault: jest.fn() });
    link.dispatchEvent(event);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
