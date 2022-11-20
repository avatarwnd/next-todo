import { useEffect, useState } from "react";
//ref:https://usehooks.com/useLocalStorage/
export function useLocalStorage<T>(key: string, initialValue: T) {

  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    const item = window.localStorage.getItem(key);

    setStoredValue(item ? JSON.parse(item) : initialValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValue = (value: T | ((val: T) => T)) => {
    try {

      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {

      console.warn(error);
    }
  };
  return [storedValue, setValue] as const;
}
