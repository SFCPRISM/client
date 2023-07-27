import { getServerSideSitemapIndex } from "next-sitemap";
import { GetServerSideProps } from "next";
import absoluteUrl from "next-absolute-url";
import { getCountryCodeByHost } from "lib/i18n/useLocalizationId";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { host } = absoluteUrl(ctx.req);
  const countryCode = getCountryCodeByHost(host);
  const siteMaps = [
    `https://stellenwerk.${countryCode}/seo/${countryCode}/sitemap.xml`,
    `https://stellenwerk.${countryCode}/server-sitemap.xml`,
  ];

  return getServerSideSitemapIndex(ctx, siteMaps);
};

export default function SitemapIndex() {}
