const repoName = "shraddhaSetu";

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};