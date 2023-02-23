import { useRouter } from "next/router";
import { NotionRenderer } from "@/components/NotionRenderer";
import LoadingPage from "@/components/LoadingPage";
import { getAllPosts } from "./";
import "prismjs/themes/prism-tomorrow.css";

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
	const router = useRouter()

	if (router.isFallback) {
		return <LoadingPage />
	}
	
	return(
		<div style={{ maxWidth: 768 }}>
			<h1 className="notion notion-title">{post.title}</h1>
			<NotionRenderer blockMap={blocks} />
		</div>
	)
};