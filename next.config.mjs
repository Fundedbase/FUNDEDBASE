/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  images: {
  	remotePatterns: [
  		{
  			protocol: 'https',
  			hostname: 'cdn.pixabay.com',
  			pathname: '**',
  		}
  	],
  },
};

export default nextConfig;
