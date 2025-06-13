import { newSpecPage } from '@stencil/core/testing';
import { SideBarItemComponent } from './side-bar-item';

describe('admiralty-side-bar-item', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SideBarItemComponent],
      html: '<admiralty-side-bar-item></admiralty-side-bar-item>',
    });
    expect(root).toEqualHtml(`
      <admiralty-side-bar-item data-side-bar-item-id="side-bar-item-1">
        <li>
          <a class="active primary-link" id="side-bar-item-anchor-1">
            <div class="icon">
              <admiralty-icon></admiralty-icon>
            </div>
          </a>
        </li>
      </admiralty-side-bar-item>
    `);
  });

  it('renders active side bar item', async () => {
    const page = await newSpecPage({
      components: [SideBarItemComponent],
      html: `<admiralty-side-bar-item href="/test" active="true" item-text="Test"></admiralty-side-bar-item>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-side-bar-item active="" data-side-bar-item-id="side-bar-item-2" href="/test" item-text="Test">
        <li>
          <a class="active primary-link" href="/test" id="side-bar-item-anchor-2">
            <div class="icon">
              <admiralty-icon></admiralty-icon>
            </div>
            Test
          </a>
        </li>
      </admiralty-side-bar-item>
    `);
  });

  it('renders inactive side bar item', async () => {
    const page = await newSpecPage({
      components: [SideBarItemComponent],
      html: `<admiralty-side-bar-item href="/test" active="false" item-text="Test"></admiralty-side-bar-item>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-side-bar-item active="false" data-side-bar-item-id="side-bar-item-3" href="/test" item-text="Test">
        <li>
          <a class="active primary-link" href="/test" id="side-bar-item-anchor-3">
            <div class="icon">
              <admiralty-icon></admiralty-icon>
            </div>
            Test
          </a>
        </li>
      </admiralty-side-bar-item>
    `);
  });

  it('should emit sideBarItemClick event when handleClick() is called', () => {
    const sideBarItemComponent = new SideBarItemComponent();
    sideBarItemComponent.href = '/test';

    const sideBarItemSelectedEmitSpy = jest.spyOn(sideBarItemComponent.sideBarItemClick, 'emit');

    expect(sideBarItemSelectedEmitSpy).toHaveBeenCalledTimes(0);

    sideBarItemComponent.handleClick(new MouseEvent('click'));

    expect(sideBarItemSelectedEmitSpy).toHaveBeenCalledTimes(1);
    expect(sideBarItemSelectedEmitSpy).toHaveBeenCalledWith('/test');
  });

  it('emits an event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [SideBarItemComponent],
      html: `<admiralty-side-bar-item href="/test">Test</admiralty-side-bar-item>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('sideBarItemClick', eventSpy);

    const link = page.doc.querySelector('admiralty-side-bar-item a');
    link.dispatchEvent(new Event('click'));

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('prevents default event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [SideBarItemComponent],
      html: `<admiralty-side-bar-item href="/test" suppress-redirect="true">Test</admiralty-side-bar-item>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('sideBarItemClick', eventSpy);

    const link = page.doc.querySelector('admiralty-side-bar-item a');
    const event = new Event('click');
    Object.assign(event, { preventDefault: jest.fn() });
    link.dispatchEvent(event);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('does not emit the default event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [SideBarItemComponent],
      html: `<admiralty-side-bar-item href="/test" suppress-redirect="false">Test</admiralty-side-bar-item>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('sideBarItemClick', eventSpy);

    const link = page.doc.querySelector('admiralty-side-bar-item a');
    const event = new Event('click');
    Object.assign(event, { preventDefault: jest.fn() });
    link.dispatchEvent(event);

    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
