import "./SocialLinks.css";

import {
  type WEBSITE_TYPES,
  extractWebsiteName,
  maybeGetWebsiteIcon,
} from "../utils/social-utils";

import { FaShoppingBag } from "react-icons/fa";
import { VscGlobe } from "react-icons/vsc";

export type Social =
  | string
  | {
      type?: "store" | WEBSITE_TYPES;
      url: string;
      name?: string;
    };

const getWebsiteIcon = (type: "store" | WEBSITE_TYPES | null | undefined) => {
  if (!type) {
    return <VscGlobe />;
  }
  if (type == "store") {
    return <FaShoppingBag />;
  }
  return maybeGetWebsiteIcon(type) || <VscGlobe />;
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
      : (extractWebsiteName(url) as WEBSITE_TYPES);

  return {
    url,
    name,
    type,
    icon: getWebsiteIcon(type),
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
              {icon}
              <div className="name">{name}</div>
              <div className="url">{url}</div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};
