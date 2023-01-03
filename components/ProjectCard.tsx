import Image from "next/image";
import Link from "next/link";
import { Project } from "contentlayer/generated";
import { SocialLinks } from "./SocialLinks";

export const ProjectCard = (props: Project) => {
  return (
    <article
      key={props.name}
      className="card project"
      data-has-body={props.body.raw.length > 0}
    >
      {props.preview && (
        <MaybeLink href={props.url} if={props.body.raw.length > 0}>
          <picture className="banner">
            <Image
              src={props.preview}
              alt={`${props.name}'s project preview image`}
              layout="fill"
            />
          </picture>
        </MaybeLink>
      )}
      <div className="content-wrapper">
        <header>
          <h2>
            <MaybeLink href={props.url} if={props.body.raw.length > 0}>
              {props.name}
            </MaybeLink>
          </h2>
          <SocialLinks links={props.links} />
        </header>
        <p>{props.description}</p>
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
