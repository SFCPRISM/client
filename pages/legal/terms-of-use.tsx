import { HeroImage } from "components/hero/HeroImage";
import { Col, Grid, Row } from "components/layout/Grid";
import { PageIntro } from "components/layout/PageIntro";
import { useGetTermsOfUseQuery } from "entries/legal/legal.generated";
import { LegalContent } from "entries/legal/legalContent";
import { useTranslations } from "lib/i18n/translations";
import { useLocalizationId } from "lib/i18n/useLocalizationId";
import Head from "next/head";

const TermsOfUse = () => {
  const localizationId = useLocalizationId();
  const { data } = useGetTermsOfUseQuery(
    { localizationId: [localizationId] },
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
  const translations = useTranslations(["seo_terms_of_use_description"]);
  return (
    <>
      <Head>
        <title>Stellenwerk - {data?.entry?.title}</title>
        <meta
          name="description"
          content={`${translations["seo_terms_of_use_description"]}.`}
        />
      </Head>
      <HeroImage src="/static/images/hero-10.png" />
      <PageIntro title={<strong>{data?.entry?.title}</strong>} />
      <Grid>
        <Row>
          <Col xs={12} md={10} lg={8} centered>
            <LegalContent entry={data?.entry} />
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default TermsOfUse;
