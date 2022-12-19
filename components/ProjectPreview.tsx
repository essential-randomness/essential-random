import Image from "next/image";
import Link from "next/link";
import { Project } from "contentlayer/generated";
import { SocialLinks } from "./SocialLinks";

export const ProjectPreview = (props: Project) => {
  return (
    <article key={props.name} className="project">
      <header>
        <h2>
          <Link href={props.url}>{props.name}</Link>
        </h2>
        {props.preview && (
          <Link href={props.url}>
            <Image
              src={props.preview}
              alt={`${props.name}'s project preview image`}
              layout="fill"
            />
          </Link>
        )}
      </header>
      <p>{props.description}</p>
      <footer>
        <h3>Status</h3>
        <p>{props.status}</p>
        <h3>Links</h3>
        <SocialLinks links={props.links} />
        <h3>Tags</h3>
        <ul className="tags">
          {props.tags.map((tag) => (
            <li
              className="tag"
              key={tag}
              data-tag={tag.split(" ").join("-").toLowerCase()}
            >
              <a href={tag}>{tag}</a>
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
};
