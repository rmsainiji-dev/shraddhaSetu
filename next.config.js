/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // ← Added
  trailingSlash: false,
  images: {
    unoptimized: true,     // ← Changed from false to true
  },
};

module.exports = nextConfig;