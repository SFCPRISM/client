import { ComponentPropsWithoutRef, FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
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
} from "./button.styled";

export type ButtonVariant =
  | "default"
  | "contained"
  | "outlined"
  | "contained_contrasting";
export interface ITypeAgnosticButtonProps {
  /** The content of the button */
  children?: ReactNode;
  /** @ignore Ensures that the styled method works with every component */
  className?: string;
  /** Adds an icon before the children */
  icon?: ReactNode;
  /** The variant of the button. */
  variant?: ButtonVariant;
}
type IButtonProps = ITypeAgnosticButtonProps &
  ComponentPropsWithoutRef<"button">;

const StyledButton = styled.button<ITypeAgnosticButtonProps>`
  ${baseButtonStyle}
  ${normalButtonStyle}
  &:hover,
  &:focus {
    ${focusedHoveredButtonStyle}
  }
  &:active {
    ${activeButtonStyle}
  }
  &:disabled {
    ${disabledButtonStyle}
  }
`;

export const FullWidthButton: FunctionComponent<IButtonProps> = ({
  children,
  className,
  icon,
  type = "button",
  variant = "default",
  ...other
}) => {
  return (
    <StyledButton
      className={className}
      variant={variant}
      type={type}
      {...other}
    >
      {Boolean(icon) && (
        <IconContainer hasChildren={Boolean(children)}>{icon}</IconContainer>
      )}
      {children}
    </StyledButton>
  );
};

export const Button = styled(FullWidthButton)`
  ${buttonStyle}
`;

export const InlineButton = styled(FullWidthButton)`
  ${inlineButtonStyle}
`;

export const DenseButton = styled(FullWidthButton)`
  ${denseButtonStyle}
`;

export const DenseFullWidthButton = styled(FullWidthButton)`
  ${denseFullWidthButtonStyle}
`;

export const DenseInlineButton = styled(FullWidthButton)`
  ${denseInlineButtonStyle}
`;

export const DenseSpanButton = styled.span<ITypeAgnosticButtonProps>`
  ${baseButtonStyle}
  ${normalButtonStyle}
  &:hover,
  &:focus {
    ${focusedHoveredButtonStyle}
  }
  &:active {
    ${activeButtonStyle}
  }
  &:disabled {
    ${disabledButtonStyle}
  }
`;
