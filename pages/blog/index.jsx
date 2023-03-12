import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import authors from "@/data/authors";
import { formatDate } from "@/lib/formatDate";
import siteConfig from "@/site.config";

export async function getAllPosts() {
	return await fetch(
		`https://notion-api.splitbee.io/v1/table/${siteConfig.blogTableId}`
	).then((res) => res.json());
};

export async function getStaticProps() {
	const posts = await getAllPosts()

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
			<Head>
				<title>{`Blog | ${siteConfig.headerTitle}`}</title>
				<meta name="description" content={`Register for the latest articles by the members of ${siteConfig.title}!`} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>	
			<h1 className="notion notion-title">CodeX Blog</h1>
			<div className="notion grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
				{posts.filter((post) => {
					return (post.published ? post : null)
				}).reverse((post) => {
					return (formatDate(post.date))
				}).map((post) => (
					<article key={post.title}>
						<Link 
							href="/blog/[slug]" 
							as={`/blog/${post.slug}`} 
							key={post.title} 
							passHref
						>
							<div className="rounded overflow-hidden shadow-lg transition duration-150 hover:shadow-2xl">
								<div className="px-6 py-4">
									<div className="font-bold text-xl mb-2">
										{post.title}
									</div>
									<div className="py-2 text-sm">
										<p className="text-gray-600">{formatDate(post.date)}</p>
									</div>
									{post.description ? (
										<p className="text-gray-700 text-base">{post.description}</p>
									) : null}
								</div>
								<div className="px-6 py-2">
									{post.tags?.map((tag) => (
										<span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
									))}
								{post.authors.map((author) => (
									<div key={authors[author.id].fullName} className="flex items-center py-3">
										<Image 
											alt={authors[author.id].firstName} 
											className="rounded-full mr-4" 
											src={authors[author.id].profilePhoto} 
											width={40}
											height={40}
										/>
										<div className="text-sm">
											<p className="text-gray-900 leading-none">{authors[author.id].fullName}</p>
											<p className="pt-1 text-gray-500 leading-none">{authors[author.id].department.name}</p>
										</div>
									</div>
								))}
								</div>
							</div>
						</Link>
					</article>
				))}
			</div>
		</>
	);
}