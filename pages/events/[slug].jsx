import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion";
import { getAllPosts } from './'

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