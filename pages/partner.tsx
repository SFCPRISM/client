import { Partner } from "entries/partner/Partner";
import { HeroImage } from "components/hero/HeroImage";
import Head from "next/head";
import { useTranslations } from "lib/i18n/translations";
import { useGetPartnerQuery } from "entries/partner/partner.generated";
import { dehydrate, QueryClient } from "react-query";
import { GetStaticProps } from "next";

const PartnerPage = () => {
  const translations = useTranslations(["our_network", "partners_we_trust"]);
  return (
    <>
      <Head>
        <title>Stellenwerk - Partner</title>
        <meta
          name="description"
          content={`${translations["our_network"]} ${translations["partners_we_trust"]}`}
        />
      </Head>
      <HeroImage src="/static/images/hero-6.png" />
      <Partner />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    useGetPartnerQuery.getKey({
      localizationId: [locale === "en" ? 2 : 1],
    }),
    useGetPartnerQuery.fetcher({
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
