import Head from "next/head";

import { NotionRenderer } from "@/components/NotionRenderer";
import siteConfig from "@/site.config";
import "prismjs/themes/prism-tomorrow.css";

export async function getAllPosts() {
	return await fetch(
		`https://notion-api.splitbee.io/v1/table/${siteConfig.eventsTableId}`
	).then((res) => res.json());
};

export async function getStaticProps({ params: { slug } }) {
	const posts = await getAllPosts();
	const post = posts.find((t) => t.slug === slug);
	const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json()); 
	return {
		props: {
			blocks,
			post,
		},
		revalidate: 60,
	};
}

export async function getStaticPaths() {
	const posts = await getAllPosts();
	return {
		paths: posts.map((row) => `/events/${row.slug}`),
		fallback: true,
	};
}

export default function EventPost({ blocks, post }) {	

	if (!post) return null;

	return (
		<>
			<Head>
				<title>{`${post.title} | ${siteConfig.headerTitle} Events`}</title>
				<meta name="og:title" content={`${post.title} | ${siteConfig.headerTitle} Events`} />
				<meta name="og:description" content={siteConfig.description} />
				{post.tags?.map((tag) => (
					<meta key={tag} name="article:tag" content={tag} />
				))}
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="notion notion-title">{post.title}</h1>
			<NotionRenderer blockMap={blocks} />
		</>
	)
};