import { newE2EPage } from '@stencil/core/testing';

describe('header-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-header-profile></admiralty-header-profile>');

    const element = await page.find('admiralty-header-profile');
    expect(element).toHaveClass('hydrated');
  });
});
