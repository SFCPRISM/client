import { useEffect, useState } from "react";

/**
 * Runs the callback once the browser is idle
 */
export const useIsIdle = (options: { skip?: boolean } = {}) => {
  const [isIdle, setIsIdle] = useState(false);
  const { skip } = options;
  useEffect(() => {
    if (skip || isIdle) {
      return;
    }
    return delayedRequestIdle(() => setIsIdle(true));
  }, [skip]);
  return isIdle;
};

const delayedRequestIdle = (callback: () => void) => {
  const requestIdleCallback = window["requestIdleCallback"] as
    | undefined
    | typeof window["requestIdleCallback"];
  let idleCallbackHandle: number | undefined;
  const timer = setTimeout(() => {
    idleCallbackHandle =
      (requestIdleCallback &&
        requestIdleCallback(callback, { timeout: 5000 })) ||
      void callback();
  }, 200);
  return () => {
    clearTimeout(timer);
    if (idleCallbackHandle) {
      cancelIdleCallback(idleCallbackHandle);
    }
  };
};
