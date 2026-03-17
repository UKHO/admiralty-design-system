import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-progress-tracker', () => {
    it('renders', async () => {
        const page = await newE2EPage();

        await page.setContent('<admiralty-progress-tracker></admiralty-progress-tracker>');
        const element = await page.find('admiralty-progress-tracker');

        expect(element).toHaveClass('hydrated');
    });
});
