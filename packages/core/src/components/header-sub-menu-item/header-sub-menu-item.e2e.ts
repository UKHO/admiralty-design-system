import { newE2EPage } from '@stencil/core/testing';

describe('menu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-header-sub-menu-item></admiralty-header-sub-menu-item>');

    const element = await page.find('admiralty-header-sub-menu-item');
    expect(element).toHaveClass('hydrated');
  });

  it('fires event when menu item clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-header-sub-menu-item menuTitle="Item 1"></admiralty-header-sub-menu-item>');

    const element = await page.find('div.header-sub-menu-item');

    const eventSpy = await page.spyOnEvent('subMenuItemClick');

    await element.click();

    await page.waitForChanges(); // introduced the wait for changes

    expect(eventSpy).toHaveReceivedEvent();
  });
});
