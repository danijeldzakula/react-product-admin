import { useEffect, useState } from 'react';

type TProps<T> = [T, T, React.Dispatch<React.SetStateAction<T>>];

export const useDebounce = <T,>(initialValue: T, time = 0): TProps<T> => {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(value);
    }, time);

    return () => {
      clearTimeout(debounce);
    };
  }, [value, time]);

  return [debouncedValue, value, setValue];
};
