import { newSpecPage } from '@stencil/core/testing';
import { SideBarItemComponent } from './side-bar-item';

describe('admiralty-side-bar-item', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SideBarItemComponent],
      html: '<admiralty-side-bar-item></admiralty-side-bar-item>',
    });
    expect(root).toEqualHtml(`
      <admiralty-side-bar-item>
        <li>
          <a>
            <span aria-hidden="true" class="material-symbols-outlined"></span>
          </a>
        </li>
      </admiralty-side-bar-item>
    `);
  });

  it('renders active side bar item', async () => {
    const page = await newSpecPage({
      components: [SideBarItemComponent],
      html: `<admiralty-side-bar-item href="/test" active="true">Test</admiralty-side-bar-item>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-side-bar-item active="true" href="/test">
        <li class="active">
          <a href="/test">
          <span aria-hidden="true" class="material-symbols-outlined"></span>
            Test
          </a>
        </li>
      </admiralty-side-bar-item>
    `);
  });

  it('renders inactive side bar item', async () => {
    const page = await newSpecPage({
      components: [SideBarItemComponent],
      html: `<admiralty-side-bar-item href="/test" active="false">Test</admiralty-side-bar-item>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-side-bar-item active="false" href="/test">
        <li>
          <a href="/test">
          <span aria-hidden="true" class="material-symbols-outlined"></span>
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
