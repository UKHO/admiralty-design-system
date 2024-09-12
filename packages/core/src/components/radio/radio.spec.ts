import { newSpecPage } from '@stencil/core/testing';
import { RadioComponent } from './radio';

let id = 0;

describe('admiralty-radio', () => {
  it('renders', async () => {
    id++;
    const page = await newSpecPage({
      components: [RadioComponent],
      html: `<admiralty-radio></admiralty-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-radio>
        <div class="admiralty-radio">
          <input aria-checked="false" aria-labelledby="admiralty-radio-${id}-input" class="admiralty-radio" id="admiralty-radio-${id}-input" tabindex="-1" type="radio" value="admiralty-radio-${id}">
          <label htmlfor="admiralty-radio-${id}-input"></label>
        </div>
        <div class="conditional unchecked"></div>
      </admiralty-radio>
    `);
  });

  it('renders with basic arguments', async () => {
    id++;
    const page = await newSpecPage({
      components: [RadioComponent],
      html: `<admiralty-radio name="rad1" value="option1">Option 1</admiralty-radio>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-radio name="rad1" value="option1">
        <!---->
        <div class="admiralty-radio">
          <input aria-checked="false" aria-labelledby="admiralty-radio-${id}-input" class="admiralty-radio" id="admiralty-radio-${id}-input" name="rad1" tabindex="-1" type="radio" value="option1">
          <label htmlfor="admiralty-radio-${id}-input">
            Option 1
          </label>
        </div>
        <div class="conditional unchecked"></div>
      </admiralty-radio>
    `);
  });

  it('renders checked', async () => {
    id++;
    const page = await newSpecPage({
      components: [RadioComponent],
      html: `<admiralty-radio checked name="rad1" value="option1">Option 1</admiralty-radio>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-radio checked="" name="rad1" value="option1">
        <!---->
        <div class="admiralty-radio checked">
          <input aria-checked="true" aria-labelledby="admiralty-radio-${id}-input" checked="" class="admiralty-radio" id="admiralty-radio-${id}-input" name="rad1" tabindex="-1" type="radio" value="option1">
          <label htmlfor="admiralty-radio-${id}-input">
            Option 1
          </label>
        </div>
        <div class="checked conditional"></div>
      </admiralty-radio>
    `);
  });

  it('renders disabled', async () => {
    id++;
    const page = await newSpecPage({
      components: [RadioComponent],
      html: `<admiralty-radio disabled name="rad1" value="option1">Option 1</admiralty-radio>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-radio disabled="" name="rad1" value="option1">
        <!---->
        <div class="admiralty-radio">
          <input aria-checked="false" aria-hidden="true" aria-labelledby="admiralty-radio-${id}-input" class="admiralty-radio" disabled="" id="admiralty-radio-${id}-input" name="rad1" tabindex="-1" type="radio" value="option1">
          <label htmlfor="admiralty-radio-${id}-input">
            Option 1
          </label>
        </div>
        <div class="conditional unchecked"></div>
      </admiralty-radio>
    `);
  });

  it('renders with a custom ID', async () => {
    const id = 'custom';
    const page = await newSpecPage({
      components: [RadioComponent],
      html: `<admiralty-radio id="${id}" name="rad1" value="option1">Option 1</admiralty-radio>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-radio id="${id}" name="rad1" value="option1">
        <!---->
        <div class="admiralty-radio">
          <input aria-checked="false" aria-labelledby="${id}-input" class="admiralty-radio" id="${id}-input" name="rad1" tabindex="-1" type="radio" value="option1">
          <label htmlfor="${id}-input">
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
