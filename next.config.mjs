/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
        protocol: "https",
      },
      {
        hostname: "fiverr-res.cloudinary.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
