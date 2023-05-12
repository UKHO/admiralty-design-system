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
        <mock:shadow-root>
          <div class="text-area-container">
            <admiralty-label for="admiralty-textarea-${compId}">
              Description
            </admiralty-label>
            <admiralty-hint>
              Please enter description
            </admiralty-hint>
            <textarea id="admiralty-textarea-${compId}"></textarea>
          </div>
        </mock:shadow-root>
      </admiralty-textarea>
    `);
  });

  it('should reflect textarea Text', async () => {
    ++compId;

    const testText = 'Test Text';

    const page = await newSpecPage({
      components: [TextareaComponent],
      html: `<admiralty-textarea text="${testText}"></admiralty-textarea>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-textarea text="${testText}">
        <mock:shadow-root>
          <div class="text-area-container">
            <textarea id="admiralty-textarea-${compId}">${testText}</textarea>
          </div>
        </mock:shadow-root>
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
        <mock:shadow-root>
          <div class="text-area-container">
            <admiralty-label disabled="" for="admiralty-textarea-${compId}">Description</admiralty-label>
            <textarea class="disabled" id="admiralty-textarea-${compId}"></textarea>
          </div>
        </mock:shadow-root>
      </admiralty-textarea>
    `);
  });

  it('should render invalid state', async () => {
    ++compId;

    const page = await newSpecPage({
      components: [TextareaComponent],
      html: `<admiralty-textarea label="Description" invalid="true" invalidMessage="BAD"></admiralty-textarea>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-textarea label="Description" invalid="true" invalidMessage="BAD">
        <mock:shadow-root>
          <div class="text-area-container">
            <admiralty-label for="admiralty-textarea-${compId}">Description</admiralty-label>
            <textarea class="invalid" id="admiralty-textarea-${compId}"></textarea>
            <admiralty-input-error></admiralty-input-error>
          </div>
        </mock:shadow-root>
      </admiralty-textarea>
    `);
  });
});
