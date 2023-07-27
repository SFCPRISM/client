import { createGlobalTheme, createVar } from "css-variable";

/** Spacing Design Tokens 📐 */
export const spacing = {
  /** 📐 `0px` */
  none: createVar(),
  /** 📐 `4px` */
  half: createVar(),
  /** 📐 `-4px` */
  halfNegative: createVar(),
  /** 📐 `8px` */
  small: createVar(),
  /** 📐 `-8px` */
  smallNegative: createVar(),
  /**
   * Must only be used as vertical spacing
   *
   * 📐 `12px`
   */
  smallerBaseVertical: createVar(),
  /**
   * Must only be used as vertical spacing
   *
   * 📐 `"-12px`
   */
  smallerBaseVerticalNegative: createVar(),
  /** 📐 `16px` */
  base: createVar(),
  /** 📐 `-16px` */
  baseNegative: createVar(),
  /** 📐 `24px` */
  medium: createVar(),
  /** 📐 `-24px` */
  mediumNegative: createVar(),
  /** 📐 `32px` */
  big: createVar(),
  /** 📐 `-32px` */
  bigNegative: createVar(),
  /** 📐 `40px` */
  huge: createVar(),
  /** 📐 `-40px` */
  hugeNegative: createVar(),
  /** 📐 `48px` */
  massive: createVar(),
  /** 📐 `-48px` */
  massiveNegative: createVar(),
  /** 📐 `64px` */
  grande: createVar(),
  /** 📐 `-64px` */
  grandeNegative: createVar(),
  /** 📐 `80px` */
  giant: createVar(),
  /** 📐 `-80px` */
  giantNegative: createVar(),
} as const;

export const spacingCss = createGlobalTheme("", spacing, {
  none: "0",
  half: "4px",
  halfNegative: "-4px",
  small: "8px",
  smallNegative: "-8px",
  smallerBaseVertical: "12px",
  smallerBaseVerticalNegative: "-12px",
  base: "16px",
  baseNegative: "-16px",
  medium: "24px",
  mediumNegative: "-24px",
  big: "32px",
  bigNegative: "-32px",
  huge: "40px",
  hugeNegative: "-40px",
  massive: "48px",
  massiveNegative: "-48px",
  grande: "64px",
  grandeNegative: "-64px",
  giant: "80px",
  giantNegative: "-80px",
});
