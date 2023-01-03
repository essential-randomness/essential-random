import { ProfileCard } from "components/ProfileCard";
import { SocialLinks } from "components/SocialLinks";
// @ts-expect-error
import socials from "../content/_socials.yml";

export default function Page() {
  return (
    <main className="home">
      <ProfileCard />
      <section>
        <h2>As seen on</h2>
        <SocialLinks links={socials} />
      </section>
    </main>
  );
}
