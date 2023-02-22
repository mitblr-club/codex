import { NotionRenderer } from "@/components/NotionRenderer";
import siteConfig from "@/site.config";
import "prismjs/themes/prism-tomorrow.css";

export async function getStaticProps({ params: { slug } }) {
  const posts = await getAllPosts(siteConfig.eventsTableId);
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
    paths: posts.map((row) => `/events/${row.slug}`),
    fallback: true,
  };
}

export default function EventPost({ blocks, post }) {
  return(
    <div style={{ maxWidth: 768 }}>
      <h1>{post.title}</h1>
      <NotionRenderer blockMap={blocks} />
    </div>
  )
};