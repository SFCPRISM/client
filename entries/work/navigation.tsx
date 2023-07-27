import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import styled, { css } from "styled-components";

export const Tabs = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  margin-top: -56px;
  z-index: 2;
  position: relative;

  ${breakpointQuery.smDown} {
    margin-top: -30px;
    flex-direction: column;
  }
`;

export const Tab = styled.div<{ isActive?: boolean }>`
  padding: 12px 36px;
  background-color: ${colors.default.primaryColor};
  color: ${colors.default.white};
  cursor: pointer;
  font-size: 24px;
  line-height: 32px;
  font-weight: 300;

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${colors.default.primaryColor};
      background-color: ${colors.default.white};
      cursor: default;
      ${breakpointQuery.smDown} {
        border: 1px solid ${colors.default.primaryColor};
      }
    `}
  &:hover {
    color: ${colors.default.primaryColor};
    background-color: ${colors.default.white};
  }

  margin-right: 40px;

  ${breakpointQuery.smDown} {
    margin-right: 0;
    margin-bottom: 12px;
    font-size: 20px;
    line-height: 28px;
  }
`;
