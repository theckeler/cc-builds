// import "@/styles/onetrust.css";
import type { AppProps } from "next/app";

import Header from "../templates/Header";
import Footer from "../templates/Footer";

// import OneTrustBanner from "@/c/OneTrustBanner";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
			{/* <OneTrustBanner /> */}
		</>
	);
}
