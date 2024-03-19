import "@/styles/globals.css";

import Footer from "@/templates/Footer";
import Header from "@/templates/Header";

export const metadata = {
  title: "Cub Cadet Builds",
  description: "Nothing to see here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/en_US/v1710759957519/css/global.css"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
