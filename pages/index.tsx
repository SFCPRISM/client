import { HeroBanner } from "components/hero/HeroBanner";
import { Home as HomePage } from "entries/home/Home";
import { useTranslations } from "lib/i18n/translations";
import { GetStaticProps } from "next";
import Head from "next/head";

export default function Home() {
  const translations = useTranslations([
    "seo_home_description",
    "slogan:p1",
    "slogan:p2",
  ]);
  return (
    <>
      <Head>
        <title>
          Stellenwerk - {translations["slogan:p1"]} {translations["slogan:p2"]}
        </title>
        <meta
          name="description"
          content={`${translations["seo_home_description"]}.`}
        />
      </Head>
      <HeroBanner />
      <HomePage />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {},
    revalidate: 3600,
  };
};
