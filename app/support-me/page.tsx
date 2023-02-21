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
    imageUrl:
      "https://cdn.discordapp.com/attachments/963700079196270622/1075661944175992842/a_nice_egg_no_sparkle.png",
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
    imageUrl:
      "https://cdn.discordapp.com/attachments/963700079196270622/1075762858098442331/coffee_and_boba.png",
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
    imageUrl:
      "https://cdn.discordapp.com/attachments/963700079196270622/1075762858710814760/toast.png",
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
    imageUrl:
      "https://cdn.discordapp.com/attachments/963700079196270622/1075762858710814760/toast.png",
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
        <h2>What you get</h2>
        <div>
          MY THESIS: - the internet is broken, but—to the extent that it can be
          in the world we're living in—fixable - Fixing it goes through 3
          things: - Community - Education - Not taking ourselves so seriously -
          You can read more about how I'm achieving each by going to [ these
          categories on my blog ]. Or you will, when I actually implement it.
          For now, this is all a work in progress, and you'll have to trust me.
          Alternatively, head to my testimonials page This is the right time to
          act because: - The current internet is crumbling - So many people are
          facing unemployment - People really hate big tech To do this, though,
          I (put simply) need to be able to pay rent, afford a masseuse so my
          neck can maybe one day not hurt as much, and be able to be a cute
          bitch.
        </div>
      </section>
      <section className="donate">
        <h2>How to donate</h2>
        <div className="note">
          Donation tiers might offer specific rewards, but there's only thing I
          hold myself fully responsible to consistently deliver: with your
          support, I'll continue building my chaotic empire, educating people on
          how to build their own chaotic empires, and I'll keep making the
          resulting projects and knowledge as free, ethical, and accessible as I
          can reasonably can.
        </div>
        <PayPalDonation />
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
