import { HeroImage } from "components/hero/HeroImage";
import { Col, Grid, Row } from "components/layout/Grid";
import { CategorizedTeamList } from "entries/team/CategorizedTeamList";
import { ServiceList } from "entries/services/ServiceList";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import styled from "styled-components";
import { Typography } from "components/typography/Typography";
import { useTranslations } from "lib/i18n/translations";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { FunctionComponent } from "react";
import { useGetServicesQuery } from "entries/services/services.generated";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import Head from "next/head";

const Services: FunctionComponent = () => {
  const translations = useTranslations([
    "specialists_teaser_title:p1",
    "specialists_teaser_title:p2",
    "seo_services_title",
    "seo_services_description",
  ]);
  const localizationId = useLocalizationId();
  const { data, isFetching } = useGetServicesQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
  return (
    <>
      <Head>
        <title>Stellenwerk - {translations["seo_services_title"]}</title>
        <meta
          name="description"
          content={`${translations["seo_services_description"]}.`}
        />
      </Head>
      <HeroImage src="/static/images/hero-7.png" />
      <LightBackground>
        <Grid>
          <Row>
            <ServiceCol>
              <ServiceList data={data} isFetching={isFetching} />
            </ServiceCol>
          </Row>
        </Grid>
      </LightBackground>

      <ContactGrid id="contact">
        <Row>
          <Col md={8} centered>
            <StyledTypography
              variant="h1"
              component="h2"
              color={colors.default.primaryColor}
            >
              <strong>{translations["specialists_teaser_title:p1"]}</strong>
              <br /> {translations["specialists_teaser_title:p2"]}
            </StyledTypography>
            <CategorizedTeamList />
          </Col>
        </Row>
      </ContactGrid>
      <ContactGrid>
        <Row>
          <Col md={8} centered></Col>
        </Row>
      </ContactGrid>
    </>
  );
};

const ServiceCol = styled(Col)`
  z-index: 2;

  ${breakpointQuery.mdUp} {
    margin-top: -157px;
  }
`;

const ContactGrid = styled(Grid)`
  margin: ${spacing.giant} auto;
`;

const LightBackground = styled.div`
  width: 100%;
  background-color: ${colors.default.lightBackgroundColor};
  padding: 0 ${spacing.medium} ${spacing.grande};
`;

const StyledTypography = styled(Typography)`
  margin: ${spacing.giant} 0 ${spacing.grande};
  font-weight: 300;
`;

export default Services;
