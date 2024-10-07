import { newSpecPage } from '@stencil/core/testing';
import { CheckboxComponent } from './checkbox';

describe('admiralty-checkbox', () => {
  it('renders the checkbox', async () => {
    const page = await newSpecPage({
      components: [CheckboxComponent],
      html: `<admiralty-checkbox></admiralty-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-checkbox>
        <div class="form-control">
          <input aria-checked="false" id="admiralty-0" name="admiralty-0" type="checkbox">
          <label htmlfor="admiralty-0">
            <span></span>
          </label>
        </div>
      </admiralty-checkbox>
    `);
  });

  it('displays the label when injecting the label text', async () => {
    const page = await newSpecPage({
      components: [CheckboxComponent],
      html: `<admiralty-checkbox label-text="Filter 1"></admiralty-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-checkbox label-text="Filter 1">
        <div class="form-control">
          <input aria-checked="false" id="admiralty-1" name="admiralty-1" type="checkbox">
          <label htmlfor="admiralty-1">
            <span>Filter 1</span>
          </label>
        </div>
      </admiralty-checkbox>
    `);
  });

  it('applies the css class to visually hide the label when label hidden is set to true', async () => {
    const page = await newSpecPage({
      components: [CheckboxComponent],
      html: `<admiralty-checkbox label-text="Filter 2" label-hidden="true"></admiralty-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-checkbox label-text="Filter 2" label-hidden="true">
        <div class="form-control">
          <input aria-checked="false" id="admiralty-2" name="admiralty-2" type="checkbox">
          <label htmlfor="admiralty-2">
            <span class="visually-hidden">Filter 2</span>
          </label>
        </div>
      </admiralty-checkbox>
    `);
  });

  it('should disable the input when disabled is set to true', async () => {
    const page = await newSpecPage({
      components: [CheckboxComponent],
      html: `<admiralty-checkbox label-text="Filter 3" disabled="true"></admiralty-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-checkbox label-text="Filter 3" disabled="true">
        <div aria-hidden="true" class="form-control">
          <input aria-checked="false" id="admiralty-3" name="admiralty-3" type="checkbox" disabled>
          <label class="disabled" htmlfor="admiralty-3">
            <span>Filter 3</span>
          </label>
        </div>
      </admiralty-checkbox>
    `);
  });

  it('should have the checkbox checked when checked is set to true', async () => {
    const page = await newSpecPage({
      components: [CheckboxComponent],
      html: `<admiralty-checkbox label-text="Filter 4" checked="true"></admiralty-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-checkbox label-text="Filter 4" checked>
        <div class="form-control">
          <input aria-checked="true" id="admiralty-4" name="admiralty-4" type="checkbox" checked>
          <label htmlfor="admiralty-4">
            <span>Filter 4</span>
          </label>
        </div>
      </admiralty-checkbox>
    `);
  });
});
