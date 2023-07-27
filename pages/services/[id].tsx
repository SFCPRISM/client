import { HeroImage } from "components/hero/HeroImage";
import { ServiceDetail } from "entries/services/Service.entry";
// import { useGetServiceBySlugQuery } from "entries/services/services.generated";
// import { GetStaticProps } from "next";
import { useRouter } from "next/router";
// import { dehydrate, QueryClient } from "react-query";

const Service = () => {
  const {
    query: { id },
  } = useRouter();

  if (typeof id !== "string") {
    return null;
  }

  return (
    <>
      <HeroImage src="/static/images/hero-8.png" />
      <ServiceDetail id={id} />
    </>
  );
};

// getStaticProps
// export const getServerSideProps: GetStaticProps = async ({ params }) => {
//   const queryClient = new QueryClient();
//   const localizationId = "???"
//   const slug = typeof params.id === "string" ? [params.id] : params.id
//   await queryClient.prefetchQuery(
//     useGetServiceBySlugQuery.getKey({ slug, localizationId: [localizationId] }),
//     useGetServiceBySlugQuery.fetcher({ slug, localizationId: [localizationId] })
//   );

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//     revalidate: 3600,
//   };
// };

// export async function getStaticPaths() {
//   const res = await fetch('https://www.stellenwerk.ch/api/jobs.json')
//   const { items } = await res.json()

//   const paths = items.map((job) => ({
//     params: { id: job.jobId },
//   }))

//   return { paths, fallback: 'blocking' }
// }

export default Service;
