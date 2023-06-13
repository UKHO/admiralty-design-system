import { newE2EPage } from '@stencil/core/testing';

describe('tab-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-tab-group></admiralty-tab-group>');

    const element = await page.find('admiralty-tab-group');
    expect(element).toHaveClass('hydrated');
  });

  it('fires tab selected event', async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <admiralty-tab-group>
      <admiralty-tab label="a">test a</admiralty-tab>
      <admiralty-tab label="b">test b</admiralty-tab>
    </admiralty-tab-group>`
    );

    const element = await page.find('admiralty-tab-group .heading');

    const event = await page.spyOnEvent('admiraltyTabSelected');

    await element.click();

    await page.waitForChanges();

    expect(event).toHaveReceivedEventDetail(0);
   });
});
