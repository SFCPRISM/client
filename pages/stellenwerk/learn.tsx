import { HeroImage } from "components/hero/HeroImage";
import Head from "next/head";
import { useTranslations } from "lib/i18n/translations";
import { dehydrate, QueryClient } from "react-query";
import { GetStaticProps } from "next";
import { WorkAtStellenwerk } from "entries/work/work";
import { Tab, Tabs } from "entries/work/navigation";
import { useGetWorkQuery } from "entries/work/work.generated";
import { Col, Grid, Row } from "components/layout/Grid";
import Link from "next/link";

const PartnerPage = () => {
  const translations = useTranslations([
    "work_at_stellenwerk:jobs:title",
    "work_at_stellenwerk:benefits:title",
    "work_at_stellenwerk:learn:title",
  ]);
  return (
    <>
      <Head>
        <title>work@Stellenwerk: Jobs</title>
        <meta
          name="description"
          content={`${translations["work_at_stellenwerk:learn:title"]}`}
        />
      </Head>
      <HeroImage src="/static/images/hero-11.png" />
      <Grid>
        <Row>
          <Col>
            <Tabs>
              <Link href="/stellenwerk/jobs">
                <a>
                  <Tab isActive={false}>
                    {translations["work_at_stellenwerk:jobs:title"]}
                  </Tab>
                </a>
              </Link>
              <Link href="/stellenwerk/benefits">
                <a>
                  <Tab isActive={false}>
                    {translations["work_at_stellenwerk:benefits:title"]}
                  </Tab>
                </a>
              </Link>
              <Tab isActive={true}>
                {translations["work_at_stellenwerk:learn:title"]}
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>
      <WorkAtStellenwerk type="learn" />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    useGetWorkQuery.getKey({
      localizationId: [locale === "en" ? 2 : 1],
    }),
    useGetWorkQuery.fetcher({
      localizationId: [locale === "en" ? 2 : 1],
    })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 60,
  };
};

export default PartnerPage;
