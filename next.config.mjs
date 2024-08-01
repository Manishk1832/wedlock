/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    eslint: {
        ignoreDuringBuilds: true,
    },
    trailingSlash: true,
    images: {
        loader: 'custom',
        loaderFile: './loader.js',
      },
};

export default nextConfig;
