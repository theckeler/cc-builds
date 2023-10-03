"use client";

export default function ErrorMessage({ curState }) {
	return (
		<div
			className="p-2 font-bold text-center mb-4"
			style={{ background: "red", color: "#fff" }}
			id="ship-error">
			Error: Please note the change in your "Items to Ship".
		</div>
	);
}
