"use client";

import "./support-me.css";

import { FaqEntry } from "components/FaqEntry";
import Image from "next/image";
import React from "react";
import { SupportTierCard } from "components/SupportTierCard";
import supportMe from "../../public/thenks-suporter.png";

export type TierType = {
  name: string;
  imageUrl: string;
  dollarsPerMonth: number;
  tagline: string;
  perks: { description: string }[];
};

const TIERS: TierType[] = [
  {
    name: "a nice egg",
    dollarsPerMonth: 3,
    tagline: "Can you offer me a nice egg in this high-inflation time?",
    imageUrl: "/support-me/egg.png",
    perks: [
      {
        description:
          "Support my exploratory work on healthier online communities",
      },

      {
        description:
          "Help me bring more underrepresented people into coding and open source",
      },
      {
        description:
          "Ensure the creation of more fandom-oriented Ethical Chaos™",
      },
      {
        description: "Periodic discounts on bobaverse merch",
      },
    ],
  },
  {
    name: "specialty coffee & boba",
    dollarsPerMonth: 8,
    imageUrl: "/support-me/coffee-and-boba.png",
    tagline: "I mean, it's a latte, Michael. What could it cost?",
    perks: [
      {
        description: "All previous perks, plus...",
      },
      {
        description:
          "Access to quarterly(ish) update town halls for close supporters",
      },
    ],
  },
  {
    name: "almond butter toast",
    dollarsPerMonth: 15,
    imageUrl: "/support-me/almond-toast.png",
    tagline: "Frankly, my dear, I don't like avocado.",
    perks: [
      {
        description: "All previous perks, plus...",
      },
      {
        description: "Send in questions for the quarterly(ish) town halls",
      },
    ],
  },
  {
    name: "subsidized massage",
    dollarsPerMonth: 25,
    imageUrl: "/support-me/massage.png",
    tagline: `"It's like one of my Silicon Valley start ups!"`,
    perks: [
      {
        description: "All previous perks, plus...",
      },
      {
        description:
          "Half-yearly 30 minutes call to discuss *anything* you want",
      },
      {
        description:
          "Support Ms Boba's continued health by adding $3/month to her massage fund",
      },
    ],
  },
];

const PayPalDonation = () => {
  const [quantity, setQuantity] = React.useState(0);

  console.log(quantity);
  return (
    <>
      <form className="tiers">
        {TIERS.map((tier) => (
          <SupportTierCard
            key={tier.name}
            {...tier}
            selected={tier.dollarsPerMonth == quantity}
            onChange={() => {
              setQuantity(tier.dollarsPerMonth);
            }}
            onReset={() => setQuantity(0)}
          />
        ))}
      </form>
    </>
  );
};

const SupportMe = () => {
  return (
    <main className="support-me">
      <h1>Help me fix the internet</h1>
      <section className="intro">
        <picture>
          <Image
            src={supportMe}
            alt={`Remake of a popular meme reading "Thenks suporter for my rent' (sic)"`}
          />
        </picture>
        <h2>Who I am & what I do</h2>
        <div>
          <p>
            In 2020, I quit my job as a Silicon Valley software engineer on a
            mission to bring the internet back to the place of joy and
            creativity I grew up in.
          </p>
          <p>The initiatives I launched and am currently leading include:</p>
          <ul>
            <li>
              BobaBoard, a privacy-centric, open source, forum-like software for
              online communities{" "}
            </li>
            <li>
              Fandom Coders, a 200+ people community where expert and beginners
              coders in fandom meet for friendship, support and learning
            </li>
            <li>
              Random fun stuff, including RobinBoob (a "ship-ownership
              certificates" marketplace parodying the NFT craze), and FujoBoard
              (a reimagining of the old Yaoi paddles phenomenon for the modern
              fangirl)
            </li>
          </ul>
          I've also introduced many people in fandom (often members of
          communities under represented in tech) to open source and web
          development, and I'm actively working on related educational material.
        </div>
      </section>
      <section className="donate">
        <h2>How to donate</h2>
        <p>
          My well-thought-out roadmap towards a better internet cannot survive
          without a full-time person at its helm. With your contribution, you
          will become an active enabler of the movement I'm spearheading, and
          will rest assured that someone out there is fighting the good fight
          (also) in your name.
        </p>
        <PayPalDonation />
        <p>
          You can also donate at{" "}
          <a href="https://patreon.com/user?u=87081842">Patreon</a> or{" "}
          <a href="https://ko-fi.com/essentialrandomness">Ko-fi</a>.
        </p>
      </section>
      <section className="faq">
        <h2>FAQs</h2>
        <FaqEntry />
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <p>
          Still need to be convinced? Here, have some <em>actual quotes</em>{" "}
          from people using <em>actual stuff</em> I've
          built/engendered/otherwise admin'd.
        </p>
      </section>
    </main>
  );
};

export default SupportMe;
