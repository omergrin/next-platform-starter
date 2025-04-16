/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        if (isServer) {
          config.externals.push('hud-sdk');
        }
        return config;
    },
};

module.exports = nextConfig;
