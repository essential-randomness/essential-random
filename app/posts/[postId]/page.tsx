import { Post, allPosts } from "contentlayer/generated";

import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

interface PageProps {
  curr: Post;
  prev: Post | null;
  next: Post | null;
}

interface PageParams {
  params: {
    postId: string;
  };
}

export default function PostEntry(props: PageProps) {
  const { curr, prev, next } = props;
  const MDXContent = useMDXComponent(curr.body.code, curr);

  return (
    <main className="post">
      <MDXContent />
      {prev && (
        <div className="prev">
          Previous entry:
          <Link href={`/${prev.url}`}>{prev.title}</Link>
        </div>
      )}
      {next && (
        <div className="next">
          Next entry:
          <Link href={`/${next.url}`}>{next.title}</Link>
        </div>
      )}
    </main>
  );
}

export async function generateStaticParams({ params }: PageParams) {
  const postId = params?.postId as string;
  const postIndex = allPosts.findIndex((post) => post.id === postId);
  if (postIndex == -1) {
    throw new Error(
      `Post with postId "${postId}" not found. Available postId values are: ${allPosts.map(
        (post) => post.id
      )}`
    );
  }
  return {
    curr: allPosts[postIndex],
    prev: postIndex > 0 ? allPosts[postIndex - 1] : null,
    next: postIndex !== allPosts.length - 1 ? allPosts[postIndex + 1] : null,
  };
}
