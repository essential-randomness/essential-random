import { extractWebsiteName, maybeGetWebsiteIcon } from "utils/social-utils";

import { VscGlobe } from "react-icons/vsc";

type Social =
  | string
  | {
      type?: "mastodon";
      url: string;
      name?: string;
    };

const extractWebsiteData = (social: Social) => {
  const url = typeof social == "string" ? social : social.url;
  const type =
    typeof social !== "string" && "type" in social
      ? social.type
      : extractWebsiteName(url);
  const name =
    typeof social !== "string" && "name" in social
      ? social.name
      : extractWebsiteName(url);
  return {
    url,
    name,
    type,
    icon: type ? maybeGetWebsiteIcon(type) : null,
  };
};

export const SocialLinks = ({ links }: { links: Social[] }) => {
  return (
    <ul className="social-links">
      {links.map((social) => {
        const { url, name, icon } = extractWebsiteData(social);
        return (
          <li key={url} data-website={name} aria-label={name}>
            <a href={url}>
              {icon || <VscGlobe />}
              <div className="name">{name}</div>
              <div className="url">{url}</div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
