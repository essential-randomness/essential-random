// These styles apply to every route in the application
import "./global.css";

import { Nav } from "../components/Nav";
import { ProfileCard } from "../components/ProfileCard";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <main>
        <ProfileCard />
        {children}
      </main>
    </>
  );
};

export default GlobalLayout;
