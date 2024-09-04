import React, { useState } from 'react';

import { type TClassName } from '@/types';

type TProps = TClassName & {
  children:
    | React.ReactNode
    | ((
        isHoverable?: boolean,
        setIsHoverable?: React.Dispatch<React.SetStateAction<boolean>>
      ) => React.ReactNode);
};

export default function Tooltip({ children }: TProps) {
  const [isHoverable, setIsHoverable] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHoverable(true)}
      onMouseLeave={() => setIsHoverable(false)}
    >
      {typeof children === 'function'
        ? children(isHoverable, setIsHoverable)
        : children}
    </div>
  );
}
