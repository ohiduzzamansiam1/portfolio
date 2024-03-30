/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media.graphassets.com",
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
