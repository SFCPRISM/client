import { Col, Grid, Row } from "components/layout/Grid";
import { SectionIntro } from "components/layout/SectionIntro";
import { Typography } from "components/typography/Typography";
import { TeamList } from "entries/team/Team";
import { useTranslations } from "lib/i18n/translations";
import { useIsBreakpointOrBigger } from "lib/media-queries/useIsBreakpoint";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { BreakpointNames } from "lib/theme/breakpoints";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import { FunctionComponent } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { TeamCarousel } from "./Team.carousel";

export const TeamTeaser: FunctionComponent = () => {
  const isBreakPointOrBigger = useIsBreakpointOrBigger(BreakpointNames.MD);
  const { inView, ref } = useInView({ rootMargin: "800px", triggerOnce: true });
  const translations = useTranslations([
    "team_teaser_title:p1",
    "team_teaser_title:p2",
    "view_entire_team",
  ]);

  return (
    <Container ref={ref}>
      {inView ? (
        <>
          <StyledGrid>
            <Row>
              <Col sm={0} md={1} />
              <Col sm={12} md={11}>
                <SectionIntro
                  title={
                    <>
                      <Typography variant="h1" component="h2">
                        {translations["team_teaser_title:p1"]}
                      </Typography>
                      <StyledTypography variant="h1" component="h2">
                        {translations["team_teaser_title:p2"]}
                      </StyledTypography>
                    </>
                  }
                  link={{
                    text: translations["view_entire_team"],
                    href: "team",
                  }}
                />
              </Col>
            </Row>
          </StyledGrid>
          {isBreakPointOrBigger ? (
            <Grid>
              <TeamList limit={6} variant="poster" />
            </Grid>
          ) : (
            <TeamCarousel />
          )}
        </>
      ) : (
        <TeamSkeleton />
      )}
    </Container>
  );
};

const Container = styled.div`
  margin-top: ${spacing.giant};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  position: relative;

  ${breakpointQuery.mdUp} {
    margin-top: 200px;
  }
`;

const StyledTypography = styled(Typography)`
  font-weight: 300;
`;
const StyledGrid = styled(Grid)`
  margin-bottom: ${spacing.medium};

  ${breakpointQuery.mdUp} {
    margin-bottom: ${spacing.giant};
  }
`;

export const TeamSkeleton = styled.div`
  display: flex;
  width: 100%;
  height: 340px;
  background-color: ${colors.default.lightBackgroundColor};

  ${breakpointQuery.mdUp} {
    height: 854px;
  }
`;
