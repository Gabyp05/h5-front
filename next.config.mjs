/** @type {import('next').NextConfig} */
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ui-avatars.com",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "", 
                pathname: "/**", 
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: "/api/leads", 
                destination: `${BASE_URL}/leads`,
            },
            {
                source: "/api/auth", 
                destination: `${BASE_URL}/auth`,
            },
            {
                source: "/api/register", 
                destination: `${BASE_URL}/register`,
            },
            {
                source: "/api/media-hub/content-asset", 
                destination: `${BASE_URL}/media-hub/content-asset`,
            },
            {
                source: "/api/media-hub/content-asset/:id", 
                destination: `${BASE_URL}/media-hub/content-asset/:id`,
            },
        ];
    },
    output: "standalone",
};

export default nextConfig;
