"use client";

import Script from "next/script";
import { useEffect } from "react";

/**
 * ThemeInitializer - Applies saved theme preference on page load.
 * This uses both an inline script and useEffect to ensure the correct theme
 * is applied before any visual content renders, preventing a flash.
 */
export function ThemeInitializer() {
  useEffect(() => {
    // Apply theme on client mount (in case the script didn't run)
    applyThemeFromStorage();
  }, []);

  return (
    <>
      {/* Inline script that runs BEFORE React hydration */}
      <Script
        id="theme-initializer"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const savedTheme = localStorage.getItem('admiralty-theme-preference');
                const themeToApply = savedTheme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                
                const effectiveTheme = themeToApply === 'auto' 
                  ? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                  : themeToApply;

                if (effectiveTheme === 'dark') {
                  document.documentElement.classList.add('admiralty-dark-mode');
                  document.documentElement.classList.remove('admiralty-light-mode');
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.classList.add('admiralty-light-mode');
                  document.documentElement.classList.remove('admiralty-dark-mode');
                  document.documentElement.setAttribute('data-theme', 'light');
                }

                if (themeToApply === 'auto') {
                  document.documentElement.classList.remove('admiralty-dark-mode');
                  document.documentElement.classList.remove('admiralty-light-mode');
                  document.documentElement.removeAttribute('data-theme');
                }
              } catch (e) {
                // Silently fail if localStorage is not available
              }
            })();
          `,
        }}
      />
    </>
  );
}

/**
 * Apply theme from localStorage to the document root
 */
function applyThemeFromStorage() {
  try {
    const savedTheme = localStorage.getItem("admiralty-theme-preference");

    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      // If no saved preference, use system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(prefersDark ? "dark" : "light");
    }
  } catch (e) {
    console.warn("Unable to apply saved theme:", e);
  }
}

/**
 * Apply theme to the document root
 */
function applyTheme(themePreference: string) {
  const effectiveTheme =
    themePreference === "auto"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : themePreference;

  if (effectiveTheme === "dark") {
    document.documentElement.classList.add("admiralty-dark-mode");
    document.documentElement.classList.remove("admiralty-light-mode");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.classList.add("admiralty-light-mode");
    document.documentElement.classList.remove("admiralty-dark-mode");
    document.documentElement.setAttribute("data-theme", "light");
  }

  // Remove attributes if auto mode
  if (themePreference === "auto") {
    document.documentElement.classList.remove("admiralty-dark-mode");
    document.documentElement.classList.remove("admiralty-light-mode");
    document.documentElement.removeAttribute("data-theme");
  }
}
