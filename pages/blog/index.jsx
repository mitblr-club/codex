import Link from "next/link";

import { formatDate } from "@/lib/formatDate";
import { getAllPosts } from "@/lib/getAllPosts";
import siteConfig from "@/site.config";

export async function getStaticProps() {
	const posts = await getAllPosts(siteConfig.blogTableId)

	return {
		props: {
			posts
		},
		revalidate: 60,
	};
}

export default function BlogHome({ posts }) {
	return (
		<>
			<h1 className="notion notion-title">CodeX Blog</h1>
			<div className="notion notion m-12 grid gap-10 lg:grid-cols-2">
				{posts.filter((post) => {
					return (post.published ? post : null)
				}).sort((post) => {
					return (formatDate(post.date))
				}).map((post) => (
					<article
						key={post.title}
						className="block p-6 bg-gray-50 border border-gray-300 rounded-lg shadow-md group"
					>
						<Link 
							href="/blog/[slug]" 
							as={`/blog/${post.slug}`} 
							key={post.title} 
							passHref
						>
						<div>
							<h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 group-hover:text-primary">
								{post.title}
							</h2>
							{post.date ? (
								<p className="my-4 text-gray-500">{formatDate(post.date)}</p>
							) : null}
							{post.description ? (
								<p className="my-4 py-3 text-gray-700">{post.description}</p>
							) : null}
						</div>
						</Link>
					</article>
				))}
			</div>
		</>
	);
}