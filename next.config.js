/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  distDir: ".next",
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: false,
      preprocess: false,
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: "json",
      use: "yaml-loader",
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
  },
  images: {
    domains: [
      "cms.test.stellenwerk.ch",
      "cms.test.stellenwerk.li",
      "cms.stellenwerk.ch",
    ],
    formats: ["image/avif", "image/webp"],
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-DNS-Prefetch-Control",
          value: "on",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "no-referrer-when-downgrade",
        },
      ],
    },
    {
      source: "/api/:path*",
      headers: [
        {
          key: "Access-Control-Allow-Origin",
          value: "https://www.stellenwerk.ch",
        },
        {
          key: "Access-Control-Allow-Methods",
          value: "OPTIONS,GET,POST,HEAD",
        },
        {
          key: "Access-Control-Max-Age",
          value: "86400",
        },
        {
          key: "Access-Control-Allow-Headers",
          value:
            "X-CSRF-Token, X-Requested-With, Accept, Accept-Language, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
        },
      ],
    },
  ],
  redirects: async () => [
    {
      source: "/jobs/bewerben",
      has: [
        {
          type: "query",
          key: "jobOfferId",
          value: "(?<id>.*)",
        },
      ],
      destination: "/jobs/apply/:id",
      permanent: false,
    },
    {
      source: "/jobs/:path",
      has: [
        {
          type: "query",
          key: "r",
          value: "a",
        },
      ],
      destination: "/jobs/slim/:path",
      permanent: false,
    },
    {
      source: "/arbeitgeber",
      destination: "/services",
      permanent: false,
    },
  ],
};

export default nextConfig;
