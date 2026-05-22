/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Netlify's next/image proxy (`/_ipx/...`) is broken — its sharp module can't
    // load libvips, so every optimized request returns 500. Bypass the optimizer
    // and serve the raw source files (which load fine). Source assets are already
    // sized reasonably; re-enable only if we move off Netlify.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
