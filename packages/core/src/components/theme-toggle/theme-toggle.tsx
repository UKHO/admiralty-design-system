import { Component, Prop, Event, EventEmitter, h, Host, Watch } from '@stencil/core';
import { ThemeToggleChangeEventDetail } from './theme-toggle.interface';

/**
 * Theme preference type
 */
export type ThemePreference = 'light' | 'dark' | 'auto';

@Component({
  tag: 'admiralty-theme-toggle',
  styleUrl: 'theme-toggle.scss',
  scoped: true,
})
export class ThemeToggleComponent {
  /**
   * The current theme preference. Can be 'light', 'dark', or 'auto' (system preference).
   * Default value is 'auto'.
   */
  @Prop({ reflect: true, mutable: true }) theme: ThemePreference = 'auto';

  /**
   * Whether the toggle should be disabled.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Label for accessibility. Defaults to "Toggle dark mode".
   */
  @Prop() ariaLabel: string = 'Toggle dark mode';

  /**
   * Event is fired when the theme preference changes
   * @event admiraltyThemeChange
   */
  @Event() admiraltyThemeChange: EventEmitter<ThemeToggleChangeEventDetail>;

  @Watch('theme')
  themeChanged(newTheme: ThemePreference) {
    this.applyTheme(newTheme);
    this.persistTheme(newTheme);
    this.admiraltyThemeChange.emit({
      theme: newTheme,
      isDarkMode: this.isDarkMode(),
    });
  }

  componentDidLoad() {
    // Load theme preference from localStorage
    const savedTheme = this.loadTheme();
    if (savedTheme) {
      this.theme = savedTheme;
    } else {
      // Initialize with current system preference
      this.theme = this.getSystemTheme();
    }
  }

  /**
   * Toggle between light and dark mode
   */
  private toggleTheme = () => {
    if (this.disabled) return;

    // Get current effective theme
    const currentEffectiveTheme = this.getEffectiveTheme();

    // Switch to opposite
    this.theme = currentEffectiveTheme === 'dark' ? 'light' : 'dark';
  };

  /**
   * Get the effective theme (resolves 'auto' to actual system preference)
   */
  private getEffectiveTheme = (): 'light' | 'dark' => {
    if (this.theme === 'auto') {
      return this.getSystemTheme();
    }
    return this.theme as 'light' | 'dark';
  };

  /**
   * Get the system preference for theme
   */
  private getSystemTheme = (): 'light' | 'dark' => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };

  /**
   * Check if current theme is dark mode
   */
  private isDarkMode = (): boolean => {
    return this.getEffectiveTheme() === 'dark';
  };

  /**
   * Apply theme by updating document class and CSS variables
   */
  private applyTheme = (themePreference: ThemePreference) => {
    const effectiveTheme = themePreference === 'auto' ? this.getSystemTheme() : themePreference;

    // Update document element for CSS media query override
    if (effectiveTheme === 'dark') {
      // Add class to force dark mode
      document.documentElement.classList.add('admiralty-dark-mode');
      document.documentElement.classList.remove('admiralty-light-mode');
      // Optionally set data attribute
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      // Add class to force light mode
      document.documentElement.classList.add('admiralty-light-mode');
      document.documentElement.classList.remove('admiralty-dark-mode');
      // Optionally set data attribute
      document.documentElement.setAttribute('data-theme', 'light');
    }

    // For 'auto', remove both classes to allow system preference
    if (themePreference === 'auto') {
      document.documentElement.classList.remove('admiralty-dark-mode');
      document.documentElement.classList.remove('admiralty-light-mode');
      document.documentElement.removeAttribute('data-theme');
    }
  };

  /**
   * Persist the theme preference to localStorage
   */
  private persistTheme = (themePreference: ThemePreference) => {
    try {
      localStorage.setItem('admiralty-theme-preference', themePreference);
    } catch (e) {
      // Handle cases where localStorage is not available
      console.warn('Unable to persist theme preference:', e);
    }
  };

  /**
   * Load the theme preference from localStorage
   */
  private loadTheme = (): ThemePreference | null => {
    try {
      const saved = localStorage.getItem('admiralty-theme-preference');
      if (saved && (saved === 'light' || saved === 'dark' || saved === 'auto')) {
        return saved as ThemePreference;
      }
    } catch (e) {
      // Handle cases where localStorage is not available
      console.warn('Unable to load theme preference:', e);
    }
    return null;
  };

  render() {
    const isDark = this.isDarkMode();

    return (
      <Host>
        <button
          class={{
            'theme-toggle': true,
            'dark': isDark,
            'light': !isDark,
            'disabled': this.disabled,
          }}
          onClick={this.toggleTheme}
          disabled={this.disabled}
          aria-label={this.ariaLabel}
          type="button"
        >
          <span class="toggle-background-slider"></span>
          <span class="toggle-icon sun-icon">
            <admiralty-icon name="light-mode"></admiralty-icon>
          </span>
          <span class="toggle-icon moon-icon">
            <admiralty-icon name="dark-mode"></admiralty-icon>
          </span>
        </button>
      </Host>
    );
  }
}
