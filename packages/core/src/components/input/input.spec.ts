import { newSpecPage } from '@stencil/core/testing';
import { InputComponent } from './input';

let inputId = 1;
let errorId = 1;

describe('admiralty-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input>
        <div class="text-input-container">
          <input aria-describedby=" " aria-invalid="false" autocomplete="off" id="admiralty-input-${inputId}" name="admiralty-input-1" type="text" value="">
          <admiralty-input-invalid id="admiralty-input-error-${inputId}" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });

  it('renders with a label', async () => {
    inputId++;
    errorId++;
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input label="test-label"></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input label="test-label">
        <div class="text-input-container">
          <admiralty-label for="admiralty-input-2">test-label</admiralty-label>
          <input aria-describedby=" " aria-invalid="false" autocomplete="off" id="admiralty-input-${inputId}" name="admiralty-input-2" type="text" value="">
          <admiralty-input-invalid id="admiralty-input-error-${inputId}" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });

  it('renders disabled', async () => {
    inputId++;
    errorId++;
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input disabled></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input disabled>
        <div class="text-input-container">
          <input aria-describedby=" " aria-invalid="false" disabled autocomplete="off" class="disabled" id="admiralty-input-${inputId}" name="admiralty-input-3" type="text" value="">
          <admiralty-input-invalid id="admiralty-input-error-${inputId}" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });

  it('renders invalid even without invalidMessage', async () => {
    inputId++;
    errorId++;
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input invalid="true"></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input invalid="true">
        <div class="text-input-container">
          <input aria-describedby=" admiralty-input-error-4" aria-invalid="true" autocomplete="off" class="invalid" id="admiralty-input-${inputId}" name="admiralty-input-4" type="text" value="">
          <admiralty-input-invalid id="admiralty-input-error-${inputId}" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });

  it('renders invalid with invalidMessage', async () => {
    inputId++;
    errorId++;
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input invalid="true" invalid-message="This is invalid!"></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input invalid="true" invalid-message="This is invalid!">
          <div class="text-input-container">
              <input aria-describedby=" admiralty-input-error-5" aria-invalid="true" autocomplete="off" class="invalid" id="admiralty-input-${inputId}" name="admiralty-input-5" type="text" value="">
              <admiralty-input-invalid id="admiralty-input-error-${inputId}">
              This is invalid!
              </admiralty-input-invalid>
          </div>
      </admiralty-input>
      `);
  });

  it('renders with type', async () => {
    inputId++;
    errorId++;
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input type="date"></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input type="date">
        <div class="text-input-container">
          <input aria-describedby=" " aria-invalid="false" type="date" autocomplete="off" id="admiralty-input-${inputId}" name="admiralty-input-6" value="">
          <admiralty-input-invalid id="admiralty-input-error-${inputId}" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });
});
