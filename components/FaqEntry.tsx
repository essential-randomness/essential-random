export const FaqEntry = () => {
  return (
    <>
      {" "}
      <details>
        <summary>
          How does this differ from the donations on your main website?
        </summary>
        <p>It doesn&apos;t.</p>
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
        <summary>What if I&apos;m currently on the old $5/month plan?</summary>
        <p>
          You can keep that, and be automatically considered for the
          &quot;almond butter toast&quot; support tier as a thank you for
          donating before it was cool.
        </p>
        <p>
          If you wish to up your amount, you can cancel that subscription and
          create a new one. As long as it&apos;s using the same email, I&apos;ll
          make a note to leave you at least as &quot;almond butter toast&quot;,
          regardless of amount.
        </p>
        <p>In case of any issue, contact me at any time.</p>
      </details>
      <details>
        <summary>
          What to do if you&apos;re from a country with low buying power
        </summary>
        Send me an email and i will send you a thing with more accessible tiers
      </details>
      <details>
        <summary>What if I&apos;m not from a poor country, just poor?</summary>
        Oh no someone has lied on the internet and now can actually afford to
        support me, how will i ever financially recover
      </details>
    </>
  );
};
