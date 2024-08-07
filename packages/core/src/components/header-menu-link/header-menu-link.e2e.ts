import { newE2EPage } from '@stencil/core/testing';

describe('menu-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-header-menu-link>Test</admiralty-header-menu-link>');

    const element = await page.find('admiralty-header-menu-link');
    expect(element).toHaveClass('hydrated');
  });
});
