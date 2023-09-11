import "./ProjectCard.css";

import type { AnchorHTMLAttributes } from "react";
import type { Project } from "../content/projects/_config";
import { SocialLinks } from "./SocialLinks";
import { Tag } from "./Tag";

const MaybeLink = (
  props: AnchorHTMLAttributes<HTMLAnchorElement> & {
    when?: boolean;
    href?: AnchorHTMLAttributes<HTMLAnchorElement>["href"];
  }
) => {
  if (props.when) {
    return <a {...props} />;
  }
  return <>{props.children}</>;
};

export const ProjectCard = (props: Project & { body: string; url: string }) => {
  const hasBody = props.body.length > 0;
  return (
    <article
      key={props.name}
      className="card project"
      data-has-body={hasBody}
      data-project-name={props.name.toLowerCase()}
    >
      {props.preview && (
        <MaybeLink href={props.url} when={hasBody}>
          <picture className="banner">
            <img
              src={props.preview.src}
              alt={`${props.name}'s project preview image`}
            />
          </picture>
        </MaybeLink>
      )}
      <div className="details">
        <header>
          <h2 className="name">
            <MaybeLink href={props.url} when={props.body.length > 0}>
              {props.name}
            </MaybeLink>
          </h2>
          <SocialLinks links={props.links} />
        </header>
        <p className="description">
          <span dangerouslySetInnerHTML={{ __html: props.description }} />
          {hasBody && (
            <a className="read-more" href={props.url}>
              Read more
            </a>
          )}
        </p>
        <footer>
          <ul className="tags">
            {props.tags.map((tag) => (
              <li key={tag}>
                <Tag tag={tag} />
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </article>
  );
};
