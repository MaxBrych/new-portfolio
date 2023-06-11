import Header from "@/components/Header";
import Navbar from "@/components/NavBar";
import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import { Manrope } from "next/font/google";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode="light" />

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
