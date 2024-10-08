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
			href: "https://codex.mitblr.club/events",
		},
		{
			path: "/projects",
			href: "https://forms.office.com/r/u3dEnfqydA",
		},
		{
			path: "/institute",
			href: "https://www.manipal.edu/mu/campuses/mahe-bengaluru/academics/institution-list/mitblr/mit-experience/student-clubs-overview/technical-clubs/codex.html",
		},
		{
			path: "/discord",
			href: "https://discord.gg/sUvBqKczX6",
		},
		{
			path: "/git-and-hub",
			href: "https://github.com/codex-mitblr/git-and-hub",
		},
		{
			path: "/hackerrank",
			href: "https://www.hackerrank.com/codex-techfest-nexus",
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

	instagram:"https://instagram.com/codex.mitblr",
	github: "https://github.com/codex-mitblr	",
	twitter: "https://twitter.com/",
	linkedin: "https://www.linkedin.com/company/codex-mitblr/"
};

module.exports = siteConfig;
