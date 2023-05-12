import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-header></admiralty-header>');

    const element = await page.find('admiralty-header');
    expect(element).toHaveClass('hydrated');
  });

  it('fires event on header title clicked', async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <admiralty-header logo-alt-text="Logo" logo-link-url="http://www.example.com" logo-img-url="logo.svg" header-title-url="#" header-title="Design System">
    </admiralty-header>
    `);

    const element = await page.find('admiralty-header .header-title > a');

    const eventSpy = await page.spyOnEvent('titledClicked');

    await element.click();

    await page.waitForChanges(); // introduced the wait for changes

    expect(eventSpy).toHaveReceivedEvent();
  });
});
