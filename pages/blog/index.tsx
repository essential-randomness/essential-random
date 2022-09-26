import * as runtime from "react/jsx-runtime";

import type { GetStaticProps, NextPage } from "next";
import { Suspense, useEffect, useState } from "react";
import {
  getBlogEntriesInContentPath,
  getStaticBlogPages,
} from "../../utils/path-utils";

import { ArticlePreview } from "../../components/ArticlePreview";
import { Nav } from "../../components/Nav";
import { ProfileCard } from "../../components/ProfileCard";
import { ProfileNav } from "../../components/ProfileNav";
import { run } from "@mdx-js/mdx";

const getAllBlogEntries = async () => {
  const [blogEntries, blogPages] = await Promise.all([
    getBlogEntriesInContentPath(),
    getStaticBlogPages(),
  ]);

  const finalBlogEntries = new Map<
    string,
    Awaited<ReturnType<typeof getBlogEntriesInContentPath>>[0]
  >();
  // Blog pages have higher priority than blog entries. We add them last so
  // they'll override any blog entry with the same name.
  blogEntries.forEach((entry) => finalBlogEntries.set(entry.slug, entry));
  blogPages.forEach((entry) => finalBlogEntries.set(entry.slug, entry));

  console.log(finalBlogEntries);
  return [...finalBlogEntries.values()].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      // TODO: we cannot serialize this with date
      paths: (await getAllBlogEntries()).map((entry) => ({
        ...entry,
        createdAt: entry.createdAt.toISOString(),
      })) as Array<
        Omit<Awaited<ReturnType<typeof getAllBlogEntries>>[0], "createdAt"> & {
          createdAt: string;
        }
      >,
    },
  };
};

type BlogEntries = Awaited<ReturnType<typeof getAllBlogEntries>>;

const BlogEntry = ({ entry }: { entry: BlogEntries[0] }) => {
  const [data, setData] = useState({ summary: <div />, title: "" });

  useEffect(() => {
    (async () => {
      const summary = (await run(entry.compiledSummary, runtime)).default();
      const title = (await run(entry.compiledTitle, runtime)).default();

      console.log(summary);

      setData({
        summary,
        title,
      });
    })();
  }, [entry.compiledSummary, entry.compiledTitle]);

  console.log(data.summary);
  return (
    <ArticlePreview
      url={`blog/${entry.slug}`}
      createdAt={new Date(entry.createdAt)}
      summary={data.summary}
      title={data.title}
    />
  );
};

const Blog: NextPage<{
  paths: BlogEntries;
}> = ({ paths }) => {
  return (
    <>
      <Nav />
      <div className="profile">
        <ProfileCard />
        <ProfileNav />
      </div>
      <main>
        <ol>
          {paths.map((path) => {
            console.log(path.compiledSummary);
            return (
              <li key={path.slug}>
                {/* <Suspense fallback="loading">
                  <BlogEntry entry={path} />
                </Suspense> */}
              </li>
            );
          })}
        </ol>
      </main>
    </>
  );
};
export default Blog;
