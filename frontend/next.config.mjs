/** @type {import('next').NextConfig} */

const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '4000', // Порт вашего сервера Express.js
				pathname: '/uploads/**',
			},
		],
	},
}

export default nextConfig
