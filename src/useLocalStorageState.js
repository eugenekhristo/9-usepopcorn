import { useEffect, useState } from 'react';

export function useLocalStorageState(initialState, keyName) {
  const [value, setValue] = useState(() => {
    const storageValue = localStorage.getItem(keyName);
    return storageValue ? JSON.parse(storageValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value));
  }, [value, keyName]);

  return [value, setValue];
}
