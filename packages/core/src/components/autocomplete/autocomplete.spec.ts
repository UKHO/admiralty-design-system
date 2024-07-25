jest.mock('./optionsWatcher');

import { newSpecPage } from '@stencil/core/testing';
import { AutocompleteComponent } from './autocomplete';
import { AutocompleteOptionComponent } from '../autocomplete-option/autocomplete-option';

describe('autocomplete', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete></admiralty-autocomplete>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-autocomplete>
        <div class="autocomplete__wrapper">
          <div class="autocomplete__input-wrapper">
            <input aria-autocomplete="list" aria-describedby="1__assistiveHint" aria-disabled="false" aria-expanded="false" aria-owns="1__listbox" autocomplete="off" class="autocomplete__input autocomplete__input--show-all-values" id="1" name="input-autocomplete" placeholder="" role="combobox" type="text">
            <admiralty-icon class="autocomplete-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
          <ul class="autocomplete__menu autocomplete__menu--hidden autocomplete__menu--inline" id="1__listbox" role="listbox"></ul>
          <span id="1__assistiveHint" style="display: none;">
            When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.
          </span>
        </div>
      </admiralty-autocomplete>
    `);
  });

  it('renders with options', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent, AutocompleteOptionComponent],
      html: `
        <admiralty-autocomplete label="Country" placeholder="Country of birth" hint="This is the country you were born in">
          <admiralty-autocomplete-option value="gb">United Kingdom</admiralty-autocomplete-option>
          <admiralty-autocomplete-option value="us">United States</admiralty-autocomplete-option>
        </admiralty-autocomplete>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-autocomplete hint="This is the country you were born in" label="Country" placeholder="Country of birth">
        <admiralty-autocomplete-option id="autocomplete-option-0" role="option" value="gb">
          United Kingdom
        </admiralty-autocomplete-option>
        <admiralty-autocomplete-option id="autocomplete-option-1" role="option" value="us">
          United States
        </admiralty-autocomplete-option>
        <div class="autocomplete__wrapper">
          <admiralty-label for="1">
            Country
          </admiralty-label>
          <admiralty-hint>
            This is the country you were born in
          </admiralty-hint>
          <div class="autocomplete__input-wrapper">
            <input aria-autocomplete="list" aria-describedby="1__assistiveHint" aria-disabled="false" aria-expanded="false" aria-owns="1__listbox" autocomplete="off" class="autocomplete__input autocomplete__input--show-all-values" id="1" name="input-autocomplete" placeholder="Country of birth" role="combobox" type="text">
            <admiralty-icon class="autocomplete-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
          <ul class="autocomplete__menu autocomplete__menu--hidden autocomplete__menu--inline" id="1__listbox" role="listbox"></ul>
          <span id="1__assistiveHint" style="display: none;">
            When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.
          </span>
        </div>
      </admiralty-autocomplete>
    `);
  });

  it('selects the correct item when a value is provided', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent, AutocompleteOptionComponent],
      html: `<admiralty-autocomplete value="gb">
        <admiralty-autocomplete-option value="de">Germany</admiralty-autocomplete-option>
        <admiralty-autocomplete-option value="gb">United Kingdom</admiralty-autocomplete-option>
        <admiralty-autocomplete-option value="us">United States</admiralty-autocomplete-option>
      </admiralty-autocomplete>`,
    });

    const component = page.doc.querySelector('admiralty-autocomplete');

    expect(component).toBeDefined();

    const input = page.root.querySelector('input');

    expect(input.value).toEqual('United Kingdom');
  });
});
