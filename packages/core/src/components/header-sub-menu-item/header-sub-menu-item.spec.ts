import { newSpecPage } from '@stencil/core/testing';
import { HeaderSubMenuItemComponent } from './header-sub-menu-item';

describe('header-sub-menu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeaderSubMenuItemComponent],
      html: `<admiralty-header-sub-menu-item menuTitle="Item 1"></slot></admiralty-header-sub-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-header-sub-menu-item menutitle="Item 1">
        <div class="header-sub-menu-item" tabindex="0">
          <span class="title"></span>
        </div>
      </admiralty-header-sub-menu-item>
    `);
  });

  it('renders a link when a value is supplied for href', async () => {
    const page = await newSpecPage({
      components: [HeaderSubMenuItemComponent],
      html: `<admiralty-header-sub-menu-item menuTitle="Item 1" href="/test"></slot></admiralty-header-sub-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-header-sub-menu-item menutitle="Item 1" href="/test">
        <div class="header-sub-menu-item">
          <a class="title" href="/test"></a>
        </div>
      </admiralty-header-sub-menu-item>
    `);
  });

  it('emits an event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [HeaderSubMenuItemComponent],
      html: `<admiralty-header-sub-menu-item href="/test">Test</admiralty-header-sub-menu-item>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('subMenuItemClick', eventSpy);

    const link = page.doc.querySelector('admiralty-header-sub-menu-item a');
    link.dispatchEvent(new Event('click'));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('emits an event when the div is clicked', async () => {
    const page = await newSpecPage({
      components: [HeaderSubMenuItemComponent],
      html: `<admiralty-header-sub-menu-item href="/test">Test</admiralty-header-sub-menu-item>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('subMenuItemClick', eventSpy);

    const link = page.doc.querySelector('admiralty-header-sub-menu-item div.header-sub-menu-item');
    link.dispatchEvent(new Event('click'));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('prevents default event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [HeaderSubMenuItemComponent],
      html: `<admiralty-header-sub-menu-item href="/test" suppress-redirect="true">Test</admiralty-header-sub-menu-item>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('subMenuItemClick', eventSpy);

    const link = page.doc.querySelector('admiralty-header-sub-menu-item a');
    const event = new Event('click');
    Object.assign(event, { preventDefault: jest.fn() });
    link.dispatchEvent(event);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('does not emit the default event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [HeaderSubMenuItemComponent],
      html: `<admiralty-header-sub-menu-item href="/test" suppress-redirect="false">Test</admiralty-header-sub-menu-item>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('subMenuItemClick', eventSpy);

    const link = page.doc.querySelector('admiralty-header-sub-menu-item a');
    const event = new Event('click');
    Object.assign(event, { preventDefault: jest.fn() });
    link.dispatchEvent(event);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
