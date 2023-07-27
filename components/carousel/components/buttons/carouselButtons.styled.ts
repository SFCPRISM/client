import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import styled from "styled-components";
import { StageWrapper } from "../stage/carouselStage.styled";

export const NavButton = styled.button`
  display: flex;
  opacity: 1;
  align-items: center;
  justify-content: center;
  /* height: 32px; */
  /* width: 32px; */
  border: none;
  color: ${colors.default.primaryColor};
  cursor: pointer;
  transition: opacity 250 ease;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  user-select: none;
  background: none;
  padding: 0;

  @media (hover: hover) and (pointer: fine) {
    &:hover:not([disabled]) {
      color: ${colors.default.primaryColorLighten8};
    }

    ${StageWrapper}:hover & {
      opacity: 1;

      &:disabled {
        opacity: 0.4;
      }
    }
  }
`;

export const NavButtonPrev = styled(NavButton)`
  left: ${spacing.base};
`;

export const NavButtonNext = styled(NavButton)`
  right: ${spacing.base};
`;
