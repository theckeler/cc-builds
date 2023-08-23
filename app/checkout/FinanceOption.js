export default function FinanceOptions({ finePrint, name, planID, total }) {
	return (
		<div
			className="list-unstyled d-flex align-items-center px-1 py-2 border-top position-relative finance-option"
			id={`finance-option-${planID}`}>
			<div className="mr-1" style={{}}>
				<input
					type="radio"
					className="position-relative"
					id={`financePlanId_${planID}`}
					defaultValue={planID}
					name="dwfrm_billing_financeCardFields_planId"
					//data-is-default-plan="true"
					//defaultChecked=""
					//encoding="off"
					style={{ accentColor: "#ffc20f", zIndex: 0 }}
					data-name={name}
					data-fine={finePrint}
					data-total={`$${total}`}
					onChange={(e) => {
						document.querySelector("#finance-title").innerHTML =
							e.currentTarget.dataset.name;
						document.querySelector("#finance-fine").innerHTML =
							e.currentTarget.dataset.fine;
						document.querySelector("#finance-total").innerHTML =
							e.currentTarget.dataset.total;

						document.querySelectorAll(".finance-option").forEach(function (e) {
							e.style.background = "";
						});
						document.querySelector(
							`#finance-option-${planID}`
						).style.background = "#ededed";
					}}
				/>
			</div>

			<label
				//className="position-absolute w-100 h-100"
				htmlFor={`financePlanId_${planID}`}
				style={{
					top: 0,
					left: 0,
					zIndex: 1,
					fontSize: "16px",
					fontWeight: "normal",
					textTransform: "none",
				}}>
				<ul className="list-unstyled position-relative" style={{ zIndex: 0 }}>
					<li className="font-bold" style={{ marginBottom: "6px" }}>
						<ul className="list-unstyled d-flex flex-column flex-lg-row">
							<li
								className="position-relative pr-1"
								dangerouslySetInnerHTML={{
									__html: name,
								}}
							/>
							<li className="ml-auto">
								Total: <strong>${total}</strong>
							</li>
						</ul>
					</li>
					<li
						className="px-1"
						style={{ fontSize: "11px" }}
						data-disclaimer={finePrint}
						data-plan-type="deferred"
						data-fee="">
						{finePrint}
						<a
							href="#top"
							data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
							data-title="Details & Disclosures"
							className="ml-1 position-relative"
							style={{ fontSize: "11px", zIndex: 1001 }}>
							See Details
						</a>
					</li>
				</ul>
			</label>
		</div>
	);
}
