import { useMemo } from 'react';

import clsx from 'clsx';

import MoonIcon from '@/assets/icons/moon';
import SunIcon from '@/assets/icons/sun';
import { useTheme } from '@/context/theme-provider';
import { type TClassName } from '@/types';

import Button from '../button/Button';

type TProps = TClassName;

export default function ToggleTheme({ className }: TProps) {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark' ? true : false;

  const renderIcon = useMemo(() => {
    if (!isDark) {
      return <SunIcon width={20} height={20} />;
    }

    return <MoonIcon width={20} height={20} />;
  }, [isDark]);

  return (
    <Button
      type="button"
      aria-pressed={isDark}
      onClick={toggleTheme}
      className={clsx(
        'flex h-10 items-center justify-center gap-2 bg-white text-dark dark:bg-black dark:text-white',
        className
      )}
    >
      <span className="flex items-center gap-2 capitalize">{renderIcon}</span>
      <span className="capitalize">{theme}</span>
    </Button>
  );
}
