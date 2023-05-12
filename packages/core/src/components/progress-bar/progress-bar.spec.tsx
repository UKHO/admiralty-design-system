import { newSpecPage } from '@stencil/core/testing';
import { ProgressBarComponent } from './progress-bar';

describe('progress-bar', () => {
  let progressId = 0;

  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProgressBarComponent],
      html: `<admiralty-progress-bar></admiralty-progress-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-progress-bar>
        <div class="admiralty-progress">
          <progress id="admiralty-progress-${++progressId}" max="100" value="0"></progress>
        </div>
      </admiralty-progress-bar>
    `);
  });

  it('renders 55% progress', async () => {
    const page = await newSpecPage({
      components: [ProgressBarComponent],
      html: `<admiralty-progress-bar progression=55></admiralty-progress-bar>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-progress-bar progression="55">
        <div class="admiralty-progress">
          <progress id="admiralty-progress-${++progressId}" max="100" value="55"></progress>
        </div>
      </admiralty-progress-bar>
    `);
  });

  it('renders progress with a label', async () => {
    const page = await newSpecPage({
      components: [ProgressBarComponent],
      html: `<admiralty-progress-bar progression=50 label="Test label"></admiralty-progress-bar>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-progress-bar label="Test label" progression="50">
        <div class="admiralty-progress">
          <admiralty-label for="admiralty-progress-${++progressId}">
            Test label
          </admiralty-label>
          <progress id="admiralty-progress-3" max="100" value="50"></progress>
        </div>
      </admiralty-progress-bar>
    `);
  });

  it('renders an error', async () => {
    const page = await newSpecPage({
      components: [ProgressBarComponent],
      html: `<admiralty-progress-bar error  label="Bad"></admiralty-progress-bar>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-progress-bar error="" label="Bad">
        <div class="admiralty-progress">
          <admiralty-label for="admiralty-progress-${++progressId}">
            Bad
          </admiralty-label>
          <progress class="error" id="admiralty-progress-4" max="100" value="0"></progress>
        </div>
      </admiralty-progress-bar>
    `);
  });
});
