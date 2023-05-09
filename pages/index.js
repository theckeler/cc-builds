//import React from "react";
//import Index from "./components/Index";
//import Header from "./templates/Header";
//import Footer from "./templates/Footer";
import Link from "next/link";

export default function Index() {
	return (
		<div
			className="wrapper home p-8"
			style={{
				minHeight: "50vh",
				display: "d-flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<h1 style={{ textTransform: "uppercase" }}>CC Page Builds:</h1>
			<ul className="home-list">
				<li style={{ marginTop: "20px" }}>
					<Link href="/dynosite-1.1">Dynosite 1.1</Link>
				</li>
				{/* <li style={{ marginTop: "20px" }}>
					<Link href="/financing">Financing Updates</Link>
				</li>
				<li style={{ marginTop: "20px" }}>
					<Link href="/wei">The Wei (rapid prototyping)</Link>
				</li>
				<li style={{ marginTop: "20px" }}>
					<strong>Snow V2:</strong>
					<ul>
						<li>
							<Link href="/snowv2">Snow V2 Index</Link>
						</li>
						<li>
							<Link href="/snowv2/intellipower">IntelliPower</Link>
						</li>
						<li>
							<Link href="/snowv2/1x">1X</Link>
						</li>
						<li>
							<Link href="/snowv2/2x">2X</Link>
						</li>
						<li>
							<Link href="/snowv2/3x">3X</Link>
						</li>
					</ul>
				</li>
				<li style={{ marginTop: "20px" }}>
					<strong>Zero Turn V2:</strong>
					<ul>
						<li>
							<Link href="/zero-turn">Zero Turn Index</Link>
						</li>
						<li>
							<Link href="/zero-turn/ultima">Ultima</Link>
						</li>
						<li>
							<Link href="/zero-turn/ZTXSArticle">ZTXS Article</Link>
						</li>
					</ul>
				</li>
				<li style={{ marginTop: "20px" }}>
					<Link href="/customerservice">Customer Service</Link>
				</li>
				<li style={{ marginTop: "20px" }}>
					<Link href="/xt-enduro-series">XT Enduro Series</Link>
				</li>
				<li style={{ marginTop: "20px" }}>
					<Link href="/product-review-giveaway">Product Review Giveaway</Link>
				</li> */}
				<li style={{ marginTop: "20px" }}>
					<Link href="https://cc-site-build.vercel.app/" target="_new">
						CC Site Redo
					</Link>
				</li>
			</ul>
		</div>
	);
}
