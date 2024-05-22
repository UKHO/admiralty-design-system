import { newSpecPage } from '@stencil/core/testing';
import { TextareaComponent } from './textarea';

let compId = -0;
let errorId = 3;

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
          <textarea aria-describedby="admiralty-textarea-hint-1 null" aria-invalid="false" id="admiralty-textarea-${compId}" value=""></textarea>
          <admiralty-input-invalid style="visibility: hidden;"></admiralty-input-invalid>
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
          <textarea aria-describedby="null null" aria-invalid="false" id="admiralty-textarea-${compId}" value="${testText}"></textarea>
          <admiralty-input-invalid style="visibility: hidden;"></admiralty-input-invalid>
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
          <textarea aria-describedby="null null" aria-invalid="false" class="disabled" id="admiralty-textarea-${compId}" value=""></textarea>
          <admiralty-input-invalid style="visibility: hidden;"></admiralty-input-invalid>
        </div>
      </admiralty-textarea>
    `);
  });

  it('should render invalid state', async () => {
    ++compId;
    ++errorId;

    const page = await newSpecPage({
      components: [TextareaComponent],
      html: `<admiralty-textarea label="Description" invalid="true" invalid-message="BAD"></admiralty-textarea>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-textarea label="Description" invalid="true" invalid-message="BAD">
        <div class="text-area-container">
          <admiralty-label for="admiralty-textarea-${compId}">Description</admiralty-label>
          <textarea aria-describedby="null admiralty-textarea-error-${errorId}" aria-invalid="true" class="invalid" id="admiralty-textarea-${compId}" value=""></textarea>
          <admiralty-input-invalid style="visibility: visible;">
            BAD
          </admiralty-input-invalid>
        </div>
      </admiralty-textarea>
    `);
  });

  it('should not show admiralty-input-invalid when invalid but no message provided', async () => {
    ++compId;
    ++errorId;

    const page = await newSpecPage({
      components: [TextareaComponent],
      html: `<admiralty-textarea label="Description" invalid="true" invalidMessage=""></admiralty-textarea>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-textarea label="Description" invalid="true" invalidMessage="">
        <div class="text-area-container">
          <admiralty-label for="admiralty-textarea-${compId}">Description</admiralty-label>
          <textarea aria-describedby="null admiralty-textarea-error-${errorId}" aria-invalid="true" class="invalid" id="admiralty-textarea-${compId}" value=""></textarea>
          <admiralty-input-invalid style="visibility: hidden;"></admiralty-input-invalid>
        </div>
      </admiralty-textarea>
    `);
  });
});
