export interface ThemeToggleChangeEventDetail {
    /**
     * The current theme preference ('light', 'dark', or 'auto')
     */
    theme: 'light' | 'dark' | 'auto';
    /**
     * Whether dark mode is currently active (true for dark, false for light)
     */
    isDarkMode: boolean;
}
