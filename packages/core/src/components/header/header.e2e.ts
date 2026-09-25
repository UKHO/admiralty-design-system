import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-header></admiralty-header>');

    const element = await page.find('admiralty-header');
    expect(element).toHaveClass('hydrated');
  });

  it('fires event on header title clicked', async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <admiralty-header logo-alt-text="Logo" logo-link-url="http://www.example.com" logo-img-url="logo.svg" header-title-url="#" header-title="Design System">
    </admiralty-header>
    `);

    const element = await page.find('admiralty-header .header-title > a');

    const eventSpy = await page.spyOnEvent('titledClicked');

    await element.click();

    await page.waitForChanges(); // introduced the wait for changes

    expect(eventSpy).toHaveReceivedEvent();
  });

  describe('mobile menu', () => {
    const mobileMenuMarkup = `
      <admiralty-header header-title="HMNAO">
        <admiralty-side-nav slot="nav">
          <admiralty-side-nav-item side-nav-item-id="navpac" heading-title="NavPac and compact data"></admiralty-side-nav-item>
          <admiralty-side-nav-item side-nav-item-id="astro" heading-title="Astronomical data services"></admiralty-side-nav-item>
        </admiralty-side-nav>
        <admiralty-header-menu-link slot="items" menu-title="About" href="#about"></admiralty-header-menu-link>
      </admiralty-header>
    `;

    const newMobilePage = async () => {
      const page = await newE2EPage();
      await page.setViewport({ width: 375, height: 800 });
      await page.setContent(mobileMenuMarkup);
      return page;
    };

    it('shows the hamburger when a side nav is slotted in', async () => {
      const page = await newMobilePage();

      const toggle = await page.find('admiralty-header .mobile-menu-toggle');
      expect(toggle).toHaveClass('display-hamburger');
    });

    it('moves focus into the panel on open and restores it on Escape', async () => {
      const page = await newMobilePage();

      await page.click('admiralty-header .mobile-menu-toggle button');
      await page.waitForChanges();

      const focusedAfterOpen = await page.evaluate(() => document.activeElement.textContent.trim());
      expect(focusedAfterOpen).toBe('NavPac and compact data');

      await page.keyboard.press('Escape');
      await page.waitForChanges();

      const restoredLabel = await page.evaluate(() => document.activeElement.getAttribute('aria-label'));
      expect(restoredLabel).toBe('Show menu');

      const button = await page.find('admiralty-header .mobile-menu-toggle button');
      expect(button.getAttribute('aria-expanded')).toBe('false');
    });

    it('keeps Tab inside the open panel', async () => {
      const page = await newMobilePage();

      await page.click('admiralty-header .mobile-menu-toggle button');
      await page.waitForChanges();

      // Two side nav items plus the About link, so a fourth Tab must wrap to the first item.
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');

      const focused = await page.evaluate(() => document.activeElement.textContent.trim());
      expect(focused).toBe('NavPac and compact data');
    });

    it('surfaces the About link inside the panel on mobile', async () => {
      const page = await newMobilePage();

      await page.click('admiralty-header .mobile-menu-toggle button');
      await page.waitForChanges();

      const aboutVisible = await page.evaluate(() => {
        const about = document.querySelector('admiralty-header-menu-link a') as HTMLElement;
        return about.getBoundingClientRect().height > 0;
      });

      expect(aboutVisible).toBe(true);
    });
  });
});
