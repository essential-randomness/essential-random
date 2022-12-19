import {
  Github,
  Livejournal,
  Mastodon,
  Npm,
  Tumblr,
  Twitch,
  Twitter,
} from "@icons-pack/react-simple-icons";
import { ProfileMatch, SocialLinks, TYPE_MOBILE } from "social-links";

export type WEBSITE_TYPES =
  | "github"
  | "tumblr"
  | "twitter"
  | "npm"
  | "web"
  | "twitch"
  | "mastodon"
  | "dreamwidth";

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

const DREAMWIDTH_REGEX = /^https?:\/\/[a-zA-Z0-9_-]+\.dreamwidth\.org/i;

export const extractWebsiteName = (url: string): WEBSITE_TYPES | null => {
  const socialLinkAttempt = socialLinks.detectProfile(url);
  if (socialLinkAttempt) {
    return socialLinkAttempt as WEBSITE_TYPES;
  }
  const attemptGithub = GITHUB_REGEX.exec(url);
  if (attemptGithub) {
    return attemptGithub[1] as WEBSITE_TYPES;
  }
  const attemptNpm = NPM_REGEX.exec(url);
  if (attemptNpm) {
    return attemptNpm[1] as WEBSITE_TYPES;
  }
  const attemptDw = DREAMWIDTH_REGEX.exec(url);
  if (attemptDw) {
    return "dreamwidth";
  }
  return null;
};

export const maybeGetWebsiteIcon = (websiteName: WEBSITE_TYPES) => {
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
    case "dreamwidth":
      // TODO: swap with DW
      return <Livejournal />;
    default:
      return null;
  }
};
