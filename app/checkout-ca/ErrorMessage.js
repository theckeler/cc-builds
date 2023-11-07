"use client";

export default function ErrorMessage({ curState }) {
	return (
		<div className=" mb-4 text-center">
			<div
				className="p-2 font-bold alert alert-danger"
				role="alert"
				id="ship-error">
				One or more of your items is unable to ship to your location. Please
				note the change in "Items to Ship" and edit your order to proceed.
			</div>
			<button className="btn btn-secondary" type="submit">
				Remove Product and Edit Order
			</button>
		</div>
	);
}
