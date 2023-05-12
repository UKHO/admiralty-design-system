import { newSpecPage } from '@stencil/core/testing';
import { PhaseBannerComponent } from './phase-banner';

describe('admiralty-phase-banner', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PhaseBannerComponent],
      html: '<admiralty-phase-banner></admiralty-phase-banner>',
    });
    expect(root).toEqualHtml(`
      <admiralty-phase-banner>
        <div class="phase-banner">
          <strong>alpha</strong>
          <span>
            This service is in alpha phase - please provide <a target="_blank">feedback</a> to help us improve it
          </span>
        </div>
      </admiralty-phase-banner>
    `);
  });

  it('renders alpha', async () => {
    const { root } = await newSpecPage({
      components: [PhaseBannerComponent],
      html: '<admiralty-phase-banner phase="alpha" link="https://example.org"></admiralty-phase-banner>',
    });
    expect(root).toEqualHtml(`
      <admiralty-phase-banner phase="alpha" link="https://example.org">
        <div class="phase-banner">
          <strong>alpha</strong>
          <span>
            This service is in alpha phase - please provide <a href="https://example.org" target="_blank">feedback</a> to help us improve it
          </span>
        </div>
      </admiralty-phase-banner>
    `);
  });

  it('renders beta', async () => {
    const { root } = await newSpecPage({
      components: [PhaseBannerComponent],
      html: '<admiralty-phase-banner phase="beta" link="https://example.org"></admiralty-phase-banner>',
    });
    expect(root).toEqualHtml(`
      <admiralty-phase-banner phase="beta" link="https://example.org">
        <div class="phase-banner">
          <strong>beta</strong>
          <span>
            This service is in beta phase - please provide <a href="https://example.org" target="_blank">feedback</a> to help us improve it
          </span>
        </div>
      </admiralty-phase-banner>
    `);
  });
});
