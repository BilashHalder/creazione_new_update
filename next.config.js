/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['pexels.com','localhost','images.pexels.com'],
  }
}

module.exports = nextConfig
