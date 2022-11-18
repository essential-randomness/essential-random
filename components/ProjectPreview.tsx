import { extractWebsiteName, maybeGetWebsiteIcon } from "utils/social-utils";

import Image from "next/image";
import Link from "next/link";
import { Project } from "contentlayer/generated";
import { VscGlobe } from "react-icons/vsc";

export const ProjectLinks = ({ links }: { links: string[] }) => {
  return (
    <ul className="social-links">
      {links.map((url) => {
        const websiteName = extractWebsiteName(url) || "web";
        return (
          <li key={url} data-website={websiteName} aria-label={websiteName}>
            <a href={url}>
              {maybeGetWebsiteIcon(websiteName) || <VscGlobe />}
              <div className="name">{websiteName}</div>
              <div className="url">{url}</div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

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
        <ProjectLinks links={props.links} />
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
