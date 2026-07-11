import { createContext, useContext } from 'react';

export const ThemeContext = createContext(null);

export function useTheme() {
  return useContext(ThemeContext);
}

export function adjustAlpha(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export function getTheme(tweaks = {}) {
  const primary = tweaks.primaryColor || '#29166F';
  const radius = tweaks.cardRadius ?? 28;
  const density = tweaks.density ?? 1;

  return {
    colors: {
      primary,
      primaryLight: adjustAlpha(primary, 0.08),
      primaryMid: adjustAlpha(primary, 0.15),
      accent: tweaks.accentColor || '#8B6914',
      bg: '#F5F6F9',
      surface: '#FFFFFF',
      surfaceAlt: '#EEF0F4',
      text: '#0F172A',
      textSecondary: '#475569',
      textTertiary: '#94A3B8',
      border: '#E2E8F0',
      borderLight: '#F1F5F9',
      success: '#16A34A',
      warning: '#D97706',
      error: '#DC2626',
    },
    fonts: {
      heading: tweaks.headingFont || "'Stolzl', 'Manrope', sans-serif",
      body: "'Manrope', sans-serif",
    },
    radius: {
      xs: Math.round(radius * 0.2),
      sm: Math.round(radius * 0.35),
      md: Math.round(radius * 0.55),
      lg: radius,
      xl: Math.round(radius * 1.4),
      full: 9999,
    },
    spacing: (n) => `${n * 8 * density}px`,
    shadow: {
      sm: '0 1px 2px rgba(0,0,0,0.04)',
      md: '0 4px 12px rgba(0,0,0,0.06)',
      lg: '0 8px 30px rgba(0,0,0,0.08)',
      xl: '0 16px 48px rgba(0,0,0,0.10)',
    },
  };
}

