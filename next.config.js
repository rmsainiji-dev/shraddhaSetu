/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Required for GitHub Pages if deploying to a subdirectory
  // basePath: '/shraddhaSetu', // Uncomment and set your repo name for GitHub Pages
};

module.exports = nextConfig;
