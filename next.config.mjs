/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{ hostname: "tzfdsyozivepoqlaclss.supabase.co", protocol: "https" },
		],
	},
};

export default nextConfig;
