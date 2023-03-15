import "./FaqEntry.css";

import { Testimonials } from "./Testimonials";
import { allTestimonials } from "contentlayer/generated";

export const FaqEntry = () => {
  const { testimonials } = allTestimonials[0];
  return (
    <div className="faqs">
      <details>
        <summary>Help! Something isn&apos;t working!</summary>
        <p>
          Thanks for letting me know. This is a very experimental page, and
          things might break unexpectedly. Please do let me know what went wrong
          by contacting me at{" "}
          <a href="ms.boba@bobaboard.com">ms.boba@bobaboard.com</a>.
        </p>
        <p>
          In the meantime you can also donate through{" "}
          <a href="https://patreon.com/user?u=87081842">Patreon</a> or{" "}
          <a href="https://ko-fi.com/essentialrandomness">Ko-fi</a>.
        </p>
      </details>
      <details>
        <summary>
          I&apos;m still on the fence. Can I see some raving testimonials from
          other supporters?
        </summary>
        <p>
          I&apos;m glad you asked! Here&apos;s some testimonials, randomly
          chosen from the many voluntarily donated by people who&apos;ve been
          part of this journey:
        </p>
        <Testimonials testimonials={testimonials} />
      </details>
      <details>
        <summary>
          How does this differ from the donations on your main website?
        </summary>
        <p>
          Subscriptions on my main website (
          <a href="https://essentialrandomness.com/subscribe/">
            essentialrandomness.com
          </a>
          ) are backed by Ghost, the blogging software I used to run the initial
          version of my newsletter. I&apos;m not a huge fan of Ghost, so
          I&apos;m running my own software now. The money ends in the same
          place.
        </p>
      </details>
      <details>
        <summary>Should I choose this or Patreon/Ko-fi?</summary>
        <p>
          You do you. Patreon takes a certain percentage of the earnings, plus
          they are a shitty company all around. I like Ko-fi more.
        </p>
      </details>
      <details>
        <summary>Is my payment info secure?</summary>
        <p>
          Yes. I&apos;m selling subscriptions through Stripe and PayPal links,
          which means your credit card information never leaves those sites.
        </p>
      </details>
      <details>
        <summary>How do I cancel?</summary>
        <p>
          You can log in to your PayPal account to manage all your
          subscriptions. For Stripe,{" "}
          <a href="https://billing.stripe.com/p/login/7sI9E470ibQt0A8dQQ">
            click here
          </a>{" "}
          for the customer portal.
        </p>
        <p>
          In case of any issue, contact me at any time at{" "}
          <a href="ms.boba@bobaboard.com">ms.boba@bobaboard.com</a>.
        </p>
      </details>
      <details>
        <summary>What if I&apos;m currently on the old $5/month plan?</summary>
        <p>
          You can keep that, and be automatically enrolled in the &quot;almond
          butter toast&quot; support tier as a thank you for donating before it
          was cool.
        </p>
        <p>
          If you wish to up your amount, you can cancel that subscription and
          create a new one. As long as it&apos;s using the same email, I&apos;ll
          make a note to leave you at least as &quot;almond butter toast&quot;,
          regardless of amount.
        </p>
        <p>
          In case of any issue, contact me at any time at{" "}
          <a href="ms.boba@bobaboard.com">ms.boba@bobaboard.com</a>.
        </p>
      </details>
      <details>
        <summary>
          I&apos;m a proud &quot;subsidized massage&quot; supporter. Can we
          really discuss <em>anything</em> on our call?
        </summary>
        <p>
          When I say anything, I mean, well, <em>mostly</em> anything. Crying
          over the present state of fandom? Absolutely! Reading me your sexy
          fanfic? Totally fine. Venting about your overbearing boss? Been there,
          done that!
        </p>
        <p>
          As long as the subject is something two friends in fandom would
          &quot;reasonably&quot; discuss, then it&apos;s fair game! If a topic
          falls outside my own boundaries, I&apos;ll let you know with no
          judgement.
        </p>
      </details>
      <details>
        <summary>
          Can&apos;t I just support you by buying a premium BobaBoard account?
        </summary>
        <p>
          While BobaBoard is the main project I work on, I work on a lot more
          than BobaBoard. It&apos;s important that I continue doing so for the
          long-term success of our goals.
        </p>
        <p>
          Even more importantly, there are many reasons why tying my ability to
          survive to the success of the social software I build is a bad, bad
          idea. While this might end up being its own blog post at some point,
          for now I ask you trust me: if you want to see more of what I do,
          please donate to me directly.
        </p>
      </details>
      <details>
        <summary>Who designed these beautiful icons?</summary>
        <p>
          My amazing friend <a href="https://scumsuck.com">SKUMSUCK</a>{" "}
          generously created them for me.
        </p>
      </details>
    </div>
  );
};
