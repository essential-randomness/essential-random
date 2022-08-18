import type { GetStaticProps, NextPage } from "next";
import {
  getBlogEntriesInContentPath,
  getStaticBlogPages,
} from "../../utils/path-utils";

import Link from "next/link";
import { Nav } from "../../components/Nav";
import { ProfileCard } from "../../components/ProfileCard";
import { ProfileNav } from "../../components/ProfileNav";

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
      })),
    },
  };
};

const Blog: NextPage<{
  paths: Awaited<ReturnType<typeof getAllBlogEntries>>;
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
          {paths.map((path) => (
            <li key={path.slug}>
              <Link href={`blog/${path.slug}`}>
                <a>{path.slug}</a>
              </Link>
            </li>
          ))}
        </ol>
      </main>
    </>
  );
};
export default Blog;
