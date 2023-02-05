"use client";

import "./support-me.css";

import Image from "next/image";
import { PayPalButton } from "../../components/PayPalButton";
import React from "react";
import { StripeButton } from "components/StripeButton";
import supportMe from "../../public/thenks-suporter.png";

type TierType = {
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

const TierCard = (props: TierType) => {
  return (
    <label htmlFor={props.name}>
      <input type="radio" name="radio" id={props.name} />
      <div className="title">{props.name}</div>
      <div className="price">${props.dollarsPerMonth}/month</div>
      <div>{props.tagline}</div>
      <div>You get:</div>
      <ul>
        {props.perks.map((perk) => {
          return <li key={perk.description}>{perk.description}</li>;
        })}
      </ul>
    </label>
  );
};

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
      <input
        id="donation-3"
        type="radio"
        name="donation"
        value={3}
        checked={quantity == 3}
        onChange={() => setQuantity(3)}
      />
      <label htmlFor="donation-3">$3/month</label>
      <input
        id="donation-5"
        type="radio"
        name="donation"
        value={5}
        checked={quantity == 5}
        onChange={() => setQuantity(5)}
      />
      <label htmlFor="donation-5">$5/month</label>
      <input
        id="donation-10"
        type="radio"
        name="donation"
        value={10}
        checked={quantity == 10}
        onChange={() => setQuantity(10)}
      />
      <label htmlFor="donation-10">$10/month</label>
      <input
        id="donation-15"
        type="radio"
        name="donation"
        value={15}
        checked={quantity == 15}
        onChange={() => setQuantity(15)}
      />
      <label htmlFor="donation-15">$15/month</label>
      <div className="payment-buttons" ref={paymentButtons}>
        <StripeButton quantity={quantity} />
        <PayPalButton planId="P-2T800313EX3963603MMBL4MI" quantity={quantity} />
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
        {TIERS.map((tier) => (
          <TierCard key={tier.name} {...tier} />
        ))}
        <PayPalDonation />
        <details>
          <summary>
            How does this differ from the donations on your main website?
          </summary>
          <p>It doesn't.</p>
        </details>
        <details>
          <summary>Should I choose this or Patreon/Ko-fi?</summary>
          <p>
            You do you. Patreon takes a certain percentage of earning and they
            kind of are a shitty company. I like Ko-fi more.
          </p>
        </details>
        <details>
          <summary>Are my credit card info etc. secure?</summary>
          <p>Yes.</p>
        </details>
        <details>
          <summary>How do I cancel?</summary>
          <p>
            You can log in to your PayPal account and manage all your
            subscription. For Stripe, <a href="">click here</a> for the customer
            portal.
          </p>
          <p>In case of any issue, contact me at any time.</p>
        </details>
        <details>
          <summary>What if I'm currently on the old $5/month plan?</summary>
          <p>
            You can keep that, and be automatically considered for the "almond
            butter toast" support tier as a thank you for donating before it was
            cool.
          </p>
          <p>
            If you wish to up your amount, you can cancel that subscription and
            create a new one. As long as it's using the same email, I'll make a
            note to leave you at least as "almond butter toast", regardless of
            amount.
          </p>
          <p>In case of any issue, contact me at any time.</p>
        </details>
        <details>
          <summary>
            What to do if you're from a country with low buying power
          </summary>
          Send me an email and i will send you a thing with more accessible
          tiers
        </details>
        <details>
          <summary>What if I'm not from a poor country, just poor?</summary>Oh
          no someone has lied on the internet and now can actually afford to
          support me, how will i ever financially recover
        </details>
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
