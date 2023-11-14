import Header from "../templates/Header";
import Footer from "../templates/Footer";

import "../styles/globals.css";

export const metadata = {
	title: "Cub Cadet Builds",
	description: "Nothing to see here",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body suppressHydrationWarning={true}>
				<link
					rel="stylesheet"
					href="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/en_US/v1699531593270/css/global.css"
				/>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
