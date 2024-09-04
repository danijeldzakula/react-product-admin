export type TTheme = 'light' | 'dark';

export type TThemeContext = { theme: TTheme; toggleTheme: () => void };

export const enum ETheme {
  DEFAULT_THEME = 'dark',
  LIGHT_THEME = 'light',
  STORAGE_THEME_KEY = 'theme',
  ERROR_MESSAGE = 'useTheme must be used within a ThemeProvider',
}
