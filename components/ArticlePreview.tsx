import Image from "next/image";
import Link from "next/link";
import avatar from "../public/avatar.png";
import path from "path";
import { useMDXComponent } from "next-contentlayer/hooks";

export interface ArticlePreviewProps {
  url: string;
  title: string;
  summary: string;
  createdAt: Date;
  /**
   * This is to pass additional data we need to render the summary.
   */
  _data?: Record<string, unknown>;
}

export const ArticlePreview = (props: ArticlePreviewProps) => {
  // const MDXContent = useMDXComponent(props.summary, props._data);
  return (
    <article key={props.url}>
      <header>
        <Image
          className="avatar u-logo"
          src={avatar}
          alt="Ms Boba's avatar"
          width={300}
          height={300}
        />
        <h2>
          <Link href={props.url}>{props.title}</Link>
        </h2>
        <time dateTime={String(props.createdAt)}>
          <Link href={props.url}>{props.createdAt.toLocaleDateString()}</Link>
        </time>
      </header>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: props.summary }}
      ></div>
      <footer>
        <div>3 replies</div>
        <ul>
          <li>like</li>
          <li>copy url</li>
          <li>comment</li>
        </ul>
      </footer>
    </article>
  );
};
