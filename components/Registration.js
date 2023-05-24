const Registration = () => {
	return (
		<div className="">
			<h2 className="h2 text-center">Registration</h2>
			{/* <button
				className="showHowToFind text-center border-0"
				id=""
				onClick={(e) => {
					document
						.querySelector("#registrationForm")
						.classList.toggle("d-none");
				}}>
				Registration Form
			</button> */}

			<div className="container content-asset-container " id="registrationForm">
				<iframe
					height={1028}
					id="registrationFormFrame"
					src="https://mtdproducts.secure.force.com/ProductRegistration/cub-cadet?&language=en_US&countryLocation=US&sourceWebsite=www.cubcadet.com"
					className="border-0 w-100"
					style={{ maxHeight: "1028px" }}
					onLoad={(e) => {
						// console.log(
						// 	document.querySelector("#registrationFormFrame").contentWindow
						// 		.scrollHeight
						// );
					}}
				/>
			</div>
		</div>
	);
};

export default Registration;
