import { breakpoints, IBreakpoint, IBreakpoints } from "lib/theme/breakpoints";
import { useMatchMedia } from "./useMatchMedia";

/**
 * Returns true once you enter the given breakpoint
 * @example
 * const isBreakpointXs = useIsBreakpoint(BreakpointNames.XS, true);
 */
export function useIsBreakpoint(
  breakpointName: keyof IBreakpoints,
  ssrFallbackValue = false
): boolean {
  const breakpoint = breakpoints[breakpointName];
  return useMatchMedia(getMediaQuery(breakpoint), ssrFallbackValue);
}

export const getMediaQuery = (breakpoint: IBreakpoint) => {
  const min = "min" in breakpoint ? `(min-width: ${breakpoint.min})` : "";
  const max = "max" in breakpoint ? `(max-width: ${breakpoint.max})` : "";
  return `${min}${min && max ? " and " : ""}${max}`;
};

/**
 * Returns true once you enter the given breakpoint or smaller
 * @example
 * const isBreakpointSmDown = useIsBreakpointOrSmaller(BreakpointNames.SM, true);
 */
export function useIsBreakpointOrSmaller(
  breakpointName: keyof IBreakpoints,
  ssrFallbackValue = true
): boolean {
  const breakpoint = breakpoints[breakpointName];
  const mediaQuery =
    "max" in breakpoint ? `(max-width: ${breakpoint.max})` : "";
  return useMatchMedia(mediaQuery, ssrFallbackValue);
}
/**
 * Returns true once you enter the given breakpoint or larger
 * @example
 * const isBreakpointMdUp = useIsBreakpointOrBigger(BreakpointNames.MD, false);
 */
export function useIsBreakpointOrBigger(
  breakpointName: keyof IBreakpoints,
  ssrFallbackValue = false
): boolean {
  const breakpoint = breakpoints[breakpointName];
  const mediaQuery =
    "min" in breakpoint ? `(min-width: ${breakpoint.min})` : "";
  return useMatchMedia(mediaQuery, ssrFallbackValue);
}
