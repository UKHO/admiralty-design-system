import { newSpecPage } from '@stencil/core/testing';
import { TextareaComponent } from './textarea';

let id = 0;

describe('admiralty-textarea', () => {
  it('renders', async () => {
    ++id;

    const page = await newSpecPage({
      components: [TextareaComponent],
      html: `<admiralty-textarea label="Description" hint="Please enter description"></admiralty-textarea>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-textarea label="Description" hint="Please enter description">
        <div class="text-area-container">
          <admiralty-label for="admiralty-textarea-${id}">
            Description
          </admiralty-label>
          <admiralty-hint id="admiralty-textarea-hint-${id}">
            Please enter description
          </admiralty-hint>
          <textarea aria-describedby="admiralty-textarea-hint-1 " aria-invalid="false" id="admiralty-textarea-${id}" value=""></textarea>
          <admiralty-input-invalid id="admiralty-textarea-error-${id}" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-textarea>
    `);
  });

  it('should reflect textarea Text', async () => {
    ++id;

    const testText = 'Test Text';

    const page = await newSpecPage({
      components: [TextareaComponent],
      html: `<admiralty-textarea value="${testText}"></admiralty-textarea>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-textarea value="${testText}">
        <div class="text-area-container">
          <textarea aria-describedby=" " aria-invalid="false" id="admiralty-textarea-${id}" value="${testText}"></textarea>
          <admiralty-input-invalid id="admiralty-textarea-error-${id}" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-textarea>
    `);
  });

  it('should render disabled state', async () => {
    ++id;

    const page = await newSpecPage({
      components: [TextareaComponent],
      html: `<admiralty-textarea label="Description" disabled="true"></admiralty-textarea>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-textarea label="Description" disabled="true">
        <div class="text-area-container">
          <admiralty-label disabled="" for="admiralty-textarea-${id}">Description</admiralty-label>
          <textarea aria-describedby=" " aria-invalid="false" class="disabled" id="admiralty-textarea-${id}" value=""></textarea>
          <admiralty-input-invalid id="admiralty-textarea-error-${id}" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-textarea>
    `);
  });

  it('should render invalid state', async () => {
    ++id;

    const page = await newSpecPage({
      components: [TextareaComponent],
      html: `<admiralty-textarea label="Description" invalid="true" invalid-message="BAD"></admiralty-textarea>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-textarea label="Description" invalid="true" invalid-message="BAD">
        <div class="text-area-container">
          <admiralty-label for="admiralty-textarea-${id}">Description</admiralty-label>
          <textarea aria-describedby=" admiralty-textarea-error-${id}" aria-invalid="true" class="invalid" id="admiralty-textarea-${id}" value=""></textarea>
          <admiralty-input-invalid id="admiralty-textarea-error-${id}">
            BAD
          </admiralty-input-invalid>
        </div>
      </admiralty-textarea>
    `);
  });

  it('should not show admiralty-input-invalid when invalid but no message provided', async () => {
    ++id;

    const page = await newSpecPage({
      components: [TextareaComponent],
      html: `<admiralty-textarea label="Description" invalid="true" invalidMessage=""></admiralty-textarea>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-textarea label="Description" invalid="true" invalidMessage="">
        <div class="text-area-container">
          <admiralty-label for="admiralty-textarea-${id}">Description</admiralty-label>
          <textarea aria-describedby=" admiralty-textarea-error-${id}" aria-invalid="true" class="invalid" id="admiralty-textarea-${id}" value=""></textarea>
          <admiralty-input-invalid id="admiralty-textarea-error-${id}" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-textarea>
    `);
  });

  it('renders with a custom identifier', async () => {
    ++id;

    const page = await newSpecPage({
      components: [TextareaComponent],
      html: `<admiralty-textarea identifier="custom" label="Description" hint="Please enter description"></admiralty-textarea>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-textarea identifier="custom" label="Description" hint="Please enter description">
        <div class="text-area-container">
          <admiralty-label for="custom">
            Description
          </admiralty-label>
          <admiralty-hint id="admiralty-textarea-hint-${id}">
            Please enter description
          </admiralty-hint>
          <textarea aria-describedby="admiralty-textarea-hint-6 " aria-invalid="false" id="custom" value=""></textarea>
          <admiralty-input-invalid id="admiralty-textarea-error-${id}" style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-textarea>
    `);
  });
});
