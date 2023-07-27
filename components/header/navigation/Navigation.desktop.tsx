import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { useNavigationItems } from "./useNavigationItems";

export const DesktopNavigation: FunctionComponent = () => {
  const { asPath } = useRouter();
  const navigationItems = useNavigationItems();

  return (
    <Nav>
      {navigationItems.map((item) => (
        <Parent key={item.link} withBorder={Boolean(item.items.length)}>
          <Link href={item.link} passHref>
            <NavItem isActive={asPath === item.link}>{item.title}</NavItem>
          </Link>
          {item.items.length ? (
            <SubNav>
              <SubNavItems>
                {item.items.map((item) => (
                  <Link href={item.link} key={item.link} passHref>
                    <SubNavItem isActive={asPath === item.link} inverted>
                      {item.title}
                    </SubNavItem>
                  </Link>
                ))}
              </SubNavItems>
            </SubNav>
          ) : null}
        </Parent>
      ))}
    </Nav>
  );
};

const Nav = styled.nav`
  margin-right: 96px;
  font-size: 24px;
  line-height: 24px;
`;

const Parent = styled.span<{ withBorder: boolean }>`
  padding: 0 ${spacing.base} ${spacing.grande};

  ${({ withBorder }) =>
    withBorder &&
    css`
      border-left: 1px solid transparent;

      &:hover {
        border-left: 1px solid ${colors.default.primaryColor};
      }
    `}
`;

const NavItem = styled.a<{ isActive: boolean; inverted?: boolean }>`
  color: ${({ isActive, inverted }) =>
    isActive
      ? colors.default.secondaryColor
      : inverted
      ? colors.default.white
      : colors.default.primaryColor};
  /* font-weight: 600; */
  cursor: pointer;
  font-size: 24px;
  line-height: 24px;

  &:hover {
    color: ${colors.default.linkHoverColor};
  }
`;

const SubNav = styled.div`
  position: absolute;
  display: none;
  top: 194px;
  left: 0;
  width: 100%;
  height: 425px;
  padding: 0 ${spacing.giant};
  background-color: ${colors.default.primaryColor};
  z-index: 10;
  color: ${colors.default.white};
  justify-content: flex-end;
  border-bottom: 1px solid ${colors.default.lightBackgroundColor};
  align-items: center;

  ${Parent}:hover & {
    display: flex;
  }
`;

const SubNavItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  margin-right: 50px;
`;

const SubNavItem = styled(NavItem)`
  font-size: 24px;
  line-height: 34px;
  font-weight: 300;
  margin-bottom: ${spacing.small};
`;
