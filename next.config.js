/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['6f83bc6934d910d3e3a0bf7dd7800bf4.ipfscdn.io/ipfs/'],
  },
}
