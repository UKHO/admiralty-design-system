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
          <fieldset aria-describedby=" " aria-invalid="false" aria-required="true" role="radiogroup">
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
        <fieldset aria-describedby=" " aria-invalid="false" aria-required="true" role="radiogroup">
          <div class="radio-group">
            <admiralty-radio name="grp" value="option1">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-1-input" class="admiralty-radio" id="admiralty-radio-1-input" name="grp" tabindex="0" type="radio" value="option1">
                <label for="admiralty-radio-1-input">
                  Option 1
                </label>
              </div>
              <div class="conditional unchecked"></div>
            </admiralty-radio>
            <admiralty-radio name="grp" value="option2">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-2-input" class="admiralty-radio" id="admiralty-radio-2-input" name="grp" tabindex="-1" type="radio" value="option2">
                <label for="admiralty-radio-2-input">
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
        <fieldset aria-describedby=" " aria-invalid="false" aria-required="true" role="radiogroup">
          <div class="radio-group stack">
            <admiralty-radio name="grp" value="option1">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-3-input" class="admiralty-radio" id="admiralty-radio-3-input" name="grp" tabindex="0" type="radio" value="option1">
                <label for="admiralty-radio-3-input">
                  Option 1
                </label>
              </div>
              <div class="conditional unchecked"></div>
            </admiralty-radio>
            <admiralty-radio name="grp" value="option2">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-4-input" class="admiralty-radio" id="admiralty-radio-4-input" name="grp" tabindex="-1" type="radio" value="option2">
                <label for="admiralty-radio-4-input">
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

  it('deselects an already selected radio for optional groups', async () => {
    const page = await newSpecPage({
      components: [RadioGroupComponent, RadioComponent],
      html: `
        <admiralty-radio-group allow-unselect="true">
          <admiralty-radio name="grp" value="option1">Option 1</admiralty-radio>
          <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
        </admiralty-radio-group>
      `,
    });

    const eventSpy = jest.fn();

    page.doc.addEventListener('admiraltyChange', eventSpy);

    const group = page.root as HTMLAdmiraltyRadioGroupElement;
    const rad1 = page.doc.querySelector('input[value="option1"]') as HTMLInputElement;

    rad1.click();
    await page.waitForChanges();

    expect(group.value).toBe('option1');
    expect(rad1.checked).toBe(true);

    rad1.click();
    await page.waitForChanges();

    expect(group.value).toBeNull();
    expect(rad1.checked).toBe(false);
    expect(eventSpy).toBeCalledTimes(2);
    expect(eventSpy.mock.calls[1][0].detail.value).toBeNull();
  });

  it('does not deselect an already selected radio for required groups', async () => {
    const page = await newSpecPage({
      components: [RadioGroupComponent, RadioComponent],
      html: `
        <admiralty-radio-group allow-unselect="false">
          <admiralty-radio name="grp" value="option1">Option 1</admiralty-radio>
          <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
        </admiralty-radio-group>
      `,
    });

    const group = page.root as HTMLAdmiraltyRadioGroupElement;
    const rad1 = page.doc.querySelector('input[value="option1"]') as HTMLInputElement;

    rad1.click();
    await page.waitForChanges();

    expect(group.value).toBe('option1');
    expect(rad1.checked).toBe(true);

    rad1.click();
    await page.waitForChanges();

    expect(group.value).toBe('option1');
    expect(rad1.checked).toBe(true);
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
        <fieldset aria-describedby=" " aria-invalid="false" aria-required="true" disabled="" role="radiogroup">
          <div class="radio-group stack">
            <admiralty-radio name="grp" value="option1">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-11-input" class="admiralty-radio" id="admiralty-radio-11-input" name="grp" tabindex="0" type="radio" value="option1">
                <label for="admiralty-radio-11-input">
                  Option 1
                </label>
              </div>
              <div class="conditional unchecked"></div>
            </admiralty-radio>
            <admiralty-radio name="grp" value="option2">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-12-input" class="admiralty-radio" id="admiralty-radio-12-input" name="grp" tabindex="-1" type="radio" value="option2">
                <label for="admiralty-radio-12-input">
                  Option 2
                </label>
              </div>
              <div class="conditional unchecked"></div>
            </admiralty-radio>
          </div>
          <admiralty-input-invalid id="admiralty-rg-error-7" style="display: none;"></admiralty-input-invalid>
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
        <fieldset aria-describedby="admiralty-rg-hint-8 " aria-invalid="false" aria-required="true" role="radiogroup">
          <legend>
            Label text
          </legend>
          <admiralty-hint id="admiralty-rg-hint-8">
            Hint text
          </admiralty-hint>
          <div class="radio-group stack">
            <admiralty-radio name="grp" value="option1">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-13-input" class="admiralty-radio" id="admiralty-radio-13-input" name="grp" tabindex="0" type="radio" value="option1">
                <label for="admiralty-radio-13-input">
                  Option 1
                </label>
              </div>
              <div class="conditional unchecked"></div>
            </admiralty-radio>
            <admiralty-radio name="grp" value="option2">
              <!---->
              <div class="admiralty-radio">
                <input aria-checked="false" aria-labelledby="admiralty-radio-14-input" class="admiralty-radio" id="admiralty-radio-14-input" name="grp" tabindex="-1" type="radio" value="option2">
                <label for="admiralty-radio-14-input">
                  Option 2
                </label>
              </div>
              <div class="conditional unchecked"></div>
            </admiralty-radio>
          </div>
          <admiralty-input-invalid id="admiralty-rg-error-8" style="display: none;"></admiralty-input-invalid>
        </fieldset>
      </admiralty-radio-group>
    `);
  });
});