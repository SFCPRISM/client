import { CallToActionBanner } from "components/callToAction/CallToAction";
import { HeroImage } from "components/hero/HeroImage";
import { JobList } from "components/jobs/jobListing/JobList";
import { useGetJobPostingsQuery } from "components/jobs/jobListing/jobPostings.generated";
import { ContentLayout } from "components/layout/Layout";
import { ButtonLink } from "components/ui/button/ButtonLink";
import { useTranslations } from "lib/i18n/translations";
import { breakpointQuery } from "lib/theme/breakpointQuery";
import { spacing } from "lib/theme/design-tokens/spacing";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { FunctionComponent } from "react";
import { dehydrate, QueryClient } from "react-query";
import styled from "styled-components";
import absoluteUrl from "next-absolute-url";
import Head from "next/head";
import { colors } from "lib/theme/design-tokens/colors";

const Jobs: FunctionComponent = () => {
  const translations = useTranslations([
    "spontaneous_application_teaser:title",
    "spontaneous_application_teaser:description",
    "apply_spontaneously",
    "seo_jobs_description",
  ]);
  return (
    <Background>
      <Head>
        <title>Stellenwerk - Jobs</title>
        <meta
          name="description"
          content={`${translations["seo_jobs_description"]}.`}
        />
      </Head>
      <StyledHeroImage src="/static/images/hero-2.png" />
      <ContentLayout>
        <JobList />
        <StyledCallToActionBanner
          title={translations["spontaneous_application_teaser:title"]}
          description={
            translations["spontaneous_application_teaser:description"]
          }
          actions={[
            <Link key="action1" href="/jobs/apply/a0xD0000000uQPV" passHref>
              <ButtonLink variant="default">
                {translations["apply_spontaneously"]}
              </ButtonLink>
            </Link>,
          ]}
          image={{ src: "/static/images/cta-1.jpeg", alt: "CTA" }}
        />
      </ContentLayout>
    </Background>
  );
};

const Background = styled.div`
  background-color: ${colors.default.primaryColorLighten96};
`;

const StyledCallToActionBanner = styled(CallToActionBanner)`
  margin-top: 100px;
  border-bottom: 1px solid white;

  ${breakpointQuery.xlUp} {
    border-bottom: none;
    margin-bottom: ${spacing.giant};
  }
`;

const StyledHeroImage = styled(HeroImage)`
  ${breakpointQuery.mdDown} {
    display: none;
  }
`;

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const { host } = absoluteUrl(req);
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery(
//     useGetJobPostingsQuery.getKey(),
//     useGetJobPostingsQuery.fetcher({})
//   );

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       host,
//     },
//     // revalidate: 3600,
//   };
// };

export default Jobs;
