import { NotionRenderer } from "@/components/NotionRenderer";
import { formatDate } from "@/lib/formatDate";
import siteConfig from "@/site.config";
import "prismjs/themes/prism-tomorrow.css";

export async function getAllPosts() {
	return await fetch(
		`https://notion-api.splitbee.io/v1/table/${siteConfig.blogTableId}`
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
		paths: posts.map((row) => `/blog/${row.slug}`),
		fallback: true,
	};
}

export default function BlogPost({ blocks, post }) {

	if (!post) return null;

	return (
		<div>
			<h1 className="notion notion-title">{post.title}</h1>
			<p className="notion">{formatDate(post.date)}</p>
			<NotionRenderer blockMap={blocks} />
		</div>
	)
};