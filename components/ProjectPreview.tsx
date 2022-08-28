import Image from "next/future/image";
import Link from "next/link";
import { ProjectFrontmatter } from "../utils/projects-utils";
import avatar from "../public/avatar.png";
import path from "path";

export const ProjectPreview = (props: ProjectFrontmatter & { url: string }) => {
  return (
    <article key={props.name} className="project">
      <header>
        <h2>
          <Link href={props.url}>
            <a>{props.name}</a>
          </Link>
        </h2>
      </header>
      {props.preview && <img src={props.preview} width="300" height={300} />}
      <div>{props.description}</div>
      <footer>
        <dl>
          <dt>Status</dt>
          <dd>{props.status}</dd>
          <dt>Links</dt>
          <dd>
            <dl>
              {Object.entries(props.links).map(([website, url]) => (
                <div key={url}>
                  <dt>{website}</dt>
                  <dd>
                    <a href={url}>{url}</a>
                  </dd>
                </div>
              ))}
            </dl>
          </dd>
          <dt>Tags</dt>
          <dd>
            <ul>
              {props.tags.map((tag) => (
                <li key={tag}>
                  <a href={tag}>{tag}</a>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
      </footer>
    </article>
  );
};
