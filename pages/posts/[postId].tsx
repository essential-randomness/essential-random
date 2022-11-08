import type { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import { Post, allPosts } from "contentlayer/generated";
import { ProjectLinks, ProjectLinksMap } from "../../components/ProjectPreview";

import Link from "next/link";
import { Nav } from "../../components/Nav";
import { useMDXComponent } from "next-contentlayer/hooks";

interface PageProps {
  curr: Post;
  prev: Post | null;
  next: Post | null;
}

export default function BlogEntry({ curr, prev, next }: PageProps) {
  const MDXContent = useMDXComponent(curr.body.code, curr);

  return (
    <>
      <Nav />
      <MDXContent />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map((post) => ({
      params: {
        postId: post.url,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.postId as string;
  const postIndex = allPosts.findIndex(
    (project) => project._raw.sourceFileName === slug + ".mdx"
  );
  if (postIndex == -1) {
    throw new Error(`Project with slug ${slug} not found.`);
  }
  return {
    props: {
      curr: allPosts[postIndex],
      prev: postIndex > 0 ? allPosts[postIndex - 1] : null,
      next: postIndex !== allPosts.length - 1 ? allPosts[postIndex + 1] : null,
    } as PageProps,
    revalidate: 60,
  };
};
