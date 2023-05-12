import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-select></admiralty-select>');

    const element = await page.find('admiralty-select');
    expect(element).toHaveClass('hydrated');
  });

  it('fires event on losing focus', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<admiralty-select>
        <option>first</option>
      </admiralty-select>
      <input></input>`,
    );

    const event = await page.spyOnEvent('admiraltyBlur');

    const sel = await page.find('admiralty-select >>> select');

    const input = await page.find('input');

    await sel.focus();
    await input.focus();
    await page.waitForChanges();

    expect(event).toHaveReceivedEvent();
  });
});
