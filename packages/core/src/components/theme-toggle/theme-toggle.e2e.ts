import { newE2EPage } from '@stencil/core/testing';

describe('admiralty-theme-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admiralty-theme-toggle></admiralty-theme-toggle>');
    const element = await page.find('admiralty-theme-toggle');
    expect(element).toHaveClass('hydrated');
  });

  describe('Scenario: Toggling from light to dark', () => {
    it('Given the user is in light mode', async () => {
      const page = await newE2EPage();
      await page.setContent('<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>');
      const element = await page.find('admiralty-theme-toggle');
      expect(element).toHaveAttribute('theme');
      expect(element.getAttribute('theme')).toBe('light');
    });

    it('When the user clicks the toggle', async () => {
      const page = await newE2EPage();
      await page.setContent('<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>');
      const button = await page.find('admiralty-theme-toggle >>> button');
      await button.click();
      await page.waitForChanges();
    });

    it('Then they are in dark mode', async () => {
      const page = await newE2EPage();
      await page.setContent('<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>');
      const element = await page.find('admiralty-theme-toggle');
      const button = await page.find('admiralty-theme-toggle >>> button');
      await button.click();
      await page.waitForChanges();
      expect(element.getAttribute('theme')).toBe('dark');
      const buttonClass = await button.getAttribute('class');
      expect(buttonClass).toContain('dark');
    });
  });

  describe('Scenario: Toggling from dark to light', () => {
    it('Given the user is in dark mode', async () => {
      const page = await newE2EPage();
      await page.setContent('<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>');
      const element = await page.find('admiralty-theme-toggle');
      expect(element.getAttribute('theme')).toBe('dark');
    });

    it('When the user clicks the toggle', async () => {
      const page = await newE2EPage();
      await page.setContent('<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>');
      const button = await page.find('admiralty-theme-toggle >>> button');
      await button.click();
      await page.waitForChanges();
    });

    it('Then they are in light mode', async () => {
      const page = await newE2EPage();
      await page.setContent('<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>');
      const element = await page.find('admiralty-theme-toggle');
      const button = await page.find('admiralty-theme-toggle >>> button');
      await button.click();
      await page.waitForChanges();
      expect(element.getAttribute('theme')).toBe('light');
      const buttonClass = await button.getAttribute('class');
      expect(buttonClass).toContain('light');
    });
  });

  describe('Scenario: Changing pages', () => {
    it('Given the user is in dark mode', async () => {
      const page = await newE2EPage();
      await page.setContent('<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>');
      const element = await page.find('admiralty-theme-toggle');
      expect(element.getAttribute('theme')).toBe('dark');
    });

    it('When they navigate to a different page (simulated by setting content)', async () => {
      const page = await newE2EPage();
      // Set up first page
      await page.setContent('<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>');
      const button = await page.find('admiralty-theme-toggle >>> button');
      await button.click();
      await page.waitForChanges();

      // Simulate page reload with same localStorage
      const localStorageData = await page.evaluate(() => {
        return localStorage.getItem('admiralty-theme-preference');
      });
      expect(localStorageData).toBe('light');
    });

    it('Then their theme preferences persist', async () => {
      const page = await newE2EPage();
      // First page load
      await page.setContent('<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>');
      const button = await page.find('admiralty-theme-toggle >>> button');
      await button.click();
      await page.waitForChanges();

      // Verify localStorage has the preference saved
      const savedTheme = await page.evaluate(() => {
        return localStorage.getItem('admiralty-theme-preference');
      });
      expect(savedTheme).toBe('light');

      // Verify document element has the class applied
      const hasLightModeClass = await page.evaluate(() => {
        return document.documentElement.classList.contains('admiralty-light-mode');
      });
      expect(hasLightModeClass).toBe(true);
    });
  });

  describe('Theme change event', () => {
    it('should emit admiraltyThemeChange event', async () => {
      const page = await newE2EPage();
      await page.setContent('<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>');

      const themeChangeEvent = await page.spyOnEvent('admiraltyThemeChange');
      const button = await page.find('admiralty-theme-toggle >>> button');
      await button.click();
      await page.waitForChanges();

      expect(themeChangeEvent).toHaveReceivedEventDetail({
        theme: 'dark',
        isDarkMode: true,
      });
    });
  });

  describe('Accessibility', () => {
    it('should have proper aria-label', async () => {
      const page = await newE2EPage();
      await page.setContent('<admiralty-theme-toggle aria-label="Switch theme"></admiralty-theme-toggle>');
      const button = await page.find('admiralty-theme-toggle >>> button');
      expect(button.getAttribute('aria-label')).toBe('Switch theme');
    });

    it('should be keyboard accessible', async () => {
      const page = await newE2EPage();
      await page.setContent('<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>');
      const button = await page.find('admiralty-theme-toggle >>> button');

      // Focus the button
      await button.focus();
      await page.keyboard.press('Space');
      await page.waitForChanges();

      const element = await page.find('admiralty-theme-toggle');
      expect(element.getAttribute('theme')).toBe('dark');
    });
  });
});
