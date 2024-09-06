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
        <fieldset aria-describedby=" " aria-invalid="false" role="radiogroup">
          <div class="radio-group stack"></div>
          <admiralty-input-invalid id="admiralty-rg-error-1" style="display: none;"></admiralty-input-invalid>
        </fieldset>
      </admiralty-radio-group>
    `);
  });

  it('renders 2 radio buttons horizontally', async () => {
    const page = await newSpecPage({
      components: [RadioGroupComponent, RadioComponent],
      html: `
      <admiralty-radio-group display-vertical="false">
        <admiralty-radio name="grp" value="option1">Option 1</admiralty-radio>
        <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
      </admiralty-radio-group>
      `,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-radio-group display-vertical="false">
        <!---->
        <fieldset aria-describedby=" " aria-invalid="false" role="radiogroup">
          <div class="radio-group">
            <admiralty-radio name="grp" value="option1">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-0" class="admiralty-radio" id="admiralty-radio-0" name="grp" tabindex="0" type="radio" value="option1">
                <label htmlfor="admiralty-radio-0">
                  Option 1
                </label>
              </div>
              <div class="conditional unchecked"></div>
            </admiralty-radio>
            <admiralty-radio name="grp" value="option2">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-1" class="admiralty-radio" id="admiralty-radio-1" name="grp" tabindex="-1" type="radio" value="option2">
                <label htmlfor="admiralty-radio-1">
                  Option 2
                </label>
              </div>
              <div class="conditional unchecked"></div>
            </admiralty-radio>
          </div>
          <admiralty-input-invalid id="admiralty-rg-error-2" style="display: none;"></admiralty-input-invalid>
        </fieldset>
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
        <fieldset aria-describedby=" " aria-invalid="false" role="radiogroup">
          <div class="radio-group stack">
            <admiralty-radio name="grp" value="option1">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-2" class="admiralty-radio" id="admiralty-radio-2" name="grp" tabindex="0" type="radio" value="option1">
                <label htmlfor="admiralty-radio-2">
                  Option 1
                </label>
              </div>
              <div class="conditional unchecked"></div>
            </admiralty-radio>
            <admiralty-radio name="grp" value="option2">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-3" class="admiralty-radio" id="admiralty-radio-3" name="grp" tabindex="-1" type="radio" value="option2">
                <label htmlfor="admiralty-radio-3">
                  Option 2
                </label>
              </div>
              <div class="conditional unchecked"></div>
            </admiralty-radio>
          </div>
          <admiralty-input-invalid id="admiralty-rg-error-3" style="display: none;"></admiralty-input-invalid>
        </fieldset>
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

  it('renders disabled radio buttons', async () => {
    const page = await newSpecPage({
      components: [RadioGroupComponent, RadioComponent],
      html: `
      <admiralty-radio-group disabled="true">
        <admiralty-radio name="grp" value="option1">Option 1</admiralty-radio>
        <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
      </admiralty-radio-group>
      `,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-radio-group disabled="true">
        <!---->
        <fieldset aria-describedby=" " aria-invalid="false" disabled="" role="radiogroup">
          <div class="radio-group stack">
            <admiralty-radio name="grp" value="option1">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-6" class="admiralty-radio" id="admiralty-radio-6" name="grp" tabindex="0" type="radio" value="option1">
                <label htmlfor="admiralty-radio-6">
                  Option 1
                </label>
              </div>
              <div class="conditional unchecked"></div>
            </admiralty-radio>
            <admiralty-radio name="grp" value="option2">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-7" class="admiralty-radio" id="admiralty-radio-7" name="grp" tabindex="-1" type="radio" value="option2">
                <label htmlfor="admiralty-radio-7">
                  Option 2
                </label>
              </div>
              <div class="conditional unchecked"></div>
            </admiralty-radio>
          </div>
          <admiralty-input-invalid id="admiralty-rg-error-5" style="display: none;"></admiralty-input-invalid>
        </fieldset>
      </admiralty-radio-group>
    `);
  });

  it('renders labels and hint text', async () => {
    const page = await newSpecPage({
      components: [RadioGroupComponent, RadioComponent],
      html: `
      <admiralty-radio-group label="Label text" hint="Hint text">
        <admiralty-radio name="grp" value="option1">Option 1</admiralty-radio>
        <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
      </admiralty-radio-group>
      `,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-radio-group hint="Hint text" label="Label text">
        <!---->
        <fieldset aria-describedby="admiralty-rg-hint-6 " aria-invalid="false" role="radiogroup">
          <legend>
            Label text
          </legend>
          <admiralty-hint id="admiralty-rg-hint-6">
            Hint text
          </admiralty-hint>
          <div class="radio-group stack">
            <admiralty-radio name="grp" value="option1">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-8" class="admiralty-radio" id="admiralty-radio-8" name="grp" tabindex="0" type="radio" value="option1">
                <label htmlfor="admiralty-radio-8">
                  Option 1
                </label>
              </div>
              <div class="conditional unchecked"></div>
            </admiralty-radio>
            <admiralty-radio name="grp" value="option2">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-9" class="admiralty-radio" id="admiralty-radio-9" name="grp" tabindex="-1" type="radio" value="option2">
                <label htmlfor="admiralty-radio-9">
                  Option 2
                </label>
              </div>
              <div class="conditional unchecked"></div>
            </admiralty-radio>
          </div>
          <admiralty-input-invalid id="admiralty-rg-error-6" style="display: none;"></admiralty-input-invalid>
        </fieldset>
      </admiralty-radio-group>
    `);
  });
});
