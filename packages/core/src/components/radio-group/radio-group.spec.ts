import { newSpecPage } from '@stencil/core/testing';
import { RadioGroupComponent } from './radio-group';
import { RadioComponent } from '../radio/radio';

describe('radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RadioGroupComponent],
      html: `<admiralty-radio-group></admiralty-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-radio-group>
        <div class="radio-group" role="radiogroup">

      <admiralty-input-invalid style="display: none;"></admiralty-input-invalid>
      </div>
      </admiralty-radio-group>
    `);
  });

  it('renders 2 radio buttons horizontally', async () => {
    const page = await newSpecPage({
      components: [RadioGroupComponent, RadioComponent],
      html: `
      <admiralty-radio-group>
        <admiralty-radio name="grp" value="option1">Option 1</admiralty-radio>
        <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
      </admiralty-radio-group>
      `,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-radio-group>
        <!---->
        <div class="radio-group" role="radiogroup">
          <admiralty-radio name="grp" value="option1">
            <!---->
            <div class="admiralty-radio">
              <input aria-checked="false" aria-labelledby="admiralty-radio-0" class="admiralty-radio" id="admiralty-radio-0" name="grp" tabindex="0" type="radio" value="option1">
              <label htmlfor="admiralty-radio-0">
                Option 1
              </label>
            </div>
          </admiralty-radio>
          <admiralty-radio name="grp" value="option2">
            <!---->
            <div class="admiralty-radio">
              <input aria-checked="false" aria-labelledby="admiralty-radio-1" class="admiralty-radio" id="admiralty-radio-1" name="grp" tabindex="-1" type="radio" value="option2">
              <label htmlfor="admiralty-radio-1">
                Option 2
              </label>
            </div>
          </admiralty-radio>
          <admiralty-input-invalid style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-radio-group>
    `);
  });

  it('renders 2 radio buttons vertically', async () => {
    const page = await newSpecPage({
      components: [RadioGroupComponent, RadioComponent],
      html: `
        <admiralty-radio-group display-vertical="true">
          <admiralty-radio name="grp" value="option1">Option 1</admiralty-radio>
          <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
        </admiralty-radio-group>
        `,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-radio-group display-vertical="true">
        <!---->
        <div class="radio-group stack" role="radiogroup">
          <admiralty-radio name="grp" value="option1">
            <!---->
            <div class="admiralty-radio">
              <input aria-checked="false" aria-labelledby="admiralty-radio-2" class="admiralty-radio" id="admiralty-radio-2" name="grp" tabindex="0" type="radio" value="option1">
              <label htmlfor="admiralty-radio-2">
                Option 1
              </label>
            </div>
          </admiralty-radio>
          <admiralty-radio name="grp" value="option2">
            <!---->
            <div class="admiralty-radio">
              <input aria-checked="false" aria-labelledby="admiralty-radio-3" class="admiralty-radio" id="admiralty-radio-3" name="grp" tabindex="-1" type="radio" value="option2">
              <label htmlfor="admiralty-radio-3">
                Option 2
              </label>
            </div>
          </admiralty-radio>
          <admiralty-input-invalid style="display: none;"></admiralty-input-invalid>
        </div>
      </admiralty-radio-group>
    `);
  });

  it('fires event on radio button changed', async () => {
    const page = await newSpecPage({
      components: [RadioGroupComponent, RadioComponent],
      html: `
        <admiralty-radio-group display-vertical="true">
          <admiralty-radio name="grp" value="option1">Option 1</admiralty-radio>
          <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
        </admiralty-radio-group>
        `,
    });

    const eventSpy = jest.fn();

    page.doc.addEventListener('admiraltyChange', eventSpy);

    const rad1 = page.doc.querySelector('input[value="option1"]') as HTMLInputElement;
    rad1.click();
    await page.waitForChanges();

    const rad2 = page.doc.querySelector('input[value="option2"]') as HTMLInputElement;
    rad2.click();

    await page.waitForChanges();

    expect(eventSpy).toBeCalledTimes(2);
  });
});
