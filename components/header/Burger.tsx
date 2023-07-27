import { colors } from "lib/theme/design-tokens/colors";
import { ComponentPropsWithoutRef, FunctionComponent } from "react";
import styled, { css } from "styled-components";

interface IBurgerProps extends ComponentPropsWithoutRef<"button"> {
  opened: boolean;
}

export const Burger: FunctionComponent<IBurgerProps> = ({
  opened,
  onClick,
  className,
}) => {
  return (
    <BurgerButton onClick={onClick} opened={opened} className={className}>
      <Menu opened={opened} />
    </BurgerButton>
  );
};

const sizeValue = 50;

const BurgerButton = styled.button<{ opened: boolean }>`
  width: ${sizeValue}px;
  height: ${sizeValue}px;
  padding: 12px;
  margin-right: -12px;
  margin-top: -12px;
  box-sizing: content-box;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  background: none;
  outline: none;
  border: none;

  ${({ opened }) =>
    opened &&
    css`
      background: aliceblue;
      border-radius: 50%;
    `};
`;

const Menu = styled.div<{ opened: boolean }>`
  position: relative;
  user-select: none;
  box-sizing: border-box;
  border: none;
  padding: none;

  &,
  &:before,
  &:after {
    display: block;
    width: ${sizeValue}px;
    height: 2px;
    background-color: ${colors.default.primaryColor};
    outline: 1px solid transparent;
    transition-property: background-color, transform;
    transition-duration: 300ms;

    @media (prefers-reduced-motion) {
      transition-duration: 0ms;
    }
  }

  &:before,
  &:after {
    position: absolute;
    content: "";
    left: 0;
  }

  & {
    top: 1px;
  }

  &:before {
    top: ${Math.floor(sizeValue / 4.5) * -1}px;
  }

  &:after {
    top: ${Math.floor(sizeValue / 4.5)}px;
  }

  ${({ opened }) =>
    opened &&
    css`
      & {
        background-color: transparent;
      }

      &:before {
        transform: translateY(${sizeValue / 4.5}px) rotate(40deg);
      }

      &:after {
        transform: translateY(-${sizeValue / 4.5}px) rotate(-40deg);
      }
    `}
`;
