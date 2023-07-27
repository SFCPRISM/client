import { useEffect, useRef, useState } from "react";

interface IUseSessionStorageStateParams {
  options: {
    serialize?: (params: any) => string;
    deserialize?: (params: any) => object;
  };
}

/**
 * @param {String} key The key to set in sessionStorage for this value
 * @param {Object} defaultValue The value to use if it is not already in sessionStorage
 * @param {{serialize: Function, deserialize: Function}} options The serialize and deserialize functions to use (defaults to JSON.stringify and JSON.parse respectively)
 */
function useSessionStorageState(
  key: string,
  defaultValue: (() => Object) | Object = "",
  {
    serialize = JSON.stringify,
    deserialize = JSON.parse,
  }: IUseSessionStorageStateParams["options"] = {}
) {
  const [state, setState] = useState(() => {
    const valueInSessionStorage = window.sessionStorage.getItem(key);
    if (valueInSessionStorage) {
      return deserialize(valueInSessionStorage);
    }

    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  const prevKeyRef = useRef(key);
  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.sessionStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;

    window.sessionStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

export { useSessionStorageState };
