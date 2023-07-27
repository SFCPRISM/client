import { IconArrowRight } from "icons/general/generalIcons";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import styled, { css } from "styled-components";
import { ITypeAgnosticButtonProps } from "./Button";
import { getColors } from "./getColors";

export const baseButtonStyle = css`
  font-size: 18px;
  font-family: "Sofia", sans-serif;
  line-height: 30px;
  letter-spacing: 0.32px;
  display: flex;
  width: fit-content;
  border-width: 2px;
  border-style: solid;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  padding: 6px 20px; /* Remove 1px for border */
  ${breakpointQuery.mdUp} {
    letter-spacing: normal;
    padding: 8px 30px; /* Remove 1px for border */
  }
`;

export const normalButtonStyle = ({ variant }: ITypeAgnosticButtonProps) => css`
  color: ${getColors(variant).color};
  background-color: ${getColors(variant).background};
  border-color: ${getColors(variant).border};
`;

export const disabledButtonStyle = ({
  variant,
}: ITypeAgnosticButtonProps) => css`
  color: ${getColors(variant, "disabled").color};
  background-color: ${getColors(variant, "disabled").background};
  border-color: ${getColors(variant, "disabled").border};
  opacity: 0.35;
  cursor: disabled;
`;

export const focusedHoveredButtonStyle = ({
  variant,
}: ITypeAgnosticButtonProps) => css`
  color: ${getColors(variant, "hover").color};
  background-color: ${getColors(variant, "hover").background};
  border-color: ${getColors(variant, "hover").border};
`;

export const activeButtonStyle = ({ variant }: ITypeAgnosticButtonProps) => css`
  color: ${getColors(variant).color};
  background-color: ${getColors(variant).background};
  border-color: ${getColors(variant).border};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.16), 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

export const IconContainer = styled.div<{ hasChildren: boolean }>`
  display: flex;
  align-items: center;
  margin-right: ${({ hasChildren }) => (hasChildren ? "12px" : 0)};
  /* Add the same height as the fontsize * line-height.
  to ensure that buttons with only an icon still have the correct height */
  min-height: 24px;
  ${breakpointQuery.mdUp} {
    min-height: 20px;
  }
`;

// TODO: Fix specification issue on builded css output | e.g. @Home services list
export const buttonStyle = css`
  overflow: hidden;
  ${breakpointQuery.mdUp} {
    display: inline-flex !important;
    width: auto !important;
  }
`;

export const inlineButtonStyle = css`
  display: inline-flex;
  width: auto;
`;

export const denseButtonStyle = css`
  font-size: 16px;
  padding: 3px 28px; /* Remove 1px for border */

  ${breakpointQuery.mdUp} {
    display: inline-flex;
    width: auto;
  }
`;

export const denseFullWidthButtonStyle = css`
  font-size: 16px;

  ${breakpointQuery.mdUp} {
    padding: 1px 11px; /* Remove 1px for border */
  }
`;

export const denseInlineButtonStyle = css`
  font-size: 16px;
  display: inline-flex;
  width: auto;

  ${breakpointQuery.mdUp} {
    padding: 1px 11px; /* Remove 1px for border */
  }
`;

export const StyledIconArrowRight = styled(IconArrowRight)`
  position: absolute;
  top: 6px;
  right: 0;
`;
