"use client";
import { useState, useEffect } from "react";

import CheckoutCA from "./CheckoutCA";
import CartCA from "./CartCA";

export default function CheckoutIndex() {
	const [whichView, setWhichView] = useState("Shopping Cart");

	useEffect(() => {
		console.log("whichView:", whichView);
	}, [whichView]);

	return (
		<div>
			<link
				rel="stylesheet"
				href="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/en_US/v1696331176259/css/checkout/checkout.css"
			/>
			
			<ul
				className="position-fixed list-unstyled flex bg-white p-1"
				style={{ gap: "0.25em", top: "10px", left: "10px", zIndex: "1001" }}>
				<li>
					<button
						className="border-0 bg-secondary py-1 px-4"
						onClick={() => {
							setWhichView("Shopping Cart");
						}}>
						Cart
					</button>
				</li>
				<li>
					<button
						className="border-0 bg-secondary py-1 px-4"
						onClick={() => {
							setWhichView("Checkout");
						}}>
						Checkout
					</button>
				</li>
			</ul>

			<h1 className="page-title condensed-header-title">{whichView}</h1>

			{whichView === "Shopping Cart" ? <CartCA /> : <CheckoutCA />}
		</div>
	);
}
