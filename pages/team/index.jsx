import Head from "next/head";

import { NotionRenderer } from "@/components/NotionRenderer";
import siteConfig from "@/site.config";
import "prismjs/themes/prism-tomorrow.css";

export async function getStaticProps() {
	const blocks = await fetch("https://notion-api.splitbee.io/v1/page/bc455f5137d04b8b8646b26fa86810c6").then((res) => res.json()); 
	return {
		props: {
			blocks,
		},
		revalidate: 60,
	};
}

export default function TeamPost({ blocks }) {	

	if (!blocks) return null;

	return (
		<>
			<Head>
				<title>{`Our Team | ${siteConfig.headerTitle}`}</title>
				<meta name="og:title" content={`Our Team | ${siteConfig.headerTitle}`} />
				<meta name="og:description" content={siteConfig.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="notion notion-title">About Our Team</h1>
			<NotionRenderer blockMap={blocks} />
		</>
	)
};