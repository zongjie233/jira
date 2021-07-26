import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(object).forEach((key: string) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value: unknown, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 每次再value变化之后设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 每次再上一个effect处理过之后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
