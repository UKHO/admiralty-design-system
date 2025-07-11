import { newSpecPage } from '@stencil/core/testing';
import { TextSideBarItemComponent } from "./text-side-bar-item";

describe('admiralty-text-side-bar-item', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TextSideBarItemComponent],
      html: '<admiralty-text-side-bar-item></admiralty-text-side-bar-item>',
    });
    expect(root).toEqualHtml(`
      <admiralty-text-side-bar-item data-text-side-bar-item-id="text-side-bar-item-1">
        <li>
          <div class="expandable-item">
            <button class="expandable-item-button" id="text-side-bar-item-button-1">
             <div class="icon">
               <admiralty-icon name="keyboard-arrow-down-rounded" size="30"></admiralty-icon>
             </div>
            </button>
            <div class="slot" hidden=""></div>
          </div>
        </li>
      </admiralty-text-side-bar-item>
    `);
  });

  it('renders active text side bar item', async () => {
    const page = await newSpecPage({
      components: [TextSideBarItemComponent],
      html: `<admiralty-text-side-bar-item href="/test" active="true" item-text="Test"></admiralty-text-side-bar-item>`,
    });
    expect(page.root).toEqualHtml(`
      <admiralty-text-side-bar-item active="" data-text-side-bar-item-id="text-side-bar-item-2" href="/test" item-text="Test">
        <li>
          <div class="expandable-item">
            <button class="active expandable-item-button" id="text-side-bar-item-button-2">
              Test
              <div class="icon">
                <admiralty-icon name="keyboard-arrow-down-rounded" size="30"></admiralty-icon>
              </div>
           </button>
           <div class="slot" hidden=""></div>
         </div>
        </li>
      </admiralty-text-side-bar-item>
    `);
  });

  it('renders inactive side bar item', async () => {
    const page = await newSpecPage({
      components: [TextSideBarItemComponent],
      html: `<admiralty-text-side-bar-item href="/test" active="false" item-text="Test"></admiralty-text-side-bar-item>`,
    });

    expect(page.root).toEqualHtml(`
      <admiralty-text-side-bar-item active="false" data-text-side-bar-item-id="text-side-bar-item-3" href="/test" item-text="Test">
        <li>
          <div class="expandable-item">
            <button class="expandable-item-button" id="text-side-bar-item-button-3">
              Test
              <div class="icon">
                <admiralty-icon name="keyboard-arrow-down-rounded" size="30"></admiralty-icon>
              </div>
            </button>
            <div class="slot" hidden=""></div>
          </div>
        </li>
      </admiralty-text-side-bar-item>
    `);
  });

  it('should emit sideBarItemClick event when handleClick() is called', () => {
    const textSideBarItemComponent = new TextSideBarItemComponent();
    textSideBarItemComponent.href = '/test';

    const textSideBarItemSelectedEmitSpy = jest.spyOn(textSideBarItemComponent.textSideBarItemClick, 'emit');

    expect(textSideBarItemSelectedEmitSpy).toHaveBeenCalledTimes(0);

    textSideBarItemComponent.handleClick(new MouseEvent('click'));

    expect(textSideBarItemSelectedEmitSpy).toHaveBeenCalledTimes(1);
    expect(textSideBarItemSelectedEmitSpy).toHaveBeenCalledWith('/test');
  });

  it('emits an event when the link is clicked', async () => {
    const page = await newSpecPage({
      components: [TextSideBarItemComponent],
      html: `<admiralty-text-side-bar-item href="/test">Test</admiralty-text-side-bar-item>`,
    });

    const eventSpy = jest.fn();
    page.doc.addEventListener('textSideBarItemClick', eventSpy);

    const link = page.doc.querySelector('admiralty-text-side-bar-item button');
    link.dispatchEvent(new Event('click'));

    await page.waitForChanges();

    expect(page.doc.querySelector('admiralty-text-side-bar-item').innerHTML).toContain('class="slot"');
  });
});
