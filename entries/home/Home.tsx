import { Col, Grid, Row } from "components/layout/Grid";
import { Typography } from "components/typography/Typography";
import { ButtonLink } from "components/ui/button/ButtonLink";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { JobsTeaser } from "./Jobs.teaser";
import { ReferencesTeaser } from "./References.teaser";
import { ServicesTeaser } from "./Services.teaser";
import { TeamTeaser } from "./Team.teaser";
import { FullWidthVideo, VideoContainer } from "./Video";
import { useTranslations } from "lib/i18n/translations";
import { ReferencesCarousel } from "components/references/References.Carousel";
import { SectionIntro } from "components/layout/SectionIntro";
import { JobsCounter } from "./JobsCounter";

const translationKeys = [
  "current_top_jobs",
  "there_for_you_since_years",
  "more_about_us",
  "references_teaser:p1",
  "references_teaser:p2",
  "show_all",
];

export const Home: FunctionComponent = () => {
  const translations = useTranslations(translationKeys);
  const currentYear = new Date().getUTCFullYear();

  return (
    <>
      <Grid>
        <StyledTwoColRow>
          <Col sm={0} md={1} />
          <Col sm={12} md={6}>
            <JobsIntro>
              <JobsCounter />
            </JobsIntro>
          </Col>
          <Col sm={12} md={5}>
            <StyledJobsTeaser
              title={
                <Typography
                  variant="h1"
                  component="h2"
                  color={colors.default.primaryColor}
                >
                  {translations["current_top_jobs"]}
                </Typography>
              }
            />
          </Col>
        </StyledTwoColRow>
      </Grid>
      <Grid>
        <StyledTwoColRow>
          <Col sm={0} md={1} />
          <Col sm={12} md={5}>
            <ServicesTeaser />
          </Col>
          <Col sm={0} md={1} />
          <Col sm={12} md={5}>
            <ReferencesTeaser />
          </Col>
        </StyledTwoColRow>
      </Grid>
      <TeamTeaser />
      <AboutGrid>
        <Row>
          <Col sm={0} md={1} />
          <Col sm={12} md={10}>
            <Typography
              variant="h1"
              component="h2"
              color={colors.default.primaryColor}
            >
              Stellenwerk –
            </Typography>
            <Typography
              variant="h1"
              component="h2"
              color={colors.default.primaryColor}
            >
              {translations["there_for_you_since_years"].replace(
                "[0]",
                currentYear - 2007
              )}
            </Typography>
            <Link href={`stellenwerk`} passHref>
              <StellenwerkButtonLink variant="contained">
                {translations["more_about_us"]}
              </StellenwerkButtonLink>
            </Link>
            <VideoContainer>
              <FullWidthVideo videoId={730232717} />
            </VideoContainer>
          </Col>
        </Row>
      </AboutGrid>
      <ReferenceGrid>
        <Row>
          <Col sm={12} md={10} centered>
            <SectionIntro
              title={
                <>
                  <Typography variant="h1" component="h2">
                    {translations["references_teaser:p1"]}
                  </Typography>
                  <StyledTypography variant="h1" component="h2">
                    {translations["references_teaser:p2"]}
                  </StyledTypography>
                </>
              }
              link={{
                text: translations["show_all"],
                href: "references",
              }}
            />
            <StyledReferencesCarousel />
          </Col>
        </Row>
      </ReferenceGrid>
    </>
  );
};

const JobsIntro = styled.div`
  // TODO: Use grid gap variable for margin right
  margin-top: 42px;

  ${breakpointQuery.mdUp} {
    padding-right: 54px;
  }

  ${breakpointQuery.mdUp} {
    margin-top: 180px;
  }
`;

const StyledTwoColRow = styled(Row)`
  grid-gap: 0 0;
`;

const StyledJobsTeaser = styled(JobsTeaser)`
  margin: ${spacing.giant} 0;

  ${breakpointQuery.mdUp} {
    margin: 180px 0 0 0;
  }
`;

const AboutGrid = styled(Grid)`
  margin-top: ${spacing.giant};

  ${breakpointQuery.mdUp} {
    margin-top: 180px;
  }
`;

const ReferenceGrid = styled(Grid)`
  padding-top: ${spacing.giant};
  padding-bottom: ${spacing.giant};

  ${breakpointQuery.mdUp} {
    margin-top: 180px;
    padding-top: 120px;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    height: 100%;
    width: 100vw;
    background-color: ${colors.default.lightBackgroundColor};
  }
`;

const StyledReferencesCarousel = styled(ReferencesCarousel)`
  margin-top: ${spacing.medium};

  ${breakpointQuery.mdUp} {
    margin-top: ${spacing.giant};
  }
`;

const StellenwerkButtonLink = styled(ButtonLink)`
  margin-top: ${spacing.medium};

  ${breakpointQuery.mdUp} {
    margin-top: ${spacing.grande};
  }
`;

const StyledTypography = styled(Typography)`
  font-weight: 300;
`;
