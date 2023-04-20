/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config) => {
		config.resolve.fallback = {
			fs: false,
			net: false,
			dns: false,
			child_process: false,
			tls: false,
		};

		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'github.com',
			},
			{
				protocol: 'https',
				hostname: 'og-image-rest-generator.fly.dev'
			}
		],
	},
};

module.exports = nextConfig;
