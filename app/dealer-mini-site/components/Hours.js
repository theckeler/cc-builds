export default function Hours() {
	const hoursCSS = "row col-6";

	return (
		<div className="p-3">
			<h3>Hours:</h3>
			<div
				className="d-flex flex-wrap list-unstyled w-100"
				id="dealerHoursBody">
				<div className={hoursCSS}>
					<strong>Sunday:</strong>
				</div>
				<div className={`ml-auto ${hoursCSS}`}>CLOSED - CLOSED</div>
				<div className={hoursCSS}>
					<strong>Monday:</strong>
				</div>
				<div className={`ml-auto ${hoursCSS}`}>8:30 AM - 5:30 PM</div>
				<div className={hoursCSS}>
					<strong>Tuesday:</strong>
				</div>
				<div className={`ml-auto ${hoursCSS}`}>8:30 AM - 5:30 PM</div>
				<div className={hoursCSS}>
					<strong>Wednesday:</strong>
				</div>
				<div className={`ml-auto ${hoursCSS}`}>8:30 AM - 5:30 PM</div>
				<div className={hoursCSS}>
					<strong>Thursday:</strong>
				</div>
				<div className={`ml-auto ${hoursCSS}`}>8:30 AM - 5:30 PM</div>
				<div className={hoursCSS}>
					<strong>Friday:</strong>
				</div>
				<div className={`ml-auto ${hoursCSS}`}>8:30 AM - 5:30 PM</div>
				<div className={hoursCSS}>
					<strong>Saturday:</strong>
				</div>
				<div className={`ml-auto ${hoursCSS}`}>8:30 AM - 5:30 PM</div>
			</div>
		</div>
	);
}
