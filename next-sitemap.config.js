/**
 * @type {import('next-sitemap').IConfig}
 */
const config = {
  siteUrl: process.env.SITE_URL || "https://test.stellenwerk.ch",
  exclude: ["/*"],
  outDir: "public/seo",
  generateRobotsTxt: false,
};

export default config;
