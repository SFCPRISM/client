import { CSSVariable } from "css-variable";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { FunctionComponent, ReactNode } from "react";
import styled, { css } from "styled-components";

interface ITypographyProps {
  variant: "h1" | "h2" | "h3" | "p";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
  color?: CSSVariable;
  children: ReactNode;
}

export const Typography: FunctionComponent<ITypographyProps> = ({
  variant,
  component,
  className,
  color,
  children,
}) => {
  return (
    <StyledComponent
      variant={variant}
      as={component || variant}
      className={className}
      textColor={color}
    >
      {children}
    </StyledComponent>
  );
};

const getTypographyStyles = (variant: ITypographyProps["variant"]) => {
  switch (variant) {
    case "h1": {
      return css`
        font-size: 40px;
        line-height: 50px;
        font-weight: 600;

        ${breakpointQuery.smDown} {
          font-size: 30px;
          line-height: 40px;
        }
      `;
    }
    case "h2": {
      return css`
        font-size: 30px;
        line-height: 40px;
        font-weight: 600;

        ${breakpointQuery.smDown} {
          font-size: 20px;
          line-height: 28px;
        }
      `;
    }
    case "h3": {
      return css`
        font-size: 24px;
        line-height: 32px;
        font-weight: 300;

        ${breakpointQuery.smDown} {
          font-size: 20px;
          line-height: 28px;
        }
      `;
    }
    case "p":
    default: {
      return css`
        font-size: 24px;
        line-height: 32px;

        ${breakpointQuery.smDown} {
          font-size: 18px;
          line-height: 26px;
        }
      `;
    }
  }
};

const StyledComponent = styled.span<{
  variant: ITypographyProps["variant"];
  textColor: CSSVariable;
}>`
  ${({ variant }) => getTypographyStyles(variant)}
  ${({ textColor }) =>
    textColor &&
    css`
      color: ${textColor};
    `}
`;
