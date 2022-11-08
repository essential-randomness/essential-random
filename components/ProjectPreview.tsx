import { Github, Npm, Tumblr, Twitter } from "@icons-pack/react-simple-icons";

import Image from "next/image";
import Link from "next/link";
import { Project } from "contentlayer/generated";

type WEBSITE_TYPES = "github" | "tumblr" | "twitter" | "npm" | "web";

export type ProjectLinksMap = Record<WEBSITE_TYPES, string | undefined>;

const maybeGetWebsiteIcon = (websiteName: WEBSITE_TYPES) => {
  switch (websiteName) {
    case "twitter":
      return <Twitter />;
    case "github":
      return <Github />;
    case "tumblr":
      return <Tumblr />;
    case "npm":
      return <Npm />;
    default:
      return null;
  }
};

export const ProjectLinks = ({ links }: { links: ProjectLinksMap }) => {
  return (
    <>
      <dt>Links</dt>
      <dd data-term="links">
        <dl>
          {Object.entries(links).map(([website, url]) => (
            <div key={url} data-website={website}>
              {maybeGetWebsiteIcon(website as WEBSITE_TYPES)}
              <dt>{website}</dt>
              <dd>
                <a href={url}>{url}</a>
              </dd>
            </div>
          ))}
        </dl>
      </dd>
    </>
  );
};

export const ProjectPreview = (props: Project) => {
  return (
    <article key={props.name} className="project">
      <header>
        <h2>
          <Link href={props.url}>{props.name}</Link>
        </h2>
      </header>
      {props.preview && (
        <Link href={props.url}>
          <Image
            src={props.preview}
            width={300}
            height={300}
            alt={`${props.name}'s project preview image`}
          />
        </Link>
      )}
      <div>{props.description}</div>
      <footer>
        <dl>
          <dt>Status</dt>
          <dd>{props.status}</dd>
          <ProjectLinks links={props.linksMap as ProjectLinksMap} />
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
