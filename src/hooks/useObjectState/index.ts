import { useEffect, useRef, useState } from 'react';

const equals = <T extends Object>(obj1: T, obj2: T) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const useObjectState = <T>(state: T) => {
  const [next, setNext] = useState<T>();
  const previous = useRef<T>(state);

  useEffect(() => {
    if (!previous.current || !equals(previous.current, state)) {
      setNext(prev => ({ ...prev, ...state }));
      return;
    }
  }, [state]);

  return [next, setNext];
};
