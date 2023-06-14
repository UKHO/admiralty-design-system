import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-textarea', () => {
  it.skip('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-textarea></admiralty-textarea>');

    const element = await page.find('admiralty-textarea');
    expect(element).toHaveClass('hydrated');
  });

  // TODOL: This test does not work!
  it.skip('fires event on text changed', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-textarea>Something</admiralty-textarea><input></input>');

    const textChangedEvent = await page.spyOnEvent('textareaChanged');

    const element = await page.find('admiralty-textarea');

    const ta = await page.find('textarea');
    const input = await page.find('input');

    await ta.focus();
    element.setProperty('text', 'Something else');

    ta.innerText = 'Something else';
    await input.focus();

    await page.waitForChanges();

    expect(textChangedEvent).toHaveReceivedEvent();
  });

  it('fires event on losing focus', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-textarea></admiralty-textarea><input></input>');

    const textareaBlur = await page.spyOnEvent('textareaBlur');

    const ta = await page.find('textarea');
    const input = await page.find('input');

    await ta.focus();
    await input.focus();

    await page.waitForChanges();

    expect(textareaBlur).toHaveReceivedEvent();
  });
});
