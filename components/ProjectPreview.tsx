import { Github, Npm, Tumblr, Twitter } from "@icons-pack/react-simple-icons";
import { extractWebsiteName, maybeGetWebsiteIcon } from "utils/social-utils";

import Image from "next/image";
import Link from "next/link";
import { Project } from "contentlayer/generated";
import { VscGlobe } from "react-icons/vsc";

type WEBSITE_TYPES = "github" | "tumblr" | "twitter" | "npm" | "web";

export const ProjectLinks = ({ links }: { links: string[] }) => (
  <>
    <dt>Links</dt>
    <dd data-term="links">
      <dl>
        {links.map((url) => {
          const websiteName = extractWebsiteName(url) || "web";
          return (
            <div key={url} data-website={websiteName}>
              {maybeGetWebsiteIcon(websiteName) || <VscGlobe />}
              <dt>{websiteName}</dt>
              <dd>
                <a href={url}>{url}</a>
              </dd>
            </div>
          );
        })}
      </dl>
    </dd>
  </>
);

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
          <ProjectLinks links={props.links} />
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
