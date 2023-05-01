import "@/styles/globals.css";
import "../styles/blob.css";

import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import CookieConsent from "react-cookie-consent";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      {/* <CookieConsent
        location="bottom"
        buttonText="Akzeptieren"
        cookieName="userConsent"
        expires={150}
        containerClasses="fixed bottom-0  transform  bg-white rounded-full shadow-md p-4 mx-auto mb-4 max-w-4xl"
        buttonClasses="bg-cyan-50 text-cyan-10 px-4 py-2 rounded-full text-sm font-semibold"
        contentClasses="text-sm"
      >
        Diese Website verwendet Cookies, um Ihre Benutzererfahrung zu verbessern
        und um Newsletter-Anmeldungen zu verwalten.
      </CookieConsent>*/}
    </>
  );
}

export default MyApp;
