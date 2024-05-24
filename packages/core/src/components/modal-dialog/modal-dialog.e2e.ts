import { newE2EPage } from '@stencil/core/testing';

describe('modal-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-modal-dialog></admiralty-modal-dialog>');
    const element = await page.find('admiralty-modal-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
