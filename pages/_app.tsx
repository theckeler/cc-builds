import "@/styles/main.scss";
import "@/styles/checkout.scss";
import type { AppProps } from "next/app";

import Header from "../templates/Header";
import Footer from "../templates/Footer";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
