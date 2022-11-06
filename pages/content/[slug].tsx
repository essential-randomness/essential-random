import { Post, allPosts } from "contentlayer/generated";

import Head from "next/head";
import { useMDXComponent } from "next-contentlayer/hooks";

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post: Post = allPosts.find(
    (post) => post._raw.sourceFileName === params.slug + ".mdx"
  );
  return {
    props: {
      post,
    },
  };
}

const PostLayout = ({ post }: { post: Post }) => {
  const MDXContent = useMDXComponent(post.body.code, post);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="max-w-xl mx-auto py-8">
        <div className="text-center mb-8">
          <time
            dateTime={post.created_at}
            className="text-xs text-gray-600 mb-1"
          >
            {post.created_at}
          </time>
          <h1>{post.title}</h1>
        </div>
        <MDXContent />
      </article>
    </>
  );
};

export default PostLayout;
