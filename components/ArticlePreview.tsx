import Image from "next/future/image";
import Link from "next/link";
import avatar from "../public/avatar.png";
import path from "path";

export interface ArticlePreviewProps {
  url: string;
  title: string;
  summary: JSX.Element;
  createdAt: Date;
}

export const ArticlePreview = (props: ArticlePreviewProps) => {
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
          <Link href={props.url}>
            {props.title}
          </Link>
        </h2>
        <time dateTime={String(props.createdAt)}>
          {props.createdAt.toLocaleDateString()}
        </time>
      </header>
      <div className="content">{props.summary}</div>
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
