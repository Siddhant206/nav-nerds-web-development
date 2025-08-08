/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add .jsx and .js to resolve extensions before existing ones
    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', ...config.resolve.extensions];
    return config;
  }
};

export default nextConfig;
