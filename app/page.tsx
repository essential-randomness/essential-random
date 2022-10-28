import {
  Github,
  Tumblr,
  Twitch,
  Twitter,
} from "@icons-pack/react-simple-icons";

export default function Page() {
  return (
    <section>
      <h2>Where to find me on the web</h2>
      <ul className="social-links">
        <li>
          <Twitter />
          <a rel="me" href="https://twitter.com/essentialrandom">
            Twitter
          </a>
        </li>
        <li>
          <Tumblr />
          <a rel="me" href="https://essential-randomness.tumblr.com/">
            Tumblr
          </a>
        </li>
        <li>
          <Github />
          <a rel="me" href="https://github.com/essential-randomness">
            GitHub
          </a>
        </li>
        <li>
          <Twitch />
          <a rel="me" href="https://www.twitch.tv/essentialrandomness">
            Twitch
          </a>
        </li>
      </ul>
    </section>
  );
}
