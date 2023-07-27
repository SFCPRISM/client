import { useEffect, useRef } from "react";

/**
 * Creates a callback which will be run on the next request animation frame.
 * The request animation frame will automatically be canceled on unmount.
 *
 * If multiple functions are queued for the next animation frame only the last
 * one will be executed.
 *
 * @example
 * ```ts
 *  const [x, setX] = useState(x);
 *  const throttledSetX = useRequestAnimationFrameThrottle(setX);
 *
 *  // The following code would only call setX once with a value of 12
 *  useEffect(() => {
 *    throttledSetX(9);
 *    throttledSetX(11);
 *    throttledSetX(12);
 *  }, []);
 * ```
 */
export const useRequestAnimationFrameThrottle = <TArgs extends any[]>(
  callback: (...args: TArgs) => void
): ((...args: TArgs) => void) => {
  const ref = useRef({
    callback,
    args: undefined as undefined | TArgs,
    run: (...args: TArgs) => {
      // Store the latest arguments
      ref.args = args;
      // Start a new timer if none is running
      if (!ref.rafHandle) {
        ref.rafHandle = requestAnimationFrame(() => {
          ref.rafHandle = undefined;
          if (ref.args) {
            // Execute the latest callback with the latest arguments
            ref.callback(...ref.args);
            // Allow the garbage collector to cleanup the arguments
            ref.args = undefined;
          }
        });
      }
    },
    rafHandle: undefined as undefined | number,
  }).current;
  // Ensure that the callback has access to the latest component state
  ref.callback = callback;
  // Prevent executions after unmount
  useEffect(() => {
    return () => {
      if (ref.rafHandle) {
        cancelAnimationFrame(ref.rafHandle);
      }
    };
  }, []);
  return ref.run;
};
