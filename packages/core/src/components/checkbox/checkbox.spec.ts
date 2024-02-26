import { newSpecPage } from '@stencil/core/testing';
import { CheckboxComponent } from './checkbox';

describe('admiralty-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CheckboxComponent],
      html: `<admiralty-checkbox></admiralty-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-checkbox>
        <div aria-checked="false" class="form-control" role="checkbox">
          <input aria-checked="false" id="admiralty-0" name="admiralty-0" type="checkbox">
          <label htmlfor="admiralty-0"></label>
        </div>
      </admiralty-checkbox>
    `);
  });
});
