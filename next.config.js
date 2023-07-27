/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      "images.pexels.com",
      "placehold.co",
      "dynamic-media-cdn.tripadvisor.com",
    ],
  },
};

module.exports = nextConfig;
