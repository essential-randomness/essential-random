import { ProfileCard } from "components/ProfileCard";
import { SocialLinks } from "components/SocialLinks";
// @ts-expect-error
import socials from "../content/_socials.yml";

export default function Page() {
  return (
    <>
      <ProfileCard />
      <section>
        <h2>As seen on</h2>
        <SocialLinks links={socials} />
      </section>
    </>
  );
}
