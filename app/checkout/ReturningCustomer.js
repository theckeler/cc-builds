export default function ReturningCustomer() {
	return (
		<div
			className="list-unstyled d-flex align-items-center px-3 py-2 border-top"
			style={{ background: "#efefef" }}>
			<ul className="list-unstyled  w-100">
				<li>For Existing Cub Cadet Credit Card Account Holders</li>
				<li
					className="form-group financing-customer-links
              required
              dwfrm_billing_financeCardFields_accountNumber">
					<label className="form-control-label" htmlFor="accountNumber">
						Enter your account number
					</label>
					<div className="mb-2 mt-1">
						<input
							type="text"
							className="form-control accountNumber js-account-number w-100"
							id="accountNumber"
							data-pattern-mismatch="Account Number invalid."
							placeholder="i.e. 90291293012391293912939123012"
							name="dwfrm_billing_financeCardFields_accountNumber"
							required=""
							defaultValue=""
							maxLength={19}
							minLength={16}
							pattern="^(?:\d[ -]*?){16,20}$"
						/>
						<div className="invalid-feedback js-account-number-invalid" />
					</div>
					<ul className="list-unstyled d-lg-flex align-items-center">
						<li className="w-lg-50 pr-lg-1">
							<a
								//href="javascript:void(0)"
								className="finance-account-lookup-link btn-secondary px-3 py-1 d-block text-center font-bold"
								data-title="Find Your Account Number"
								data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-AccountLookup"
								style={{ backgroundColor: "#c3c3c3" }}>
								Can't Find/Remember Your Account Number?
							</a>
						</li>
						<li className="w-lg-50 pl-lg-1">
							<a
								//href="javascript:void(0)"
								data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-GetURL"
								className="finance-account-register-link td-apply-finance d-block text-center ">
								Don't have an account? Apply for financing
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}
