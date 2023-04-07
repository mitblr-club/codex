import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/lib/formatDate";
import siteConfig from "@/site.config";
import departments from "@/data/departments";

export async function getAllPosts() {
	return await fetch(
		`https://notion-api.splitbee.io/v1/table/${siteConfig.eventsTableId}`
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

export default function EventsHome({ posts }) {
	
	const liveEvents = posts.filter((post) => {
		return (post.joinable ? post : null)
	}).reverse((post) => {
		return (formatDate(post.date))
	})

	return (
		<>
			<Head>
				<title>{`Events | ${siteConfig.headerTitle}`}</title>
				<meta name="description" content={`Register for the latest events by ${siteConfig.title}!`} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="notion notion-title">Live Events</h1>
			<div className="notion grid grid-cols-1 gap-5">
				{liveEvents.map((event) => (
					<article 
						key={event.title}
						className="shadow-xl transition duration-150 hover:shadow-2xl"
					>
						<Link
							href={event.registration}
							key={event.title}
							className="group relative block rounded-lg bg-gray-900"
							passHref
						>
							<div className="relative z-10 px-6 pt-8">
									{event.tags ? event.tags.map((tag) => (
										<span key={tag} className="bg-gray-100 rounded-lg px-3 py-1.5 text-sm font-semibold text-gray-800 ml-1 mr-2 mb-2">{tag}</span>
									)) : null}
							</div>
							<div style={{ width: "100%", height: 100 }}>
								<Image
									className="relative rounded-lg overflow-hidden transition-opacity group-hover:opacity-75"
									alt={event.title}
									src={event.background[0].url}
									style={{ objectFit: "cover" }}
									fill
								/>
							</div>
							<div className="relative p-4 sm:p-6 lg:p-8">
								<p className="text-sm font-medium uppercase tracking-widest text-white">
								{formatDate(event.date)}
								</p>
								<p className="text-xl font-bold text-white sm:text-2xl">{event.title}</p>
							</div>
						</Link>
					</article>
				))}
			</div>
			<h1 className="notion notion-title">Previous Events</h1>
			<div className="notion grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
				{posts.filter((event) => {
					return (event.joinable ? null : (event.published ? event : null))
				}).reverse((event) => {
					return (formatDate(event.date))
				}).map((event) => (
					<article key={event.title}>
						<Link 
							href="/events/[slug]" 
							as={`/events/${event.slug}`} 
							key={event.title}
							passHref
						>
							<div className="rounded-lg overflow-hidden shadow-lg transition duration-150 hover:shadow-2xl">
								<div className="px-6 py-4">
									<div className="font-bold text-xl mb-2">
										{event.title}
									</div>
									<div className="py-2 text-sm">
										<p className="text-gray-600">{formatDate(event.date)}</p>
									</div>
									{event.joinable ? (
										<p className="text-gray-700 text-base">{event.registration}</p>
									) : null}
								</div>
								<div className="px-5 py-5">
									{event.tags ? event.tags.map((tag) => (
										<span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
									)) : null}
								</div>
							</div>
						</Link>
					</article>
				))}
			</div>
		</>
	);
}