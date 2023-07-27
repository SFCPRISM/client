/**
 * @type {import('next-sitemap').IConfig}
 */
const config = {
  siteUrl: process.env.SITE_URL || "https://www.stellenwerk.li",
  outDir: "public/seo/li",
  exclude: [
    "/sitemap.xml",
    "/server-sitemap.xml",
    "/jobs/apply/*",
    "/jobs/slim/*",
    "/en/jobs/apply/*",
    "/en/jobs/slim/*",
  ],
  alternateRefs: [
    {
      href: "https://www.stellenwerk.li",
      hreflang: "de",
    },
    {
      href: "https://www.stellenwerk.li/en",
      hreflang: "en",
    },
  ],
  generateIndexSitemap: false,
  generateRobotsTxt: false,
};

export default config;
