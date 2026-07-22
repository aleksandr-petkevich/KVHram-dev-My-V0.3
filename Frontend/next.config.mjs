// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
//   // Add the EXACT hostname from your tunnel here
//   allowedDevOrigins: ['4c50f690cf2c30.lhr.life'],
// }

// export default nextConfig

// для vercel
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

  // 🔽 НОВЫЙ БЛОК: Прокси для API
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://backend-kv-hram-dev-my-v0-3-y2sj-lfdt0pz3q.vercel.app/api/:path*',
      },
    ];
  },
};

export default nextConfig;