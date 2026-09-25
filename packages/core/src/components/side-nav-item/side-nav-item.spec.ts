import { newSpecPage } from '@stencil/core/testing';
import { SideNavItemComponent } from './side-nav-item';

describe('admiralty-side-nav-item', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SideNavItemComponent],
      html: '<admiralty-side-nav-item></admiralty-side-nav-item>',
    });
    expect(root).toEqualHtml(`
      <admiralty-side-nav-item>
        <a class="section" role="link" tabindex="0"></a>
      </admiralty-side-nav-item>
    `);
  });

  it('should emit sideNavItemSelected event when emitSideNavItemSelected() is called', () => {
    const sideNavItemComponent = new SideNavItemComponent();
    sideNavItemComponent.sideNavItemId = '1';

    const sideNavItemSelectedEmitSpy = jest.spyOn(sideNavItemComponent.sideNavItemSelected, 'emit');

    expect(sideNavItemSelectedEmitSpy).toHaveBeenCalledTimes(0);

    sideNavItemComponent.emitSideNavItemSelected();

    expect(sideNavItemSelectedEmitSpy).toHaveBeenCalledTimes(1);
    expect(sideNavItemSelectedEmitSpy).toHaveBeenCalledWith('1');
  });

  it('should call emitSideNavItemSelected() when handleClickAction() is called', () => {
    const sideNavItemComponent = new SideNavItemComponent();
    sideNavItemComponent.sideNavItemId = '1';

    const emitSideNavItemSelectedSpy = jest.spyOn(sideNavItemComponent, 'emitSideNavItemSelected');

    expect(emitSideNavItemSelectedSpy).toHaveBeenCalledTimes(0);

    sideNavItemComponent.handleClickAction();

    expect(emitSideNavItemSelectedSpy).toHaveBeenCalledTimes(1);
  });

  it('should call emitSideNavItemSelected() when handleKeyUpAction() is called with Enter Key Keyboard Event', () => {
    const sideNavItemComponent = new SideNavItemComponent();
    sideNavItemComponent.sideNavItemId = '1';

    const emitSideNavItemSelectedSpy = jest.spyOn(sideNavItemComponent, 'emitSideNavItemSelected');

    const enterKeyKeyboardEvent = new KeyboardEvent('', { key: 'Enter' });

    expect(emitSideNavItemSelectedSpy).toHaveBeenCalledTimes(0);

    sideNavItemComponent.handleKeyUpAction(enterKeyKeyboardEvent);

    expect(emitSideNavItemSelectedSpy).toHaveBeenCalledTimes(1);
  });

  it('should call emitSideNavItemSelected() when handleKeyUpAction() is not called with Non Enter Key Keyboard Event', () => {
    const sideNavItemComponent = new SideNavItemComponent();
    sideNavItemComponent.sideNavItemId = '1';

    const emitSideNavItemSelectedSpy = jest.spyOn(sideNavItemComponent, 'emitSideNavItemSelected');

    const nonEnterKeyKeyboardEvent = new KeyboardEvent('', { key: 'NotEnter' });

    expect(emitSideNavItemSelectedSpy).toHaveBeenCalledTimes(0);

    sideNavItemComponent.handleKeyUpAction(nonEnterKeyKeyboardEvent);

    expect(emitSideNavItemSelectedSpy).toHaveBeenCalledTimes(0);

    sideNavItemComponent.handleKeyUpAction(nonEnterKeyKeyboardEvent);

    expect(emitSideNavItemSelectedSpy).toHaveBeenCalledTimes(0);
  });

  it('should call emitSideNavItemSelected() when handleKeyUpAction() is called with Space Key Keyboard Event', () => {
    const sideNavItemComponent = new SideNavItemComponent();
    sideNavItemComponent.sideNavItemId = '1';

    const emitSideNavItemSelectedSpy = jest.spyOn(sideNavItemComponent, 'emitSideNavItemSelected');

    sideNavItemComponent.handleKeyUpAction(new KeyboardEvent('', { key: ' ' }));

    expect(emitSideNavItemSelectedSpy).toHaveBeenCalledTimes(1);
  });

  it('should set aria-current to page when navActive is true', async () => {
    const { root } = await newSpecPage({
      components: [SideNavItemComponent],
      html: '<admiralty-side-nav-item nav-active="true"></admiralty-side-nav-item>',
    });

    expect(root.querySelector('a').getAttribute('aria-current')).toBe('page');
  });
});
