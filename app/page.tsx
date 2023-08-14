import Link from "next/link";
import { ProfileCard } from "components/ProfileCard";
import { SocialLinks } from "components/SocialLinks";
// @ts-expect-error
import socials from "../content/_socials.yml";

export default function Page() {
  return (
    <main className="home">
      <section>
        <ProfileCard />
      </section>
      <section>
        <h2>The story so far</h2>
        <p>
          Since I was gifted my first computer in the early 00s, the internet
          has given me an important place of self-expression, connection, and
          growth. What started as skipping school to program websites,
          eventually became a full-fledged software engineering degree, and a
          cushy job at a famous company.
        </p>

        <p>
          When the Tumblr porn ban hit it was a hard wake up call: far from
          still being a place of joy and discovery—one where a weird,
          neurodivergent kid could learn to thrive—the web was slowly being
          stripped of its soul and potential. The big-tech promise &ldquo;to
          change the world and make the web better&rdquo; that I had moved
          across the world for had been an empty lie.
        </p>

        <p>
          <strong>
            Since 2019, I&apos;ve been working on adding marketing and
            entrepreneurship skills to my software engineering background, with
            the goal to build sustainable projects and communities that will
            make the web a better place.
          </strong>{" "}
          You can learn more about the projects I built since then in the{" "}
          <Link href="/projects">Projects section</Link>, and find out how to
          support my work on the <Link href="/support-me">Support Me</Link>{" "}
          page.
        </p>
      </section>
      <section className="social">
        <h2>As seen on</h2>
        <SocialLinks links={socials} />
      </section>
    </main>
  );
}
