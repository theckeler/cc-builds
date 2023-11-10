import Header from "../templates/Header";
import Footer from "../templates/Footer";

export const metadata = {
	title: "Cub Cadet Builds",
	description: "Nothing to see here",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<link
					rel="stylesheet"
					href="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/en_US/v1699531593270/css/global.css"
				/>

				<script src="https://cdn.tailwindcss.com" async />

				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
