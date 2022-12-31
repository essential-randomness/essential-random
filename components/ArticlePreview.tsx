import Image from "next/image";
import Link from "next/link";
import avatar from "../public/avatar.png";
import path from "path";
import { useMDXComponent } from "next-contentlayer/hooks";

export interface ArticlePreviewProps {
  url: string;
  title: string;
  summary: string;
  categories: string[];
  whispertags: string[];
  createdAt: Date;
  /**
   * This is to pass additional data we need to render the summary.
   */
  _data?: Record<string, unknown>;
}

export const ArticlePreview = (props: ArticlePreviewProps) => {
  return (
    <article key={props.url}>
      <header>
        <Image className="avatar u-logo" src={avatar} alt="Ms Boba's avatar" />
        <h2>
          <Link
            href={props.url}
            dangerouslySetInnerHTML={{ __html: props.title }}
          ></Link>
        </h2>
        <time dateTime={String(props.createdAt)}>
          <Link href={props.url}>{props.createdAt.toLocaleDateString()}</Link>
        </time>
        <ol className="categories">
          {props.categories.map((category) => (
            <li key={category}>
              <div className="category">{category}</div>
            </li>
          ))}
        </ol>
      </header>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: props.summary }}
      ></div>
      <footer>
        <div class="tooltip">
          whispertags
          <span class="tooltiptext">
            For a primer on whispertags (a fan-favorite feature everyone is
            sleeping on) see this journal:
            https://journals.sagepub.com/doi/10.1177/20563051211032138?icid=int.sj-abstract.citing-articles.324&
          </span>
        </div>
        <ol className="whispertags">
          {props.whispertags.map((whispertag) => (
            <li key={whispertag}>
              <div className="whispertag">{whispertag}</div>
            </li>
          ))}
        </ol>
        <div>No replies (because I haven&apos;t implemented them yet)</div>
        <ul>
          <li>like</li>
          <li>copy url</li>
          <li>comment</li>
        </ul>
      </footer>
    </article>
  );
};
