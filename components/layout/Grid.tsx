import { breakpointQuery } from "lib/theme/breakpointQuery";
import { BreakpointNames } from "lib/theme/breakpoints";
import { spacing } from "lib/theme/design-tokens/spacing";
import styled, { css } from "styled-components";

type GridSize = "auto" | number;
type GridBreakPoints = {
  [K in BreakpointNames]?: GridSize;
};

export interface IColProps extends GridBreakPoints {
  centered?: boolean;
}

const getColStart = (centered: boolean = false, colWidth) =>
  centered ? (12 - colWidth) / 2 + 1 : "auto";

const getColStyles = () => (props: IColProps) =>
  Object.values(BreakpointNames).map((breakPoint) => {
    if (breakPoint !== "xs" && typeof props[breakPoint] === "number") {
      return css`
        ${breakpointQuery[`${breakPoint}Up`]} {
          grid-column-start: ${getColStart(props.centered, props[breakPoint])};
          grid-column-end: span ${props[breakPoint]};
        }
      `;
    }
  });

export const Col = styled.div<IColProps>`
  grid-column-start: auto;
  grid-column-end: span 12;
  ${getColStyles()};
  width: 100%;
`;

export const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 54px;

  ${breakpointQuery.smDown} {
    grid-gap: 54px 8px;
  }
`;

export const Grid = styled.div`
  width: 100%;
  max-width: 1642px;
  margin: 0 auto;
  position: relative;
  display: grid;
  padding: 0 ${spacing.medium};
`;
