const siteConfig = require("./site.config");

/** @type {import("next").NextConfig} */
module.exports = {
	staticPageGenerationTimeout: 300,
	redirects: async () => {
		return siteConfig.redirects.map((redirect) => ({
			source: redirect.path,
			destination: redirect.href,
			permanent: false,
		}));
	},
	images: {
		domains: [
			"www.notion.so",
			"notion.so",
			"images.unsplash.com",
			"s3-us-west-2.amazonaws.com",
			"lh3.googleusercontent.com",
			"i.imgur.com",
		],
		formats: ["image/avif", "image/webp"],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy:
			"default-src 'self'; script-src 'none'; sandbox;",
	},
};
