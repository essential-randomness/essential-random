import Image from "next/image";
import Link from "next/link";
import avatar from "../public/avatar.png";

export const ProfileCard = () => {
  return (
    <section className="h-card">
      <Image className="avatar u-logo" src={avatar} alt="Ms Boba's avatar" />
      <h1 className="p-name">
        <Link href="/" rel="me" className="u-url">
          Essential Randomness
        </Link>
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
