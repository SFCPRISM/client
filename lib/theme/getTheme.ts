import {
  DefaultTheme,
  useTheme as useThemeStyledComponents,
} from "styled-components";
import { breakpoints } from "./breakpoints";
import { ThemeName } from "./themes";
import { IBreakpoints } from "./breakpoints";

/**
 * Prevent TypeScript errors on the css prop on arbitrary elements
 * @see {@link https://styled-components.com/docs/api}
 *
 * @todo currently it breaks tsc...
 */
// import {} from 'styled-components/cssprop'

export interface ITheme {
  name: ThemeName;
  constants: {
    pageHeaderHeight: number;
  };
  breakpoints: IBreakpoints;
}
declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}

export const getTheme = (themeName: ThemeName): DefaultTheme => {
  return {
    name: themeName,
    constants: {
      pageHeaderHeight: 198,
    },
    breakpoints: breakpoints,
  };
};

// quick hack to get types straight (ITheme equals DefaultTheme)
export const useTheme = () => useThemeStyledComponents();
