import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { ProfileCard } from "../../components/ProfileCard";
import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
          <ProfileCard />
          <section>
            <h2>Where to find me on the web</h2>
            <div className="social-links">
              <a rel="me" href="https://twitter.com/essentialrandom">
                Twitter
              </a>
              <a rel="me" href="https://essential-randomness.tumblr.com/">
                Tumblr
              </a>
              <a rel="me" href="https://github.com/essential-randomness">
                GitHub
              </a>
              <a rel="me" href="https://www.twitch.tv/essentialrandomness">
                Twitch
              </a>
            </div>
          </section>
          {/* <section>
        <Form action="/donate" method="get">
          <button type="submit">Donate</button>
        </Form>
      </section> */}
        </div>
      </main>
    </Layout>
  );
}
