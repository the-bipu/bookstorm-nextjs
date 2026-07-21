// next.config.mjs

const nextConfig = {
    // Your Next.js configuration
    images: {
        remotePatterns: [
            {
            protocol: "https",
            hostname: "images.pexels.com",
            },
            {
            protocol: "https",
            hostname: "images.unsplash.com",
            },
            {
            protocol: "https",
            hostname: "media.licdn.com",
            },
            {
            protocol: "https",
            hostname: "i.ibb.co",
            },
        ],
    }
};

const defaultLocale = nextConfig.i18n.defaultLocale;

export { nextConfig as default, defaultLocale };
