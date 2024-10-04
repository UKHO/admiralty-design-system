import { newSpecPage } from '@stencil/core/testing';
import { ErrorSummaryComponent } from './error-summary';

describe('admiralty-error-summary', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ErrorSummaryComponent],
      html: '<admiralty-error-summary></admiralty-error-summary>',
    });
    expect(root).toEqualHtml(`
      <admiralty-error-summary>
        <admiralty-dialogue heading="There's a problem" section-role="alert" type="error">
          <div class="links"></div>
        </admiralty-dialogue>
      </admiralty-error-summary>
    `);
  });

  it('renders links', async () => {
    const { root } = await newSpecPage({
      components: [ErrorSummaryComponent],
      html: `<admiralty-error-summary heading="There is a problem">
        <admiralty-link href="#name">Enter your full name</admiralty-link>
      </admiralty-error-summary>`,
    });
    expect(root).toEqualHtml(`
      <admiralty-error-summary heading="There is a problem">
        <admiralty-dialogue heading="There is a problem" section-role="alert" type="error">
          <div class="links">
            <admiralty-link href="#name">Enter your full name</admiralty-link>
          </div>
        </admiralty-dialogue>
      </admiralty-error-summary>
    `);
  });
});
