import { AccordionIndicator } from "components/ui/accordion/Accordion";
import { LocaleSwitcher } from "lib/i18n/LocaleSwitcher";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, FunctionComponent, useState } from "react";
import styled from "styled-components";
import { CountryLinks } from "./CountryLinks";
import { useNavigationItems } from "./useNavigationItems";

export const MobileNavigation: FunctionComponent<{
  isVisible: boolean;
  host: string;
}> = ({ isVisible, host }) => {
  const { asPath } = useRouter();
  const [subNavActiveIndex, setSubNavActiveIndex] = useState(null);
  const navigationItems = useNavigationItems();

  if (!isVisible) {
    return null;
  }

  return (
    <PositionOffset>
      <NavArea onClick={() => setSubNavActiveIndex(null)}>
        <LocaleSwitcher variant="inverted" />
        <StyledCountryLinks host={host} />
        <Nav>
          {navigationItems.map((item, index) => (
            <Fragment key={item.title}>
              {item.items.length ? (
                <>
                  <NavItem
                    isExpanded={index === subNavActiveIndex}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSubNavActiveIndex(
                        index === subNavActiveIndex ? null : index
                      );
                    }}
                  >
                    {item.title}
                    <AccordionIndicator
                      isOpen={index === subNavActiveIndex}
                      inverted
                    />
                  </NavItem>
                  {index === subNavActiveIndex ? (
                    <SubNav>
                      {item.items.map((item) => (
                        <Link href={item.link} key={item.link} passHref>
                          <SubNavItem isActive={asPath === item.link}>
                            {item.title}
                          </SubNavItem>
                        </Link>
                      ))}
                    </SubNav>
                  ) : null}
                </>
              ) : (
                <Link href={item.link} key={item.link} passHref>
                  <NavItem
                    isActive={asPath === item.link}
                    isExpanded={index === subNavActiveIndex}
                  >
                    {item.title}
                  </NavItem>
                </Link>
              )}
            </Fragment>
          ))}
        </Nav>
      </NavArea>
    </PositionOffset>
  );
};

const PositionOffset = styled.div`
  margin-bottom: 198px;
`;

const NavArea = styled.div`
  position: absolute;
  top: 94px;
  width: 100%;
  min-height: calc(100vh - 198px);
  z-index: 100;

  padding: ${spacing.big};
  display: flex;
  flex-direction: column;
  background-color: ${colors.default.primaryColor};
`;

const Nav = styled.nav`
  margin-top: ${spacing.big};
  display: flex;
  flex-direction: column;
`;

const BaseNavItem = styled.a<{
  isActive?: boolean;
}>`
  position: relative;
  padding: ${spacing.base} 0;
  font-size: 24px;
  cursor: pointer;
  color: ${({ isActive }) =>
    isActive ? colors.default.secondaryColor : colors.default.white};
`;

const NavItem = styled(BaseNavItem)<{
  isExpanded?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: ${spacing.base} 0;
  border-bottom: ${({ isExpanded }) =>
    isExpanded ? "none" : `1px solid ${colors.default.white}`};
  font-weight: ${({ isExpanded }) => (isExpanded ? "600" : "300")};
`;

const SubNavItem = styled(BaseNavItem)`
  padding: 0 0 ${spacing.medium};
  &:not(:last-of-type) {
    padding: 0 0 ${spacing.small};
    border-bottom: none;
  }
`;

const SubNav = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const StyledCountryLinks = styled(CountryLinks)`
  position: absolute;
  margin-top: 3px;
`;
