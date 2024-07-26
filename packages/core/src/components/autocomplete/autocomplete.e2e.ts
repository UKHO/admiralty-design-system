import { newE2EPage } from '@stencil/core/testing';

describe('autocomplete', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-autocomplete></admiralty-autocomplete>');

    const element = await page.find('admiralty-autocomplete');
    expect(element).toHaveClass('hydrated');
  });

  it('searches for options', async () => {
    const page = await newE2EPage();
    await page.setContent(`<admiralty-autocomplete>
        <admiralty-autocomplete-option value="de">Germany</admiralty-autocomplete-option>
        <admiralty-autocomplete-option value="gb">United Kingdom</admiralty-autocomplete-option>
        <admiralty-autocomplete-option value="us">United States</admiralty-autocomplete-option>
      </admiralty-autocomplete>`);

    const input = await page.find('input');
    let options = await page.findAll('.autocomplete__option');

    expect(input).toBeDefined();
    expect(options.length).toEqual(0);

    await input.press('u');
    await input.press('n');
    await input.press('i');
    await input.press('t');
    await input.press('e');
    await input.press('d');

    options = await page.findAll('.autocomplete__option');
    expect(options.length).toEqual(2);
    expect(options[0].innerText).toEqual('United Kingdom');
    expect(options[1].innerText).toEqual('United States');

    await input.press(' ');
    await input.press('k');
    await input.press('i');
    await input.press('n');
    await input.press('g');

    options = await page.findAll('.autocomplete__option');
    expect(options.length).toEqual(1);
    expect(options[0].innerText).toEqual('United Kingdom');
  });

  it('hides message when no options are available', async () => {
    const page = await newE2EPage();
    await page.setContent(`<admiralty-autocomplete show-no-options-found="false">
        <admiralty-autocomplete-option value="de">Germany</admiralty-autocomplete-option>
        <admiralty-autocomplete-option value="gb">United Kingdom</admiralty-autocomplete-option>
        <admiralty-autocomplete-option value="us">United States</admiralty-autocomplete-option>
      </admiralty-autocomplete>`);

    const input = await page.find('input');
    let options = await page.findAll('.autocomplete__option');

    await input.press('u');

    options = await page.findAll('.autocomplete__option');
    expect(options.length).toEqual(2);
    expect(options[0].innerText).toEqual('United Kingdom');
    expect(options[1].innerText).toEqual('United States');

    await input.press('z');

    options = await page.findAll('.autocomplete__option');
    expect(options.length).toEqual(0);

    const message = await page.find('autocomplete__option--no-results');
    expect(message).toBeNull();
  });

  it('shows message when no options are available', async () => {
    const page = await newE2EPage();
    await page.setContent(`<admiralty-autocomplete>
        <admiralty-autocomplete-option value="de">Germany</admiralty-autocomplete-option>
        <admiralty-autocomplete-option value="gb">United Kingdom</admiralty-autocomplete-option>
        <admiralty-autocomplete-option value="us">United States</admiralty-autocomplete-option>
      </admiralty-autocomplete>`);

    const input = await page.find('input');
    let options = await page.findAll('.autocomplete__option');

    await input.press('u');

    options = await page.findAll('.autocomplete__option');
    expect(options.length).toEqual(2);
    expect(options[0].innerText).toEqual('United Kingdom');
    expect(options[1].innerText).toEqual('United States');

    await input.press('z');

    const message = await page.find('.autocomplete__option--no-results');
    expect(message).not.toBeNull();
  });

  describe('arrow keys', () => {
    it('selects the correct option', async () => {
      const page = await newE2EPage();
      await page.setContent(`<admiralty-autocomplete>
          <admiralty-autocomplete-option value="de">Germany</admiralty-autocomplete-option>
          <admiralty-autocomplete-option value="gb">United Kingdom</admiralty-autocomplete-option>
          <admiralty-autocomplete-option value="us">United States</admiralty-autocomplete-option>
        </admiralty-autocomplete>`);

      const input = await page.find('input');
      await input.press('ArrowDown');

      const options = await page.findAll('.autocomplete__option');

      expect(options[0]).toEqualAttribute('aria-selected', 'true');
      expect(options[1]).toEqualAttribute('aria-selected', 'false');
      expect(options[2]).toEqualAttribute('aria-selected', 'false');
    });
  });
});
