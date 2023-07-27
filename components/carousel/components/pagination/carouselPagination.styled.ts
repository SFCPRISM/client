import { colors } from "lib/theme/design-tokens/colors";
import styled from "styled-components";

export const Pagination = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Item = styled.li`
  display: flex;

  &::before {
    content: "";
  }
`;

export const Indicator = styled.button<{ isActive: boolean }>`
  display: inline-block;
  width: 40px;
  height: 2px;
  margin: 0;
  padding: 0;
  margin-right: 12px;
  transition: background-color 0.25s ease-in-out;
  border: none;
  cursor: pointer;
  background-color: ${({ isActive }) =>
    isActive ? colors.default.secondaryColor : colors.default.primaryColor};

  &:focus-visible {
    background: ${colors.default.secondaryColor};
  }
`;
