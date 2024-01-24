const siteConfig = {
	title: "CodeX MIT-BLR",
	headerTitle: "CodeX",
	description:
		"The website for CodeX, a club by the students of MIT Bengaluru.",
	language: "en-us",

	siteUrl: "https://codex.mitblr.club/",
	siteLogo: "/public/logo.png",
	eventsTableId: "bce097af99dc4179983660dbafb479fc",
	blogTableId: "bc59e12441b14107880e8e479d89ea50",

	navLinks: [
		{ href: "/events", title: "Events" },
		{ href: "/blog", title: "Blog" },
		{ href: "/team", title: "About Us" },
	],

	redirects: [
		{
			path: "/register",
			href: "https://forms.office.com/r/nN64QXr86h",
		},
		{
			path: "/register!",
			href: "https://forms.office.com/r/nN64QXr86h",
		},
		{
			path: "/git-and-hub",
			href: "https://github.com/codex-mitblr/git-and-hub",
		},
		{
			path: "/internal/sharepoint",
			href: "https://learnermanipal.sharepoint.com/sites/CodeX/Shared%20Documents/Forms/AllItems.aspx",
		},
		{
			path: "/internal/media",
			href: "https://abhigyantrips.notion.site/Photography-Portfolio-5d1de1eb16f34d00b018deec2c674da3?pvs=4",
		},
	],

	github: "https://github.com/",
	twitter: "https://twitter.com/CodeX_MITB",
};

module.exports = siteConfig;
