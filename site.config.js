const siteConfig = {
	title: "CodeX MIT-BLR",
	headerTitle: "CodeX",
	description:
		"The website for CodeX, a club by the students of MIT Bengaluru.",
	language: "en-us",

	siteUrl: "https://codex.mitblr.club/",
	siteLogo: "/public/logo.png",
	eventsTableId: "df0bbd9604a846468e6aaf7f41042c1c",
	blogTableId: "4388cd358b214e539f9c5ea5f941ad4e",

	navLinks: [
		{ href: "/events", title: "Events" },
		{ href: "/blog", title: "Blog" },
		{ href: "/team", title: "About Us" },
	],

	redirects: [
		{
			path: "/projects",
			href: "https://forms.office.com/r/TSXdG9FuvA",
		},
		{
			path: "/register",
			href: "https://forms.office.com/r/nN64QXr86h",
		},
		{
			path: "/internal/sharepoint",
			href: "https://learnermanipal.sharepoint.com/sites/CodeX/Shared%20Documents/Forms/AllItems.aspx",
		},
	],

	github: "https://github.com/",
	twitter: "https://twitter.com/CodeX_MITB",
};

module.exports = siteConfig;
