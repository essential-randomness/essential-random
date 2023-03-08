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

export const metadata = {
  title: "Essential Randomness",
  icons: {
    icon: [
      { url: "favicon/favicon-16x16.png", sizes: "16x16" },
      { url: "favicon/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: "favicon/apple-touch-icon.png",
  },
  manifest: "favicon/site.webmanifest",
};
