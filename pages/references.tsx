import { HeroImage } from "components/hero/HeroImage";
import { References } from "entries/references/References";
import { useTranslations } from "lib/i18n/translations";
import Head from "next/head";

const PartnerPage = () => {
  const translations = useTranslations(["references", "references_title"]);
  return (
    <>
      <Head>
        <title>Stellenwerk - {translations["references"]}</title>
        <meta
          name="description"
          content={`${translations["references_title"]}.`}
        />
      </Head>
      <HeroImage src="/static/images/hero-6.png" />
      <References />
    </>
  );
};

export default PartnerPage;
