import clsx from 'clsx';

import { defaultClasses, sizeClasses, variantClasses } from './Button.styles';
import type { TProps } from './Button.types';

export default function Button({
  className,
  variant = 'default',
  size = 'medium',
  ...rest
}: TProps) {
  return (
    <button
      type="button"
      className={clsx(
        defaultClasses(),
        variantClasses(variant),
        sizeClasses(size),
        className
      )}
      {...rest}
    />
  );
}
