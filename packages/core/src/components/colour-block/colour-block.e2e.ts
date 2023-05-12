import { newE2EPage } from '@stencil/core/testing';

describe('colour-block', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-colour-block></admiralty-colour-block>');
    const element = await page.find('admiralty-colour-block');
    expect(element).toHaveClass('hydrated');
  });
});
