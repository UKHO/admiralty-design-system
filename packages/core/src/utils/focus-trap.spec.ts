import { FocusTrap, getFocusableElements } from './focus-trap';

/**
 * Focus behaviour (activeElement, Tab wrapping) is covered by header.e2e.ts, because
 * Stencil's mock-doc does not implement focus tracking.
 */
describe('focus-trap', () => {
  let container: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = `
      <button id="outside">outside</button>
      <div id="panel">
        <a id="first" href="#one">one</a>
        <button id="middle">two</button>
        <span id="not-focusable">three</span>
        <a id="last" href="#four">four</a>
      </div>
    `;
    container = document.getElementById('panel');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('returns tabbable descendants in DOM order', () => {
    expect(getFocusableElements(container).map(el => el.id)).toEqual(['first', 'middle', 'last']);
  });

  it('excludes elements hidden from assistive technology', () => {
    document.getElementById('middle').setAttribute('aria-hidden', 'true');

    expect(getFocusableElements(container).map(el => el.id)).toEqual(['first', 'last']);
  });

  it('returns an empty list when there is no container', () => {
    expect(getFocusableElements(null)).toEqual([]);
  });

  it('reports whether it is active', () => {
    const trap = new FocusTrap();
    expect(trap.active).toBe(false);

    trap.activate(container, { focusOnActivate: false });
    expect(trap.active).toBe(true);

    trap.deactivate(false);
    expect(trap.active).toBe(false);
  });

  it('calls onEscape when Escape is pressed', () => {
    const onEscape = jest.fn();
    const trap = new FocusTrap();
    trap.activate(container, { onEscape, focusOnActivate: false });

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

    expect(onEscape).toHaveBeenCalledTimes(1);
    trap.deactivate(false);
  });

  it('ignores key presses once deactivated', () => {
    const onEscape = jest.fn();
    const trap = new FocusTrap();
    trap.activate(container, { onEscape, focusOnActivate: false });
    trap.deactivate(false);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

    expect(onEscape).not.toHaveBeenCalled();
  });

  it('cannot be activated twice', () => {
    const first = jest.fn();
    const second = jest.fn();
    const trap = new FocusTrap();

    trap.activate(container, { onEscape: first, focusOnActivate: false });
    trap.activate(container, { onEscape: second, focusOnActivate: false });

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

    expect(first).toHaveBeenCalledTimes(1);
    expect(second).not.toHaveBeenCalled();
    trap.deactivate(false);
  });
});
