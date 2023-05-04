import Link from "next/link";

function Footer() {
	return (
		<footer>
			<div className="wrapper ml-auto mr-auto">
				<Link
					href="/"
					style={{
						padding: "60px 20px",
						maxWidth: "1400px",
						minHeight: "20rem",
						color: "#202020",
						fontSize: "10.5em",
						fontWeight: "600",
						overflow: "hidden",
						textDecoration: "none",
						display: "block",
					}}>
					FOOTER
				</Link>
			</div>
			<script
				defer
				type="text/javascript"
				src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/en_US/v1631120851162/js/main.js"
			/>
		</footer>
	);
}

export default Footer;
