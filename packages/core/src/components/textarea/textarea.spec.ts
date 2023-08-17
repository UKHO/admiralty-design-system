import { newSpecPage } from '@stencil/core/testing';
import { TextareaComponent } from './textarea';

let compId = -1;

describe('admiralty-textarea', () => {
  it('renders', async () => {
    ++compId;

    const page = await newSpecPage({
      components: [TextareaComponent],
      html: `<admiralty-textarea label="Description" hint="Please enter description"></admiralty-textarea>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-textarea label="Description" hint="Please enter description">
        <div class="text-area-container">
          <admiralty-label for="admiralty-textarea-${compId}">
            Description
          </admiralty-label>
          <admiralty-hint>
            Please enter description
          </admiralty-hint>
          <textarea id="admiralty-textarea-${compId}" value=""></textarea>
        </div>
      </admiralty-textarea>
    `);
  });

  it('should reflect textarea Text', async () => {
    ++compId;

    const testText = 'Test Text';

    const page = await newSpecPage({
      components: [TextareaComponent],
      html: `<admiralty-textarea value="${testText}"></admiralty-textarea>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-textarea value="${testText}">
        <div class="text-area-container">
          <textarea id="admiralty-textarea-${compId}" value="${testText}"></textarea>
        </div>
      </admiralty-textarea>
    `);
  });

  it('should render disabled state', async () => {
    ++compId;

    const page = await newSpecPage({
      components: [TextareaComponent],
      html: `<admiralty-textarea label="Description" disabled="true"></admiralty-textarea>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-textarea label="Description" disabled="true">
        <div class="text-area-container">
          <admiralty-label disabled="" for="admiralty-textarea-${compId}">Description</admiralty-label>
          <textarea class="disabled" id="admiralty-textarea-${compId}" value=""></textarea>
        </div>
      </admiralty-textarea>
    `);
  });

  it('should render invalid state', async () => {
    ++compId;

    const page = await newSpecPage({
      components: [TextareaComponent],
      html: `<admiralty-textarea label="Description" invalid="true" invalid-message="BAD"></admiralty-textarea>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-textarea label="Description" invalid="true" invalid-message="BAD">
        <div class="text-area-container">
          <admiralty-label for="admiralty-textarea-${compId}">Description</admiralty-label>
          <textarea class="invalid" id="admiralty-textarea-${compId}" value=""></textarea>
          <admiralty-input-error>
            BAD
          </admiralty-input-error>
        </div>
      </admiralty-textarea>
    `);
  });

  it('should not show admiralty-input-error when invalid but no message provided', async () => {
    ++compId;

    const page = await newSpecPage({
      components: [TextareaComponent],
      html: `<admiralty-textarea label="Description" invalid="true" invalidMessage=""></admiralty-textarea>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-textarea label="Description" invalid="true" invalidMessage="">
        <div class="text-area-container">
          <admiralty-label for="admiralty-textarea-${compId}">Description</admiralty-label>
          <textarea class="invalid" id="admiralty-textarea-${compId}" value=""></textarea>
        </div>
      </admiralty-textarea>
    `);
  });
});
