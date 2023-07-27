import { LocaleSwitcher } from "lib/i18n/LocaleSwitcher";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import styled from "styled-components";
import { DesktopNavigation } from "./navigation/Navigation.desktop";
import { useRouter } from "next/router";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { Burger } from "./Burger";
import { MobileNavigation } from "./navigation/Navigation.mobile";
import { CountryLinks } from "./navigation/CountryLinks";
import { Logo } from "icons/logo";
import { spacing } from "lib/theme/design-tokens/spacing";

export const Header: FunctionComponent<{ host: string }> = ({ host }) => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  useOnRouteChangeComplete(() => setIsNavOpened(false));

  return (
    <>
      <HeaderContainer isNavOpened={isNavOpened}>
        <Left>
          <Link href="/">
            <a aria-label="Link zur Startseite" rel="nofollow">
              <LogoContainer>
                <Logo height="50px" />
              </LogoContainer>
            </a>
          </Link>
          <StyledCountryLinks host={host} />
        </Left>
        <Right>
          <DesktopNavigation />
          <LocaleSwitcher />
        </Right>
        <StyledBurger
          opened={isNavOpened}
          onClick={() => setIsNavOpened(!isNavOpened)}
        />
      </HeaderContainer>
      <MobileNavigation isVisible={isNavOpened} host={host} />
    </>
  );
};

const useOnRouteChangeComplete = (
  handler: (url?: string) => void,
  cleanup?: () => void
) => {
  const { events } = useRouter();
  useEffect(() => {
    events.on("routeChangeComplete", handler);
    return () => {
      events.off("routeChangeComplete", handler);
      cleanup?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handler, cleanup]);
};

const HeaderContainer = styled.header<{ isNavOpened: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: ${spacing.big} ${spacing.medium} ${spacing.smallerBaseVertical};

  ${breakpointQuery.lgUp} {
    padding: 96px 96px 48px;
  }

  & ~ main {
    ${({ isNavOpened }) => isNavOpened && `display: none;`}
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;

  ${breakpointQuery.lgUp} {
    flex-direction: row;
  }
`;

const LogoContainer = styled.div`
  svg {
    max-width: 285px;
  }

  ${breakpointQuery.smDown} {
    svg {
      max-width: 200px;
    }
  }
`;

const StyledCountryLinks = styled(CountryLinks)`
  ${breakpointQuery.mdDown} {
    display: none;
  }
`;

const Right = styled.div`
  display: none;

  ${breakpointQuery.lgUp} {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
`;

const StyledBurger = styled(Burger)`
  position: absolute;
  top: ${spacing.medium};
  right: ${spacing.medium};

  ${breakpointQuery.lgUp} {
    display: ${({ opened }) => (opened ? "block" : "none")};
  }
`;
