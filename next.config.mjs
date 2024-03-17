/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn1-production-images-kly.akamaized.net'
      }
    ]
  }
};

export default nextConfig;
