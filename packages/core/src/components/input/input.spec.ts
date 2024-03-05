import { newSpecPage } from '@stencil/core/testing';
import { InputComponent } from './input';

describe('admiralty-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input>
        <div class="text-input-container">
          <input aria-describedby="null null" aria-invalid="false" autocomplete="off" id="admiralty-input-1" name="admiralty-input-1" type="text" value="">
          <admiralty-input-invalid id="admiralty-input-error-1" style="visibility: hidden;"></admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });

  it('renders with a label', async () => {
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input label="test-label"></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input label="test-label">
        <div class="text-input-container">
          <admiralty-label for="admiralty-input-2">test-label</admiralty-label>
          <input aria-describedby="null null" aria-invalid="false" autocomplete="off" id="admiralty-input-2" name="admiralty-input-2" type="text" value="">
          <admiralty-input-invalid id="admiralty-input-error-2" style="visibility: hidden;"></admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });

  it('renders disabled', async () => {
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input disabled></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input disabled>
        <div class="text-input-container">
          <input aria-describedby="null null" aria-invalid="false" disabled autocomplete="off" class="disabled" id="admiralty-input-3" name="admiralty-input-3" type="text" value="">
          <admiralty-input-invalid id="admiralty-input-error-3" style="visibility: hidden;"></admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });

  it('renders invalid even without invalidMessage', async () => {
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input invalid="true"></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input invalid="true">
        <div class="text-input-container">
          <input autocomplete="off" class="invalid" id="admiralty-input-4" name="admiralty-input-4" type="text" value="">
          <admiralty-input-invalid style="visibility: hidden;"></admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });

  it('renders invalid with invalidMessage', async () => {
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input invalid="true" invalid-message="This is invalid!"></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input invalid="true" invalid-message="This is invalid!">
        <div class="text-input-container">
          <input aria-describedby="null null" aria-invalid="false" autocomplete="off" class="invalid" id="admiralty-input-5" name="admiralty-input-5" type="text" value="">
          <admiralty-input-invalid id="admiralty-input-error-4" style="visibility: visible;">
            This is invalid!
          </admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });

  it('renders with type', async () => {
    const page = await newSpecPage({
      components: [InputComponent],
      html: `<admiralty-input type="date"></admiralty-input>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-input type="date">
        <div class="text-input-container">
          <input aria-describedby="null null" aria-invalid="false" type="date" autocomplete="off" id="admiralty-input-6" name="admiralty-input-6" value="">
          <admiralty-input-invalid id="admiralty-input-error-6" style="visibility: hidden;"></admiralty-input-invalid>
        </div>
      </admiralty-input>
    `);
  });
});

it('renders with maxlength', async () => {
  const page = await newSpecPage({
    components: [InputComponent],
    html: `<admiralty-input max-length="1"></admiralty-input>`,
  });
  expect(page.root).toEqualHtml(`
    <admiralty-input max-length="1">
      <div class="text-input-container">
        <input autocomplete="off" class="" id="admiralty-input-7" maxlength="1" name="admiralty-input-7" type="text" value="">
        <admiralty-input-invalid style="visibility: hidden;"></admiralty-input-invalid>
      </div>
    </admiralty-input>
  `);
});
