import { createGlobalTheme } from "css-variable";
import colors from "./colors.tokens";
import { colorValues } from "./colors.values";
export * as colors from "./colors.tokens";

export const themeColors = createGlobalTheme("", colors, colorValues);
