import { newSpecPage } from '@stencil/core/testing';
import { FooterComponent } from './footer';
import { LinkComponent } from '../link/link';

describe('admiralty-footer', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [FooterComponent],
      html: '<admiralty-footer text="testText"></admiralty-footer>',
    });
    expect(root).toEqualHtml(`
      <admiralty-footer text="testText">
        <footer>
          <div class="footer-branding">
            <div class="footer-img">
              <a href="https://www.admiralty.co.uk/">
                <img alt="Admiralty Maritime Data Solutions | UK Hydrographic Office" src="svg/UKHO stacked logo.svg">
              </a>
            </div>
          </div>
          <div class="footer-content">
            <nav aria-label="Footer Links" class="footer-links"></nav>
            <div class="footer-text">
              <p>
                testText
              </p>
            </div>
          </div>
        </footer>
      </admiralty-footer>
    `);
  });

  it('renders links', async () => {
    const { root } = await newSpecPage({
      components: [FooterComponent, LinkComponent],
      html: `<admiralty-footer text="testText">
        <admiralty-link href="http://www.example.com" new-tab="true">Privacy Policy</admiralty-link>
        <admiralty-link href="http://www.example.com">Accessibility</admiralty-link>
      </admiralty-footer>`,
    });
    expect(root).toEqualHtml(`
      <admiralty-footer text="testText">
        <footer>
          <div class="footer-branding">
            <div class="footer-img">
              <a href="https://www.admiralty.co.uk/">
                <img alt="Admiralty Maritime Data Solutions | UK Hydrographic Office" src="svg/UKHO stacked logo.svg">
              </a>
            </div>
          </div>
          <div class="footer-content">
            <nav aria-label="Footer Links" class="footer-links">
              <admiralty-link href="http://www.example.com" new-tab="true">
                <a href="http://www.example.com" target="_blank">Privacy Policy</a>
              </admiralty-link>
              <admiralty-link href="http://www.example.com">
                <a href="http://www.example.com" target="_self">Accessibility</a>
              </admiralty-link>
            </nav>
            <div class="footer-text">
              <p>
                testText
              </p>
            </div>
          </div>
        </footer>
      </admiralty-footer>
    `);
  });
});
