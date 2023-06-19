import { newSpecPage } from '@stencil/core/testing';
import { SelectComponent } from './select';

describe('admiralty-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `<admiralty-select><option>Test</option></admiralty-select>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-select>
        <div class="admiralty-select">
          <admiralty-label for="admiralty-select-1">
            Choose a colour
          </admiralty-label>
          <admiralty-hint></admiralty-hint>
          <div class="select-wrapper">
            <select aria-disabled="false" aria-label="Choose a colour" class="admiralty-form-control" id="admiralty-select-1">
              <option></option>
            </select>
            <admiralty-icon class="select-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
        </div>
      </admiralty-select>
    `);
  });

  it('renders with basic args', async () => {
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `
      <admiralty-select hint="Select an option from the list" label="Choose a colour">
      </admiralty-select>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-select hint="Select an option from the list" label="Choose a colour">
        <div class="admiralty-select">
          <admiralty-label for="admiralty-select-2">
            Choose a colour
          </admiralty-label>
          <admiralty-hint>
            Select an option from the list
          </admiralty-hint>
          <div class="select-wrapper">
            <select aria-disabled="false" aria-label="Choose a colour" class="admiralty-form-control" id="admiralty-select-2"></select>
            <admiralty-icon class="select-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
        </div>
      </admiralty-select>
    `);
  });

  it('renders with no error', async () => {
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `
      <admiralty-select error="false" error-hint="The colour must be green" hint="Select an option from the list" label="Choose a colour">
      </admiralty-select>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-select error="false" error-hint="The colour must be green" hint="Select an option from the list" label="Choose a colour">
        <div class="admiralty-select">
          <admiralty-label for="admiralty-select-3">
            Choose a colour
          </admiralty-label>
          <admiralty-hint>
            Select an option from the list
          </admiralty-hint>
          <div class="select-wrapper">
            <select aria-disabled="false" aria-label="Choose a colour" class="admiralty-form-control" id="admiralty-select-3"></select>
            <admiralty-icon class="select-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
        </div>
      </admiralty-select>
    `);
  });

  it('renders with an error', async () => {
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `
      <admiralty-select error="true" error-hint="The colour must be green" hint="Select an option from the list" label="Choose a colour">
      </admiralty-select>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-select error="true" error-hint="The colour must be green" hint="Select an option from the list" label="Choose a colour">
        <div class="admiralty-select">
          <admiralty-label for="admiralty-select-4">
            Choose a colour
          </admiralty-label>
          <admiralty-hint>
            Select an option from the list
          </admiralty-hint>
          <div class="select-wrapper">
            <select aria-disabled="false" aria-label="Choose a colour" class="admiralty-form-control error" id="admiralty-select-4"></select>
            <admiralty-icon class="select-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
          <admiralty-input-error>
            The colour must be green
          </admiralty-input-error>
        </div>
      </admiralty-select>
    `);
  });

  it('renders in disabled state', async () => {
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `
      <admiralty-select disabled="true" error-hint="The colour must be green" hint="Select an option from the list" label="Choose a colour">
      </admiralty-select>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-select disabled="true" error-hint="The colour must be green" hint="Select an option from the list" label="Choose a colour">
        <div class="admiralty-select disabled">
          <admiralty-label disabled="" for="admiralty-select-5">
            Choose a colour
          </admiralty-label>
          <admiralty-hint disabled="">
            Select an option from the list
          </admiralty-hint>
          <div class="select-wrapper">
            <select aria-disabled="true" aria-label="Choose a colour" class="admiralty-form-control disabled" disabled="" id="admiralty-select-5"></select>
            <admiralty-icon class="disabled select-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
        </div>
      </admiralty-select>
    `);
  });

  it('renders fixed width', async () => {
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `
      <admiralty-select hint="Select an option from the list" label="Choose a colour" width="150">
      </admiralty-select>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-select hint="Select an option from the list" label="Choose a colour" width="150">
        <div class="admiralty-select">
          <admiralty-label for="admiralty-select-6">
            Choose a colour
          </admiralty-label>
          <admiralty-hint>
            Select an option from the list
          </admiralty-hint>
          <div class="select-wrapper" style="max-width: 150px;">
            <select aria-disabled="false" aria-label="Choose a colour" class="admiralty-form-control" id="admiralty-select-6"></select>
            <admiralty-icon class="select-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
        </div>
      </admiralty-select>
    `);
  });

  it('fires event on selection changed', async () => {
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `<admiralty-select><option>first</option><option>second</option></admiralty-select>`,
    });

    const testValue = 'second';
    const selectedListenerSpy = jest.fn();

    page.doc.addEventListener('admiraltyChange', selectedListenerSpy);
    const select = page.root.querySelector('select');
    select.value = testValue;

    select.dispatchEvent(new Event('change'));
    await page.waitForChanges();
    expect(selectedListenerSpy).toBeCalled();
  });
});
