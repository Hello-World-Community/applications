/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = {
	...nextConfig,
	async redirects() {
		return [
			{
				source: "/fluent",
				destination: "https://dyno.gg/form/d8934d72?utm_source=web",
				permanent: false,
			},
			{
				source: "/feedback",
				destination: "https://dyno.gg/form/efc86d65",
				permanent: false,
			},
			{
				source: "/proficient",
				destination: "/closed",
				permanent: false,
			},
			{
				source: "/staff",
				destination: "/closed",
				permanent: false,
			}
		]
	},
}
