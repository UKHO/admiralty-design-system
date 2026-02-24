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
        <admiralty-theme-toggle theme="auto">
          <mock:shadow-root>
            <button aria-label="Toggle dark mode" class="theme-toggle light" type="button">
              <span class="toggle-icon sun-icon">
                <admiralty-icon name="light-mode"></admiralty-icon>
              </span>
              <span class="toggle-icon moon-icon">
                <admiralty-icon name="dark-mode"></admiralty-icon>
              </span>
              <span class="toggle-slider"></span>
            </button>
          </mock:shadow-root>
        </admiralty-theme-toggle>
      `);
    });

    it('should render with custom aria-label', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle aria-label="Custom label"></admiralty-theme-toggle>`,
      });
      const button = page.root.shadowRoot.querySelector('button');
      expect(button.getAttribute('aria-label')).toBe('Custom label');
    });
  });

  describe('theme prop', () => {
    it('should render as light theme', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const button = page.root.shadowRoot.querySelector('button');
      expect(button.classList.contains('light')).toBe(true);
    });

    it('should render as dark theme', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="dark"></admiralty-theme-toggle>`,
      });
      const button = page.root.shadowRoot.querySelector('button');
      expect(button.classList.contains('dark')).toBe(true);
    });

    it('should handle theme changes', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const component = page.rootInstance;
      component.theme = 'dark';
      await page.waitForChanges();
      const button = page.root.shadowRoot.querySelector('button');
      expect(button.classList.contains('dark')).toBe(true);
    });
  });

  describe('disabled state', () => {
    it('should render disabled button', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle disabled></admiralty-theme-toggle>`,
      });
      const button = page.root.shadowRoot.querySelector('button');
      expect(button.disabled).toBe(true);
      expect(button.classList.contains('disabled')).toBe(true);
    });
  });

  describe('click events', () => {
    it('should toggle theme on click', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const button = page.root.shadowRoot.querySelector('button');
      button.click();
      await page.waitForChanges();
      const component = page.rootInstance;
      expect(component.theme).toBe('dark');
    });

    it('should emit admiraltyThemeChange event on click', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const component = page.rootInstance;
      const emitSpy = jest.spyOn(component.admiraltyThemeChange, 'emit');
      const button = page.root.shadowRoot.querySelector('button');
      button.click();
      await page.waitForChanges();
      expect(emitSpy).toHaveBeenCalledWith({
        theme: 'dark',
        isDarkMode: true,
      });
    });

    it('should not toggle when disabled', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light" disabled></admiralty-theme-toggle>`,
      });
      const button = page.root.shadowRoot.querySelector('button');
      const component = page.rootInstance;
      const initialTheme = component.theme;
      button.click();
      await page.waitForChanges();
      expect(component.theme).toBe(initialTheme);
    });
  });

  describe('theme persistence', () => {
    it('should load saved theme from localStorage on component load', async () => {
      localStorage.setItem('admiralty-theme-preference', 'dark');
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle></admiralty-theme-toggle>`,
      });
      await page.waitForChanges();
      const component = page.rootInstance;
      expect(component.theme).toBe('dark');
      localStorage.removeItem('admiralty-theme-preference');
    });

    it('should save theme to localStorage on toggle', async () => {
      const page = await newSpecPage({
        components: [ThemeToggleComponent],
        html: `<admiralty-theme-toggle theme="light"></admiralty-theme-toggle>`,
      });
      const button = page.root.shadowRoot.querySelector('button');
      button.click();
      await page.waitForChanges();
      const saved = localStorage.getItem('admiralty-theme-preference');
      expect(saved).toBe('dark');
      localStorage.removeItem('admiralty-theme-preference');
    });
  });
});
