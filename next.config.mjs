/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "http",
        hostname: "192.168.100.2",
        port: "1337",
      },
    ],
  },
};

export default nextConfig;
