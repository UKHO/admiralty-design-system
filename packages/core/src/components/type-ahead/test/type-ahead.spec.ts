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
        <div class="visually-hidden">
          <div aria-atomic="true" aria-live="polite" class="results-status-a" role="status"></div>
          <div aria-atomic="true" aria-live="polite" class="results-status-b" role="status"></div>
        </div>
        <admiralty-input class="filterTextInput" type="text"></admiralty-input>
        <span class="visually-hidden" id="admiralty-typeahead-1-assistive-hint">
          When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.
        </span>
      </admiralty-type-ahead>
    `);
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [TypeAheadComponent, AdmiraltyTypeAheadItem],
      html: `
      <admiralty-type-ahead label="Please type something" placeholder="This is a test">
      <admiralty-type-ahead-item value="item1"></admiralty-type-ahead-item>
      <admiralty-type-ahead-item value="item2"></admiralty-type-ahead-item>
      </admiralty-type-ahead>`,
    });

    expect(page.root).toMatchInlineSnapshot(`
      <admiralty-type-ahead label="Please type something" placeholder="This is a test">
        <!---->
        <div class="visually-hidden">
          <div aria-atomic="true" aria-live="polite" class="results-status-a" role="status"></div>
          <div aria-atomic="true" aria-live="polite" class="results-status-b" role="status"></div>
        </div>
        <admiralty-input class="filterTextInput" label="Please type something" placeholder="This is a test" type="text"></admiralty-input>
        <span class="visually-hidden" id="admiralty-typeahead-2-assistive-hint">
          When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.
        </span>
        <admiralty-type-ahead-item value="item1"></admiralty-type-ahead-item>
        <admiralty-type-ahead-item value="item2"></admiralty-type-ahead-item>
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
