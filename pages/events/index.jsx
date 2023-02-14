import siteConfig from "@/site.config";
import Link from "next/link";

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
  };
}

export default function EventsHome({ posts }) {
  return (
    <div className="p-2">
      {posts.filter((post) => {
        return (post.published ? post : null)
      }).map((post) => (
        <Link href="/events/[slug]" as={`/events/${post.slug}`} key={post.title}>
          <h1 className="text-white">{post.title}</h1>
        </Link>
      ))}
    </div>
  );
}