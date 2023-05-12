import { newSpecPage } from '@stencil/core/testing';
import { TypeAheadComponent } from '../type-ahead';
import { AdmiraltyTypeAheadItem } from '../../type-ahead-item/type-ahead-item';

describe('type-ahead', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TypeAheadComponent],
      html: `<admiralty-type-ahead></admiralty-type-ahead>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-type-ahead>
        <mock:shadow-root>
          <div class="visually-hidden">
            <div aria-atomic="true" aria-live="polite" class="results-status-a" role="status"></div>
            <div aria-atomic="true" aria-live="polite" class="results-status-b" role="status"></div>
          </div>
          <admiralty-input class="filterTextInput" type="text"></admiralty-input>
          <span class="visually-hidden" id="admiralty-typeahead-1-assistive-hint">
            When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.
          </span>
          <slot></slot>
        </mock:shadow-root>
      </admiralty-type-ahead>
    `);
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [TypeAheadComponent, AdmiraltyTypeAheadItem],
      html: `
      <admiralty-type-ahead label="Please type something" placeholder="This is a test">
      <AdmiraltyTypeAheadItem value="item1"></AdmiraltyTypeAheadItem>
      <AdmiraltyTypeAheadItem value="item2"></AdmiraltyTypeAheadItem>
      </admiralty-type-ahead>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-type-ahead label="Please type something" placeholder="This is a test">
        <mock:shadow-root>
          <div class="visually-hidden">
            <div aria-atomic="true" aria-live="polite" class="results-status-a" role="status"></div>
            <div aria-atomic="true" aria-live="polite" class="results-status-b" role="status"></div>
          </div>
          <admiralty-input class="filterTextInput" label="Please type something" placeholder="This is a test" type="text"></admiralty-input>
          <span class="visually-hidden" id="admiralty-typeahead-2-assistive-hint">
            When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.
          </span>
          <slot></slot>
        </mock:shadow-root>
        <admiraltytypeaheaditem value="item1"></admiraltytypeaheaditem>
        <admiraltytypeaheaditem value="item2"></admiraltytypeaheaditem>
      </admiralty-type-ahead>
    `);
  });

  it('fires valueChanged event', () => {
    const keyPressed = 'd';

    const component = new TypeAheadComponent();
    component.inputControl = { value: keyPressed } as unknown as HTMLAdmiraltyInputElement;

    const eventSpy = jest.spyOn(component.valueChanged, 'emit');

    const simEvent = { key: keyPressed, stopImmediatePropagation: jest.fn() } as unknown as KeyboardEvent;
    component.handleKeyPressed(simEvent);

    expect(eventSpy).toBeCalledWith(keyPressed);
  });

  it('fires selectionChanged event', () => {
    const component = new TypeAheadComponent();
    component.inputControl = { value: '' } as unknown as HTMLAdmiraltyInputElement;

    const eventSpy = jest.spyOn(component.selectionChanged, 'emit');
    const itemText = 'item';

    component.handleItemSelected(itemText);

    expect(eventSpy).toBeCalledWith(itemText);
  });
});
