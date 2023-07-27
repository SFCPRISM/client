import { useMatchMedia } from "./useMatchMedia";

/**
 * Returns true once you have a mouse pointer
 * @example
 * const isMouseDevice = useIsMouseDevice(true);
 */
export function useIsMouseDevice(ssrFallbackValue: boolean): boolean {
  // in mediaQueries you need to use ',' as 'or' operator
  return useMatchMedia("(hover: hover), (pointer: fine)", ssrFallbackValue);
}

/**
 * Returns true once you have a no hover and a pointing device of limited accuracy
 * @example
 * const isTouchDevice = useIsTouchDevice(true);
 */
export function useIsTouchDevice(ssrFallbackValue: boolean): boolean {
  // in mediaQueries you need to use ',' as 'or' operator
  return useMatchMedia("(hover: none), (pointer: coarse)", ssrFallbackValue);
}
