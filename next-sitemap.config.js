module.exports = {
  siteUrl: "https://yusufs.me/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: "/studio/" }],
  },
};
