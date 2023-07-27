import { PersonDetail } from "entries/team/Team.entry";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import nextConfig from "../../next.config";
import {
  useGetTeamMemberBySlugQuery,
  useGetTeamQuery,
} from "entries/team/team.generated";

const Service = () => {
  const {
    query: { slug },
  } = useRouter();

  if (typeof slug !== "string") {
    return null;
  }

  return <PersonDetail slug={slug} />;
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    useGetTeamMemberBySlugQuery.getKey({
      slug: [params.slug as Readonly<string>],
      localizationId: [locale === "en" ? 2 : 1],
    }),
    useGetTeamMemberBySlugQuery.fetcher({
      slug: [params.slug as Readonly<string>],
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

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await useGetTeamQuery.fetcher({ localizationId: [1] })();

  const paths = data.entries.map((entry: any) => {
    return { params: { slug: entry.slug, lang: "de" } };
  });

  return { paths, fallback: "blocking" };
};

export default Service;
