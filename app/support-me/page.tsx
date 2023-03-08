import "./support-me.css";

import { FaqEntry } from "components/FaqEntry";
import Image from "next/image";
import { TiersDisplay } from "components/TiersDisplay";
import supportMe from "public/thenks-suporter.png";

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
              Random fun stuff, including RobinBoob (a &ldquo;ship-ownership
              certificates&rdquo; marketplace parodying the NFT craze), and
              FujoBoard (a reimagining of the old Yaoi paddles phenomenon for
              the modern fangirl)
            </li>
          </ul>
          I&apos;ve also introduced many people in fandom (often members of
          communities under represented in tech) to open source and web
          development, and I&apos;m actively working on related educational
          material.
        </div>
      </section>
      <section className="donate">
        <h2>How to donate</h2>
        <p>
          My well-thought-out roadmap towards a better internet cannot survive
          without a full-time person at its helm. With your contribution, you
          will become an active enabler of the movement I&apos;m spearheading,
          and will rest assured that someone out there is fighting the good
          fight (also) in your name.
        </p>
        <TiersDisplay />
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
          from people using <em>actual stuff</em> I&apos;ve
          built/engendered/otherwise admin&apos;d.
        </p>
      </section>
    </main>
  );
};

export default SupportMe;
