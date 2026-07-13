/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add the EXACT hostname from your tunnel here
  allowedDevOrigins: ['4c50f690cf2c30.lhr.life'],
}

export default nextConfig