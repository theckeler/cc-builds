"use client";

import CheckoutCA from "./CheckoutCA";

export default function CheckoutIndex() {
	return (
		<div>
			<link
				rel="stylesheet"
				href="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/en_US/v1696331176259/css/checkout/checkout.css"
			/>
			<h1 className="page-title condensed-header-title">Checkout</h1>

			<CheckoutCA />
		</div>
	);
}
