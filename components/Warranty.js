import Image from "next/image";

const Warranty = () => {
	return (
		<div className="">
			<div className="position-relative">
				<div className="container d-flex justify-content-center">
					<div
						className="position-relative rounded-circle bg-white"
						style={{
							width: "100%",
							maxWidth: "290px",
							height: "290px",
							zIndex: 1,
						}}>
						<Image
							src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v1d5f49f5a13f1eba170bf9f8624abecd5fbcf8a0/images/ew/ew-logo.svg"
							alt=""
							fill
							className="p-5"
						/>
					</div>
				</div>
				<div
					className="bg-secondary w-100 position-absolute"
					style={{ height: "240px", top: "20px", left: 0, zIndex: 0 }}></div>
			</div>
			<div className="container">
				<h2 className="text-center">
					Cub Cadet<sup>®</sup> Extended Warranty
				</h2>
				<p className="text-center">
					Our Extended Warranty provides peace of mind by adding an additional
					two years of product protection after the original warranty expires.
					Eligible Cub Cadet products include residential walk-behind mowers
					(push and self-propelled), snow blowers and ride-on mowers (garden,
					lawn and residential zero-turn).
				</p>
				<div className="form-group required enterSerialNumber-modal d-flex flex-column justify-content-center align-items-center">
					<div className="pagination-steps mt-4 mb-3 ">
						<div className="pagination-step step-1 active">1</div>
						<div className="pagination-step step-2">2</div>
						<div className="pagination-step step-3">3</div>
					</div>
					<form
						action="/on/demandware.store/Sites-cubcadet-Site/en_US/ExtendedWarranty-LookupSerialNumber"
						id="submitSerialNumber"
						method="POST"
						name="dwfrm_eligibilityCheck"
						className="w-100"
						style={{ maxWidth: "750px" }}>
						<h6 className="text-center">Enter Your Machine's Serial Number</h6>
						<div className="d-flex justify-content-center w-100">
							<div className="flex justify-content-center w-100">
								<input
									autoFocus=""
									required=""
									type="text"
									className="form-control"
									id="serialNumber"
									name="serialNumber"
									defaultValue=""
									autoComplete="nofill"
									maxLength={2147483647}
									pattern="\d[A-Za-z][0-3]\d([A-Za-z]|\d)[A-Za-z]([A-Za-z]|\d)\d{4}"
								/>
								<button type="submit" className="btn btn-secondary">
									Next
								</button>
							</div>
						</div>
					</form>
					<button
						className="showHowToFind text-center border-0"
						id=""
						onClick={(e) => {
							document
								.querySelector("#moreSerialInfo")
								.classList.toggle("d-none");
						}}>
						How do I find my serial number?
					</button>
					<div id="moreSerialInfo" className="d-none">
						<div className="content-asset">
							<div className="row">
								<div className="col-6">
									<img src="https://mtdproducts.secure.force.com/ProductRegistration/resource/1619086108000/CmsTemp/ProductRegistration/img/cub-cadet-US-model-plate.jpg" />
								</div>
								<div className="col-6">
									Your machine’s serial number is essential to establishing
									extended warranty eligibility status for your outdoor power
									equipment. The serial number is eleven characters printed on
									the left side of the Product Identification Label. Characters
									can include numbers, letters or hyphens.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Warranty;
