// These styles apply to every route in the application
import "./global.css";

import { Nav } from "../components/Nav";
import { ProfileCard } from "../components/ProfileCard";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>
          <ProfileCard />
          {children}
        </main>
      </body>
    </html>
  );
};

export default GlobalLayout;
