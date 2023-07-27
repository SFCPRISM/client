// pages/server-sitemap-index.xml/index.tsx
import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import { useGetApiJobPostingsQuery } from "components/jobs/jobListing/jobPostings.generated";
import absoluteUrl from "next-absolute-url";
import { getCountryCodeByHost } from "lib/i18n/useLocalizationId";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await useGetApiJobPostingsQuery.fetcher()();
  const fields = [];
  const { host } = absoluteUrl(ctx.req);
  const topLevelDomain = getCountryCodeByHost(host);

  data.entries.forEach((entry) => {
    if (entry.__typename === "jobs_default_Entry") {
      fields.push({
        loc: `https://www.stellenwerk.${topLevelDomain}/jobs/${entry.jobId}`,
        lastmod: entry.dateUpdated,
        changefreq: "daily",
        priority: "1.0",
      });
    }
  });

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
