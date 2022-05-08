import {
  ProfileCard,
  links as ProfileCardsLinks,
} from "../../components/ProfileCard";

import styles from "../../styles/index.css";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <ProfileCard />
      <section>
        <h2>Where to find me on the web</h2>
        <div className="social-links">
          <a href="https://twitter.com/essentialrandom">Twitter</a>
          <a href="https://essential-randomness.tumblr.com/">Tumblr</a>
        </div>
      </section>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }, ...ProfileCardsLinks()];
}
