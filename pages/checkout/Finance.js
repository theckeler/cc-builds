import { useState, useEffect } from "react";
import FinanceOption from "./FinanceOption";
import ReturningCustomer from "./ReturningCustomer";

export default function Finance() {
	const [option, setOption] = useState([false, false]);

	const radioCSS = {
		accentColor: "#ffc20f",
		transform: "scale(1.5)",
	};

	return (
		<fieldset>
			<ul className="list-unstyled">
				<li className="payment-options-section pb-2">
					<legend>
						<h6>Payment Method</h6>
					</legend>
				</li>
				<li>
					<div className="border-top border-left border-right">
						<ul className="list-unstyled d-lg-flex">
							<li
								className="col-lg-2 text-center ml-lg-n2 mt-n1 mt-lg-1"
								style={{ padding: 0 }}>
								<img
									className="w-100"
									style={{ maxWidth: "100px" }}
									src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw08887810/images/cc-td-card-3d.png"
									alt=""
								/>
							</li>
							<li
								className="finance-estimation-block col-lg-10"
								style={{ padding: 0 }}
								data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Estimation?pageType=billing">
								<div className="td-estimation py-2 px-3">
									<h2 className="display-3 text-center text-lg-left mt-n3 mt-lg-0">
										Buy Now, Pay Later!
									</h2>
									<h3
										className="text-center text-lg-left font-weight-normal"
										style={{ fontSize: "22px" }}>
										Your order is eligible for Cub Cadet Financing.
									</h3>
									<p className="finance-estimate-disclaimer d-none">
										<span>
											Interest will be charged from the purchase date if the
											purchase is not in full at the end of the promotional
											period.
										</span>
										<span>
											Advertised minimum payment is greater than required
											minimum payment.
										</span>
									</p>
									<ul className="list-unstyled d-lg-flex align-items-center">
										<li className="text-center text-lg-left">
											<a
												className="btn btn-secondary td-apply-finance py-1 px-6"
												href="#top"
												data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-GetURL">
												Apply Now
											</a>
										</li>
										<li className="text-center text-lg-left">
											<a
												className="ml-lg-3"
												style={{ fontSize: "12px" }}
												data-title="Details & Disclosures"
												data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
												href="#top">
												See Details
											</a>
										</li>
									</ul>
								</div>
							</li>
						</ul>

						<div className="bg-secondary px-1 py-2">
							<ul className="d-lg-flex align-items-center list-unstyled">
								<li
									className="col-lg-8 font-bold"
									style={{ padding: 0, fontSize: "1.3em" }}
									id="finance-title">
									$70/MO &amp; No Interest if Paid in Full within 6 Months
									<sup>1</sup>
								</li>
								<li
									className="ml-auto col-lg-4 text-right"
									style={{ padding: 0 }}>
									<span style={{ fontSize: "1em" }}>Total:</span>{" "}
									<span
										className="font-bold"
										style={{ padding: 0, fontSize: "1.3em" }}
										id="finance-total">
										$416.31
									</span>
								</li>
							</ul>
							<div style={{ fontSize: ".8em" }} id="finance-fine">
								Minimum purchase $1,500. There is a promotional fee of $125 for
								this transaction.
								<a
									href="#top"
									data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
									data-title="Details & Disclosures"
									className="td-payment-details"
									style={{ fontSize: ".8em" }}>
									See Details
								</a>
							</div>
						</div>

						<ul
							data-payment-method-id="null"
							data-is-new-payment="true"
							className="list-unstyled w-100"
							role="tablist">
							<li
								className="w-100 d-flex align-items-center position-relative"
								data-method-id="TD_FINANCE">
								<div style={radioCSS} className="ml-n1">
									<input
										type="radio"
										id="financePlanId_43439"
										defaultValue={43439}
										name="finance-type"
										checked={option[0]}
										onChange={() => {
											setOption(true, false);
											document
												.querySelector("#finance-options-fields")
												.classList.remove("hidden");

											document.querySelector(
												"#financePlanId_43440"
											).checked = true;
											document.querySelector(
												"#finance-option-43440"
											).style.background = "#ededed";
										}}
									/>
								</div>
								<label
									className="position-absolute w-100 h-100"
									htmlFor="financePlanId_43439"
									style={{ top: 0, left: 0 }}
								/>
								<ul className="list-unstyled d-block p-2 text-left border-0 bg-transparent">
									<li
										className="w-100 d-block font-bold text-uppercase"
										style={{ fontSize: "1.6em" }}>
										Cub Cadet Financing
									</li>
									<li
										className="w-100 d-block font-weight-normal"
										style={{ fontSize: ".8em" }}>
										<strong>Note:</strong> Offers below available online.
										Additional offers may be available in-store.
									</li>
								</ul>
							</li>
							<li className="border-bottom">
								<fieldset className="hidden" id="finance-options-fields">
									<ul
										className="list-unstyled"
										id="finance-card-content"
										role="tabpanel"
										aria-labelledby="finance-card-content">
										<li data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Plans?useNewRules=true">
											<ul className="list-unstyled">
												<li>
													<FinanceOption
														planID={43440}
														name="$70/MO &amp; No Interest if Paid in Full within 6 Months<sup>1</sup>"
														total={416.31}
														finePrint="Interest will be charged from the purchase date if the purchase balance is not paid in full by the end of the promotional period. Minimum purchase $199."
													/>
												</li>
												<li>
													<FinanceOption
														planID={43441}
														name="$80/MO &amp; No Interest if Paid in Full within 9 Months<sup>1</sup>"
														total={426.31}
														finePrint="Interest will be charged from the purchase date if the purchase balance is not paid in full by the end of the promotional period. Minimum purchase $199."
													/>
												</li>
												<li>
													<FinanceOption
														planID={43442}
														name="$90/MO &amp; No Interest if Paid in Full within 10 Months<sup>1</sup>"
														total={436.31}
														finePrint="Interest will be charged from the purchase date if the purchase balance is not paid in full by the end of the promotional. Minimum purchase $199."
													/>
												</li>
												<li>
													<FinanceOption
														planID={43443}
														name="$1000/MO &amp; Standard Purchase APR and Payments<sup>4</sup>"
														total={446.31}
														finePrint="29.99% APR."
													/>
												</li>
												<li>
													<ReturningCustomer />
												</li>
											</ul>
										</li>
									</ul>
								</fieldset>
							</li>
						</ul>
					</div>
				</li>
				<li className="mt-2" data-method-id="CREDIT_CARD">
					<div className="border w-100 d-flex align-items-center position-relative">
						<div style={radioCSS} className="ml-n1">
							<input
								type="radio"
								//className="sr-only"
								id="credit-card"
								defaultValue={43439}
								name="finance-type"
								//data-is-default-plan="true"
								//encoding="off"
								//className="ml-n1"
								checked={option[1]}
								onChange={() => {
									setOption(false, true);
									document
										.querySelector("#finance-options-fields")
										.classList.add("hidden");
								}}
							/>
						</div>
						<label
							className="position-absolute w-100 h-100 ml-1"
							htmlFor="credit-card"
							style={{ textTransform: "none", top: 0, left: 0 }}
						/>

						<ul className="list-unstyled w-100 d-flex align-items-center p-2 text-left border-0 bg-transparent">
							<li
								className="font-bold text-uppercase"
								style={{ fontSize: "1.6em", whiteSpace: "nowrap" }}>
								Credit Card
							</li>
							<li className="ml-lg-auto pl-2">
								<ul className="d-flex flex-wrap list-unstyled ">
									<li className="col-6 col-lg-3 px-0">
										<img
											className="w-100 p-1"
											src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwf60cc71b/images/svg-icons/visa.svg"
											alt="Visa Accepted"
										/>
									</li>
									<li className="col-6 col-lg-3 px-0">
										<img
											className="w-100 p-1"
											src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwab7e1c1c/images/svg-icons/amex.svg"
											alt="American Express Accepted"
										/>
									</li>
									<li className="col-6 col-lg-3 px-0">
										<img
											className="w-100 p-1"
											src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwa22fe473/images/svg-icons/master.svg"
											alt="Master Card Accepted"
										/>
									</li>
									<li className="col-6 col-lg-3 px-0">
										<img
											className="w-100 p-1"
											src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw809a8397/images/svg-icons/discover.svg"
											alt="Discover Accepted"
										/>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</li>
			</ul>
			<input
				type="hidden"
				className="form-control"
				name="dwfrm_billing_paymentMethod"
				defaultValue="null"
			/>
		</fieldset>
	);
}
