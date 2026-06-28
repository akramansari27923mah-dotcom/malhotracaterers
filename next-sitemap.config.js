/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.malhotracaterers.org",
  generateRobotsTxt: true,

  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/menus"),
    await config.transform(config, "/gallery"),
    await config.transform(config, "/contact"),
    await config.transform(config, "/review&rating"),
  ],
};

export default config;
