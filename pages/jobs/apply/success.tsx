import { HeroImage } from "components/hero/HeroImage";
import { PageIntro } from "components/layout/PageIntro";
import { ButtonLink } from "components/ui/button/ButtonLink";
import { useTranslations } from "lib/i18n/translations";
import Head from "next/head";
import Link from "next/link";

function Success() {
  const translations = useTranslations([
    "application_success:p1",
    "application_success:p2",
    "view_all_jobs",
  ]);

  return (
    <>
      <Head>
        <title>Stellenwerk - Bewerbung erfolgreich</title>
        <meta
          name="description"
          content={`Sie haben sich erfolgreich beworben. Vielen Dank für ihre Bewerbung.`}
        />
      </Head>
      <HeroImage src="/static/images/hero-2.png" />
      <PageIntro
        title={<strong>Vielen Dank für Ihre Bewerbung</strong>}
        description={
          <>
            {translations["application_success:p1"]}
            <br />
            <br />
            {translations["application_success:p2"]}
            <br />
            <br />
            <a href="tel:+41 44 365 77 44">+41 44 365 77 44</a>
            <br />
            <a href="mailto:info@stellenwerk.ch">info@stellenwerk.ch</a>
            <br />
            <br />
            <Link href={`/jobs`} passHref>
              <ButtonLink variant="contained">
                {translations["view_all_jobs"]}
              </ButtonLink>
            </Link>
          </>
        }
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 86400, // In seconds
  };
}

export default Success;
