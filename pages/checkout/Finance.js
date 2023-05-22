import { useState, useEffect } from "react";
import FinanceOption from "./FinanceOption";
import Checkbox from "@/c/icons/CheckChecked";
import CheckUnChecked from "@/c/icons/CheckUnChecked";

export default function Finance() {
	const [option, setOption] = useState([false, false]);

	const radioCSS = {
		width: "1.5em",
		accentColor: "#ffc20f",
	};

	return (
		<fieldset>
			<ul className="list-unstyled">
				<li className="payment-options-section pb-2">
					<legend className="">
						<h6>Payment Method</h6>
					</legend>
				</li>
				<li className="">
					<div className="border-top border-left border-right">
						<ul className="list-unstyled d-flex">
							<li className="col-2 ml-n2 mt-1" style={{ padding: 0 }}>
								<img
									className="w-100"
									src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw08887810/images/cc-td-card-3d.png"
									alt=""
								/>
							</li>
							<li
								className="finance-estimation-block col-10"
								style={{ padding: 0 }}
								data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Estimation?pageType=billing">
								<div className="td-estimation py-2 px-3">
									<h2 className="display-3">Buy Now, Pay Later!</h2>
									<h3>Your order is eligible for Cub Cadet Financing.</h3>
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
									<ul className="list-unstyled d-flex align-items-center">
										<li className="">
											<a
												className="btn btn-secondary td-apply-finance py-1 px-6"
												href="#top"
												data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-GetURL">
												Apply Now
											</a>
										</li>
										<li>
											<a
												className="ml-3"
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
							<ul className="d-flex align-items-center list-unstyled">
								<li
									className="col-8 font-bold"
									style={{ padding: 0, fontSize: "1.3em" }}
									id="finance-title">
									$70/MO &amp; No Interest if Paid in Full within 6 Months
									<sup>1</sup>
								</li>
								<li className="ml-auto col-4 text-right" style={{ padding: 0 }}>
									<span style={{ fontSize: "1em" }}>Total:</span>{" "}
									<span
										className="font-bold"
										style={{ padding: 0, fontSize: "1.3em" }}
										id="finance-total">
										$416.31
									</span>
								</li>
							</ul>
							<div className="" style={{ fontSize: ".8em" }} id="finance-fine">
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
								className="w-100 flex position-relative"
								style={{ marginLeft: "-0.75em" }}
								data-method-id="TD_FINANCE">
								<input
									type="radio"
									//className="sr-only"
									className=""
									style={radioCSS}
									id="financePlanId_43439"
									defaultValue={43439}
									name="finance-type"
									//data-is-default-plan="true"
									//encoding="off"
									checked={option[0]}
									onChange={() => {
										setOption(true, false);
										document
											.querySelector("#finance-options-fields")
											.classList.remove("hidden");

										document.querySelector(
											"#financePlanId_43440"
										).checked = true;
									}}
								/>
								<label
									className="position-absolute w-100 h-100"
									htmlFor="financePlanId_43439"
									style={{ top: 0, left: 0 }}
								/>
								<ul className="list-unstyled w-100 d-block p-2 text-left border-0 bg-transparent">
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
										<li
											className=""
											data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Plans?useNewRules=true">
											<ul className="list-unstyled">
												<li className="">
													<FinanceOption
														planID={43440}
														name="$70/MO &amp; No Interest if Paid in Full within 6 Months<sup>1</sup>"
														total={416.31}
														finePrint="Interest will be charged from the purchase date if the purchase balance is not paid in full by the end of the promotional period. Minimum purchase $199. See Details"
													/>
												</li>
												<li className="">
													<FinanceOption
														radioCSS={radioCSS}
														planID={43441}
														name="$80/MO &amp; No Interest if Paid in Full within 9 Months<sup>1</sup>"
														total={426.31}
														finePrint="Interest will be charged from the purchase date if the purchase balance is not paid in full by the end of the promotional period. Minimum purchase $199. See Details"
													/>
												</li>
												<li className="">
													<FinanceOption
														radioCSS={radioCSS}
														planID={43442}
														name="$90/MO &amp; No Interest if Paid in Full within 10 Months<sup>1</sup>"
														total={436.31}
														finePrint="Interest will be charged from the purchase date if the purchase balance is not paid in full by the end of the promotional. Minimum purchase $199."
													/>
												</li>
												<li className="">
													<FinanceOption
														radioCSS={radioCSS}
														planID={43443}
														name="$1000/MO &amp; Standard Purchase APR and Payments<sup>4</sup>"
														total={446.31}
														finePrint="29.99% APR. See Details"
													/>
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
					<div className="border w-100 flex position-relative">
						<input
							type="radio"
							//className="sr-only"
							id="credit-card"
							defaultValue={43439}
							name="finance-type"
							//data-is-default-plan="true"
							//encoding="off"
							style={radioCSS}
							className="ml-n1"
							checked={option[1]}
							onChange={() => {
								setOption(false, true);
								document
									.querySelector("#finance-options-fields")
									.classList.add("hidden");
							}}
						/>
						<label
							className="position-absolute w-100 h-100 ml-1"
							htmlFor="credit-card"
							style={{ textTransform: "none", top: 0, left: 0 }}
						/>
						<ul className="list-unstyled w-100 d-flex p-2 text-left border-0 bg-transparent">
							<li
								className="font-bold text-uppercase"
								style={{ fontSize: "1.6em" }}>
								Credit Card
							</li>
							<li className="ml-auto">
								<img
									className=""
									src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwf60cc71b/images/svg-icons/visa.svg"
									alt="Visa Accepted"
								/>
								<img
									className=""
									src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwab7e1c1c/images/svg-icons/amex.svg"
									alt="American Express Accepted"
								/>
								<img
									className=""
									src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwa22fe473/images/svg-icons/master.svg"
									alt="Master Card Accepted"
								/>
								<img
									className=""
									src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw809a8397/images/svg-icons/discover.svg"
									alt="Discover Accepted"
								/>
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
