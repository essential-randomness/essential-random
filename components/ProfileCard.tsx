import avatar from "public/avatar.png";
import styles from "./ProfileCard.css";

export const ProfileCard = () => {
  return (
    <section className="h-card">
      <img className="avatar u-logo" src={avatar} alt="Ms Boba's avatar" />
      <h1 className="p-name">
        <a rel="me" className="u-url" href="/">
          Essential Randomness
        </a>
      </h1>
      <div>
        a.k.a. <span className="p-nickname">Ms Boba</span>
      </div>
      <div className="p-note">
        Software Engineer, Fandom Person & Other Random Stuff. Big mad at big
        tech. Full Stack Human. #queeredge — Building chaotic ethical social
        spaces at <a href="https://bobaboard.com/">www.bobaboard.com</a>!
      </div>
    </section>
  );
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
