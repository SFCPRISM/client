import { CallToActionBanner } from "components/callToAction/CallToAction";
import { Col, Grid, Row } from "components/layout/Grid";
import { PageIntro } from "components/layout/PageIntro";
import { ServiceSituations } from "components/services/ServiceSituations";
import { ButtonLink } from "components/ui/button/ButtonLink";
import { sanitize } from "isomorphic-dompurify";
import { useTranslations } from "lib/i18n/translations";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import { SanitizedHtml } from "lib/sanitizer/sanitizedHtml";
import { getTrimmedDescription } from "lib/seo/helpers";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { colors } from "lib/theme/design-tokens/colors";
import { spacing } from "lib/theme/design-tokens/spacing";
import Head from "next/head";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { ServiceProcedures } from "../../components/services/ServiceProcedures";
import { ServiceList } from "./ServiceList";
import {
  useGetServiceBySlugQuery,
  useGetServicesQuery,
} from "./services.generated";

interface IServiceDetailProps {
  id: string;
}

export const ServiceDetail: FunctionComponent<IServiceDetailProps> = ({
  id,
}) => {
  const localizationId = useLocalizationId();
  const translations = useTranslations([
    "services_cta:title",
    "services_cta:description",
    "contact_us",
  ]);
  const { data } = useGetServiceBySlugQuery(
    { slug: [id], localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );

  const { data: relatedData, isFetching: isFetchingRelatedData } =
    useGetServicesQuery(
      { localizationId: [localizationId] },
      { refetchOnWindowFocus: false, refetchOnMount: false }
    );

  if (data?.entry?.__typename !== "services_default_Entry") {
    return null;
  }

  return (
    <>
      <Head>
        <title>Stellenwerk - {data.entry.title}</title>
        <meta
          name="description"
          content={`${getTrimmedDescription(
            sanitize(data.entry.serviceDescription, {
              ALLOWED_TAGS: [],
            })
          )}`}
        />
      </Head>
      <Grid>
        <StyledPageIntro
          title={<strong>{data.entry.title}</strong>}
          description={data.entry.subtitle}
        />
        {data.entry.serviceDescription && (
          <Description>
            <Col md={8} centered>
              <SanitizedHtml html={data.entry.serviceDescription} />
            </Col>
          </Description>
        )}
        <ServiceSituations serviceSituations={data.entry.serviceSituations} />
        <ServiceProcedures serviceProcedures={data.entry.serviceProcedures} />
        <StyledCallToActionBanner
          title={translations["services_cta:title"]}
          description={translations["services_cta:description"]}
          actions={[
            <ButtonLink
              href={getEmailLink(data.entry.title)}
              key="action1"
              variant="default"
            >
              {translations["contact_us"]}
            </ButtonLink>,
          ]}
          image={{ src: "/static/images/cta-1.jpeg", alt: "CTA" }}
        />
      </Grid>
      <ServiceListGrid>
        <Col sm={12} md={10} centered>
          <ServiceList
            data={relatedData}
            isFetching={isFetchingRelatedData}
            variant="relational"
            relationSlug={data.entry.slug}
          />
        </Col>
      </ServiceListGrid>
    </>
  );
};

const StyledPageIntro = styled(PageIntro)`
  margin-bottom: ${spacing.giant};
`;

const Description = styled(Row)`
  p {
    color: ${colors.default.primaryColor};
  }

  margin-bottom: ${spacing.giant};
  ${breakpointQuery.mdUp} {
    margin-bottom: 200px;
  }
`;

const StyledCallToActionBanner = styled(CallToActionBanner)`
  margin-bottom: ${spacing.giant};

  ${breakpointQuery.mdUp} {
    margin-bottom: 200px;
  }
`;

const ServiceListGrid = styled(Grid)`
  margin-bottom: ${spacing.giant};
`;

const getEmailLink = (service: string) => {
  const linebreak = "%0D%0A";
  return `mailto:info@stellenwerk.ch?subject=${service}&body=Grüezi Stellenwerk${linebreak}Gerne würde ich mehr über Ihre Dienstleistung erfahren.${linebreak}${linebreak}Sie erreichen mich via (tel/email): ${linebreak}${linebreak}Freundliche Grüsse${linebreak}`;
};
