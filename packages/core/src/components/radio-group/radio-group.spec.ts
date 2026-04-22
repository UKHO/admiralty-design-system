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

  it('deselects when clicking on label text for optional groups', async () => {
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
    // Get the label that contains "Option 1"
    const labels = page.doc.querySelectorAll('label');
    const label = Array.from(labels).find(l => l.textContent === 'Option 1') as HTMLLabelElement;

    // Click on the label to select the radio
    label.click();
    await page.waitForChanges();

    expect(group.value).toBe('option1');
    expect(eventSpy).toBeCalledTimes(1);

    // Click on the label again to unselect
    label.click();
    await page.waitForChanges();

    expect(group.value).toBeNull();
    expect(eventSpy).toBeCalledTimes(2);
    expect(eventSpy.mock.calls[1][0].detail.value).toBeNull();
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
  <fieldset aria-describedby="admiralty-rg-hint-9 " aria-invalid="false" aria-required="true" role="radiogroup">
    <legend>
      Label text
    </legend>
    <admiralty-hint id="admiralty-rg-hint-9">
      Hint text
    </admiralty-hint>
    <div class="radio-group stack">
      <admiralty-radio name="grp" value="option1">
        <!---->
        <div class="admiralty-radio">
          <input aria-checked="false" aria-labelledby="admiralty-radio-15-input" class="admiralty-radio" id="admiralty-radio-15-input" name="grp" tabindex="0" type="radio" value="option1">
          <label for="admiralty-radio-15-input">
            Option 1
          </label>
        </div>
        <div class="conditional unchecked"></div>
      </admiralty-radio>
      <admiralty-radio name="grp" value="option2">
        <!---->
        <div class="admiralty-radio">
          <input aria-checked="false" aria-labelledby="admiralty-radio-16-input" class="admiralty-radio" id="admiralty-radio-16-input" name="grp" tabindex="-1" type="radio" value="option2">
          <label for="admiralty-radio-16-input">
            Option 2
          </label>
        </div>
        <div class="conditional unchecked"></div>
      </admiralty-radio>
    </div>
    <admiralty-input-invalid id="admiralty-rg-error-9" style="display: none;"></admiralty-input-invalid>
  </fieldset>
</admiralty-radio-group>
`);
  });

  it('does not deselect when clicking input element inside conditional slot for optional groups', async () => {
    const page = await newSpecPage({
      components: [RadioGroupComponent, RadioComponent],
      html: `
        <admiralty-radio-group allow-unselect="true">
          <admiralty-radio name="grp" value="option1">
            Option 1
            <input type="text" slot="conditional" placeholder="Additional info" />
          </admiralty-radio>
          <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
        </admiralty-radio-group>
      `,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('admiraltyChange', eventSpy);

    const group = page.root as HTMLAdmiraltyRadioGroupElement;
    const rad1Input = page.doc.querySelector('input[value="option1"]') as HTMLInputElement;
    const conditionalInput = page.doc.querySelector('input[placeholder="Additional info"]') as HTMLInputElement;

    // Select option 1
    rad1Input.click();
    await page.waitForChanges();

    expect(group.value).toBe('option1');
    expect(eventSpy).toBeCalledTimes(1);

    // Click the input inside conditional content
    conditionalInput.click();
    await page.waitForChanges();

    // Selection should remain unchanged (not deselected)
    expect(group.value).toBe('option1');
    // Should still only have 1 event (the initial selection)
    expect(eventSpy).toBeCalledTimes(1);
  });

  it('does not deselect when clicking button element inside conditional slot for optional groups', async () => {
    const page = await newSpecPage({
      components: [RadioGroupComponent, RadioComponent],
      html: `
        <admiralty-radio-group allow-unselect="true">
          <admiralty-radio name="grp" value="option1">
            Option 1
            <button slot="conditional">More info</button>
          </admiralty-radio>
          <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
        </admiralty-radio-group>
      `,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('admiraltyChange', eventSpy);

    const group = page.root as HTMLAdmiraltyRadioGroupElement;
    const rad1Input = page.doc.querySelector('input[value="option1"]') as HTMLInputElement;
    const conditionalButton = page.doc.querySelector('button') as HTMLButtonElement;

    // Select option 1
    rad1Input.click();
    await page.waitForChanges();

    expect(group.value).toBe('option1');
    expect(eventSpy).toBeCalledTimes(1);

    // Click the button inside conditional content
    conditionalButton.click();
    await page.waitForChanges();

    // Selection should remain unchanged (not deselected)
    expect(group.value).toBe('option1');
    // Should still only have 1 event (the initial selection)
    expect(eventSpy).toBeCalledTimes(1);
  });

  it('still allows deselect when clicking the radio input directly in optional groups', async () => {
    const page = await newSpecPage({
      components: [RadioGroupComponent, RadioComponent],
      html: `
        <admiralty-radio-group allow-unselect="true">
          <admiralty-radio name="grp" value="option1">
            Option 1
            <input type="text" slot="conditional" placeholder="Additional info" />
          </admiralty-radio>
          <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
        </admiralty-radio-group>
      `,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('admiraltyChange', eventSpy);

    const group = page.root as HTMLAdmiraltyRadioGroupElement;
    const rad1Input = page.doc.querySelector('input[value="option1"]') as HTMLInputElement;

    // Select option 1
    rad1Input.click();
    await page.waitForChanges();

    expect(group.value).toBe('option1');
    expect(eventSpy).toBeCalledTimes(1);

    // Click the radio input directly to deselect
    rad1Input.click();
    await page.waitForChanges();

    // Selection should be cleared (deselected via direct input click)
    expect(group.value).toBeNull();
    expect(eventSpy).toBeCalledTimes(2);
    expect(eventSpy.mock.calls[1][0].detail.value).toBeNull();
  });

  it('still allows deselect when clicking the label directly in optional groups', async () => {
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
    const rad1Input = page.doc.querySelector('input[value="option1"]') as HTMLInputElement;
    const labels = page.doc.querySelectorAll('label');
    const label = Array.from(labels).find(l => l.textContent?.includes('Option 1')) as HTMLLabelElement;

    // Select option 1 via input click
    rad1Input.click();
    await page.waitForChanges();

    expect(group.value).toBe('option1');
    expect(eventSpy).toBeCalledTimes(1);

    // Click the label directly to deselect
    label.click();
    await page.waitForChanges();

    // Selection should be cleared (deselected via label click)
    expect(group.value).toBeNull();
    expect(eventSpy).toBeCalledTimes(2);
    expect(eventSpy.mock.calls[1][0].detail.value).toBeNull();
  });

  it('does not select when clicking label in disabled group', async () => {
    const page = await newSpecPage({
      components: [RadioGroupComponent, RadioComponent],
      html: `
      <admiralty-radio-group disabled="true">
        <admiralty-radio name="grp" value="option1">Option 1</admiralty-radio>
        <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
      </admiralty-radio-group>
      `,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('admiraltyChange', eventSpy);

    const group = page.root as HTMLAdmiraltyRadioGroupElement;
    const labels = page.doc.querySelectorAll('label');
    const label = Array.from(labels).find(l => l.textContent === 'Option 1') as HTMLLabelElement;

    label.click();
    await page.waitForChanges();

    expect(group.value).toBeUndefined();
    expect(eventSpy).not.toBeCalled();
  });

  it('does not deselect when clicking nested content inside conditional slot for optional groups', async () => {
    const page = await newSpecPage({
      components: [RadioGroupComponent, RadioComponent],
      html: `
        <admiralty-radio-group allow-unselect="true">
          <admiralty-radio name="grp" value="option1">
            Option 1
            <div slot="conditional">
              <input type="checkbox" id="checkbox-opt-in" />
              <label for="checkbox-opt-in">Opt-in to newsletters</label>
            </div>
          </admiralty-radio>
          <admiralty-radio name="grp" value="option2">Option 2</admiralty-radio>
        </admiralty-radio-group>
      `,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('admiraltyChange', eventSpy);

    const group = page.root as HTMLAdmiraltyRadioGroupElement;
    const rad1Input = page.doc.querySelector('input[value="option1"]') as HTMLInputElement;
    const checkboxInput = page.doc.querySelector('input[type="checkbox"]') as HTMLInputElement;
    const checkboxLabel = page.doc.querySelector('label[for="checkbox-opt-in"]') as HTMLLabelElement;

    // Select option 1
    rad1Input.click();
    await page.waitForChanges();

    expect(group.value).toBe('option1');
    expect(eventSpy).toBeCalledTimes(1);

    // Click the nested checkbox
    checkboxInput.click();
    await page.waitForChanges();

    // Selection should remain unchanged
    expect(group.value).toBe('option1');
    expect(eventSpy).toBeCalledTimes(1);

    // Click the nested checkbox label
    checkboxLabel.click();
    await page.waitForChanges();

    // Selection should still remain unchanged
    expect(group.value).toBe('option1');
    expect(eventSpy).toBeCalledTimes(1);
  });
});