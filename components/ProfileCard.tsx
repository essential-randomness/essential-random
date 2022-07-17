import React from "react";
import avatar from "@site/static/img/avatar.png";
import { styled } from "@linaria/react";

const Avatar = styled.img`
  border-radius: 50%;
`;

export const ProfileCard = () => {
  return (
    <section className="h-card">
      <Avatar className="avatar u-logo" src={avatar} alt="Ms Boba's avatar" />
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
