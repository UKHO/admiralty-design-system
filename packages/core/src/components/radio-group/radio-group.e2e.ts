import { newE2EPage } from '@stencil/core/testing';

describe('radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-radio-group></admiralty-radio-group>');

    const element = await page.find('admiralty-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
