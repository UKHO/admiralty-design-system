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
            <input aria-autocomplete="list" aria-describedby="input-autocomplete__assistiveHint" aria-expanded="false" aria-owns="input-autocomplete__listbox" autocomplete="off" class="autocomplete__input autocomplete__input--show-all-values" id="input-autocomplete" name="input-autocomplete" placeholder="" role="combobox" type="text">
            <admiralty-icon class="autocomplete-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
          <ul class="autocomplete__menu autocomplete__menu--hidden autocomplete__menu--inline" id="input-autocomplete__listbox" role="listbox"></ul>
          <span id="input-autocomplete__assistiveHint" style="display: none;">
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
          <admiralty-label for="input-autocomplete">
            Country
          </admiralty-label>
          <admiralty-hint>
            This is the country you were born in
          </admiralty-hint>
          <div class="autocomplete__input-wrapper">
            <input aria-autocomplete="list" aria-describedby="input-autocomplete__assistiveHint" aria-expanded="false" aria-owns="input-autocomplete__listbox" autocomplete="off" class="autocomplete__input autocomplete__input--show-all-values" id="input-autocomplete" name="input-autocomplete" placeholder="Country of birth" role="combobox" type="text">
            <admiralty-icon class="autocomplete-down-icon" icon-name="angle-down"></admiralty-icon>
          </div>
          <ul class="autocomplete__menu autocomplete__menu--hidden autocomplete__menu--inline" id="input-autocomplete__listbox" role="listbox"></ul>
          <span id="input-autocomplete__assistiveHint" style="display: none;">
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

  it('renders an input with a required attribute', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete required></admiralty-autocomplete>`,
    });

    expect(page.doc.querySelector('input')).toHaveAttribute('required');
  });

  it('renders an input without a required attribute', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete required="false"></admiralty-autocomplete>`,
    });

    expect(page.doc.querySelector('input')).not.toHaveAttribute('required');
  });

  it('renders an input with a disabled attribute', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete disabled></admiralty-autocomplete>`,
    });

    expect(page.doc.querySelector('input')).toHaveAttribute('disabled');
    expect(page.doc.querySelector('input')).toHaveAttribute('aria-disabled');
  });

  it('renders an input without a disabled attribute', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete disabled="false"></admiralty-autocomplete>`,
    });

    expect(page.doc.querySelector('input')).not.toHaveAttribute('disabled');
    expect(page.doc.querySelector('input')).not.toHaveAttribute('aria-disabled');
  });

  it('renders with a label', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete label="Country"></admiralty-autocomplete>`,
    });

    expect(page.doc.querySelector('admiralty-label').innerHTML).toContain('Country');
  });

  it('renders without a label', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete></admiralty-autocomplete>`,
    });

    expect(page.doc.querySelector('admiralty-label')).toBeNull();
  });

  it('renders with a hint', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete hint="Select a country"></admiralty-autocomplete>`,
    });

    expect(page.doc.querySelector('admiralty-hint').innerHTML).toContain('Select a country');
  });

  it('renders without a hint', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete></admiralty-autocomplete>`,
    });

    expect(page.doc.querySelector('admiralty-hint')).toBeNull();
  });

  it('renders an input with a name attribute', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete name="test"></admiralty-autocomplete>`,
    });

    expect(page.doc.querySelector('input')).toEqualAttribute('name', 'test');
  });

  it('renders an input with a custom CSS namespace', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete css-namespace="test"></admiralty-autocomplete>`,
    });

    expect(page.doc.querySelector('input')).toHaveClass('test__input');
    expect(page.doc.querySelector('ul')).toHaveClass('test__menu');
  });

  it('renders with an aria-expanded attribute', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete></admiralty-autocomplete>`,
    });

    expect(page.doc.querySelector('input')).toEqualAttribute('aria-expanded', 'false');
  });

  it('renders with an aria-describedby attribute', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete id='autocomplete-default'></admiralty-autocomplete>`,
    });

    expect(page.doc.querySelector('input')).toEqualAttribute('aria-describedby', 'autocomplete-default__assistiveHint');
  });

  describe('renders with an aria-autocomplete attribute', () => {
    it('of value "list", when autoselect is not enabled', async () => {
      const page = await newSpecPage({
        components: [AutocompleteComponent],
        html: `<admiralty-autocomplete required></admiralty-autocomplete>`,
      });

      expect(page.doc.querySelector('input')).toEqualAttribute('aria-autocomplete', 'list');
    });

    it('of value "both", when autoselect is enabled', async () => {
      const page = await newSpecPage({
        components: [AutocompleteComponent],
        html: `<admiralty-autocomplete required autoselect></admiralty-autocomplete>`,
      });

      expect(page.doc.querySelector('input')).toEqualAttribute('aria-autocomplete', 'both');
    });
  });

  it('renders an invalid message', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete invalid="true" invalid-message="Select an option"></admiralty-autocomplete>`,
    });

    expect(page.doc.querySelector('admiralty-input-invalid').innerHTML).toEqual('Select an option');
  });

  it('renders without a message when invalid is false', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete invalid="false" invalid-message="Select an option"></admiralty-autocomplete>`,
    });

    expect(page.doc.querySelector('admiralty-input-invalid')).toBeNull();
  });

  it('renders without a message when invalid message is not provided', async () => {
    const page = await newSpecPage({
      components: [AutocompleteComponent],
      html: `<admiralty-autocomplete invalid="true"></admiralty-autocomplete>`,
    });

    expect(page.doc.querySelector('admiralty-input-invalid')).toBeNull();
  });
});
