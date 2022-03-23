import { useState, useEffect } from 'react';

export const useDebounce = (value: string, delay: number) => {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    if (value === debounced) return;
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debounced;
};
