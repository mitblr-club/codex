import siteConfig from "@/site.config";
import Link from "next/link";
import { formatDate } from "@/lib/formatDate";

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
  };
}

export default function BlogHome({ posts }) {
  return (
    <div className="p-2">
      {posts.filter((post) => {
        return (post.published ? post : null)
      }).sort((post) => {
        return (formatDate(post.date))
      }).map((post) => (
        <Link href="/blog/[slug]" as={`/blog/${post.slug}`} key={post.title}>
          <h1 className="text-white">{post.title}</h1>
        </Link>
      ))}
    </div>
  );
}