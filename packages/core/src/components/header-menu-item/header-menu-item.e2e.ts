import { newE2EPage } from '@stencil/core/testing';

describe('menu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-header-menu-item></admiralty-header-menu-item>');

    const element = await page.find('admiralty-header-menu-item');
    expect(element).toHaveClass('hydrated');
  });

  // TODO: Fix this test - menu item should be clickable
  it.skip('fires event when menu item clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-header-menu-item menuTitle="Item 1"></admiralty-header-menu-item>');

    const element = await page.find('admiralty-header-menu-item >>> .menu-item');

    const eventSpy = await page.spyOnEvent('menuItemClick');

    await element.click();

    await page.waitForChanges();

    expect(eventSpy).toHaveReceivedEvent();
  });
});
