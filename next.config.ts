import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        // https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.pixabay.com",
                port: "",
                pathname: "/user/**",
            },
        ],
    },
};

export default nextConfig;
