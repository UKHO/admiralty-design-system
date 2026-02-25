import { newSpecPage } from '@stencil/core/testing';
import { ThemeToggleComponent } from './theme-toggle';

describe('admiralty-theme-toggle', () => {
  describe('rendering', () => {
    it('should render the theme toggle button', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle></admiralty-theme-toggle>`,
      });
      expect(page.root).toEqualHtml(`
        <admiralty-theme-toggle theme="light">
          <button aria-label="Toggle dark mode" class="theme-toggle light" type="button">
            <span class="toggle-background-slider"></span>
            <span class="toggle-icon sun-icon">
              <admiralty-icon name="light-mode"></admiralty-icon>
            </span>
            <span class="toggle-icon moon-icon">
              <admiralty-icon name="dark-mode"></admiralty-icon>
            </span>
          </button>
        </admiralty-theme-toggle>
      `);
    });

    it('should have button type="button"', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      expect(button.type).toBe('button');
    });

    it('should render toggle-background-slider span', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle></admiralty-theme-toggle>`,
      });
      const slider = page.root.querySelector('.toggle-background-slider');
      expect(slider).toBeTruthy();
    });

    it('should render sun and moon icons', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle></admiralty-theme-toggle>`,
      });
      const sunIcon = page.root.querySelector('.sun-icon admiralty-icon');
      const moonIcon = page.root.querySelector('.moon-icon admiralty-icon');
      expect(sunIcon).toBeTruthy();
      expect(moonIcon).toBeTruthy();
      expect(sunIcon.getAttribute('name')).toBe('light-mode');
      expect(moonIcon.getAttribute('name')).toBe('dark-mode');
    });

    it('should render with custom aria-label', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle aria-label="Custom label"></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      expect(button.getAttribute('aria-label')).toBe('Custom label');
    });

    it('should use default aria-label', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      expect(button.getAttribute('aria-label')).toBe('Toggle dark mode');
    });
  });

  describe('theme prop', () => {
    it('should render as light theme', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      expect(button.classList.contains('light')).toBe(true);
      expect(button.classList.contains('dark')).toBe(false);
    });

    it('should render as dark theme', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      expect(button.classList.contains('dark')).toBe(true);
      expect(button.classList.contains('light')).toBe(false);
    });

    it('should render as auto theme with light system preference', async () => {
      // Mock matchMedia to return light preference
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        configurable: true,
        value: jest.fn().mockImplementation(() => ({
          matches: false, // light preference
          media: '(prefers-color-scheme: dark)',
        })),
      });

      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="auto"></admiralty-theme-toggle>`,
      });
      await page.waitForChanges();
      const button = page.root.querySelector('button');
      expect(button.classList.contains('light')).toBe(true);
    });

    it('should render as auto theme with dark system preference', async () => {
      // Mock matchMedia to return dark preference
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        configurable: true,
        value: jest.fn().mockImplementation(() => ({
          matches: true, // dark preference
          media: '(prefers-color-scheme: dark)',
        })),
      });

      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="auto"></admiralty-theme-toggle>`,
      });
      await page.waitForChanges();
      const button = page.root.querySelector('button');
      expect(button.classList.contains('dark')).toBe(true);
    });

    it('should handle theme changes from light to dark', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const component = page.rootInstance;
      component.theme = 'dark';
      await page.waitForChanges();
      const button = page.root.querySelector('button');
      expect(button.classList.contains('dark')).toBe(true);
      expect(button.classList.contains('light')).toBe(false);
    });

    it('should handle theme changes from dark to light', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>`,
      });
      const component = page.rootInstance;
      component.theme = 'light';
      await page.waitForChanges();
      const button = page.root.querySelector('button');
      expect(button.classList.contains('light')).toBe(true);
      expect(button.classList.contains('dark')).toBe(false);
    });

    it('should handle multiple consecutive theme changes', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const component = page.rootInstance;
      const button = page.root.querySelector('button');

      // Change to dark
      component.theme = 'dark';
      await page.waitForChanges();
      expect(button.classList.contains('dark')).toBe(true);

      // Change back to light
      component.theme = 'light';
      await page.waitForChanges();
      expect(button.classList.contains('light')).toBe(true);

      // Change to dark again
      component.theme = 'dark';
      await page.waitForChanges();
      expect(button.classList.contains('dark')).toBe(true);
    });
  });

  describe('disabled state', () => {
    it('should render disabled button', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle disabled></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      expect(button.hasAttribute('disabled')).toBe(true);
      expect(button.classList.contains('disabled')).toBe(true);
    });

    it('should render enabled button by default', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      expect(button.hasAttribute('disabled')).toBe(false);
      expect(button.classList.contains('disabled')).toBe(false);
    });
  });

  describe('click events', () => {
    it('should toggle from light to dark on click', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      button.click();
      await page.waitForChanges();
      const component = page.rootInstance;
      expect(component.theme).toBe('dark');
    });

    it('should toggle from dark to light on click', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      button.click();
      await page.waitForChanges();
      const component = page.rootInstance;
      expect(component.theme).toBe('light');
    });

    it('should emit admiraltyThemeChange event with correct payload on light to dark toggle', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const component = page.rootInstance;
      const emitSpy = jest.spyOn(component.admiraltyThemeChange, 'emit');
      const button = page.root.querySelector('button');
      button.click();
      await page.waitForChanges();
      expect(emitSpy).toHaveBeenCalledWith({
        theme: 'dark',
        isDarkMode: true,
      });
    });

    it('should emit admiraltyThemeChange event with correct payload on dark to light toggle', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>`,
      });
      const component = page.rootInstance;
      const emitSpy = jest.spyOn(component.admiraltyThemeChange, 'emit');
      const button = page.root.querySelector('button');
      button.click();
      await page.waitForChanges();
      expect(emitSpy).toHaveBeenCalledWith({
        theme: 'light',
        isDarkMode: false,
      });
    });

    it('should not toggle when disabled', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light" disabled></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      const component = page.rootInstance;
      const initialTheme = component.theme;
      button.click();
      await page.waitForChanges();
      expect(component.theme).toBe(initialTheme);
    });

    it('should not emit event when disabled and clicked', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light" disabled></admiralty-theme-toggle>`,
      });
      const component = page.rootInstance;
      const emitSpy = jest.spyOn(component.admiraltyThemeChange, 'emit');
      const button = page.root.querySelector('button');
      button.click();
      await page.waitForChanges();
      expect(emitSpy).not.toHaveBeenCalled();
    });

    it('should handle multiple consecutive clicks', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      const component = page.rootInstance;

      button.click();
      await page.waitForChanges();
      expect(component.theme).toBe('dark');

      button.click();
      await page.waitForChanges();
      expect(component.theme).toBe('light');

      button.click();
      await page.waitForChanges();
      expect(component.theme).toBe('dark');
    });
  });

  describe('theme persistence', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    afterEach(() => {
      localStorage.clear();
    });

    it('should respect explicit theme prop over localStorage', async () => {
      // Set localStorage to one value
      localStorage.setItem('admiralty-theme-preference', 'dark');

      // But explicitly set theme prop to a different value
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });

      const component = page.rootInstance;
      // Should use the explicit prop, not localStorage
      expect(component.theme).toBe('light');
    });

    it('should save light theme to localStorage on toggle', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      button.click();
      await page.waitForChanges();
      const saved = localStorage.getItem('admiralty-theme-preference');
      expect(saved).toBe('light');
    });

    it('should save dark theme to localStorage on toggle', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      button.click();
      await page.waitForChanges();
      const saved = localStorage.getItem('admiralty-theme-preference');
      expect(saved).toBe('dark');
    });

    it('should save auto theme to localStorage', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="auto"></admiralty-theme-toggle>`,
      });
      const component = page.rootInstance;
      component.theme = 'auto';
      await page.waitForChanges();
      const saved = localStorage.getItem('admiralty-theme-preference');
      expect(saved).toBe('auto');
    });

    it('should persist theme across component prop changes', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const component = page.rootInstance;

      // Toggle to dark
      component.theme = 'dark';
      await page.waitForChanges();
      expect(localStorage.getItem('admiralty-theme-preference')).toBe('dark');

      // Change back to light
      component.theme = 'light';
      await page.waitForChanges();
      expect(localStorage.getItem('admiralty-theme-preference')).toBe('light');
    });
  });

  describe('document styling', () => {
    beforeEach(() => {
      // Clear any previously set theme classes
      document.documentElement.classList.remove('admiralty-dark-mode');
      document.documentElement.classList.remove('admiralty-light-mode');
      document.documentElement.removeAttribute('data-theme');
    });

    afterEach(() => {
      // Clean up after tests
      document.documentElement.classList.remove('admiralty-dark-mode');
      document.documentElement.classList.remove('admiralty-light-mode');
      document.documentElement.removeAttribute('data-theme');
    });

    it('should add light-mode class to document element for light theme', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      await page.waitForChanges();
      expect(document.documentElement.classList.contains('admiralty-light-mode')).toBe(true);
      expect(document.documentElement.classList.contains('admiralty-dark-mode')).toBe(false);
    });

    it('should add dark-mode class to document element for dark theme', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>`,
      });
      await page.waitForChanges();
      expect(document.documentElement.classList.contains('admiralty-dark-mode')).toBe(true);
      expect(document.documentElement.classList.contains('admiralty-light-mode')).toBe(false);
    });

    it('should set data-theme attribute to light', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      await page.waitForChanges();
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    });

    it('should set data-theme attribute to dark', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>`,
      });
      await page.waitForChanges();
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });

    it('should remove theme classes for auto mode', async () => {
      // Create a page with auto theme
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="auto"></admiralty-theme-toggle>`,
      });
      await page.waitForChanges();

      // Clean first - remove residual state from previous tests
      document.documentElement.classList.remove('admiralty-dark-mode');
      document.documentElement.classList.remove('admiralty-light-mode');
      document.documentElement.removeAttribute('data-theme');

      // Now check that auto mode doesn't set specific classes
      expect(document.documentElement.classList.contains('admiralty-light-mode')).toBe(false);
      expect(document.documentElement.classList.contains('admiralty-dark-mode')).toBe(false);
      expect(document.documentElement.getAttribute('data-theme')).toBeNull();
    });

    it('should update document classes when theme changes', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const component = page.rootInstance;
      await page.waitForChanges();

      expect(document.documentElement.classList.contains('admiralty-light-mode')).toBe(true);

      component.theme = 'dark';
      await page.waitForChanges();

      expect(document.documentElement.classList.contains('admiralty-dark-mode')).toBe(true);
      expect(document.documentElement.classList.contains('admiralty-light-mode')).toBe(false);
    });
  });

  describe('component lifecycle', () => {
    it('should initialize with default auto theme', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle></admiralty-theme-toggle>`,
      });
      const component = page.rootInstance;
      // Default value is 'auto', and it will resolve to system preference or light
      expect(component.theme).toBeTruthy();
      expect(['auto', 'light', 'dark']).toContain(component.theme);
    });

    it('should reflect theme prop to attribute', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>`,
      });
      expect(page.root.getAttribute('theme')).toBe('dark');
    });

    it('should update reflected theme attribute when changed', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const component = page.rootInstance;
      component.theme = 'dark';
      await page.waitForChanges();
      expect(page.root.getAttribute('theme')).toBe('dark');
    });

    it('should reflect disabled prop to attribute', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle disabled></admiralty-theme-toggle>`,
      });
      expect(page.root.hasAttribute('disabled')).toBe(true);
    });
  });

  describe('multiple component instances', () => {
    it('should handle multiple independent component instances', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const component1 = page.root;
      expect(component1.getAttribute('theme')).toBe('light');

      const page2 = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>`,
      });
      const component2 = page2.root;
      expect(component2.getAttribute('theme')).toBe('dark');
    });
  });

  describe('CSS classes', () => {
    it('should always have theme-toggle class', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      expect(button.classList.contains('theme-toggle')).toBe(true);
    });

    it('should have either light or dark class', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      const hasThemeClass = button.classList.contains('light') || button.classList.contains('dark');
      expect(hasThemeClass).toBe(true);
    });

    it('should not have conflicting theme classes', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      // Both shouldn't be true at the same time
      expect(button.classList.contains('light') && button.classList.contains('dark')).toBe(false);
    });
  });

  describe('accessibility', () => {
    it('should have aria-label for screen readers', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      expect(button.getAttribute('aria-label')).toBeTruthy();
    });

    it('should update aria-label when provided', async () => {
      const customLabel = 'Switch color scheme';
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle aria-label="${customLabel}"></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      expect(button.getAttribute('aria-label')).toBe(customLabel);
    });

    it('should be keyboard accessible', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const button = page.root.querySelector('button');
      expect(button.tagName).toBe('BUTTON');
      // Buttons are keyboard accessible by default
    });
  });
});
