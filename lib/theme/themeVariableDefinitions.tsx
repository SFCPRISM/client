import React, { FunctionComponent, useMemo } from "react";
import { themeColors } from "./design-tokens/colors";
import { spacingCss } from "./design-tokens/spacing";

/**
 * Renders all the CSS custom properties for the theme,
 * typically used as a child of <ThemeProvider />
 */
export const ThemeVariableDefinitions: FunctionComponent<{
  scope?: string;
}> = ({ scope = ":root" }) => {
  const html = useMemo(() => {
    // 🐲 THAR BE DRAGONS AHEAD 🐲
    // use innerHTML instead of createGlobalStyles(), because of memory leak
    return {
      __html: `${scope} { ${spacingCss} ${themeColors} }`,
    };
  }, [scope]);
  return <style dangerouslySetInnerHTML={html} />;
};
