export enum BreakpointNames {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

export type IBreakpoint = { min?: string; max?: string };

export type IBreakpoints = {
  [key in BreakpointNames]: IBreakpoint;
};

export const orderedBreakpointNames: BreakpointNames[] = [
  BreakpointNames.XS,
  BreakpointNames.SM,
  BreakpointNames.MD,
  BreakpointNames.LG,
  BreakpointNames.XL,
];

export const breakpoints: IBreakpoints = {
  xs: { max: "699px" },
  sm: { min: "700px", max: "991px" },
  md: { min: "992px", max: "1199px" },
  lg: { min: "1200px", max: "1399px" },
  xl: { min: "1400px" },
};
