import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "@/components/NotionRenderer";
import { getAllPosts } from './'
import { formatDate } from "@/lib/formatDate";

export async function getStaticProps({ params: { slug } }) {
	const posts = await getAllPosts();
	const post = posts.find((t) => t.slug === slug);
	const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json()); 
	return {
		props: {
			blocks,
			post,
		},
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
	return(
		<div>
			<h1 className="notion notion-title">{post.title}</h1>
			<p className="notion">{formatDate(post.date)}</p>
			<NotionRenderer blockMap={blocks} />
		</div>
	)
};