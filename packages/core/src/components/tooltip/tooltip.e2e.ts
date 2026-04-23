import { newE2EPage } from '@stencil/core/testing';

describe('tooltip', () => {
    const wait = async (timeout = 0) => {
        await new Promise((resolve) => setTimeout(resolve, timeout));
    };

    const triggerMouseEvent = async (page: any, selector: string, eventName: string) => {
        await page.$eval(
            selector,
            (el, evtName) =>
                el.dispatchEvent(
                    new MouseEvent(evtName as string, {
                        bubbles: true,
                        cancelable: true,
                    }),
                ),
            eventName,
        );
    };

    const triggerFocusEvent = async (page: any, selector: string, eventName: string) => {
        await page.$eval(
            selector,
            (el, evtName) =>
                el.dispatchEvent(
                    new FocusEvent(evtName as string, {
                        bubbles: true,
                        cancelable: true,
                    }),
                ),
            eventName,
        );
    };

    const getTooltipInlineStyles = async (page: any) => {
        return await page.$eval('admiralty-tooltip .tooltip', (el) => {
            const tooltip = el as HTMLElement;
            return {
                top: tooltip.style.top,
                left: tooltip.style.left,
                transform: tooltip.style.transform,
            };
        });
    };

    const setupPage = async (content?: string) => {
        const page = await newE2EPage();

        await page.setContent(
            content ||
            `
					<button id="tooltip-trigger">Hover over me</button>
					<admiralty-tooltip for="tooltip-trigger">Tooltip description</admiralty-tooltip>
				`,
        );

        const host = await page.find('admiralty-tooltip');
        const trigger = await page.find('#tooltip-trigger');
        const tooltip = await page.find('admiralty-tooltip .tooltip');

        return { page, host, trigger, tooltip };
    };

    it('renders and hydrates', async () => {
        const { host, tooltip } = await setupPage();

        expect(host).toHaveClass('hydrated');
        expect(tooltip).not.toBeNull();
        expect(await tooltip.getAttribute('role')).toBe('tooltip');
    });

    it('renders slotted tooltip content', async () => {
        const { tooltip } = await setupPage(`
			<button id="tooltip-trigger">Hover over me</button>
			<admiralty-tooltip for="tooltip-trigger">
				<div>
					<span class="tooltip-title">Tooltip description</span>
					<a href="https://example.org/demo">Demo link</a>
				</div>
			</admiralty-tooltip>
		`);

        expect(await tooltip.innerText).toContain('Tooltip description');
        expect(await tooltip.innerText).toContain('Demo link');
    });

    it('reflects placement and alignment on the rendered tooltip element', async () => {
        const { tooltip } = await setupPage(`
			<button id="tooltip-trigger">Hover over me</button>
			<admiralty-tooltip for="tooltip-trigger" placement="right" alignment="start">Tooltip description</admiralty-tooltip>
		`);

        expect(await tooltip.getAttribute('data-placement')).toBe('right');
        expect(await tooltip.getAttribute('data-alignment')).toBe('start');
    });

    it('removes data-open after hide delay when close is triggered', async () => {
        const { page } = await setupPage();

        await page.$eval('admiralty-tooltip', (el) => el.setAttribute('data-open', ''));
        await page.waitForChanges();
        expect(await page.$eval('admiralty-tooltip', (el) => el.getAttribute('data-open'))).toBe('');

        await triggerMouseEvent(page, '#tooltip-trigger', 'mouseleave');
        await page.waitForChanges();
        await wait(130);
        await page.waitForChanges();
        expect(await page.$eval('admiralty-tooltip', (el) => el.getAttribute('data-open'))).toBeNull();
    });

    it('opens on hover and closes after the hide delay', async () => {
        const { page, host } = await setupPage();

        await triggerMouseEvent(page, '#tooltip-trigger', 'mouseenter');
        await page.waitForChanges();
        const hoveredStyles = await getTooltipInlineStyles(page);
        expect(hoveredStyles.top).not.toBe('');
        expect(hoveredStyles.left).not.toBe('');
        expect(hoveredStyles.transform).not.toBe('');

        await triggerMouseEvent(page, '#tooltip-trigger', 'mouseleave');
        await page.waitForChanges();
        await wait(130);
        await page.waitForChanges();

        expect(await host.getAttribute('data-open')).toBeNull();
    });

    it('stays open when pointer moves from trigger into tooltip', async () => {
        const { page, host } = await setupPage();

        await triggerMouseEvent(page, '#tooltip-trigger', 'mouseenter');
        await page.waitForChanges();
        await triggerMouseEvent(page, '#tooltip-trigger', 'mouseleave');
        await page.waitForChanges();
        await triggerMouseEvent(page, 'admiralty-tooltip .tooltip', 'mouseenter');
        await page.waitForChanges();
        await wait(130);
        await page.waitForChanges();
        const hoveredStyles = await getTooltipInlineStyles(page);
        expect(hoveredStyles.top).not.toBe('');
        expect(hoveredStyles.left).not.toBe('');
        expect(hoveredStyles.transform).not.toBe('');

        await triggerMouseEvent(page, 'admiralty-tooltip .tooltip', 'mouseleave');
        await page.waitForChanges();
        await wait(130);
        await page.waitForChanges();

        expect(await host.getAttribute('data-open')).toBeNull();
    });

    it('opens on focus and closes on blur after the hide delay', async () => {
        const { page, host } = await setupPage();

        await triggerFocusEvent(page, '#tooltip-trigger', 'focus');
        await page.waitForChanges();
        const focusedStyles = await getTooltipInlineStyles(page);
        expect(focusedStyles.top).not.toBe('');
        expect(focusedStyles.left).not.toBe('');
        expect(focusedStyles.transform).not.toBe('');

        await triggerFocusEvent(page, '#tooltip-trigger', 'blur');
        await page.waitForChanges();
        await wait(130);
        await page.waitForChanges();

        expect(await host.getAttribute('data-open')).toBeNull();
    });

    it('keeps the tooltip visible while focus moves inside the tooltip', async () => {
        const { page, host } = await setupPage(`
			<button id="tooltip-trigger">Hover over me</button>
			<admiralty-tooltip for="tooltip-trigger">
				<button id="tooltip-action">Tooltip action</button>
			</admiralty-tooltip>
		`);

        await triggerFocusEvent(page, '#tooltip-trigger', 'focus');
        await page.waitForChanges();
        await triggerFocusEvent(page, '#tooltip-trigger', 'blur');
        await page.waitForChanges();
        await triggerFocusEvent(page, 'admiralty-tooltip .tooltip', 'focusin');
        await page.waitForChanges();
        await wait(130);
        await page.waitForChanges();
        const focusedStyles = await getTooltipInlineStyles(page);
        expect(focusedStyles.top).not.toBe('');
        expect(focusedStyles.left).not.toBe('');
        expect(focusedStyles.transform).not.toBe('');

        await triggerFocusEvent(page, 'admiralty-tooltip .tooltip', 'focusout');
        await page.waitForChanges();
        await wait(130);
        await page.waitForChanges();

        expect(await host.getAttribute('data-open')).toBeNull();
    });

    it('does not open when the referenced trigger element is missing', async () => {
        const { page, host } = await setupPage(`
			<admiralty-tooltip for="missing-trigger">Tooltip description</admiralty-tooltip>
		`);

        await page.waitForChanges();
        expect(await host.getAttribute('data-open')).toBeNull();
    });
});
