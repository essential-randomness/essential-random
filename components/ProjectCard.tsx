import "./ProjectCard.css";

import Image from "next/image";
import Link from "next/link";
import { Project } from "contentlayer/generated";
import { SocialLinks } from "./SocialLinks";

export const ProjectCard = (props: Project) => {
  const hasBody = props.body.raw.length > 0;
  return (
    <article
      key={props.name}
      className="card project"
      data-has-body={hasBody}
      data-project-name={props.name.toLowerCase()}
    >
      {props.preview && (
        <MaybeLink href={props.url} if={hasBody}>
          <picture className="banner">
            <Image
              src={props.preview}
              alt={`${props.name}'s project preview image`}
              layout="fill"
            />
          </picture>
        </MaybeLink>
      )}
      <div className="details">
        <header>
          <h2 className="name">
            <MaybeLink href={props.url} if={props.body.raw.length > 0}>
              {props.name}
            </MaybeLink>
          </h2>
          <SocialLinks links={props.links} />
        </header>
        <p className="description">
          {props.description}
          {hasBody && (
            <Link className="read-more" href={props.url}>
              Read more
            </Link>
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
      </div>{" "}
    </article>
  );
};
