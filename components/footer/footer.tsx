import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { useFooterQuery } from "./footer.generated";
import { InvertedLogo } from "icons/logo";
import { Col, Grid, Row } from "components/layout/Grid";
import { useTranslations } from "lib/i18n/translations";

export const Footer: FunctionComponent = () => {
  const localizationId = useLocalizationId();
  const { data } = useFooterQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );

  const translations = useTranslations([
    "job_search",
    "services",
    "services_for_employers:nav",
    "contact_persons",
    "references",
    "our_partners",
    "terms_of_use",
    "data_protection_guidelines",
    "legal_desclosure",
  ]);

  const quickLinks = [
    {
      title: translations["job_search"],
      link: "/jobs",
    },
    {
      title: translations["services"],
      link: "/services",
    },
    {
      title: translations["contact_persons"],
      link: "/services#contact",
    },
    {
      title: translations["references"],
      link: "/references",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "work@stellenwerk",
      link: "/stellenwerk/jobs",
    },
  ];

  const legalLinks = [
    {
      title: translations["legal_desclosure"],
      link: "/legal/impressum",
    },
    {
      title: translations["terms_of_use"],
      link: "/legal/terms-of-use",
    },
    {
      title: translations["data_protection_guidelines"],
      link: "/legal/data-protection-guidelines",
    },
  ];

  return (
    <FooterArea>
      <Grid>
        <StyledFooterRow>
          <Col xs={12} lg={4}>
            <Link href="/">
              <a aria-label="Link zur Startseite">
                <LogoContainer>
                  <InvertedLogo width={373} />
                </LogoContainer>
              </a>
            </Link>
            <QuickLinks>
              {quickLinks.map((quickLink) => (
                <li key={quickLink.link}>
                  <Link href={quickLink.link}>
                    <a>{quickLink.title}</a>
                  </Link>
                </li>
              ))}
            </QuickLinks>
          </Col>
          <Col xs={0} lg={1} xl={2} />
          <Col xs={12} lg={7} xl={6}>
            <Right>
              <Locations>
                {data?.globalSet.locations.map((entry) => {
                  if (entry.__typename !== "locations_location_BlockType") {
                    return null;
                  }

                  return (
                    <Location key={entry.zipCode}>
                      <div>
                        <h3>{entry.city}</h3>
                        <p>
                          {entry.firm}
                          <br />
                          {entry.street}
                          <br />
                          {entry.floor}
                          <br />
                          {entry.zipCode} {entry.city}
                        </p>
                        <p>
                          <a href={`tel:${entry.phone}`}>{entry.phone}</a>
                          <br />
                          <a href={`mailto:${entry.email}`}>{entry.email}</a>
                        </p>
                      </div>
                    </Location>
                  );
                })}
              </Locations>
              <Legal>
                {legalLinks.map((quickLink) => (
                  <li key={quickLink.link}>
                    <Link href={quickLink.link}>
                      <a>{quickLink.title}</a>
                    </Link>
                  </li>
                ))}
              </Legal>
            </Right>
          </Col>
        </StyledFooterRow>
      </Grid>
    </FooterArea>
  );
};

const StyledFooterRow = styled(Row)`
  margin-top: ${spacing.giant};
`;

const QuickLinks = styled.ul`
  color: ${colors.default.white};
  margin-top: ${spacing.giant};
  cursor: pointer;
  /* max-width: 240px; */

  & li {
    border-bottom: 1px solid white;
    margin: 0;
    padding: ${spacing.small} 0;

    &:hover {
      color: ${colors.default.linkHoverColor};
    }

    &::before {
      content: "";
    }
  }
`;

const LogoContainer = styled.div`
  svg {
    max-width: 373px;
  }

  ${breakpointQuery.xs} {
    svg {
      max-width: 100%;
    }
  }
`;

const FooterArea = styled.footer`
  width: 100%;
  min-height: 50px;
  background-color: ${colors.default.primaryColor};
  color: ${colors.default.white};
  padding: 64px 0;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const Locations = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  p {
    font-size: 16px;
    line-height: 24px;
  }

  ${breakpointQuery.mdUp} {
    flex-direction: row;
  }
`;

const Location = styled.div`
  h3 {
    margin: 0;
    margin-bottom: ${spacing.base};
    font-weight: 600;
    font-size: 22px;
  }

  ${breakpointQuery.mdDown} {
    margin-bottom: ${spacing.grande};
  }
`;

const Legal = styled.ul`
  margin: 0;

  & li {
    margin: 0;

    ${breakpointQuery.mdDown} {
      padding: ${spacing.small} 0;
    }

    &:hover {
      color: ${colors.default.linkHoverColor};
    }

    &::before {
      content: "";
    }
  }
`;
