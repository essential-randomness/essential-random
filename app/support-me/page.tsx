"use client";

import "./support-me.css";

import { FaqEntry } from "components/FaqEntry";
import Image from "next/image";
import { PayPalButton } from "../../components/PayPalButton";
import React from "react";
import { StripeButton } from "components/StripeButton";
import { SupportTierCard } from "components/SupportTierCard";
import supportMe from "../../public/thenks-suporter.png";

export type TierType = {
  name: string;
  dollarsPerMonth: number;
  tagline: string;
  perks: { description: string }[];
};

const TIERS: TierType[] = [
  {
    name: "a nice egg",
    dollarsPerMonth: 3,
    tagline: "Can you offer me a nice egg in this high-inflation time?",
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
  const [quantity, setQuantity] = React.useState(5);
  const paymentButtons = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    console.log(quantity);
    if (!paymentButtons.current) {
      return;
    }
    paymentButtons.current.style.animation = "";
    setTimeout(() => {
      console.log(paymentButtons.current);
      paymentButtons.current!.style.animation = "buttons 1s";
    }, 500);
  }, [quantity]);
  return (
    <>
      <div className="tiers">
        {TIERS.map((tier) => (
          <SupportTierCard
            key={tier.name}
            {...tier}
            selected={tier.dollarsPerMonth == quantity}
            onChange={() => {
              setQuantity(tier.dollarsPerMonth);
            }}
          />
        ))}
      </div>
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
        <p>
          If you've been looking at all the projects, memes, and general
          endeavors I've been up to and thought "wow, I'm glad someone is
          finally doing this, I wish they keep doing this, and maybe even more
          stuff like this", I have news for you: you can help me get more{" "}
          <strike>chaos</strike> beauty into the web (and help me pay my rent)
          by donating to my cause, and help ensure I don't need to go back to
          help some large company sell more ads.
        </p>
        <p>
          Donation tiers might offer specific rewards, but there's only thing I
          hold myself fully responsible to consistently deliver: with your
          support, I'll continue building my chaotic empire, educating people on
          how to build their own chaotic empires, and I'll keep making the
          resulting projects and knowledge as free, ethical, and accessible as I
          can reasonably can.
        </p>
      </section>
      <section className="donate">
        <h2>How to donate</h2>
        <PayPalDonation />
      </section>
      <section className="donate">
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
