/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    trailingSlash: true,
    images: {
        loader: 'custom',
        loaderFile: './loader.js',
        domains: ["res.cloudinary.com"],


      },
      
};

export default nextConfig;
