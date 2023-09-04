import React from "react";
import { SupportTierCard } from "./SupportTierCard";

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
          "Half-yearly 30 minute call to discuss *anything* you want",
      },
      {
        description:
          "Support Ms Boba's continued health by adding $3/month to her massage fund",
      },
    ],
  },
];

export const TiersDisplay = () => {
  const [quantity, setQuantity] = React.useState(0);

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
