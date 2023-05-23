import "@/styles/main.scss";
import "@/styles/checkout.scss";
import type { AppProps } from "next/app";

import Header from "@/t/Header";
import Footer from "@/t/Footer";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
