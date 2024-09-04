import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { isBrowser } from '@/utils/utils';

import { type TChildren } from '@/types';
import { ETheme, type TTheme, type TThemeContext } from '@/types/theme';

const ThemeContext = createContext<TThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: TChildren) => {
  const hasWindow: boolean = isBrowser();

  const [theme, setTheme] = useState<TTheme>(() => {
    const currentTheme = JSON.parse(
      localStorage.getItem(ETheme.STORAGE_THEME_KEY) ??
        JSON.stringify(ETheme.DEFAULT_THEME)
    ) as TTheme;

    return currentTheme;
  });

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      if (prev === ETheme.DEFAULT_THEME) {
        return ETheme.LIGHT_THEME;
      }

      return ETheme.DEFAULT_THEME;
    });
  }, [setTheme]);

  useEffect(() => {
    if (hasWindow) {
      localStorage.setItem(ETheme.STORAGE_THEME_KEY, JSON.stringify(theme));
    }
  }, [theme]);

  const hasClassAndStyles = useCallback(
    (el: HTMLElement) => {
      if (!el) return;

      el.style.colorScheme = theme;
      el.classList.add(theme);

      const isDark = theme !== ETheme.DEFAULT_THEME;
      el.classList.remove(isDark ? ETheme.DEFAULT_THEME : ETheme.LIGHT_THEME);
    },
    [theme]
  );

  useEffect(() => {
    if (hasWindow) {
      const htmlElement: HTMLElement = window.document.documentElement;
      hasClassAndStyles(htmlElement);
    }
  }, [theme, hasClassAndStyles]);

  const contextValue: TThemeContext = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext<TThemeContext | undefined>(ThemeContext);

  if (!context) {
    throw new Error(ETheme.ERROR_MESSAGE);
  }

  return context;
};
