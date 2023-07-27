import { getServiceIconLinkById } from "components/services/getServiceIconLink";
import { ServicesCarousel } from "components/services/Services.carousel";
import { Typography } from "components/typography/Typography";
import { ButtonLink } from "components/ui/button/ButtonLink";
import { useGetServicesQuery } from "entries/services/services.generated";
import { useTranslations } from "lib/i18n/translations";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { useIsBreakpointOrBigger } from "lib/media-queries/useIsBreakpoint";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { BreakpointNames } from "lib/theme/breakpoints";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import Link from "next/link";
import { FunctionComponent } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

export const ServicesTeaser: FunctionComponent = () => {
  const localizationId = useLocalizationId();
  const isBreakPointOrBigger = useIsBreakpointOrBigger(BreakpointNames.MD);
  const { inView, ref } = useInView({ rootMargin: "600px", triggerOnce: true });
  const { data } = useGetServicesQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
  const translations = useTranslations([
    "services_for_employers",
    "go_to_the_services",
  ]);

  const introTranslations = translations["services_for_employers"].split(" ");

  return (
    <Container ref={ref}>
      {inView && (
        <Inner>
          <Typography
            variant="h1"
            component="h2"
            color={colors.default.primaryColor}
          >
            {introTranslations[0]} <LineBreak />
            {introTranslations[1]} {introTranslations[2]}
          </Typography>
          {isBreakPointOrBigger ? (
            <>
              <ServicesList>
                {data?.entries?.map((entry) => {
                  return (
                    <Link
                      href={`/services/${entry.slug}`}
                      key={entry.slug}
                      passHref
                    >
                      <ServiceListItemLink>
                        <ServicesListItem>
                          <ServicesListItemIconContainer>
                            {getServiceIconLinkById(entry.id, {
                              width: 60,
                              height: 60,
                            })}
                          </ServicesListItemIconContainer>
                          <Typography
                            variant="h3"
                            color={colors.default.primaryColor}
                          >
                            {entry.title}
                          </Typography>
                        </ServicesListItem>
                      </ServiceListItemLink>
                    </Link>
                  );
                })}
              </ServicesList>
              <CallToAction>
                <Link href={`services`} passHref>
                  <ButtonLink variant="contained">
                    {translations["go_to_the_services"]}
                  </ButtonLink>
                </Link>
              </CallToAction>
            </>
          ) : (
            <ServicesCarousel />
          )}
        </Inner>
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: ${colors.default.lightBackgroundColor};
  padding: ${spacing.grande} 0;
  margin-left: -100%;
  padding-left: 100%;
  margin-right: ${spacing.mediumNegative};
  padding-right: ${spacing.medium};
`;

const LineBreak = styled.br`
  display: none;
  ${breakpointQuery.lgUp} {
    display: unset;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${breakpointQuery.mdUp} {
    text-align: left;
    min-height: 500px;
  }
`;

const ServicesList = styled.ul`
  list-style: none;
  margin: ${spacing.medium} 0 0;

  ${breakpointQuery.mdUp} {
    margin: ${spacing.giant} 0 0;
  }
`;

const ServiceListItemLink = styled.a`
  &:first-of-type li {
    margin-top: 0;
  }
  &:last-of-type li {
    margin-bottom: 0;
  }
`;

const ServicesListItem = styled.li`
  padding: 0;
  position: relative;
  margin: ${spacing.massive} 0;

  &:hover h3 {
    color: ${colors.default.primaryColorLighten8};
  }

  ${breakpointQuery.mdUp} {
    max-width: 400px;
  }

  &::before {
    content: "";
  }
`;

const ServicesListItemIconContainer = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  left: -80px;
  top: 8px;
  padding-right: 120px;

  ${breakpointQuery.xlUp} {
    left: -120px;
  }
`;

const CallToAction = styled.div`
  margin-top: ${spacing.medium};

  ${breakpointQuery.mdUp} {
    margin-top: ${spacing.giant};
  }
`;
