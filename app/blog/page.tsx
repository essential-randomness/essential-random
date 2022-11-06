import * as runtime from "react/jsx-runtime";

import type { GetStaticProps, NextPage } from "next";

import { ArticlePreview } from "../../components/ArticlePreview";
import { Nav } from "../../components/Nav";
import { ProfileCard } from "../../components/ProfileCard";
import { ProfileNav } from "../../components/ProfileNav";
import { getBlogEntriesInContentPath } from "../../utils/path-utils";
import { runSync } from "@mdx-js/mdx";

const getAllBlogEntries = async () => {
  const [blogEntries] = await Promise.all([
    getBlogEntriesInContentPath(),
    // getStaticBlogPages(),
  ]);

  const finalBlogEntries = new Map<
    string,
    Awaited<ReturnType<typeof getBlogEntriesInContentPath>>[0]
  >();
  // Blog pages have higher priority than blog entries. We add them last so
  // they'll override any blog entry with the same name.
  blogEntries.forEach((entry) => finalBlogEntries.set(entry.slug, entry));
  // blogPages.forEach((entry) => finalBlogEntries.set(entry.slug, entry));

  return [...finalBlogEntries.values()].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );
};

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   return {
//     props: {
//       // TODO: we cannot serialize this with date
//       paths: (await getAllBlogEntries()).map((entry) => ({
//         ...entry,
//         createdAt: entry.createdAt.toISOString(),
//       })) as Array<
//         Omit<Awaited<ReturnType<typeof getAllBlogEntries>>[0], "createdAt"> & {
//           createdAt: string;
//         }
//       >,
//     },
//   };
// };

export default async function Page() {
  const paths = (await getAllBlogEntries()).map((entry) => ({
    ...entry,
    createdAt: entry.createdAt.toISOString(),
  })) as Array<
    Omit<Awaited<ReturnType<typeof getAllBlogEntries>>[0], "createdAt"> & {
      createdAt: string;
    }
  >;
  return (
    <ol>
      {paths.map((path) => {
        return (
          <li key={path.slug}>
            <ArticlePreview
              url={`blog/${path.slug}`}
              createdAt={new Date(path.createdAt)}
            />
          </li>
        );
      })}
    </ol>
  );
}
