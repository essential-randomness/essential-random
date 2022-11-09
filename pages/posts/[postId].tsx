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
  // const MDXContent = useMDXComponent(curr.body.code, curr);

  return (
    <>
      <Nav />
      {/* <MDXContent /> */}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map((post) => ({
      params: {
        postId: post.id,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
    props: {
      curr: allPosts[postIndex],
      prev: postIndex > 0 ? allPosts[postIndex - 1] : null,
      next: postIndex !== allPosts.length - 1 ? allPosts[postIndex + 1] : null,
    } as PageProps,
    revalidate: 60,
  };
};
