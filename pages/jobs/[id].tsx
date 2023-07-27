import { HeroImage } from "components/hero/HeroImage";
import { useGetApiJobPostingsQuery } from "components/jobs/jobListing/jobPostings.generated";
import { JobPosting } from "components/jobs/jobPosting/JobPosting";
import { useGetJobPostingQuery } from "components/jobs/jobPosting/jobPosting.generated";
import { ContentLayout } from "components/layout/Layout";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { dehydrate, QueryClient } from "react-query";
import nextConfig from "../../next.config";

function Job() {
  const {
    query: { id },
  } = useRouter();

  return (
    <>
      <HeroImage src="/static/images/hero-2.png" />
      <ContentLayout>
        <JobPosting id={id as string} />
      </ContentLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    useGetJobPostingQuery.getKey({ jobPostingId: [params.id] }),
    useGetJobPostingQuery.fetcher({ jobPostingId: [params.id] })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  const data = await useGetApiJobPostingsQuery.fetcher()();

  const paths = data.entries.map((job: any) => {
    let locales = {};
    nextConfig.i18n.locales.forEach((locale) => {
      locales = { ...locales, params: { id: job.jobId, lang: locale } };
    });
    return locales;
  });

  return { paths, fallback: "blocking" };
}

export default Job;
