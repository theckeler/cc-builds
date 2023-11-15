/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.cubcadet.com",
			},
		],
	},
};

module.exports = nextConfig;
