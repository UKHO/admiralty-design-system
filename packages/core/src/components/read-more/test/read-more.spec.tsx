import { newSpecPage } from '@stencil/core/testing';
import { ReadMoreComponent } from '../read-more';

describe('read-more', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ReadMoreComponent],
      html: `<admiralty-read-more></admiralty-read-more>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-read-more>
        <section class="expansion">
          <button aria-controls="admiralty-read-more-1-content" id="admiralty-read-more-1-header" type="button">
            <admiralty-icon class="expansion-heading-icon" icon-name="arrow-right"></admiralty-icon>
            <span></span>
            <span class="visually-hidden">
              , Show this section
            </span>
          </button>
          <div aria-labelledby="admiralty-read-more-1-header" class="expansion-content" hidden="" id="admiralty-read-more-1-content"></div>
        </section>
      </admiralty-read-more>
    `);
  });

  it('renders with content', async () => {
    const page = await newSpecPage({
      components: [ReadMoreComponent],
      html: `
      <admiralty-read-more heading="Readmore Heading">
        Some lovely content.
      </admiralty-read-more>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-read-more heading="Readmore Heading">
        <!---->
        <section class="expansion">
          <button aria-controls="admiralty-read-more-2-content" id="admiralty-read-more-2-header" type="button">
            <admiralty-icon class="expansion-heading-icon" icon-name="arrow-right"></admiralty-icon>
            <span>
              Readmore Heading
            </span>
            <span class="visually-hidden">
              , Show this section
            </span>
          </button>
          <div aria-labelledby="admiralty-read-more-2-header" class="expansion-content" hidden="" id="admiralty-read-more-2-content">
            Some lovely content.
          </div>
        </section>
      </admiralty-read-more>
    `);
  });

  it('fires admiraltyToggled event', async () => {
    const page = await newSpecPage({
      components: [ReadMoreComponent],
      html: `
      <admiralty-read-more heading="Readmore Heading">
        Content
      </admiralty-read-more>`,
    });

    const eventSpy = jest.fn();

    page.doc.addEventListener('admiraltyToggled', eventSpy);

    const input = page.doc.querySelector('button');
    input.dispatchEvent(new Event('click'));
    await page.waitForChanges();

    console.debug(eventSpy);
    expect(eventSpy).toBeCalled();
  });
});
