const { isDev } = require("./config");

const ContentSecurityPolicy = `
  default-src 'none';
  base-uri 'self';
  connect-src 'self' ${
    // Local development websocket wildcard for Safari: https://github.com/graphile/starter/pull/244
    isDev ? "*" : ""
  };
  script-src 'self' 'unsafe-eval' www.youtube.com;
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  img-src 'self' data:;
  frame-src www.youtube.com;
`;

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  optimizeFonts: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
          {
            key: "Cache-Control",
            value: "no-cache, no-store, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};
