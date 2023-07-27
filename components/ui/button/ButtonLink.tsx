import { IconArrowRight } from "icons/general/generalIcons";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import styled, { css } from "styled-components";
import { ButtonVariant, ITypeAgnosticButtonProps } from "./Button";
import {
  activeButtonStyle,
  baseButtonStyle,
  buttonStyle,
  denseButtonStyle,
  denseFullWidthButtonStyle,
  denseInlineButtonStyle,
  disabledButtonStyle,
  focusedHoveredButtonStyle,
  IconContainer,
  inlineButtonStyle,
  normalButtonStyle,
  StyledIconArrowRight,
} from "./button.styled";
import { getColors } from "./getColors";

export interface IButtonLinkProps
  extends ITypeAgnosticButtonProps,
    ComponentPropsWithoutRef<"a"> {
  /** Disables the link and it can't be clicked */
  isDisabled?: boolean;
  /** Sets `target="_blank"` and `rel="noreferrer"` */
  isExternal?: boolean;
}

export const StyledButtonLink = styled.a<IButtonLinkProps>`
  ${baseButtonStyle}
  text-decoration: none;
  ${({ isDisabled }) =>
    isDisabled
      ? css`
          &:link,
          &:hover,
          &:focus,
          &:active,
          &:visited {
            ${disabledButtonStyle}
            pointer-events: none;
          }
        `
      : css`
          &:link,
          &:visited {
            ${normalButtonStyle}
          }
          &:hover,
          &:focus {
            ${focusedHoveredButtonStyle}
          }
          &:active {
            ${activeButtonStyle}
          }
        `}
`;

// make sure changes in this component are reflected in the button file as well.
// forwardRef is needed for the RouterLink.
// see https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-function-component
export const FullWidthButtonLink = forwardRef<
  HTMLAnchorElement,
  IButtonLinkProps
>(
  (
    {
      children,
      className,
      isDisabled = false,
      icon,
      variant = "default",
      isExternal = false,
      ...other
    },
    ref
  ) => {
    const externalLinkAttributes = isExternal
      ? { target: "_blank", rel: "noreferrer" }
      : {};
    return (
      <StyledButtonLink
        className={className}
        isDisabled={isDisabled}
        variant={variant}
        ref={ref}
        {...other}
        {...externalLinkAttributes}
      >
        {Boolean(icon) && (
          <IconContainer hasChildren={Boolean(children)}>{icon}</IconContainer>
        )}
        <ButtonContent>{children}</ButtonContent>
        <LinkIconContainer variant={variant}>
          <StyledIconArrowRight width={20} height={12} />
        </LinkIconContainer>
      </StyledButtonLink>
    );
  }
);

FullWidthButtonLink.displayName = "FullWidthButton";

export const ButtonLink = styled(FullWidthButtonLink)`
  ${buttonStyle}
`;

export const InlineButtonLink = styled(FullWidthButtonLink)`
  ${inlineButtonStyle}
`;

export const DenseButtonLink = styled(FullWidthButtonLink)`
  ${denseButtonStyle}
`;

export const DenseFullWidthButtonLink = styled(FullWidthButtonLink)`
  ${denseFullWidthButtonStyle}
`;

export const DenseInlineButtonLink = styled(FullWidthButtonLink)`
  ${denseInlineButtonStyle}
`;

const LinkIconContainer = styled.div<{ variant: ButtonVariant }>`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 24px;
  transform: translateX(28px);
  transition: transform 150ms ease-in-out, opacity 140ms ease-in-out;
  opacity: 0;
  color: inherit;

  ${StyledButtonLink}:hover & {
    opacity: 1;
    transform: translateX(18px);
  }

  line,
  path {
    stroke-width: 3;
    stroke: ${({ variant }) => getColors(variant, "hover").color.val};
  }
`;

const ButtonContent = styled.div`
  transition: transform 150ms ease-in-out;
  ${StyledButtonLink}:hover & {
    transform: translateX(-10px);
  }
`;
