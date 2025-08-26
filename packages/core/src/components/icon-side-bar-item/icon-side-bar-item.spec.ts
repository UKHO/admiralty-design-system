import { newSpecPage } from '@stencil/core/testing';
import { IconSideBarItemComponent } from "./icon-side-bar-item";

describe('admiralty-icon-side-bar-item', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [IconSideBarItemComponent],
      html: '<admiralty-icon-side-bar-item></admiralty-icon-side-bar-item>',
    });
    expect(root).toEqualHtml(`
      <admiralty-icon-side-bar-item data-icon-side-bar-item-id="icon-side-bar-item-1">
        <li>
          <a class="active icon-side-bar-item-link" id="icon-side-bar-item-anchor-1">
            <div class="icon">
              <admiralty-icon></admiralty-icon>
            </div>
          </a>
        </li>
      </admiralty-icon-side-bar-item>
    `);
  });

  it('renders active side bar item', async () => {
    const page = await newSpecPage({
      components: [IconSideBarItemComponent],
      html: `<admiralty-icon-side-bar-item href="/test" active="true" item-text="Test"></admiralty-icon-side-bar-item>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-icon-side-bar-item active="" data-icon-side-bar-item-id="icon-side-bar-item-2" href="/test" item-text="Test">
        <li>
          <a class="active icon-side-bar-item-link" href="/test" id="icon-side-bar-item-anchor-2">
            <div class="icon">
              <admiralty-icon></admiralty-icon>
            </div>
            Test
          </a>
        </li>
      </admiralty-icon-side-bar-item>
    `);
  });

  it('renders inactive side bar item', async () => {
    const page = await newSpecPage({
      components: [IconSideBarItemComponent],
      html: `<admiralty-icon-side-bar-item href="/test" active="false" item-text="Test"></admiralty-icon-side-bar-item>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-icon-side-bar-item active="false" data-icon-side-bar-item-id="icon-side-bar-item-3" href="/test" item-text="Test">
        <li>
          <a class="active icon-side-bar-item-link" href="/test" id="icon-side-bar-item-anchor-3">
            <div class="icon">
              <admiralty-icon></admiralty-icon>
            </div>
            Test
          </a>
        </li>
      </admiralty-icon-side-bar-item>
    `);
  });

  it('should emit sideBarItemClick event when handleClick() is called', () => {
    const sideBarItemComponent = new IconSideBarItemComponent();
    sideBarItemComponent.href = '/test';

    const sideBarItemSelectedEmitSpy = jest.spyOn(sideBarItemComponent.iconSideBarItemClick, 'emit');

    expect(sideBarItemSelectedEmitSpy).toHaveBeenCalledTimes(0);

    sideBarItemComponent.handleClick(new MouseEvent('click'));

    expect(sideBarItemSelectedEmitSpy).toHaveBeenCalledTimes(1);
    expect(sideBarItemSelectedEmitSpy).toHaveBeenCalledWith('/test');
  });

  it('emits an event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [IconSideBarItemComponent],
      html: `<admiralty-icon-side-bar-item href="/test">Test</admiralty-icon-side-bar-item>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('iconSideBarItemClick', eventSpy);

    const link = page.doc.querySelector('admiralty-icon-side-bar-item a');
    link.dispatchEvent(new Event('click'));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('prevents default event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [IconSideBarItemComponent],
      html: `<admiralty-icon-side-bar-item href="/test" suppress-redirect="true">Test</admiralty-icon-side-bar-item>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('iconSideBarItemClick', eventSpy);

    const link = page.doc.querySelector('admiralty-icon-side-bar-item a');
    const event = new Event('click');
    Object.assign(event, { preventDefault: jest.fn() });
    link.dispatchEvent(event);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('does not emit the default event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [IconSideBarItemComponent],
      html: `<admiralty-icon-side-bar-item href="/test" suppress-redirect="false">Test</admiralty-icon-side-bar-item>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('iconSideBarItemClick', eventSpy);

    const link = page.doc.querySelector('admiralty-icon-side-bar-item a');
    const event = new Event('click');
    Object.assign(event, { preventDefault: jest.fn() });
    link.dispatchEvent(event);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
