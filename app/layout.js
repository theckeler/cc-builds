import "@/styles/globals.css";

import Footer from "@/templates/Footer";
import Header from "@/templates/Header";

export const metadata = {
  title: "Cub Cadet Builds",
  description: "Nothing to see here",
  appLinks: {
    ios: {
      url: 'https://nextjs.org/ios',
      app_store_id: 'app_store_id',
    },
    android: {
      package: 'com.example.android/package',
      app_name: 'app_name_android',
    },
    web: {
      url: 'https://nextjs.org/web',
      should_fallback: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/en_US/v1699531593270/css/global.css"
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
