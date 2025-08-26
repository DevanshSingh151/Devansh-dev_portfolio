/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper output for Vercel
  output: 'standalone',
  
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
  
  // Image optimization settings
  images: {
    domains: [],
    unoptimized: false,
  },
  
  // Ensure proper trailing slash handling
  trailingSlash: false,
}

module.exports = nextConfig
