/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	env: {
		// API_URL: process.env.API_URL,
		// APP_URL: process.env.APP_URL
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:4200/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `http://localhost:4200/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
