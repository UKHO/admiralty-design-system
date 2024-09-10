import { newSpecPage } from '@stencil/core/testing';
import { RadioComponent } from './radio';

describe('admiralty-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RadioComponent],
      html: `<admiralty-radio></admiralty-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-radio>
        <div class="admiralty-radio">
          <input aria-checked="false" aria-labelledby="admiralty-radio-0" class="admiralty-radio" id="admiralty-radio-0" name="admiralty-radio-0" tabindex="-1" type="radio" value="admiralty-radio-0">
          <label htmlfor="admiralty-radio-0"></label>
        </div>
        <div class="conditional unchecked"></div>
      </admiralty-radio>
    `);
  });

  it('renders with basic arguments', async () => {
    const page = await newSpecPage({
      components: [RadioComponent],
      html: `<admiralty-radio name="rad1" value="option1">Option 1</admiralty-radio>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-radio name="rad1" value="option1">
        <!---->
        <div class="admiralty-radio">
          <input aria-checked="false" aria-labelledby="admiralty-radio-1" class="admiralty-radio" id="admiralty-radio-1" name="rad1" tabindex="-1" type="radio" value="option1">
          <label htmlfor="admiralty-radio-1">
            Option 1
          </label>
        </div>
        <div class="conditional unchecked"></div>
      </admiralty-radio>
    `);
  });

  it('renders checked', async () => {
    const page = await newSpecPage({
      components: [RadioComponent],
      html: `<admiralty-radio disabled name="rad1" value="option1">Option 1</admiralty-radio>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-radio disabled="" name="rad1" value="option1">
        <!---->
        <div class="admiralty-radio">
          <input aria-checked="false" aria-hidden="true" aria-labelledby="admiralty-radio-2" class="admiralty-radio" disabled="" id="admiralty-radio-2" name="rad1" tabindex="-1" type="radio" value="option1">
          <label htmlfor="admiralty-radio-2">
            Option 1
          </label>
        </div>
        <div class="conditional unchecked"></div>
      </admiralty-radio>
    `);
  });

  it('renders disabled', async () => {
    const page = await newSpecPage({
      components: [RadioComponent],
      html: `<admiralty-radio disabled name="rad1" value="option1">Option 1</admiralty-radio>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-radio disabled="" name="rad1" value="option1">
        <!---->
        <div class="admiralty-radio">
          <input aria-checked="false" aria-hidden="true" aria-labelledby="admiralty-radio-3" class="admiralty-radio" disabled="" id="admiralty-radio-3" name="rad1" tabindex="-1" type="radio" value="option1">
          <label htmlfor="admiralty-radio-3">
            Option 1
          </label>
        </div>
        <div class="conditional unchecked"></div>
      </admiralty-radio>
    `);
  });

  it('renders with a custom identifier', async () => {
    const page = await newSpecPage({
      components: [RadioComponent],
      html: `<admiralty-radio identifier="custom" name="rad1" value="option1">Option 1</admiralty-radio>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-radio identifier="custom" name="rad1" value="option1">
        <!---->
        <div class="admiralty-radio">
          <input aria-checked="false" aria-labelledby="custom" class="admiralty-radio" id="custom" name="rad1" tabindex="-1" type="radio" value="option1">
          <label htmlfor="custom">
            Option 1
          </label>
        </div>
        <div class="conditional unchecked"></div>
      </admiralty-radio>
    `);
  });

  it('fires focus event', async () => {
    const page = await newSpecPage({
      components: [RadioComponent, RadioComponent],
      html: `
      <admiralty-radio name="rad1" value="option1">Option 1</admiralty-radio>
      `,
    });

    const eventSpy = jest.fn();

    page.doc.addEventListener('admiraltyFocus', eventSpy);

    const input = page.doc.querySelector('admiralty-radio input');
    input.dispatchEvent(new Event('focus'));
    await page.waitForChanges();

    expect(eventSpy).toBeCalled();
  });

  it('fires blur event', async () => {
    const page = await newSpecPage({
      components: [RadioComponent, RadioComponent],
      html: `
      <admiralty-radio name="rad1" value="option1">Option 1</admiralty-radio>
      `,
    });

    const eventSpy = jest.fn();

    page.doc.addEventListener('admiraltyBlur', eventSpy);

    const input = page.doc.querySelector('admiralty-radio input');
    input.dispatchEvent(new Event('blur'));
    await page.waitForChanges();

    expect(eventSpy).toBeCalled();
  });
});
