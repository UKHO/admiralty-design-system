import { newSpecPage } from '@stencil/core/testing';
import { SelectComponent } from './select';

let id = 0;

describe('admiralty-select', () => {
  it('renders', async () => {
    id++;
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `<admiralty-select><option>Test</option></admiralty-select>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-select>
        <!---->
        <div class="admiralty-select">
          <admiralty-label for="admiralty-select-${id}-input">
            Choose a colour
          </admiralty-label>
          <div class="select-wrapper">
            <select aria-describedby=" " aria-disabled="false" aria-label="Choose a colour" class="admiralty-form-control" id="admiralty-select-1-input">
              <option>
                Test
              </option>
            </select>
            <admiralty-icon class="select-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
          <admiralty-input-invalid id="admiralty-select-${id}-error" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-select>
    `);
  });

  it('renders with basic args', async () => {
    id++;
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `
      <admiralty-select hint="Select an option from the list" label="Choose a colour">
      </admiralty-select>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-select hint="Select an option from the list" label="Choose a colour">
        <!---->
        <div class="admiralty-select">
          <admiralty-label for="admiralty-select-${id}-input">
            Choose a colour
          </admiralty-label>
          <admiralty-hint id="admiralty-select-${id}-hint">
            Select an option from the list
          </admiralty-hint>
          <div class="select-wrapper">
            <select aria-describedby="admiralty-select-${id}-hint " aria-disabled="false" aria-label="Choose a colour" class="admiralty-form-control" id="admiralty-select-${id}-input">
            </select>
            <admiralty-icon class="select-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
          <admiralty-input-invalid id="admiralty-select-${id}-error" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-select>
    `);
  });

  it('renders with no error', async () => {
    id++;
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `
      <admiralty-select error="false" error-hint="The colour must be green" hint="Select an option from the list" label="Choose a colour">
      </admiralty-select>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-select error="false" error-hint="The colour must be green" hint="Select an option from the list" label="Choose a colour">
        <!---->
        <div class="admiralty-select">
          <admiralty-label for="admiralty-select-${id}-input">
            Choose a colour
          </admiralty-label>
          <admiralty-hint id="admiralty-select-${id}-hint">
            Select an option from the list
          </admiralty-hint>
          <div class="select-wrapper">
            <select aria-describedby="admiralty-select-${id}-hint " aria-disabled="false" aria-label="Choose a colour" class="admiralty-form-control" id="admiralty-select-${id}-input">
            </select>
            <admiralty-icon class="select-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
          <admiralty-input-invalid id="admiralty-select-${id}-error" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-select>
    `);
  });

  it('renders with an error', async () => {
    id++;
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `
      <admiralty-select hint="Select an option from the list" invalid="true" invalid-message="The colour must be green" label="Choose a colour">
      </admiralty-select>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-select hint="Select an option from the list" invalid="true" invalid-message="The colour must be green" label="Choose a colour">
        <!---->
        <div class="admiralty-select">
          <admiralty-label for="admiralty-select-${id}-input">
            Choose a colour
          </admiralty-label>
          <admiralty-hint id="admiralty-select-${id}-hint">
            Select an option from the list
          </admiralty-hint>
          <div class="select-wrapper">
            <select aria-describedby="admiralty-select-${id}-hint admiralty-select-${id}-error" aria-disabled="false" aria-label="Choose a colour" class="admiralty-form-control invalid" id="admiralty-select-${id}-input">
            </select>
            <admiralty-icon class="select-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
          <admiralty-input-invalid id="admiralty-select-${id}-error">
            The colour must be green
          </admiralty-input-invalid>
        </div>
      </admiralty-select>
    `);
  });

  it('renders in disabled state', async () => {
    id++;
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `
      <admiralty-select disabled="true" error-hint="The colour must be green" hint="Select an option from the list" label="Choose a colour">
      </admiralty-select>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-select disabled="true" error-hint="The colour must be green" hint="Select an option from the list" label="Choose a colour">
        <!---->
        <div class="admiralty-select disabled">
          <admiralty-label disabled="" for="admiralty-select-${id}-input">
            Choose a colour
          </admiralty-label>
          <admiralty-hint disabled="" id="admiralty-select-${id}-hint">
            Select an option from the list
          </admiralty-hint>
          <div class="select-wrapper">
            <select aria-describedby="admiralty-select-${id}-hint " aria-disabled="true" aria-label="Choose a colour" class="admiralty-form-control disabled" disabled="" id="admiralty-select-${id}-input">
            </select>
            <admiralty-icon class="disabled select-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
          <admiralty-input-invalid id="admiralty-select-${id}-error" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-select>
    `);
  });

  it('renders fixed width', async () => {
    id++;
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `
      <admiralty-select hint="Select an option from the list" label="Choose a colour" width="150">
      </admiralty-select>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-select hint="Select an option from the list" label="Choose a colour" width="150">
        <!---->
        <div class="admiralty-select">
          <admiralty-label for="admiralty-select-${id}-input">
            Choose a colour
          </admiralty-label>
          <admiralty-hint id="admiralty-select-${id}-hint">
            Select an option from the list
          </admiralty-hint>
          <div class="select-wrapper" style="max-width: 150px;">
            <select aria-describedby="admiralty-select-${id}-hint " aria-disabled="false" aria-label="Choose a colour" class="admiralty-form-control" id="admiralty-select-${id}-input">
            </select>
            <admiralty-icon class="select-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
          <admiralty-input-invalid id="admiralty-select-${id}-error" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-select>
    `);
  });

  it('renders with a custom ID', async () => {
    const id = 'custom';
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `<admiralty-select id="${id}"><option>Test</option></admiralty-select>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-select id="${id}">
        <!---->
        <div class="admiralty-select">
          <admiralty-label for="${id}-input">
            Choose a colour
          </admiralty-label>
          <div class="select-wrapper">
            <select aria-describedby=" " aria-disabled="false" aria-label="Choose a colour" class="admiralty-form-control" id="${id}-input">
              <option>
                Test
              </option>
            </select>
            <admiralty-icon class="select-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
          <admiralty-input-invalid id="${id}-error" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-select>
    `);
  });

  it('renders a placeholder option which is disabled', async () => {
    const id = 'custom';
    const page = await newSpecPage({
      components: [SelectComponent],
      html: `<admiralty-select id="${id}"><option disabled>Select an option...</option><option>First</option></admiralty-select>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-select id="${id}">
        <!---->
        <div class="admiralty-select">
          <admiralty-label for="${id}-input">
            Choose a colour
          </admiralty-label>
          <div class="select-wrapper">
            <select aria-describedby=" " aria-disabled="false" aria-label="Choose a colour" class="admiralty-form-control" id="${id}-input">
              <option disabled="">
                Select an option...
              </option>
              <option>
                First
              </option>
            </select>
            <admiralty-icon class="select-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
          <admiralty-input-invalid id="${id}-error" style="display: none;"></admiralty-input-invalid>
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
