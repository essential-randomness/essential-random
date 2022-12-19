import { ProfileCard } from "components/ProfileCard";
import { SocialLinks } from "components/SocialLinks";
// @ts-expect-error
import socials from "../content/_socials.yml";

export default function Page() {
  console.log(socials);
  return (
    <>
      <ProfileCard />
      <section>
        <h2>Where to find me on the web</h2>
        <SocialLinks links={socials} />
      </section>
    </>
  );
}
