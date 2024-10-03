import { newSpecPage } from '@stencil/core/testing';
import { DialogueComponent } from './dialogue';

describe('admiralty-dialogue', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [DialogueComponent],
      html: '<admiralty-dialogue></admiralty-dialogue>',
    });
    expect(root).toEqualHtml(`
      <admiralty-dialogue>
        <section class="dialogue info">
          <div class="dialogue-title">
            <admiralty-icon class="dialogue-title-icon" name="info-rounded"></admiralty-icon>
            <h2></h2>
          </div>
        </section>
      </admiralty-dialogue>
    `);
  });

  it('renders info', async () => {
    const { root } = await newSpecPage({
      components: [DialogueComponent],
      html: '<admiralty-dialogue type="info" heading="Test">Content</admiralty-dialogue>',
    });
    expect(root).toEqualHtml(`
      <admiralty-dialogue type="info" heading="Test">
        <section class="dialogue info">
          <div class="dialogue-title">
            <admiralty-icon class="dialogue-title-icon" name="info-rounded"></admiralty-icon>
            <h2>Test</h2>
          </div>
          Content
        </section>
      </admiralty-dialogue>
    `);
  });

  it('renders error', async () => {
    const { root } = await newSpecPage({
      components: [DialogueComponent],
      html: '<admiralty-dialogue type="error" heading="Test">Content</admiralty-dialogue>',
    });
    expect(root).toEqualHtml(`
      <admiralty-dialogue type="error" heading="Test">
        <section class="dialogue error">
          <div class="dialogue-title">
            <admiralty-icon class="dialogue-title-icon" name="priority-high-rounded"></admiralty-icon>
            <h2>Test</h2>
          </div>
          Content
        </section>
      </admiralty-dialogue>
    `);
  });

  it('renders success', async () => {
    const { root } = await newSpecPage({
      components: [DialogueComponent],
      html: '<admiralty-dialogue type="success" heading="Test">Content</admiralty-dialogue>',
    });
    expect(root).toEqualHtml(`
      <admiralty-dialogue type="success" heading="Test">
        <section class="dialogue success">
          <div class="dialogue-title">
            <admiralty-icon class="dialogue-title-icon" name="check-rounded"></admiralty-icon>
            <h2>Test</h2>
          </div>
          Content
        </section>
      </admiralty-dialogue>
    `);
  });

  it('renders warning', async () => {
    const { root } = await newSpecPage({
      components: [DialogueComponent],
      html: '<admiralty-dialogue type="warning" heading="Test">Content</admiralty-dialogue>',
    });
    expect(root).toEqualHtml(`
      <admiralty-dialogue type="warning" heading="Test">
        <section class="dialogue warning">
          <div class="dialogue-title">
            <admiralty-icon class="dialogue-title-icon" name="warning-rounded"></admiralty-icon>
            <h2>Test</h2>
          </div>
          Content
       </section>
       </admiralty-dialogue>
    `);
  });
});
