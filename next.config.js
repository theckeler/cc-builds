/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.cubcadet.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "staging-na01-mtd.demandware.net",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
