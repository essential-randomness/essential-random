import avatar from "public/avatar.png";
import styles from "./index.css";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <img className="avatar" src={avatar} alt="Ms Boba's avatar" />
      <div>
        <h1>Essential Randomness</h1>
        <div>a.k.a. Ms Boba</div>
      </div>
      <div>
        Software Engineer, Fandom Person & Other Random Stuff. Big mad at big
        tech. Full Stack Human. #queeredge — Building chaotic ethical social
        spaces at <a href="https://bobaboard.com/">www.bobaboard.com</a>!
      </div>
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
  return [{ rel: "stylesheet", href: styles }];
}
