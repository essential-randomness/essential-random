import {
  Github,
  Mastodon,
  Npm,
  Tumblr,
  Twitch,
  Twitter,
} from "@icons-pack/react-simple-icons";
import { ProfileMatch, SocialLinks, TYPE_MOBILE } from "social-links";

import Image from "next/image";
import Link from "next/link";
import { Project } from "contentlayer/generated";

type WEBSITE_TYPES = "github" | "tumblr" | "twitter" | "npm" | "web";

export type ProjectLinksMap = Record<WEBSITE_TYPES, string | undefined>;
const socialLinks = new SocialLinks();

// /^https?:\/\/([a-z0-9-]+\.tumblr\.com)\/(post|image)\/(\d+)(?:\/[a-z0-9-]+)?/i,
// /^https?:\/\/([a-z-\.]+)\/(post)\/(\d{11,14})(?:\/[a-z0-9-]+)?(?:\?.*)?(?:#.*)?$/i,
const tumblrMatches: ProfileMatch[] = [
  {
    match: "https?://([a-z0-9-]+).tumblr.com",
    // TODO: more may be necessary for things like extracting usernames
    group: 1,
  },
];

socialLinks.addProfile("tumblr", tumblrMatches);

const GITHUB_REGEX = /^https?:\/\/(github).com\/[a-zA-Z0-9-]+\/[a-z0-9-.]+$/i;

const NPM_REGEX =
  /^https?:\/\/(?:www\.)(npm)js.com\/package\/(?:@[a-zA-Z0-9-]+\/)?[a-z0-9-.]+$/i;

export const extractWebsiteName = (url: string) => {
  const socialLinkAttempt = socialLinks.detectProfile(url);
  if (socialLinkAttempt) {
    return socialLinkAttempt;
  }
  const attemptGithub = GITHUB_REGEX.exec(url);
  if (attemptGithub) {
    return attemptGithub[1];
  }
  const attemptNpm = NPM_REGEX.exec(url);
  if (attemptNpm) {
    return attemptNpm[1];
  }
  const attempt = NPM_REGEX.exec(url);
  if (attemptNpm) {
    return attemptNpm[1];
  }
  return undefined;
};

export const maybeGetWebsiteIcon = (websiteName: string) => {
  switch (websiteName) {
    case "twitter":
      return <Twitter />;
    case "github":
      return <Github />;
    case "tumblr":
      return <Tumblr />;
    case "twitch":
      return <Twitch />;
    case "npm":
      return <Npm />;
    case "mastodon":
      return <Mastodon />;
    default:
      return null;
  }
};
