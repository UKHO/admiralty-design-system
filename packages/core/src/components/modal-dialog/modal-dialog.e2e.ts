import { newE2EPage } from '@stencil/core/testing';

describe('modal-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<admiralty-modal-dialog></admiralty-modal-dialog>');
    const element = await page.find('admiralty-modal-dialog');
    expect(element).toHaveClass('hydrated');
  });

  it('traps focus and restores it when escape closes the dialog', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <button id="trigger">Open dialog</button>
      <admiralty-modal-dialog
        heading="Do you want to leave this page?"
        label="Do you want to leave this page?"
        description="If you leave this page, your survey won't be saved and can't be recovered"
      >
        <div slot="content">
          <div>If you leave this page, your survey won't be saved and can't be recovered</div>
        </div>
        <div slot="actions">
          <admiralty-button variant="secondary">Leave page</admiralty-button>
          <admiralty-button>Continue survey</admiralty-button>
        </div>
      </admiralty-modal-dialog>
    `);

    await page.$eval('#trigger', element => (element as HTMLButtonElement).focus());
    await page.$eval('admiralty-modal-dialog', element => ((element as HTMLAdmiraltyModalDialogElement).show = true));
    await page.waitForChanges();

    expect(await page.evaluate(() => document.activeElement?.textContent?.trim())).toContain('Leave page');

    await page.keyboard.press('Tab');
    expect(await page.evaluate(() => document.activeElement?.textContent?.trim())).toContain('Continue survey');

    await page.keyboard.press('Tab');
    expect(await page.evaluate(() => document.activeElement?.textContent?.trim())).toContain('Leave page');

    await page.keyboard.press('Escape');
    await page.waitForChanges();

    expect(await page.$eval('admiralty-modal-dialog', element => (element as HTMLAdmiraltyModalDialogElement).show)).toBe(false);
    expect(await page.evaluate(() => (document.activeElement as HTMLElement | null)?.id)).toBe('trigger');
  });
});
