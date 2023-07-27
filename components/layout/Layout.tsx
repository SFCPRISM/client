import { Footer } from "components/footer/footer";
import { Alert } from "components/header/alert";
import { Header } from "components/header/Header";
import { Logo } from "icons/logo";
import { spacing } from "lib/theme/design-tokens/spacing";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

export const ContentLayout = styled.div`
  width: 100%;
  max-width: 1642px;
  margin: 0 auto;
  position: relative;
`;

export const DefaultLayout: FunctionComponent<{
  children: ReactNode;
  host: string;
}> = ({ children, host }) => {
  return (
    <>
      <Alert />
      <Header host={host} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

// TODO: Handly Slim Layout tracking
export const SlimLayout: FunctionComponent<{
  children: ReactNode;
  withLogo?: boolean;
}> = ({ children, withLogo = true }) => {
  return (
    <SlimPageLayout>
      <SlimPageHeader>
        {withLogo && (
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        )}
      </SlimPageHeader>
      {children}
    </SlimPageLayout>
  );
};
const SlimPageLayout = styled.div`
  margin-top: ${spacing.giant};
`;

const SlimPageHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
