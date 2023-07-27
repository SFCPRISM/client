/**
 * @type {import('next-sitemap').IConfig}
 */
const config = {
  siteUrl: process.env.SITE_URL || "https://www.stellenwerk.ch",
  outDir: "public/seo/ch",
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
      href: "https://www.stellenwerk.ch",
      hreflang: "de",
    },
    {
      href: "https://www.stellenwerk.ch/en",
      hreflang: "en",
    },
  ],
  generateIndexSitemap: false,
  generateRobotsTxt: false,
};

export default config;
