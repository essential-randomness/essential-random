import avatar from "../public/avatar.png";
// import classnames from "classnames";
// import style from "./ProfileCard.module.css";

export const ProfileCard = () => {
  return (
    <section className="h-card">
      <img className="avatar u-logo" src={avatar} alt="Ms Boba's avatar" />
      <div className="p-name">
        <a href="/" rel="me" className="u-url">
          Essential Randomness
        </a>
      </div>
      <div className="nickname">
        a.k.a. <span className="p-nickname">Ms Boba</span>
      </div>
      <div className="p-note">
        Software Engineer, Fandom Person & Other Random Stuff. Big mad at big
        tech. Full Stack Human. #queeredge — Building chaotic ethical social
        spaces at <a href="https://bobaboard.com/">bobaboard.com</a>!
      </div>
    </section>
  );
};
