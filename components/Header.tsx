import Head from "next/head"
import Link from "next/link"

import { useRouter } from "next/router"

function ExtLink(props: any) {
	return (
		<a {...props} rel="noopener" target={props.target || "blank"} />
	)
}

const navItems: { label: string; page?: string; link?: string }[] = [
	{ label: "Home", page: "/" },
	{ label: "Blog", page: "/blog" },
	{ label: "Events", page: "/events" },
]

const ogImageUrl = "https://codex.mitblr.club/og-image.png"

export default function Header({ titlePre = "" }) {
	const { pathname } = useRouter()

	return (
		<header className="block min-h-64 py-8 text-center tracking-tight">
			<Head>
				<title>{ titlePre ? `${titlePre} |` : ""} CodeX</title>
				<meta 
					name="description"
					content="The website for CodeX, a club by the students of MIT Bengaluru."
				/>
				<meta name="og:title" content="CodeX MIT-BLR" />
			</Head>
			<ul className="list-none p-0">
			{navItems.map(({ label, page, link }) => (
				<li key={label} className="inline-block px-2.5 py-0">
					{page ? (
						<Link href={page} className={pathname === page ? "text-sky-400 font-semibold" : "text-slate-400 font-normal"}>
							{label}
						</Link>
					) : (
						<ExtLink href={link} className="text-slate-400 font-normal">{label}</ExtLink>
					)}
				</li>
			))}
			</ul>
			
		</header>
	)
}