// These styles apply to every route in the application
import "./posts.css";

import { ProfileCard } from "components/ProfileCard";
import { ProfileNav } from "../../src/components/ProfileNav";
import { SocialLinks } from "components/SocialLinks";
// @ts-expect-error
import socials from "content/_socials.yml";

const PostsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="posts">
      <aside>
        <ProfileCard />
      </aside>
      <div>
        <h2>Coming soon</h2>
        <p>
          Please hold on while this blog is being made presentable. In the
          meantime, for a sample of my past writing you can read:
        </p>
        <ul className="articles">
          <li>
            <a href="https://www.bobaboard.com/blog/development-logs-10">
              The latest 2023 BobaBoard retrospective
            </a>{" "}
            (and{" "}
            <a href="https://docs.google.com/presentation/d/1sU6NxEvGdjoSDstIjV-HW1RU1S8ZqxVvLT8dE7TBqLA/view">
              the 2022 version
            </a>
            )
          </li>
          <li>
            <a href="https://essentialrandomness.com/posts/the-fight-for-the-open-web/">
              This article about what web3 gets wrong about freedom of the web
              (and what <em>we</em> get wrong about it).
            </a>
          </li>
          <li>
            <a href="https://essential-randomness.tumblr.com/post/671691948059426816/why-a-fandom-platform-of-our-own-is-not-about">
              Why “a (transformational) fandom platform of our own” is not about
              writing down a list of features
            </a>
          </li>
          <li>
            <a href="https://essential-randomness.tumblr.com/post/677309777029824512/dear-ms-boba-how-do-you-go-from-having-general">
              How to come up with good projects to improve your programming
              skills
            </a>
          </li>
          <li>
            <a href="https://twitter.com/BobaBoard/status/1381348761901785091">
              “I don&apos;t usually weigh in on controversies (proceeds to weigh
              in on controversies)”, a.k.a. “the software engineering costs”
              thread
            </a>
          </li>
          <li>
            <a href="https://fujoboard.com/">The FujoBoard website</a>
          </li>
          <li>
            <a href="https://www.bobaboard.com/faqs">The BobaBoard FUCQs v2</a>{" "}
            (and <a href="https://v1.bobaboard.com/faqs">the v1 version</a>)
          </li>
          <li>
            <a href="https://excalidraw.com/#json=sH6qFpUqgPL-Pq-HOj_wX,m3il9YKwhFU6xRfV21M-ig">
              A large, explanatory diagram of how the tools used in modern web
              development fit together.
            </a>
          </li>
        </ul>
        <div>
          ...plus dozens of rants scattered all around the internet!
          <SocialLinks links={socials} />
        </div>
      </div>
    </main>
  );
};

export default PostsLayout;
