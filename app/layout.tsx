// These styles apply to every route in the application
import "./global.css";

import { Nav } from "../components/Nav";

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default GlobalLayout;
