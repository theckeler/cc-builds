"use client";

export default function Hours({ className, style }) {
	const hoursCSS = "row col-6";

	return (
		<div className={className}>
			<ul className="d-flex flex-wrap list-unstyled w-100 mb-0">
				<li className={hoursCSS}>
					<strong>Sunday:</strong>
				</li>
				<li className={`ml-auto ${hoursCSS}`}>CLOSED - CLOSED</li>
				<li className={hoursCSS}>
					<strong>Monday:</strong>
				</li>
				<li className={`ml-auto ${hoursCSS}`}>8:30 AM - 5:30 PM</li>
				<li className={hoursCSS}>
					<strong>Tuesday:</strong>
				</li>
				<li className={`ml-auto ${hoursCSS}`}>8:30 AM - 5:30 PM</li>
				<li className={hoursCSS}>
					<strong>Wednesday:</strong>
				</li>
				<li className={`ml-auto ${hoursCSS}`}>8:30 AM - 5:30 PM</li>
				<li className={hoursCSS}>
					<strong>Thursday:</strong>
				</li>
				<li className={`ml-auto ${hoursCSS}`}>8:30 AM - 5:30 PM</li>
				<li className={hoursCSS}>
					<strong>Friday:</strong>
				</li>
				<li className={`ml-auto ${hoursCSS}`}>8:30 AM - 5:30 PM</li>
				<li className={hoursCSS}>
					<strong>Saturday:</strong>
				</li>
				<li className={`ml-auto ${hoursCSS}`}>8:30 AM - 5:30 PM</li>
			</ul>
		</div>
	);
}
