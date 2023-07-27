import { createGlobalTheme, createVar } from "css-variable";
import React from "react";

/** Utility tokens to apply special styling if javascript is not available */
export const jsDetectionTokens = {
  /**
   * A util token which is set to `none` if js is disabled
   *
   * Usage:
   * ```
   * div`
   *   display: ${jsDetectionTokens.noneIfDisabled}
   * `
   * ```
   */
  noneIfDisabled: createVar<"none" | "initial">({ value: "initial" }),
  /** A util token which is set to `none` if js is active and `inital` if js is disabled
   *
   * Usage:
   * ```
   * div`
   *   display: ${jsDetectionTokens.noneIfEnabled}
   * `
   * ```
   */
  noneIfEnabled: createVar<"none" | "initial">({ value: "none" }),
};

const noJavascriptSsrHtml = {
  __html: `<style>${createGlobalTheme(":root", jsDetectionTokens, {
    noneIfDisabled: "none",
    noneIfEnabled: "initial",
  })}</style>`,
};

/** Must only be used inside _document */
export const NoJavascriptSsrTag = () => (
  <noscript dangerouslySetInnerHTML={noJavascriptSsrHtml} />
);
