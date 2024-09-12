import { newSpecPage } from '@stencil/core/testing';
import { InputComponent } from './input';

let id = 1;

describe('admiralty-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input>
        <div class="text-input-container">
          <input aria-describedby=" " aria-invalid="false" autocomplete="off" id="admiralty-input-${id}-input" type="text" value="">
          <admiralty-input-invalid id="admiralty-input-${id}-error" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });

  it('renders with a label', async () => {
    id++;
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input label="test-label"></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input label="test-label">
        <div class="text-input-container">
          <admiralty-label for="admiralty-input-2-input">test-label</admiralty-label>
          <input aria-describedby=" " aria-invalid="false" autocomplete="off" id="admiralty-input-${id}-input" type="text" value="">
          <admiralty-input-invalid id="admiralty-input-${id}-error" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });

  it('renders disabled', async () => {
    id++;
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input disabled></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input disabled>
        <div class="text-input-container">
          <input aria-describedby=" " aria-invalid="false" disabled autocomplete="off" class="disabled" id="admiralty-input-${id}-input" type="text" value="">
          <admiralty-input-invalid id="admiralty-input-${id}-error" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });

  it('renders invalid even without invalidMessage', async () => {
    id++;
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input invalid="true"></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input invalid="true">
        <div class="text-input-container">
          <input aria-describedby=" admiralty-input-4-error" aria-invalid="true" autocomplete="off" class="invalid" id="admiralty-input-${id}-input" type="text" value="">
          <admiralty-input-invalid id="admiralty-input-${id}-error" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });

  it('renders invalid with invalidMessage', async () => {
    id++;
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input invalid="true" invalid-message="This is invalid!"></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input invalid="true" invalid-message="This is invalid!">
          <div class="text-input-container">
              <input aria-describedby=" admiralty-input-5-error" aria-invalid="true" autocomplete="off" class="invalid" id="admiralty-input-${id}-input" type="text" value="">
              <admiralty-input-invalid id="admiralty-input-${id}-error">
              This is invalid!
              </admiralty-input-invalid>
          </div>
      </admiralty-input>
      `);
  });

  it('renders with type', async () => {
    id++;
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input type="date"></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input type="date">
        <div class="text-input-container">
          <input aria-describedby=" " aria-invalid="false" type="date" autocomplete="off" id="admiralty-input-${id}-input" value="">
          <admiralty-input-invalid id="admiralty-input-${id}-error" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });

  it('renders with a custom ID', async () => {
    const id = 'custom';
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input id="custom" label="test-label" hint="test-hint" invalid="true" invalid-message="This is invalid!"></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input id="custom" hint="test-hint" invalid="true" invalid-message="This is invalid!" label="test-label">
          <div class="text-input-container">
            <admiralty-label for="${id}-input">
              test-label
            </admiralty-label>
            <admiralty-hint id="${id}-hint">
              test-hint
            </admiralty-hint>
              <input aria-describedby="${id}-hint ${id}-error" aria-invalid="true" autocomplete="off" class="invalid" id="${id}-input" type="text" value="">
              <admiralty-input-invalid id="${id}-error">
              This is invalid!
              </admiralty-input-invalid>
          </div>
      </admiralty-input>
      `);
  });
});
