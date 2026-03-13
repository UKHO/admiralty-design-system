import { newSpecPage } from '@stencil/core/testing';
import { TooltipComponent } from './tooltip';

describe('admiralty-tooltip', () => {
    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => undefined);
    });

    afterEach(() => {
        jest.restoreAllMocks();
        document.body.innerHTML = '';
    });

    const wait = async (ms: number) => {
        await new Promise((resolve) => setTimeout(resolve, ms));
    };

    const mockRect = (partial: Partial<DOMRect>): DOMRect => {
        return {
            x: 0,
            y: 0,
            width: 100,
            height: 20,
            top: 0,
            right: 100,
            bottom: 20,
            left: 0,
            toJSON: () => ({}),
            ...partial,
        } as DOMRect;
    };

    const setupWithTarget = async (placement = 'top', alignment = 'centre') => {
        const page = await newSpecPage({
            components: [TooltipComponent],
            html: `<admiralty-tooltip for="tooltip-target" placement="${placement}" alignment="${alignment}">Tooltip content</admiralty-tooltip>`,
        });

        const root = page.root as HTMLElement;
        const instance = page.rootInstance as TooltipComponent;
        const target = page.doc.createElement('button');
        target.id = 'tooltip-target';

        Object.defineProperty(target, 'getBoundingClientRect', {
            configurable: true,
            value: jest.fn(() => mockRect({ top: 80, right: 240, bottom: 100, left: 200, width: 40, height: 20 })),
        });

        page.doc.body.appendChild(target);

        const tooltipEl = root.querySelector('.tooltip') as HTMLElement;
        Object.defineProperty(tooltipEl, 'getBoundingClientRect', {
            configurable: true,
            value: jest.fn(() => mockRect({ top: 40, right: 260, bottom: 90, left: 140, width: 120, height: 50 })),
        });

        instance.componentDidLoad();

        return { page, root, instance, target, tooltipEl };
    };

    it('renders with defaults', async () => {
        const page = await newSpecPage({
            components: [TooltipComponent],
            html: `<admiralty-tooltip for="x">Tooltip description</admiralty-tooltip>`,
        });

        expect(page.root).toEqualHtml(`
			<admiralty-tooltip alignment="centre" for="x" placement="top">
				<div class="tooltip" data-alignment="centre" data-placement="top" role="tooltip">
					Tooltip description
					<span aria-hidden="true" class="arrow"></span>
				</div>
			</admiralty-tooltip>
		`);
    });

    it('renders with explicit placement and alignment', async () => {
        const page = await newSpecPage({
            components: [TooltipComponent],
            html: `<admiralty-tooltip for="x" placement="left" alignment="start">Tooltip description</admiralty-tooltip>`,
        });

        const tooltip = page.root?.querySelector('.tooltip') as HTMLElement;
        expect(page.root).toEqualAttribute('placement', 'left');
        expect(page.root).toEqualAttribute('alignment', 'start');
        expect(tooltip.getAttribute('data-placement')).toBe('left');
        expect(tooltip.getAttribute('data-alignment')).toBe('start');
    });

    it('opens on target mouseenter and hides after delayed mouseleave', async () => {
        const { root, target } = await setupWithTarget('top');

        target.dispatchEvent(new Event('mouseenter'));
        expect(root.hasAttribute('data-open')).toBe(true);

        target.dispatchEvent(new Event('mouseleave'));
        await wait(119);
        expect(root.hasAttribute('data-open')).toBe(true);

        await wait(10);
        expect(root.hasAttribute('data-open')).toBe(false);
    });

    it('cancels a pending hide when the trigger is hovered again before timeout', async () => {
        const { root, target } = await setupWithTarget('top');

        target.dispatchEvent(new Event('mouseenter'));
        target.dispatchEvent(new Event('mouseleave'));
        await wait(60);
        target.dispatchEvent(new Event('mouseenter'));

        await wait(80);
        expect(root.hasAttribute('data-open')).toBe(true);
    });

    it('registers interaction listeners on trigger and tooltip elements', async () => {
        const page = await newSpecPage({
            components: [TooltipComponent],
            html: `<admiralty-tooltip for="tooltip-target">Tooltip content</admiralty-tooltip>`,
        });

        const instance = page.rootInstance as TooltipComponent;
        const root = page.root as HTMLElement;
        const target = page.doc.createElement('button');
        target.id = 'tooltip-target';
        const tooltipEl = root.querySelector('.tooltip') as HTMLElement;

        Object.defineProperty(target, 'getBoundingClientRect', {
            value: jest.fn(() => mockRect({ top: 80, right: 240, bottom: 100, left: 200, width: 40, height: 20 })),
        });
        Object.defineProperty(tooltipEl, 'getBoundingClientRect', {
            value: jest.fn(() => mockRect({ top: 40, right: 260, bottom: 90, left: 140, width: 120, height: 50 })),
        });

        const targetAddEventListenerSpy = jest.spyOn(target, 'addEventListener');
        const tooltipAddEventListenerSpy = jest.spyOn(tooltipEl, 'addEventListener');
        page.doc.body.appendChild(target);

        instance.componentDidLoad();

        expect(targetAddEventListenerSpy).toHaveBeenCalledWith('mouseenter', expect.any(Function));
        expect(targetAddEventListenerSpy).toHaveBeenCalledWith('mouseleave', expect.any(Function));
        expect(targetAddEventListenerSpy).toHaveBeenCalledWith('focus', expect.any(Function), true);
        expect(targetAddEventListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function), true);
        expect(targetAddEventListenerSpy).toHaveBeenCalledWith('mouseenter', expect.any(Function));
        expect(targetAddEventListenerSpy).toHaveBeenCalledWith('focus', expect.any(Function), true);

        expect(tooltipAddEventListenerSpy).toHaveBeenCalledWith('mouseenter', expect.any(Function));
        expect(tooltipAddEventListenerSpy).toHaveBeenCalledWith('mouseleave', expect.any(Function));
        expect(tooltipAddEventListenerSpy).toHaveBeenCalledWith('focusin', expect.any(Function));
        expect(tooltipAddEventListenerSpy).toHaveBeenCalledWith('focusout', expect.any(Function));
    });

    it('keeps tooltip open when moving from trigger to tooltip content', async () => {
        const { root, target, tooltipEl } = await setupWithTarget('top');

        target.dispatchEvent(new Event('mouseenter'));
        target.dispatchEvent(new Event('mouseleave'));
        tooltipEl.dispatchEvent(new Event('mouseenter'));

        await wait(130);
        expect(root.hasAttribute('data-open')).toBe(true);
    });

    it('opens on focus and hides on blur after delay', async () => {
        const { root, target } = await setupWithTarget('top');

        target.dispatchEvent(new Event('focus'));
        expect(root.hasAttribute('data-open')).toBe(true);

        target.dispatchEvent(new Event('blur'));
        await wait(130);
        expect(root.hasAttribute('data-open')).toBe(false);
    });

    it('clears pending timeout on disconnect', async () => {
        const { root, instance, target } = await setupWithTarget('top');

        target.dispatchEvent(new Event('mouseenter'));
        target.dispatchEvent(new Event('mouseleave'));

        instance.disconnectedCallback();
        await wait(130);

        expect(root.hasAttribute('data-open')).toBe(true);
        expect((instance as any).hideTimeout).toBeUndefined();
    });

    it('removes interaction listeners from trigger and tooltip elements on disconnect', async () => {
        const { instance, target, tooltipEl } = await setupWithTarget('top');
        const targetRemoveEventListenerSpy = jest.spyOn(target, 'removeEventListener');
        const tooltipRemoveEventListenerSpy = jest.spyOn(tooltipEl, 'removeEventListener');

        instance.disconnectedCallback();

        expect(targetRemoveEventListenerSpy).toHaveBeenCalledWith('mouseenter', expect.any(Function));
        expect(targetRemoveEventListenerSpy).toHaveBeenCalledWith('mouseleave', expect.any(Function));
        expect(targetRemoveEventListenerSpy).toHaveBeenCalledWith('focus', expect.any(Function), true);
        expect(targetRemoveEventListenerSpy).toHaveBeenCalledWith('blur', expect.any(Function), true);
        expect(tooltipRemoveEventListenerSpy).toHaveBeenCalledWith('mouseenter', expect.any(Function));
        expect(tooltipRemoveEventListenerSpy).toHaveBeenCalledWith('mouseleave', expect.any(Function));
        expect(tooltipRemoveEventListenerSpy).toHaveBeenCalledWith('focusin', expect.any(Function));
        expect(tooltipRemoveEventListenerSpy).toHaveBeenCalledWith('focusout', expect.any(Function));
    });

    it('checkElementOffScreen returns correct side status', async () => {
        const { instance } = await setupWithTarget('top');
        const el = document.createElement('div');

        Object.defineProperty(el, 'getBoundingClientRect', {
            value: jest.fn(() => mockRect({ top: -1, right: 10000, bottom: 900, left: -3 })),
        });

        const status = instance.checkElementOffScreen(el);
        expect(status).toEqual({ topOff: true, bottomOff: true, leftOff: true, rightOff: true });
    });

    it('checkElementOffScreen returns all false when fully in view', async () => {
        const { instance } = await setupWithTarget('top');
        const el = document.createElement('div');

        Object.defineProperty(el, 'getBoundingClientRect', {
            value: jest.fn(() => mockRect({ top: 10, right: 100, bottom: 60, left: 10 })),
        });

        const status = instance.checkElementOffScreen(el);
        expect(status).toEqual({ topOff: false, bottomOff: false, leftOff: false, rightOff: false });
    });

    it('handleOffScreen corrects left overflow', async () => {
        const { instance, tooltipEl } = await setupWithTarget('top');
        jest.spyOn(instance, 'checkElementOffScreen').mockReturnValue({
            topOff: false,
            bottomOff: false,
            leftOff: true,
            rightOff: false,
        });

        instance.handleOffScreen(tooltipEl, 8);

        expect(tooltipEl.style.left).toBe('0');
        expect(tooltipEl.style.transform).toBe('translate(0, 8px) scale(1)');
    });

    it('handleOffScreen corrects right overflow', async () => {
        const { instance, tooltipEl } = await setupWithTarget('top');
        jest.spyOn(instance, 'checkElementOffScreen').mockReturnValue({
            topOff: false,
            bottomOff: false,
            leftOff: false,
            rightOff: true,
        });

        instance.handleOffScreen(tooltipEl, 8);

        expect(tooltipEl.style.right).toBe('0');
        expect(tooltipEl.style.transform).toBe('translate(0, 8px) scale(1)');
    });

    it('positions tooltip for top placement', async () => {
        const { target, tooltipEl } = await setupWithTarget('top');

        target.dispatchEvent(new Event('mouseenter'));

        expect(tooltipEl.style.top).toBe('72px');
        expect(tooltipEl.style.left).toBe('220px');
        expect(tooltipEl.style.transform).toBe('translate(-50%, calc(-100% - 8px)) scale(1)');
    });

    it('positions tooltip for bottom placement', async () => {
        const { target, tooltipEl } = await setupWithTarget('bottom');

        target.dispatchEvent(new Event('mouseenter'));

        expect(tooltipEl.style.top).toBe('108px');
        expect(tooltipEl.style.left).toBe('220px');
        expect(tooltipEl.style.transform).toBe('translate(-50%, 8px) scale(1)');
    });

    it('positions tooltip for left placement', async () => {
        const { target, tooltipEl } = await setupWithTarget('left');

        target.dispatchEvent(new Event('mouseenter'));

        expect(tooltipEl.style.top).toBe('90px');
        expect(tooltipEl.style.left).toBe('180px');
        expect(tooltipEl.style.transform).toBe('translate(calc(-100% - 8px), -50%) scale(1)');
    });

    it('positions tooltip for right placement', async () => {
        const { target, tooltipEl } = await setupWithTarget('right');

        target.dispatchEvent(new Event('mouseenter'));

        expect(tooltipEl.style.top).toBe('90px');
        expect(tooltipEl.style.left).toBe('260px');
        expect(tooltipEl.style.transform).toBe('translate(8px, -50%) scale(1)');
    });

    it('chooses fallback placement when placement is unknown', async () => {
        const { instance, target } = await setupWithTarget('top');
        jest.spyOn(instance, 'handleOffScreen').mockImplementation(() => undefined);

        const originalInnerWidth = window.innerWidth;
        const originalInnerHeight = window.innerHeight;
        Object.defineProperty(window, 'innerWidth', { configurable: true, value: 600 });
        Object.defineProperty(window, 'innerHeight', { configurable: true, value: 400 });

        (instance as any).placement = 'unknown';
        instance.updateTooltipPosition();
        target.dispatchEvent(new Event('mouseenter'));

        expect(instance.placement).toBe('right');
        expect(instance.handleOffScreen).toHaveBeenCalled();

        Object.defineProperty(window, 'innerWidth', { configurable: true, value: originalInnerWidth });
        Object.defineProperty(window, 'innerHeight', { configurable: true, value: originalInnerHeight });
    });

    it('chooses left fallback placement when left space is greater than right space', async () => {
        const { instance, target } = await setupWithTarget('top');
        jest.spyOn(instance, 'handleOffScreen').mockImplementation(() => undefined);

        const originalInnerWidth = window.innerWidth;
        const originalInnerHeight = window.innerHeight;
        Object.defineProperty(window, 'innerWidth', { configurable: true, value: 260 });
        Object.defineProperty(window, 'innerHeight', { configurable: true, value: 400 });

        Object.defineProperty(target, 'getBoundingClientRect', {
            value: jest.fn(() => mockRect({ top: 80, right: 230, bottom: 100, left: 200, width: 30, height: 20 })),
        });

        (instance as any).placement = 'unknown';
        instance.updateTooltipPosition();
        target.dispatchEvent(new Event('mouseenter'));

        expect(instance.placement).toBe('left');

        Object.defineProperty(window, 'innerWidth', { configurable: true, value: originalInnerWidth });
        Object.defineProperty(window, 'innerHeight', { configurable: true, value: originalInnerHeight });
    });

    it('chooses top fallback placement when above space is greater than below space', async () => {
        const { instance, target } = await setupWithTarget('top');
        jest.spyOn(instance, 'handleOffScreen').mockImplementation(() => undefined);

        const originalInnerWidth = window.innerWidth;
        const originalInnerHeight = window.innerHeight;
        Object.defineProperty(window, 'innerWidth', { configurable: true, value: 300 });
        Object.defineProperty(window, 'innerHeight', { configurable: true, value: 120 });

        Object.defineProperty(target, 'getBoundingClientRect', {
            value: jest.fn(() => mockRect({ top: 80, right: 200, bottom: 100, left: 100, width: 100, height: 20 })),
        });

        (instance as any).placement = 'unknown';
        instance.updateTooltipPosition();
        target.dispatchEvent(new Event('mouseenter'));

        expect(instance.placement).toBe('top');

        Object.defineProperty(window, 'innerWidth', { configurable: true, value: originalInnerWidth });
        Object.defineProperty(window, 'innerHeight', { configurable: true, value: originalInnerHeight });
    });

    it('chooses bottom fallback placement when below space is greater than above space', async () => {
        const { instance, target } = await setupWithTarget('top');
        jest.spyOn(instance, 'handleOffScreen').mockImplementation(() => undefined);

        const originalInnerWidth = window.innerWidth;
        const originalInnerHeight = window.innerHeight;
        Object.defineProperty(window, 'innerWidth', { configurable: true, value: 300 });
        Object.defineProperty(window, 'innerHeight', { configurable: true, value: 260 });

        Object.defineProperty(target, 'getBoundingClientRect', {
            value: jest.fn(() => mockRect({ top: 20, right: 200, bottom: 40, left: 100, width: 100, height: 20 })),
        });

        (instance as any).placement = 'unknown';
        instance.updateTooltipPosition();
        target.dispatchEvent(new Event('mouseenter'));

        expect(instance.placement).toBe('bottom');

        Object.defineProperty(window, 'innerWidth', { configurable: true, value: originalInnerWidth });
        Object.defineProperty(window, 'innerHeight', { configurable: true, value: originalInnerHeight });
    });

    it('is resilient when trigger element is missing', async () => {
        const page = await newSpecPage({
            components: [TooltipComponent],
            html: `<admiralty-tooltip for="missing-target">Tooltip content</admiralty-tooltip>`,
        });

        const instance = page.rootInstance as TooltipComponent;

        expect(() => instance.componentDidLoad()).not.toThrow();
        expect((instance as any).target).toBeNull();
    });

    it('logs placement changes via watcher', async () => {
        const page = await newSpecPage({
            components: [TooltipComponent],
            html: `<admiralty-tooltip for="x">Tooltip content</admiralty-tooltip>`,
        });

        const instance = page.rootInstance as TooltipComponent;
        instance.onPlacementChange('left');

        expect(console.log).toHaveBeenCalledWith('changed: ', 'left');
    });
});
