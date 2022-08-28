import "../styles/globals.css";
import "../styles/blog.css";
import "../styles/project.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
