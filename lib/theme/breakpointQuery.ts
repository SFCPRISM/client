import { ITheme } from "./getTheme";
import { BreakpointNames, orderedBreakpointNames } from "./breakpoints";

const smallestBreakPoint = orderedBreakpointNames[0];
const largestBreakPoint =
  orderedBreakpointNames[orderedBreakpointNames.length - 1];

/**
 * Styled Component Helper for `@media` breakpoint rules
 *
 * @example
 * ${breakpointQueryFromTo(BreakpointNames.SM, BreakpointNames.LG} {
 *   color: orange;
 * }
 */
export const breakpointQueryFromTo =
  (minBreakpointName: BreakpointNames, maxBreakpointName: BreakpointNames) =>
  ({ theme }: { theme: ITheme }) => {
    const minBreakpoint = theme.breakpoints[minBreakpointName];
    const maxBreakpoint = theme.breakpoints[maxBreakpointName];
    const min =
      "min" in minBreakpoint ? `(min-width: ${minBreakpoint.min})` : "";
    const max =
      "max" in maxBreakpoint ? `(max-width: ${maxBreakpoint.max})` : "";
    return `@media ${min}${min && max ? " and " : ""}${max}`;
  };

/**
 * Styled Component Helper for `@media` breakpoint rules for:
 *
 * - xs
 * - sm
 * - md
 * - lg
 * - xl
 * - xxl
 *
 * @example
 * ${breakpointQuery.smUp} {
 *   color: orange;
 * }
 */
export const breakpointQuery = {
  // xsDown is skipped intentionally as it would be equal to xs
  /** applies css for: xs ( 0 to 699px ) */
  xs: breakpointQueryFromTo(BreakpointNames.XS, BreakpointNames.XS),
  // xsUp is skipped intentionally as it would match all breakpoints

  /** applies css for: xs, sm ( 0 to 991px ) */
  smDown: breakpointQueryFromTo(smallestBreakPoint, BreakpointNames.SM),
  /** applies css for: sm ( 700px to 991px ) */
  sm: breakpointQueryFromTo(BreakpointNames.SM, BreakpointNames.SM),
  /** applies css for: sm, md, lg, xl, xxl ( ≥ 700px ) */
  smUp: breakpointQueryFromTo(BreakpointNames.SM, largestBreakPoint),

  /** applies css for: xs, sm, md ( 0 to 1199px ) */
  mdDown: breakpointQueryFromTo(smallestBreakPoint, BreakpointNames.MD),
  /** applies css for: md ( 992px to 1199px ) */
  md: breakpointQueryFromTo(BreakpointNames.MD, BreakpointNames.MD),
  /** applies css for: md, lg, xl, xxl ( ≥ 992px )  */
  mdUp: breakpointQueryFromTo(BreakpointNames.MD, largestBreakPoint),

  /** applies css for: xs, sm, md, lg ( 0 to 1399px ) */
  lgDown: breakpointQueryFromTo(smallestBreakPoint, BreakpointNames.LG),
  /** applies css for: lg ( 1200px to 1399px ) */
  lg: breakpointQueryFromTo(BreakpointNames.LG, BreakpointNames.LG),
  /** applies css for: lg, xl, xxl ( ≥ 1200px ) */
  lgUp: breakpointQueryFromTo(BreakpointNames.LG, largestBreakPoint),

  /** applies css for: xs, sm, md, lg, xl ( ≥ 1400px ) */
  xlDown: breakpointQueryFromTo(smallestBreakPoint, BreakpointNames.XL),
  /** applies css for: xl ( ≥ 1400px ) */
  xl: breakpointQueryFromTo(BreakpointNames.XL, BreakpointNames.XL),
  /** applies css for: xl, xxl ( ≥ 1400px ) */
  xlUp: breakpointQueryFromTo(BreakpointNames.XL, largestBreakPoint),
};
