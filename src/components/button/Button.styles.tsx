import clsx from 'clsx';

import type { TSize, TVariant } from './Button.types';

export const defaultClasses = (): string =>
  clsx('shadow-md rounded-md transition-colors duration-200 ease-in-out');

export const variantClasses = (variant: TVariant): string =>
  clsx({
    'hover:bg-blue-700 bg-blue-600 text-white': variant === 'primary',
    'hover:bg-zinc-700 bg-zinc-600 text-white': variant === 'secondary',
    'hover:bg-green-700 bg-green-600 text-white': variant === 'success',
    'hover:bg-red-700 bg-red-600 text-white': variant === 'danger',
    'hover:bg-yellow-500 bg-yellow-400 text-black': variant === 'warning',
    'hover:bg-cyan-700 bg-cyan-600 text-white': variant === 'info',
    'hover:bg-neutral-100 bg-white text-black': variant === 'light',
    'hover:bg-black/90 bg-black text-white': variant === 'dark',
    'bg-transparent text-blue-500 shadow-none': variant === 'link',
    'bg-transparent text-black dark:text-white transition-none shadow-none':
      variant === 'default',
  });

export const sizeClasses = (size: TSize): string =>
  clsx({
    'px-2 py-1 text-sm': size === 'small',
    'px-4 py-2': size === 'medium',
    'px-6 py-3 text-lg': size === 'large',
  });
