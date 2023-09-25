"use client";
//import jsonData from "./data.json";

import Finance from "./Finance";

const CheckoutIndex = () => {
	return (
		<div className="mtd-page">
			<link
				rel="stylesheet"
				href="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/en_US/v1684411107703/css/checkout/checkout.css"
			/>
			<h1 className="page-title condensed-header-title">Checkout</h1>
			<div
				id="checkout-main"
				className="checkout-main container data-checkout-stage"
				data-customer-type="guest"
				data-checkout-stage="payment"
				data-checkout-get-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/CheckoutServices-Get"
				data-verify-address-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/AVS-Verify"
				data-use-original-address-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/AVS-UseOriginal"
				data-product-registration="">
				<div className="row d-md-none mb-1 sr-only">
					<div className="col-12">
						<span className="grand-total-label">1 Items</span>
						<span className="grand-total-price">$389.99</span>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						{/* Checkout Forms: Shipping, Payment, Coupons, Billing, etc */}
						<div
							className="alert alert-danger error-message"
							role="alert"
							style={{ display: "none" }}>
							<p className="error-message-text" />
						</div>
						{/* Step 1: Shipping */}
						<div className="shipping-section">
							<div className="single-shipping">
								<div
									className="card"
									data-shipment-uuid="729ae00bf9f094c0de351ea47f">
									<div className="card-header">
										<span className="checkout-step-number filled">1</span>
										<h6>Shipping</h6>
									</div>
									<div className="card-body">
										<div className="shipping-error" />
										<div className="card-body shipping-content">
											<form
												className="shipping-form"
												autoComplete="on"
												noValidate=""
												action="/on/demandware.store/Sites-cubcadet-Site/en_US/CheckoutShippingServices-SubmitShipping"
												data-address-mode="new"
												data-carb-url="/on/demandware.store/Sites-cubcadet-Site/en_US/Checkout-Carb"
												name="dwfrm_shipping"
												id="dwfrm_shipping">
												<input
													name="originalShipmentUUID"
													type="hidden"
													defaultValue="729ae00bf9f094c0de351ea47f"
												/>
												<input
													name="shipmentUUID"
													type="hidden"
													defaultValue="729ae00bf9f094c0de351ea47f"
												/>
												<input
													type="hidden"
													name="csrf_token"
													defaultValue="gayplmCMvym9ikKotBJUMdNzXXkjLP5pssNwRzrmAHKN6yvkpexFMF8rMAItCNaF8NKGtXCvlJukAuRO47SjIHXastp-SKql1pnXSH1TwVZ8byHg6ORhznV9Zcwf63mj3z-Qg1baUuhZKapDftuVmli1r0ulnjtx7Fc3AyGreJTix9g17yc="
												/>
												<div className="shipping-address ">
													<fieldset className="shipping-method-block">
														<legend>
															<h6>Shipping Method</h6>
														</legend>
														<div className="row">
															<div
																className="col-sm-6 mb-2 mb-sm-0 veiled"
																style={{ position: "relative" }}>
																<div
																	className="row shipping-method-list custom-radio"
																	data-select-shipping-method-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/CheckoutShippingServices-SelectShippingMethod"
																	data-action-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/CheckoutShippingServices-UpdateShippingMethodsList">
																	<div className="form-check col-9">
																		<input
																			type="radio"
																			className="form-check-input custom-control-input"
																			id="shippingMethod-standard"
																			aria-labelledby="shippingMethodRadioButtonLabel"
																			name="dwfrm_shipping_shippingAddress_shippingMethodID"
																			defaultValue="standard"
																		/>
																		<label
																			className="shipping-method-option custom-control-label"
																			htmlFor="shippingMethod-standard"
																			id="shippingMethodRadioButtonLabel">
																			<span className="display-name">
																				Standard
																			</span>
																			<span className="shipping-cost">
																				$0.00
																			</span>
																			<div
																				className="font-weight-normal arrival-time"
																				style={{}}>
																				(3 - 5 business days)
																			</div>
																		</label>
																	</div>
																	<div className="form-check col-9">
																		<input
																			type="radio"
																			className="form-check-input custom-control-input"
																			id="shippingMethod-ground"
																			aria-labelledby="shippingMethodRadioButtonLabel"
																			name="dwfrm_shipping_shippingAddress_shippingMethodID"
																			defaultValue="ground"
																		/>
																		<label
																			className="shipping-method-option custom-control-label"
																			htmlFor="shippingMethod-ground"
																			id="shippingMethodRadioButtonLabel">
																			<span className="display-name">
																				Ground
																			</span>
																			<span className="shipping-cost">
																				$54.98
																			</span>
																			<div
																				className="font-weight-normal arrival-time"
																				style={{}}>
																				(2 - 4 business days)
																			</div>
																		</label>
																	</div>
																	<div className="form-check col-9">
																		<input
																			type="radio"
																			className="form-check-input custom-control-input"
																			id="shippingMethod-second-business-day"
																			aria-labelledby="shippingMethodRadioButtonLabel"
																			name="dwfrm_shipping_shippingAddress_shippingMethodID"
																			defaultValue="second-business-day"
																		/>
																		<label
																			className="shipping-method-option custom-control-label"
																			htmlFor="shippingMethod-second-business-day"
																			id="shippingMethodRadioButtonLabel">
																			<span className="display-name">
																				Second Business Day
																			</span>
																			<span className="shipping-cost">
																				$60.98
																			</span>
																			<div
																				className="font-weight-normal arrival-time"
																				style={{}}>
																				(2 business days)
																			</div>
																		</label>
																	</div>
																	<div className="form-check col-9">
																		<input
																			type="radio"
																			className="form-check-input custom-control-input"
																			id="shippingMethod-next-business-day"
																			aria-labelledby="shippingMethodRadioButtonLabel"
																			name="dwfrm_shipping_shippingAddress_shippingMethodID"
																			defaultValue="next-business-day"
																		/>
																		<label
																			className="shipping-method-option custom-control-label"
																			htmlFor="shippingMethod-next-business-day"
																			id="shippingMethodRadioButtonLabel">
																			<span className="display-name">
																				Next Business Day
																			</span>
																			<span className="shipping-cost">
																				$66.98
																			</span>
																			<div
																				className="font-weight-normal arrival-time"
																				style={{}}>
																				(1 business day)
																			</div>
																		</label>
																	</div>
																</div>
																{/* Template used by client to redraw shipping methods                           */}
																<div
																	id="shipping-method-template"
																	className="custom-radio"
																	style={{ display: "none" }}>
																	<div className="form-check col-9">
																		<input
																			type="radio"
																			className="form-check-input custom-control-input"
																			id="shippingMethodRadioButton"
																			aria-labelledby="shippingMethodRadioButtonLabel"
																		/>
																		<label
																			className="shipping-method-option custom-control-label"
																			htmlFor="shippingMethodRadioButton"
																			id="shippingMethodRadioButtonLabel">
																			<span className="display-name" />
																			<span className="shipping-cost" />
																			<div
																				className="font-weight-normal arrival-time"
																				style={{ display: "none" }}
																			/>
																		</label>
																	</div>
																</div>
															</div>
															<div className="col-sm-6">
																<div className="checkout-callout">
																	<p className="title">
																		Current delivery estimate: 8-10 days
																	</p>
																	<div className="content-asset">
																		{/* dwMarker="content" dwContentID="27a1d07883ba35663361cd28d7" */}
																		<p className="message">
																			Please note: This item ships directly from
																			our factory and will arrive to you in a
																			wood crate.
																		</p>
																		<a className="link" href="/">
																			Learn More&nbsp;&gt;
																		</a>
																	</div>
																	{/* End content-asset */}
																</div>
															</div>
														</div>
													</fieldset>
													<div className="clearfix mb-4 mb-sm-0">
														<hr className="d-none d-sm-block" />
													</div>
													<fieldset className="shipment-selector-block d-none ">
														<div>
															<label
																className="form-control-label"
																htmlFor="shipmentSelector-8ec23c276a79b3d95fa355804e">
																Select From a Saved Address
															</label>
															<div className="select-wrapper select-wrapper--secondary">
																<select
																	name="shipmentSelector"
																	id="shipmentSelector-8ec23c276a79b3d95fa355804e"
																	className="addressSelector form-control custom-select"
																	data-create-shipment-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/CheckoutAddressServices-CreateNewAddress">
																	<option
																		value="new"
																		data-first-name=""
																		data-last-name=""
																		data-address1=""
																		data-address2=""
																		data-city=""
																		data-state-code=""
																		data-country-code=""
																		data-postal-code=""
																		data-phone="">
																		New Address
																	</option>
																</select>
																<span className="selector" />
															</div>
															<div className="invalid-feedback" />
															<div className="row no-gutters">
																<a
																	href="#top"
																	className="col-6 col-md-3 btn-show-details normal">
																	Update Address
																</a>
																<a
																	href="#top"
																	className="col-6 col-md-3 btn-add-new normal">
																	Add New Address
																</a>
															</div>
														</div>
													</fieldset>
													<fieldset className="shipping-address-block">
														<legend>
															<h6>Shipping Address</h6>
														</legend>
														<div className="row">
															<div className="col-sm-6">
																<div
																	className="     required
          dwfrm_shipping_shippingAddress_addressFields_firstName">
																	<label
																		className="form-control-label"
																		id="shippingFirstNameLabel"
																		htmlFor="shippingFirstName">
																		First Name
																	</label>
																	<input
																		autoFocus=""
																		aria-labelledby="shippingFirstNameLabel"
																		type="text"
																		className="form-control shippingFirstName is-valid-custom"
																		id="shippingFirstName"
																		autoComplete="given-name"
																		defaultValue=""
																		name="dwfrm_shipping_shippingAddress_addressFields_firstName"
																		required=""
																		maxLength={17}
																		aria-describedby={16844259273604}
																	/>
																	<div
																		className="invalid-feedback"
																		id={16844259273604}
																	/>
																</div>
															</div>
															<div className="col-sm-6">
																<div
																	className="     required
          dwfrm_shipping_shippingAddress_addressFields_lastName">
																	<label
																		className="form-control-label"
																		htmlFor="shippingLastName"
																		id="shippingLastNameLabel">
																		Last Name
																	</label>
																	<input
																		type="text"
																		className="form-control shippingLastName is-valid-custom"
																		aria-labelledby="shippingLastNameLabel"
																		id="shippingLastName"
																		defaultValue=""
																		autoComplete="family-name"
																		name="dwfrm_shipping_shippingAddress_addressFields_lastName"
																		required=""
																		maxLength={17}
																	/>
																	<div className="invalid-feedback" />
																</div>
															</div>
														</div>
														<div className="row">
															<div className="col-sm-6">
																<div
																	className="     required
          dwfrm_shipping_shippingAddress_addressFields_address1">
																	<label
																		className="form-control-label"
																		htmlFor="shippingAddressOne"
																		id="shippingAddressOneLabel">
																		Address 1
																	</label>
																	<input
																		type="text"
																		aria-labelledby="shippingAddressOneLabel"
																		className="form-control shippingAddressOne is-valid-custom"
																		id="shippingAddressOne"
																		defaultValue=""
																		autoComplete="shipping address-line1"
																		data-pattern-mismatch="Please enter an address that is not a P.O. Box."
																		name="dwfrm_shipping_shippingAddress_addressFields_address1"
																		required=""
																		maxLength={35}
																		pattern="^(?!.*(?:(.*(([pP]|[pP][oO][sS][tT])[-.\s]*([oO]|[oO][fF][fF][iI][cC][eE])[-.\s]*([bB]|[bB][oO][xX]|[bB][iI][nN])[-.\s]*(#?\d))|.*(([pP]|[pP][oO][sS][tT])[-.\s]*([oO]|[oO][fF][fF][iI][cC][eE]|[bB][oO][xX]|[bB][iI][nN])[-.\s]*(#?\d))))).*$"
																	/>
																	<div className="invalid-feedback" />
																</div>
															</div>
															<div className="col-sm-6">
																<div
																	className="     
          dwfrm_shipping_shippingAddress_addressFields_address2">
																	<label
																		className="form-control-label"
																		htmlFor="shippingAddressTwo"
																		id="shippingAddressTwoLabel">
																		Address 2
																	</label>
																	<input
																		type="text"
																		aria-labelledby="shippingAddressTwoLabel"
																		className="form-control shippingAddressTwo"
																		id="shippingAddressTwo"
																		defaultValue=""
																		autoComplete="shipping address-line2"
																		name="dwfrm_shipping_shippingAddress_addressFields_address2"
																		maxLength={35}
																	/>
																	<div className="invalid-feedback" />
																</div>
															</div>
														</div>
														<div className="row">
															<div className="col-sm-6">
																<div
																	className="     required
          dwfrm_shipping_shippingAddress_addressFields_country">
																	<label
																		className="form-control-label"
																		htmlFor="shippingCountry"
																		id="shippingCountryLabel">
																		Country
																	</label>
																	<div className="select-wrapper select-wrapper--secondary">
																		<select
																			className="form-control shippingCountry custom-select is-valid-custom"
																			aria-labelledby="shippingCountryLabel"
																			id="shippingCountry"
																			autoComplete="shipping country"
																			name="dwfrm_shipping_shippingAddress_addressFields_country"
																			required="">
																			<option id="US" value="US">
																				United States
																			</option>
																		</select>
																		<span className="selector" />
																	</div>
																	<div className="invalid-feedback" />
																</div>
															</div>
															<div className="col-sm-6">
																<div
																	className="     required
          dwfrm_shipping_shippingAddress_addressFields_city">
																	<label
																		className="form-control-label"
																		htmlFor="shippingAddressCity"
																		id="shippingAddressCityLabel">
																		City
																	</label>
																	<input
																		type="text"
																		className="form-control shippingAddressCity is-valid-custom"
																		aria-labelledby="shippingAddressCityLabel"
																		id="shippingAddressCity"
																		defaultValue=""
																		autoComplete="shipping address-level2"
																		name="dwfrm_shipping_shippingAddress_addressFields_city"
																		required=""
																		maxLength={35}
																		minLength={2}
																	/>
																	<div className="invalid-feedback" />
																</div>
															</div>
														</div>
														<div className="row">
															<div className="col-sm-6">
																<div
																	className="     required
          dwfrm_shipping_shippingAddress_addressFields_states_stateCode">
																	<label
																		className="form-control-label"
																		htmlFor="shippingState"
																		id="shippingStateLabel">
																		State
																	</label>
																	<div className="select-wrapper select-wrapper--secondary">
																		<select
																			className="form-control shippingState custom-select is-valid-custom"
																			aria-labelledby="shippingStateLabel"
																			id="shippingState"
																			autoComplete="shipping address-level1"
																			name="dwfrm_shipping_shippingAddress_addressFields_states_stateCode"
																			required="">
																			<option id="" value=""></option>
																			<option id="AL" value="AL">
																				Alabama
																			</option>
																			<option id="AZ" value="AZ">
																				Arizona
																			</option>
																			<option id="AR" value="AR">
																				Arkansas
																			</option>
																			<option id="CA" value="CA">
																				California
																			</option>
																			<option id="CO" value="CO">
																				Colorado
																			</option>
																			<option id="CT" value="CT">
																				Connecticut
																			</option>
																			<option id="DE" value="DE">
																				Delaware
																			</option>
																			<option id="DC" value="DC">
																				District of Columbia
																			</option>
																			<option id="FL" value="FL">
																				Florida
																			</option>
																			<option id="GA" value="GA">
																				Georgia
																			</option>
																			<option id="ID" value="ID">
																				Idaho
																			</option>
																			<option id="IL" value="IL">
																				Illinois
																			</option>
																			<option id="IN" value="IN">
																				Indiana
																			</option>
																			<option id="IA" value="IA">
																				Iowa
																			</option>
																			<option id="KS" value="KS">
																				Kansas
																			</option>
																			<option id="KY" value="KY">
																				Kentucky
																			</option>
																			<option id="LA" value="LA">
																				Louisiana
																			</option>
																			<option id="ME" value="ME">
																				Maine
																			</option>
																			<option id="MD" value="MD">
																				Maryland
																			</option>
																			<option id="MA" value="MA">
																				Massachusetts
																			</option>
																			<option id="MI" value="MI">
																				Michigan
																			</option>
																			<option id="MN" value="MN">
																				Minnesota
																			</option>
																			<option id="MS" value="MS">
																				Mississippi
																			</option>
																			<option id="MO" value="MO">
																				Missouri
																			</option>
																			<option id="MT" value="MT">
																				Montana
																			</option>
																			<option id="NE" value="NE">
																				Nebraska
																			</option>
																			<option id="NV" value="NV">
																				Nevada
																			</option>
																			<option id="NH" value="NH">
																				New Hampshire
																			</option>
																			<option id="NJ" value="NJ">
																				New Jersey
																			</option>
																			<option id="NM" value="NM">
																				New Mexico
																			</option>
																			<option id="NY" value="NY">
																				New York
																			</option>
																			<option id="NC" value="NC">
																				North Carolina
																			</option>
																			<option id="ND" value="ND">
																				North Dakota
																			</option>
																			<option id="OH" value="OH">
																				Ohio
																			</option>
																			<option id="OK" value="OK">
																				Oklahoma
																			</option>
																			<option id="OR" value="OR">
																				Oregon
																			</option>
																			<option id="PA" value="PA">
																				Pennsylvania
																			</option>
																			<option id="RI" value="RI">
																				Rhode Island
																			</option>
																			<option id="SC" value="SC">
																				South Carolina
																			</option>
																			<option id="SD" value="SD">
																				South Dakota
																			</option>
																			<option id="TN" value="TN">
																				Tennessee
																			</option>
																			<option id="TX" value="TX">
																				Texas
																			</option>
																			<option id="UT" value="UT">
																				Utah
																			</option>
																			<option id="VT" value="VT">
																				Vermont
																			</option>
																			<option id="VA" value="VA">
																				Virginia
																			</option>
																			<option id="WA" value="WA">
																				Washington
																			</option>
																			<option id="WV" value="WV">
																				West Virginia
																			</option>
																			<option id="WI" value="WI">
																				Wisconsin
																			</option>
																			<option id="WY" value="WY">
																				Wyoming
																			</option>
																		</select>
																		<span className="selector" />
																	</div>
																	<div className="invalid-feedback" />
																</div>
															</div>
															<div className="col-sm-6">
																<div
																	className="     required
          dwfrm_shipping_shippingAddress_addressFields_postalCode">
																	<label
																		className="form-control-label"
																		htmlFor="shippingZipCode"
																		id="shippingZipCodeLabel">
																		Zip
																	</label>
																	<input
																		type="text"
																		aria-labelledby="shippingZipCodeLabel"
																		className="form-control shippingZipCode is-valid-custom"
																		id="shippingZipCode"
																		defaultValue=""
																		autoComplete="shipping postal-code"
																		name="dwfrm_shipping_shippingAddress_addressFields_postalCode"
																		required=""
																		maxLength={10}
																		minLength={5}
																		pattern="^\d{5}(-\d{4})?$"
																	/>
																	<div className="invalid-feedback" />
																	<span className="form-description">
																		Ex: 12345
																	</span>
																</div>
															</div>
														</div>
														<div className="hidden">
															<div className="col-sm-6">
																<div
																	className="     required
          dwfrm_shipping_shippingAddress_addressFields_firstName">
																	<label
																		className="form-control-label"
																		id="shippingFirstNameLabel"
																		htmlFor="shippingFirstName">
																		First Name
																	</label>
																	<input
																		autoFocus=""
																		aria-labelledby="shippingFirstNameLabel"
																		type="text"
																		className="form-control shippingFirstName"
																		id="shippingFirstName"
																		autoComplete="given-name"
																		defaultValue=""
																		name="dwfrm_shipping_shippingAddress_addressFields_firstName"
																		required=""
																		maxLength={17}
																	/>
																	<div className="invalid-feedback" />
																</div>
															</div>
															<div className="col-sm-6">
																<div
																	className="     required
          dwfrm_shipping_shippingAddress_addressFields_lastName">
																	<label
																		className="form-control-label"
																		htmlFor="shippingLastName"
																		id="shippingLastNameLabel">
																		Last Name
																	</label>
																	<input
																		type="text"
																		className="form-control shippingLastName"
																		aria-labelledby="shippingLastNameLabel"
																		id="shippingLastName"
																		defaultValue=""
																		autoComplete="family-name"
																		name="dwfrm_shipping_shippingAddress_addressFields_lastName"
																		required=""
																		maxLength={17}
																	/>
																	<div className="invalid-feedback" />
																</div>
															</div>
														</div>
														<div className="hidden">
															<div className="col-sm-6">
																<div
																	className="     required
          dwfrm_shipping_shippingAddress_addressFields_address1">
																	<label
																		className="form-control-label"
																		htmlFor="shippingAddressOne"
																		id="shippingAddressOneLabel">
																		Address 1
																	</label>
																	<input
																		type="text"
																		aria-labelledby="shippingAddressOneLabel"
																		className="form-control shippingAddressOne"
																		id="shippingAddressOne"
																		defaultValue=""
																		autoComplete="shipping address-line1"
																		data-pattern-mismatch="Please enter an address that is not a P.O. Box."
																		name="dwfrm_shipping_shippingAddress_addressFields_address1"
																		required=""
																		maxLength={35}
																		pattern="^(?!.*(?:(.*(([pP]|[pP][oO][sS][tT])[-.\s]*([oO]|[oO][fF][fF][iI][cC][eE])[-.\s]*([bB]|[bB][oO][xX]|[bB][iI][nN])[-.\s]*(#?\d))|.*(([pP]|[pP][oO][sS][tT])[-.\s]*([oO]|[oO][fF][fF][iI][cC][eE]|[bB][oO][xX]|[bB][iI][nN])[-.\s]*(#?\d))))).*$"
																	/>
																	<div className="invalid-feedback" />
																</div>
															</div>
															<div className="col-sm-6">
																<div
																	className="     
          dwfrm_shipping_shippingAddress_addressFields_address2">
																	<label
																		className="form-control-label"
																		htmlFor="shippingAddressTwo"
																		id="shippingAddressTwoLabel">
																		Address 2
																	</label>
																	<input
																		type="text"
																		aria-labelledby="shippingAddressTwoLabel"
																		className="form-control shippingAddressTwo"
																		id="shippingAddressTwo"
																		defaultValue=""
																		autoComplete="shipping address-line2"
																		name="dwfrm_shipping_shippingAddress_addressFields_address2"
																		maxLength={35}
																	/>
																	<div className="invalid-feedback" />
																</div>
															</div>
														</div>
														<div className="hidden">
															<div className="col-sm-6">
																<div
																	className="     required
          dwfrm_shipping_shippingAddress_addressFields_country">
																	<label
																		className="form-control-label"
																		htmlFor="shippingCountry"
																		id="shippingCountryLabel">
																		Country
																	</label>
																	<div className="select-wrapper select-wrapper--secondary">
																		<select
																			className="form-control shippingCountry custom-select"
																			aria-labelledby="shippingCountryLabel"
																			id="shippingCountry"
																			autoComplete="shipping country"
																			name="dwfrm_shipping_shippingAddress_addressFields_country"
																			required="">
																			<option id="" value="">
																				United States
																			</option>
																		</select>
																		<span className="selector" />
																	</div>
																	<div className="invalid-feedback" />
																</div>
															</div>
															<div className="col-sm-6">
																<div
																	className="     required
          dwfrm_shipping_shippingAddress_addressFields_city">
																	<label
																		className="form-control-label"
																		htmlFor="shippingAddressCity"
																		id="shippingAddressCityLabel">
																		City
																	</label>
																	<input
																		type="text"
																		className="form-control shippingAddressCity"
																		aria-labelledby="shippingAddressCityLabel"
																		id="shippingAddressCity"
																		defaultValue=""
																		autoComplete="shipping address-level2"
																		name="dwfrm_shipping_shippingAddress_addressFields_city"
																		required=""
																		maxLength={35}
																		minLength={2}
																	/>
																	<div className="invalid-feedback" />
																</div>
															</div>
														</div>
														<div className="hidden">
															<div className="col-sm-6">
																<div
																	className="     required
          dwfrm_shipping_shippingAddress_addressFields_states_stateCode">
																	<label
																		className="form-control-label"
																		htmlFor="shippingState"
																		id="shippingStateLabel">
																		State
																	</label>
																	<div className="select-wrapper select-wrapper--secondary">
																		<select
																			className="form-control shippingState custom-select"
																			aria-labelledby="shippingStateLabel"
																			id="shippingState"
																			autoComplete="shipping address-level1"
																			name="dwfrm_shipping_shippingAddress_addressFields_states_stateCode"
																			required=""></select>
																		<span className="selector" />
																	</div>
																	<div className="invalid-feedback" />
																</div>
															</div>
															<div className="col-sm-6">
																<div
																	className="     required
          dwfrm_shipping_shippingAddress_addressFields_postalCode">
																	<label
																		className="form-control-label"
																		htmlFor="shippingZipCode"
																		id="shippingZipCodeLabel">
																		Zip
																	</label>
																	<input
																		type="text"
																		aria-labelledby="shippingZipCodeLabel"
																		className="form-control shippingZipCode"
																		id="shippingZipCode"
																		defaultValue=""
																		autoComplete="shipping postal-code"
																		name="dwfrm_shipping_shippingAddress_addressFields_postalCode"
																		required=""
																		maxLength={10}
																		minLength={5}
																		pattern="^\d{5}(-\d{4})?$"
																	/>
																	<div className="invalid-feedback" />
																	<span className="form-description">
																		Ex: 12345
																	</span>
																</div>
															</div>
														</div>
														<fieldset className="shipping-address-block">
															<legend>
																<h6>Contact Information</h6>
															</legend>
														</fieldset>
														<div className="row">
															<div className="col-sm-6">
																<div className="row">
																	<div className="col">
																		<div className=" required dwfrm_shipping_shippingAddress_orderContactFields_email">
																			<label
																				className="form-control-label"
																				id="shippingEmailLabel"
																				htmlFor="email">
																				Email Address
																			</label>
																			<input
																				autoFocus=""
																				type="email"
																				className="form-control is-valid-custom"
																				id="email"
																				data-pattern-mismatch="Email must include '@' and a domain (e.g .com)"
																				defaultValue=""
																				name="dwfrm_shipping_shippingAddress_orderContactFields_email"
																				required=""
																				maxLength={50}
																				pattern="^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$"
																			/>
																			<div className="invalid-feedback" />
																		</div>
																	</div>
																</div>
																<div className="row">
																	<div className="col">
																		<div className=" required dwfrm_shipping_shippingAddress_orderContactFields_email_confirm">
																			<label
																				className="form-control-label"
																				id="shippingEmailConfirmLabel"
																				htmlFor="email-confirm">
																				Confirm Email Address
																			</label>
																			<input
																				autoComplete="off"
																				autoFocus=""
																				type="email"
																				className="form-control is-valid-custom"
																				id="email-confirm"
																				data-pattern-mismatch="Email must include '@' and a domain (e.g .com)"
																				data-email-not-same="Please enter the same value again."
																				defaultValue=""
																				name="dwfrm_shipping_shippingAddress_orderContactFields_email"
																				required=""
																				maxLength={50}
																				pattern="^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$"
																			/>
																			<div className="invalid-feedback" />
																		</div>
																	</div>
																</div>
																<div className="row">
																	<div className="col">
																		<div className=" email-signup-group dwfrm_shipping_shippingAddress_orderContactFields_emailSignup">
																			<fieldset>
																				<div className="custom-control custom-checkbox">
																					<input
																						className="custom-control-input"
																						id="emailSignup"
																						type="checkbox"
																						name="dwfrm_shipping_shippingAddress_orderContactFields_emailSignup"
																						defaultValue="true"
																					/>
																					<label
																						className="checkout-checkbox custom-control-label"
																						htmlFor="emailSignup"
																						id="emailSignupLabel">
																						Sign up for emails and special
																						offers
																					</label>
																				</div>
																			</fieldset>
																		</div>
																	</div>
																</div>
															</div>
															<div className="col-sm-6">
																<div className=" required  dwfrm_shipping_shippingAddress_addressFields_phone">
																	<label
																		className="form-control-label"
																		htmlFor="shippingPhoneNumber"
																		id="shippingPhoneNumberLabel">
																		Phone Number
																	</label>
																	<input
																		type="tel"
																		aria-labelledby="shippingPhoneNumberLabel"
																		className="form-control shippingPhoneNumber is-valid-custom"
																		id="shippingPhoneNumber"
																		data-pattern-mismatch="Please enter using the format 9876543210"
																		defaultValue=""
																		autoComplete="tel"
																		name="dwfrm_shipping_shippingAddress_addressFields_phone"
																		required=""
																		maxLength={10}
																		pattern="^\(?([2-9][0-8][0-9])\)?[\-\. ]?([2-9][0-9]{2})[\-\. ]?([0-9]{4})(\s*x[0-9]+)?$"
																	/>
																	<span className="info-icon">
																		<img
																			className="icon"
																			src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwfb1a03d9/images/svg-icons/icon-help.svg"
																			alt="Tooltip Icon"
																			data-toggle="popover"
																			tabIndex={0}
																			data-placement="top"
																			title=""
																			data-content="This phone number is required in the event the shipping partner needs to arrange a delivery time with you.

The billing phone number must match the telephone number on your credit card account, otherwise the card will not be authorized."
																			data-original-title=""
																		/>
																	</span>
																	<span className="form-description">
																		Ex: 9234567890
																	</span>
																	<div className="invalid-feedback" />
																</div>
															</div>
														</div>
													</fieldset>
													<fieldset className="gift-message-block d-none">
														<div className="row">
															<div className="col-12">
																<div>
																	<div className="custom-control custom-checkbox">
																		<input
																			className="custom-control-input gift"
																			type="hidden"
																			id="isGift-default-729ae00bf9f094c0de351ea47f"
																			name="dwfrm_shipping_shippingAddress_isGift"
																			defaultValue="true"
																		/>
																		<label
																			htmlFor="isGift-default-729ae00bf9f094c0de351ea47f"
																			className="custom-control-label checkout-checkbox">
																			This is a Gift
																		</label>
																	</div>
																</div>
															</div>
														</div>
														<div className="row gift-message d-none">
															<div className="col-12">
																<div>
																	<label htmlFor="giftMessage">Message</label>
																	<textarea
																		className="form-control gift-message-729ae00bf9f094c0de351ea47f"
																		id="giftMessage"
																		rows={3}
																		name="dwfrm_shipping_shippingAddress_giftMessage"
																		value=""
																		maxLength={250}
																		readOnly
																	/>
																</div>
															</div>
														</div>
													</fieldset>
												</div>
												<div className="view-address-block d-none">
													<h6 className="shipping-header-text">Shipping To</h6>
													<p>
														<span className="ship-to-message" />
														<span className="ship-to-name">Todd Heckeler</span>
														<span className="ship-to-address1">
															2173 Mars Ave
														</span>
														<span
															className="ship-to-address2"
															style={{ display: "none" }}
														/>
														<span className="ship-to-city-st-zip">
															<span className="ship-to-city">Lakewood</span>
															<span className="ship-to-st">OH</span>
															<span className="ship-to-zip">44107</span>
														</span>
														<span className="ship-to-phone">
															(216) 228-3651
														</span>
													</p>
													<h5>
														Shipping Method
														<span />
													</h5>
													<div className="row">
														<p className="col-8">
															<span className="display-name">Standard</span>
															<span className="arrival-time">
																(3 - 5 business days)
															</span>
														</p>
														<p className="col-4 text-right">
															<span className="price">$0.00</span>
														</p>
													</div>
												</div>
											</form>
										</div>
										<div className="col-12 next-step-button">
											<div className="next-step-button-inner">
												<button
													className="btn btn-secondary btn-block submit-shipping"
													type="submit"
													name="submit"
													value="submit-shipping">
													Continue to Billing
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="multi-shipping">
								<div
									className="card"
									data-shipment-uuid="729ae00bf9f094c0de351ea47f">
									<div className="card-header">
										<div className="product-line-item">
											<div className="line-item-header">
												<div className="line-item-name">
													<span>Bagger for 30-inch Decks</span>
												</div>
												<p className="item-number ">
													<strong>Item#:</strong> 19A30014OEM
												</p>
											</div>
											<div className="product-line-item-details d-flex flex-row">
												<div className="item-image">
													<img
														className="product-image"
														src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw40c262c8/products/Attachments_Accessories/19A30014OEM_12.jpg?sw=180&sh=180&sm=fit"
														alt="Bagger for 30-inch Decks"
														title="Bagger for 30-inch Decks"
													/>
												</div>
												<div className="item-attributes">
													<div className="item-options"></div>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body shipping-content">
										<form
											className="shipping-form"
											autoComplete="on"
											noValidate=""
											action="/on/demandware.store/Sites-cubcadet-Site/en_US/CheckoutAddressServices-AddNewAddress"
											data-address-mode="new"
											data-carb-url="/on/demandware.store/Sites-cubcadet-Site/en_US/Checkout-Carb"
											name="dwfrm_shipping"
											id="dwfrm_shipping">
											<input
												name="productLineItemUUID"
												type="hidden"
												defaultValue="e9e7b75881874b33671b0b82d0"
											/>
											<input
												name="originalShipmentUUID"
												type="hidden"
												defaultValue="729ae00bf9f094c0de351ea47f"
											/>
											<input
												name="shipmentUUID"
												type="hidden"
												defaultValue="729ae00bf9f094c0de351ea47f"
											/>
											<input
												type="hidden"
												name="csrf_token"
												defaultValue="gayplmCMvym9ikKotBJUMdNzXXkjLP5pssNwRzrmAHKN6yvkpexFMF8rMAItCNaF8NKGtXCvlJukAuRO47SjIHXastp-SKql1pnXSH1TwVZ8byHg6ORhznV9Zcwf63mj3z-Qg1baUuhZKapDftuVmli1r0ulnjtx7Fc3AyGreJTix9g17yc="
											/>
											<div className="shipping-address ">
												<fieldset className="shipping-method-block">
													<legend>
														<h6>Shipping Method</h6>
													</legend>
													<div className="row">
														<div className="col-sm-6 mb-2 mb-sm-0">
															<div
																className="row shipping-method-list custom-radio"
																data-select-shipping-method-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/CheckoutShippingServices-SelectShippingMethod"
																data-action-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/CheckoutShippingServices-UpdateShippingMethodsList">
																<div className="form-check col-9">
																	<input
																		type="radio"
																		className="form-check-input custom-control-input"
																		id="shippingMethod-standard"
																		aria-labelledby="shippingMethodRadioButtonLabel"
																		name="dwfrm_shipping_shippingAddress_shippingMethodID"
																		defaultValue="standard"
																	/>
																	<label
																		className="shipping-method-option custom-control-label"
																		htmlFor="shippingMethod-standard"
																		id="shippingMethodRadioButtonLabel">
																		<span className="display-name">
																			Standard
																		</span>
																		<span className="shipping-cost">$0.00</span>
																		<div
																			className="font-weight-normal arrival-time"
																			style={{}}>
																			(3 - 5 business days)
																		</div>
																	</label>
																</div>
																<div className="form-check col-9">
																	<input
																		type="radio"
																		className="form-check-input custom-control-input"
																		id="shippingMethod-ground"
																		aria-labelledby="shippingMethodRadioButtonLabel"
																		name="dwfrm_shipping_shippingAddress_shippingMethodID"
																		defaultValue="ground"
																	/>
																	<label
																		className="shipping-method-option custom-control-label"
																		htmlFor="shippingMethod-ground"
																		id="shippingMethodRadioButtonLabel">
																		<span className="display-name">Ground</span>
																		<span className="shipping-cost">
																			$54.98
																		</span>
																		<div
																			className="font-weight-normal arrival-time"
																			style={{}}>
																			(2 - 4 business days)
																		</div>
																	</label>
																</div>
																<div className="form-check col-9">
																	<input
																		type="radio"
																		className="form-check-input custom-control-input"
																		id="shippingMethod-second-business-day"
																		aria-labelledby="shippingMethodRadioButtonLabel"
																		name="dwfrm_shipping_shippingAddress_shippingMethodID"
																		defaultValue="second-business-day"
																	/>
																	<label
																		className="shipping-method-option custom-control-label"
																		htmlFor="shippingMethod-second-business-day"
																		id="shippingMethodRadioButtonLabel">
																		<span className="display-name">
																			Second Business Day
																		</span>
																		<span className="shipping-cost">
																			$60.98
																		</span>
																		<div
																			className="font-weight-normal arrival-time"
																			style={{}}>
																			(2 business days)
																		</div>
																	</label>
																</div>
																<div className="form-check col-9">
																	<input
																		type="radio"
																		className="form-check-input custom-control-input"
																		id="shippingMethod-next-business-day"
																		aria-labelledby="shippingMethodRadioButtonLabel"
																		name="dwfrm_shipping_shippingAddress_shippingMethodID"
																		defaultValue="next-business-day"
																	/>
																	<label
																		className="shipping-method-option custom-control-label"
																		htmlFor="shippingMethod-next-business-day"
																		id="shippingMethodRadioButtonLabel">
																		<span className="display-name">
																			Next Business Day
																		</span>
																		<span className="shipping-cost">
																			$66.98
																		</span>
																		<div
																			className="font-weight-normal arrival-time"
																			style={{}}>
																			(1 business day)
																		</div>
																	</label>
																</div>
															</div>
															{/* Template used by client to redraw shipping methods                           */}
															<div
																id="shipping-method-template"
																className="custom-radio"
																style={{ display: "none" }}>
																<div className="form-check col-9">
																	<input
																		type="radio"
																		className="form-check-input custom-control-input"
																		id="shippingMethodRadioButton"
																		aria-labelledby="shippingMethodRadioButtonLabel"
																	/>
																	<label
																		className="shipping-method-option custom-control-label"
																		htmlFor="shippingMethodRadioButton"
																		id="shippingMethodRadioButtonLabel">
																		<span className="display-name" />
																		<span className="shipping-cost" />
																		<div
																			className="font-weight-normal arrival-time"
																			style={{ display: "none" }}
																		/>
																	</label>
																</div>
															</div>
														</div>
														<div className="col-sm-6">
															<div className="checkout-callout">
																<p className="title">
																	Current delivery estimate: 8-10 days
																</p>
																<div className="content-asset">
																	{/* dwMarker="content" dwContentID="27a1d07883ba35663361cd28d7" */}
																	<p className="message">
																		Please note: This item ships directly from
																		our factory and will arrive to you in a wood
																		crate.
																	</p>
																	<a className="link" href="/">
																		Learn More&nbsp;&gt;
																	</a>
																</div>
																{/* End content-asset */}
															</div>
														</div>
													</div>
												</fieldset>
												<div className="clearfix mb-4 mb-sm-0">
													<hr className="d-none d-sm-block" />
												</div>
												<fieldset className="shipment-selector-block  ">
													<div>
														<label
															className="form-control-label"
															htmlFor="shipmentSelector-e09fc15c4d04d6cb23ee27af1f">
															Select From a Saved Address
														</label>
														<div className="select-wrapper select-wrapper--secondary">
															<select
																name="shipmentSelector"
																id="shipmentSelector-e09fc15c4d04d6cb23ee27af1f"
																className="addressSelector form-control custom-select"
																data-create-shipment-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/CheckoutAddressServices-CreateNewAddress">
																<option
																	className=""
																	value="new"
																	data-first-name=""
																	data-last-name=""
																	data-address1=""
																	data-address2=""
																	data-city=""
																	data-state-code=""
																	data-postal-code=""
																	data-country-code=""
																	data-phone=""
																	data-is-gift=""
																	data-gift-message="">
																	New Address
																</option>
																<option className="multi-shipping" disabled="">
																	- Existing Shipments -
																</option>
																<option
																	className="multi-shipping"
																	value="729ae00bf9f094c0de351ea47f"
																	data-first-name="Todd"
																	data-last-name="Heckeler"
																	data-address1="2173 Mars Ave"
																	data-address2=""
																	data-city="Lakewood"
																	data-state-code="OH"
																	data-postal-code={44107}
																	data-country-code="US"
																	data-phone={2162283651}
																	data-is-gift="true"
																	data-gift-message="">
																	Todd Heckeler 2173 Mars Ave Lakewood OH 44107
																	- Standard
																</option>
															</select>
															<span className="selector" />
														</div>
														<div className="invalid-feedback" />
														<div className="row no-gutters">
															<a
																href="#top"
																className="col-6 col-md-3 btn-show-details normal">
																Update Address
															</a>
															<a
																href="#top"
																className="col-6 col-md-3 btn-add-new normal">
																Add New Address
															</a>
														</div>
													</div>
												</fieldset>
												<fieldset className="shipping-address-block">
													<legend>
														<h6>Shipping Address</h6>
													</legend>
													<div className="row">
														<div className="col-sm-6">
															<div className=" required dwfrm_shipping_shippingAddress_addressFields_firstName">
																<label
																	className="form-control-label"
																	id="shippingFirstNameLabel"
																	htmlFor="shippingFirstName">
																	First Name
																</label>
																<input
																	autoFocus=""
																	aria-labelledby="shippingFirstNameLabel"
																	type="text"
																	className="form-control shippingFirstName"
																	id="shippingFirstName"
																	autoComplete="given-name"
																	defaultValue=""
																	name="dwfrm_shipping_shippingAddress_addressFields_firstName"
																	required=""
																	maxLength={17}
																/>
																<div className="invalid-feedback" />
															</div>
														</div>
														<div className="col-sm-6">
															<div className=" required dwfrm_shipping_shippingAddress_addressFields_lastName">
																<label
																	className="form-control-label"
																	htmlFor="shippingLastName"
																	id="shippingLastNameLabel">
																	Last Name
																</label>
																<input
																	type="text"
																	className="form-control shippingLastName"
																	aria-labelledby="shippingLastNameLabel"
																	id="shippingLastName"
																	defaultValue=""
																	autoComplete="family-name"
																	name="dwfrm_shipping_shippingAddress_addressFields_lastName"
																	required=""
																	maxLength={17}
																/>
																<div className="invalid-feedback" />
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-sm-6">
															<div
																className="     required
          dwfrm_shipping_shippingAddress_addressFields_address1">
																<label
																	className="form-control-label"
																	htmlFor="shippingAddressOne"
																	id="shippingAddressOneLabel">
																	Address 1
																</label>
																<input
																	type="text"
																	aria-labelledby="shippingAddressOneLabel"
																	className="form-control shippingAddressOne"
																	id="shippingAddressOne"
																	defaultValue=""
																	autoComplete="shipping address-line1"
																	data-pattern-mismatch="Please enter an address that is not a P.O. Box."
																	name="dwfrm_shipping_shippingAddress_addressFields_address1"
																	required=""
																	maxLength={35}
																	pattern="^(?!.*(?:(.*(([pP]|[pP][oO][sS][tT])[-.\s]*([oO]|[oO][fF][fF][iI][cC][eE])[-.\s]*([bB]|[bB][oO][xX]|[bB][iI][nN])[-.\s]*(#?\d))|.*(([pP]|[pP][oO][sS][tT])[-.\s]*([oO]|[oO][fF][fF][iI][cC][eE]|[bB][oO][xX]|[bB][iI][nN])[-.\s]*(#?\d))))).*$"
																/>
																<div className="invalid-feedback" />
															</div>
														</div>
														<div className="col-sm-6">
															<div
																className="     
          dwfrm_shipping_shippingAddress_addressFields_address2">
																<label
																	className="form-control-label"
																	htmlFor="shippingAddressTwo"
																	id="shippingAddressTwoLabel">
																	Address 2
																</label>
																<input
																	type="text"
																	aria-labelledby="shippingAddressTwoLabel"
																	className="form-control shippingAddressTwo"
																	id="shippingAddressTwo"
																	defaultValue=""
																	autoComplete="shipping address-line2"
																	name="dwfrm_shipping_shippingAddress_addressFields_address2"
																	maxLength={35}
																/>
																<div className="invalid-feedback" />
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-sm-6">
															<div
																className="     required
          dwfrm_shipping_shippingAddress_addressFields_country">
																<label
																	className="form-control-label"
																	htmlFor="shippingCountry"
																	id="shippingCountryLabel">
																	Country
																</label>
																<div className="select-wrapper select-wrapper--secondary">
																	<select
																		className="form-control shippingCountry custom-select"
																		aria-labelledby="shippingCountryLabel"
																		id="shippingCountry"
																		autoComplete="shipping country"
																		name="dwfrm_shipping_shippingAddress_addressFields_country"
																		required="">
																		<option id="US" value="US">
																			United States
																		</option>
																	</select>
																	<span className="selector" />
																</div>
																<div className="invalid-feedback" />
															</div>
														</div>
														<div className="col-sm-6">
															<div
																className="     required
          dwfrm_shipping_shippingAddress_addressFields_city">
																<label
																	className="form-control-label"
																	htmlFor="shippingAddressCity"
																	id="shippingAddressCityLabel">
																	City
																</label>
																<input
																	type="text"
																	className="form-control shippingAddressCity"
																	aria-labelledby="shippingAddressCityLabel"
																	id="shippingAddressCity"
																	defaultValue=""
																	autoComplete="shipping address-level2"
																	name="dwfrm_shipping_shippingAddress_addressFields_city"
																	required=""
																	maxLength={35}
																	minLength={2}
																/>
																<div className="invalid-feedback" />
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-sm-6">
															<div
																className="     required
          dwfrm_shipping_shippingAddress_addressFields_states_stateCode">
																<label
																	className="form-control-label"
																	htmlFor="shippingState"
																	id="shippingStateLabel">
																	State
																</label>
																<div className="select-wrapper select-wrapper--secondary">
																	<select
																		className="form-control shippingState custom-select"
																		aria-labelledby="shippingStateLabel"
																		id="shippingState"
																		autoComplete="shipping address-level1"
																		name="dwfrm_shipping_shippingAddress_addressFields_states_stateCode"
																		required="">
																		<option id="" value=""></option>
																		<option id="AL" value="AL">
																			Alabama
																		</option>
																		<option id="AZ" value="AZ">
																			Arizona
																		</option>
																		<option id="AR" value="AR">
																			Arkansas
																		</option>
																		<option id="CA" value="CA">
																			California
																		</option>
																		<option id="CO" value="CO">
																			Colorado
																		</option>
																		<option id="CT" value="CT">
																			Connecticut
																		</option>
																		<option id="DE" value="DE">
																			Delaware
																		</option>
																		<option id="DC" value="DC">
																			District of Columbia
																		</option>
																		<option id="FL" value="FL">
																			Florida
																		</option>
																		<option id="GA" value="GA">
																			Georgia
																		</option>
																		<option id="ID" value="ID">
																			Idaho
																		</option>
																		<option id="IL" value="IL">
																			Illinois
																		</option>
																		<option id="IN" value="IN">
																			Indiana
																		</option>
																		<option id="IA" value="IA">
																			Iowa
																		</option>
																		<option id="KS" value="KS">
																			Kansas
																		</option>
																		<option id="KY" value="KY">
																			Kentucky
																		</option>
																		<option id="LA" value="LA">
																			Louisiana
																		</option>
																		<option id="ME" value="ME">
																			Maine
																		</option>
																		<option id="MD" value="MD">
																			Maryland
																		</option>
																		<option id="MA" value="MA">
																			Massachusetts
																		</option>
																		<option id="MI" value="MI">
																			Michigan
																		</option>
																		<option id="MN" value="MN">
																			Minnesota
																		</option>
																		<option id="MS" value="MS">
																			Mississippi
																		</option>
																		<option id="MO" value="MO">
																			Missouri
																		</option>
																		<option id="MT" value="MT">
																			Montana
																		</option>
																		<option id="NE" value="NE">
																			Nebraska
																		</option>
																		<option id="NV" value="NV">
																			Nevada
																		</option>
																		<option id="NH" value="NH">
																			New Hampshire
																		</option>
																		<option id="NJ" value="NJ">
																			New Jersey
																		</option>
																		<option id="NM" value="NM">
																			New Mexico
																		</option>
																		<option id="NY" value="NY">
																			New York
																		</option>
																		<option id="NC" value="NC">
																			North Carolina
																		</option>
																		<option id="ND" value="ND">
																			North Dakota
																		</option>
																		<option id="OH" value="OH">
																			Ohio
																		</option>
																		<option id="OK" value="OK">
																			Oklahoma
																		</option>
																		<option id="OR" value="OR">
																			Oregon
																		</option>
																		<option id="PA" value="PA">
																			Pennsylvania
																		</option>
																		<option id="RI" value="RI">
																			Rhode Island
																		</option>
																		<option id="SC" value="SC">
																			South Carolina
																		</option>
																		<option id="SD" value="SD">
																			South Dakota
																		</option>
																		<option id="TN" value="TN">
																			Tennessee
																		</option>
																		<option id="TX" value="TX">
																			Texas
																		</option>
																		<option id="UT" value="UT">
																			Utah
																		</option>
																		<option id="VT" value="VT">
																			Vermont
																		</option>
																		<option id="VA" value="VA">
																			Virginia
																		</option>
																		<option id="WA" value="WA">
																			Washington
																		</option>
																		<option id="WV" value="WV">
																			West Virginia
																		</option>
																		<option id="WI" value="WI">
																			Wisconsin
																		</option>
																		<option id="WY" value="WY">
																			Wyoming
																		</option>
																	</select>
																	<span className="selector" />
																</div>
																<div className="invalid-feedback" />
															</div>
														</div>
														<div className="col-sm-6">
															<div
																className="     required
          dwfrm_shipping_shippingAddress_addressFields_postalCode">
																<label
																	className="form-control-label"
																	htmlFor="shippingZipCode"
																	id="shippingZipCodeLabel">
																	Zip
																</label>
																<input
																	type="text"
																	aria-labelledby="shippingZipCodeLabel"
																	className="form-control shippingZipCode"
																	id="shippingZipCode"
																	defaultValue=""
																	autoComplete="shipping postal-code"
																	name="dwfrm_shipping_shippingAddress_addressFields_postalCode"
																	required=""
																	maxLength={10}
																	minLength={5}
																	pattern="^\d{5}(-\d{4})?$"
																/>
																<div className="invalid-feedback" />
																<span className="form-description">
																	Ex: 12345
																</span>
															</div>
														</div>
													</div>
													<div className="hidden">
														<div className="col-sm-6">
															<div
																className="     required
          dwfrm_shipping_shippingAddress_addressFields_firstName">
																<label
																	className="form-control-label"
																	id="shippingFirstNameLabel"
																	htmlFor="shippingFirstName">
																	First Name
																</label>
																<input
																	autoFocus=""
																	aria-labelledby="shippingFirstNameLabel"
																	type="text"
																	className="form-control shippingFirstName"
																	id="shippingFirstName"
																	autoComplete="given-name"
																	defaultValue=""
																	name="dwfrm_shipping_shippingAddress_addressFields_firstName"
																	required=""
																	maxLength={17}
																/>
																<div className="invalid-feedback" />
															</div>
														</div>
														<div className="col-sm-6">
															<div
																className="     required
          dwfrm_shipping_shippingAddress_addressFields_lastName">
																<label
																	className="form-control-label"
																	htmlFor="shippingLastName"
																	id="shippingLastNameLabel">
																	Last Name
																</label>
																<input
																	type="text"
																	className="form-control shippingLastName"
																	aria-labelledby="shippingLastNameLabel"
																	id="shippingLastName"
																	defaultValue=""
																	autoComplete="family-name"
																	name="dwfrm_shipping_shippingAddress_addressFields_lastName"
																	required=""
																	maxLength={17}
																/>
																<div className="invalid-feedback" />
															</div>
														</div>
													</div>
													<div className="hidden">
														<div className="col-sm-6">
															<div
																className="     required
          dwfrm_shipping_shippingAddress_addressFields_address1">
																<label
																	className="form-control-label"
																	htmlFor="shippingAddressOne"
																	id="shippingAddressOneLabel">
																	Address 1
																</label>
																<input
																	type="text"
																	aria-labelledby="shippingAddressOneLabel"
																	className="form-control shippingAddressOne"
																	id="shippingAddressOne"
																	defaultValue=""
																	autoComplete="shipping address-line1"
																	data-pattern-mismatch="Please enter an address that is not a P.O. Box."
																	name="dwfrm_shipping_shippingAddress_addressFields_address1"
																	required=""
																	maxLength={35}
																	pattern="^(?!.*(?:(.*(([pP]|[pP][oO][sS][tT])[-.\s]*([oO]|[oO][fF][fF][iI][cC][eE])[-.\s]*([bB]|[bB][oO][xX]|[bB][iI][nN])[-.\s]*(#?\d))|.*(([pP]|[pP][oO][sS][tT])[-.\s]*([oO]|[oO][fF][fF][iI][cC][eE]|[bB][oO][xX]|[bB][iI][nN])[-.\s]*(#?\d))))).*$"
																/>
																<div className="invalid-feedback" />
															</div>
														</div>
														<div className="col-sm-6">
															<div
																className="     
          dwfrm_shipping_shippingAddress_addressFields_address2">
																<label
																	className="form-control-label"
																	htmlFor="shippingAddressTwo"
																	id="shippingAddressTwoLabel">
																	Address 2
																</label>
																<input
																	type="text"
																	aria-labelledby="shippingAddressTwoLabel"
																	className="form-control shippingAddressTwo"
																	id="shippingAddressTwo"
																	defaultValue=""
																	autoComplete="shipping address-line2"
																	name="dwfrm_shipping_shippingAddress_addressFields_address2"
																	maxLength={35}
																/>
																<div className="invalid-feedback" />
															</div>
														</div>
													</div>
													<div className="hidden">
														<div className="col-sm-6">
															<div
																className="     required
          dwfrm_shipping_shippingAddress_addressFields_country">
																<label
																	className="form-control-label"
																	htmlFor="shippingCountry"
																	id="shippingCountryLabel">
																	Country
																</label>
																<div className="select-wrapper select-wrapper--secondary">
																	<select
																		className="form-control shippingCountry custom-select"
																		aria-labelledby="shippingCountryLabel"
																		id="shippingCountry"
																		autoComplete="shipping country"
																		name="dwfrm_shipping_shippingAddress_addressFields_country"
																		required="">
																		<option id="" value="">
																			United States
																		</option>
																	</select>
																	<span className="selector" />
																</div>
																<div className="invalid-feedback" />
															</div>
														</div>
														<div className="col-sm-6">
															<div
																className="     required
          dwfrm_shipping_shippingAddress_addressFields_city">
																<label
																	className="form-control-label"
																	htmlFor="shippingAddressCity"
																	id="shippingAddressCityLabel">
																	City
																</label>
																<input
																	type="text"
																	className="form-control shippingAddressCity"
																	aria-labelledby="shippingAddressCityLabel"
																	id="shippingAddressCity"
																	defaultValue=""
																	autoComplete="shipping address-level2"
																	name="dwfrm_shipping_shippingAddress_addressFields_city"
																	required=""
																	maxLength={35}
																	minLength={2}
																/>
																<div className="invalid-feedback" />
															</div>
														</div>
													</div>
													<div className="hidden">
														<div className="col-sm-6">
															<div
																className="     required
          dwfrm_shipping_shippingAddress_addressFields_states_stateCode">
																<label
																	className="form-control-label"
																	htmlFor="shippingState"
																	id="shippingStateLabel">
																	State
																</label>
																<div className="select-wrapper select-wrapper--secondary">
																	<select
																		className="form-control shippingState custom-select"
																		aria-labelledby="shippingStateLabel"
																		id="shippingState"
																		autoComplete="shipping address-level1"
																		name="dwfrm_shipping_shippingAddress_addressFields_states_stateCode"
																		required="">
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																		<option id="" value="">
																			OH
																		</option>
																	</select>
																	<span className="selector" />
																</div>
																<div className="invalid-feedback" />
															</div>
														</div>
														<div className="col-sm-6">
															<div
																className="     required
          dwfrm_shipping_shippingAddress_addressFields_postalCode">
																<label
																	className="form-control-label"
																	htmlFor="shippingZipCode"
																	id="shippingZipCodeLabel">
																	Zip
																</label>
																<input
																	type="text"
																	aria-labelledby="shippingZipCodeLabel"
																	className="form-control shippingZipCode"
																	id="shippingZipCode"
																	defaultValue=""
																	autoComplete="shipping postal-code"
																	name="dwfrm_shipping_shippingAddress_addressFields_postalCode"
																	required=""
																	maxLength={10}
																	minLength={5}
																	pattern="^\d{5}(-\d{4})?$"
																/>
																<div className="invalid-feedback" />
																<span className="form-description">
																	Ex: 12345
																</span>
															</div>
														</div>
													</div>
													<fieldset className="shipping-address-block">
														<legend>
															<h6>Contact Information</h6>
														</legend>
													</fieldset>
													<div className="row">
														<div className="col-sm-6">
															<div className="row">
																<div className="col">
																	<div className=" required dwfrm_shipping_shippingAddress_orderContactFields_email">
																		<label
																			className="form-control-label"
																			id="shippingEmailLabel"
																			htmlFor="email">
																			Email Address
																		</label>
																		<input
																			autoFocus=""
																			type="email"
																			className="form-control"
																			id="email"
																			data-pattern-mismatch="Email must include '@' and a domain (e.g .com)"
																			defaultValue=""
																			name="dwfrm_shipping_shippingAddress_orderContactFields_email"
																			required=""
																			maxLength={50}
																			pattern="^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$"
																		/>
																		<div className="invalid-feedback" />
																	</div>
																</div>
															</div>
															<div className="row">
																<div className="col">
																	<div className=" required dwfrm_shipping_shippingAddress_orderContactFields_email_confirm">
																		<label
																			className="form-control-label"
																			id="shippingEmailConfirmLabel"
																			htmlFor="email-confirm">
																			Confirm Email Address
																		</label>
																		<input
																			autoComplete="off"
																			autoFocus=""
																			type="email"
																			className="form-control"
																			id="email-confirm"
																			data-pattern-mismatch="Email must include '@' and a domain (e.g .com)"
																			data-email-not-same="Please enter the same value again."
																			defaultValue=""
																			name="dwfrm_shipping_shippingAddress_orderContactFields_email"
																			required=""
																			maxLength={50}
																			pattern="^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$"
																		/>
																		<div className="invalid-feedback" />
																	</div>
																</div>
															</div>
															<div className="row">
																<div className="col">
																	<div className=" email-signup-group dwfrm_shipping_shippingAddress_orderContactFields_emailSignup">
																		<fieldset>
																			<div className="custom-control custom-checkbox">
																				<input
																					className="custom-control-input"
																					id="emailSignup"
																					type="checkbox"
																					name="dwfrm_shipping_shippingAddress_orderContactFields_emailSignup"
																				/>
																				<label
																					className="checkout-checkbox custom-control-label"
																					htmlFor="emailSignup"
																					id="emailSignupLabel">
																					Sign up for emails and special offers
																				</label>
																			</div>
																		</fieldset>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-sm-6">
															<div className=" required  dwfrm_shipping_shippingAddress_addressFields_phone">
																<label
																	className="form-control-label"
																	htmlFor="shippingPhoneNumber"
																	id="shippingPhoneNumberLabel">
																	Phone Number
																</label>
																<input
																	type="tel"
																	aria-labelledby="shippingPhoneNumberLabel"
																	className="form-control shippingPhoneNumber"
																	id="shippingPhoneNumber"
																	data-pattern-mismatch="Please enter using the format 9876543210"
																	defaultValue=""
																	autoComplete="tel"
																	name="dwfrm_shipping_shippingAddress_addressFields_phone"
																	required=""
																	maxLength={10}
																	pattern="^\(?([2-9][0-8][0-9])\)?[\-\. ]?([2-9][0-9]{2})[\-\. ]?([0-9]{4})(\s*x[0-9]+)?$"
																/>
																<span className="info-icon">
																	<img
																		className="icon"
																		src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwfb1a03d9/images/svg-icons/icon-help.svg"
																		alt="Tooltip Icon"
																		data-toggle="popover"
																		tabIndex={0}
																		data-placement="top"
																		title=""
																		data-content="This phone number is required in the event the shipping partner needs to arrange a delivery time with you.

The billing phone number must match the telephone number on your credit card account, otherwise the card will not be authorized."
																		data-original-title=""
																	/>
																</span>
																<span className="form-description">
																	Ex: 9234567890
																</span>
																<div className="invalid-feedback" />
															</div>
														</div>
													</div>
												</fieldset>
												<fieldset className="gift-message-block d-none">
													<div className="row">
														<div className="col-12">
															<div>
																<div className="custom-control custom-checkbox">
																	<input
																		className="custom-control-input gift"
																		type="hidden"
																		id="isGift-e9e7b75881874b33671b0b82d0-729ae00bf9f094c0de351ea47f"
																		name="dwfrm_shipping_shippingAddress_isGift"
																	/>
																	<label
																		htmlFor="isGift-e9e7b75881874b33671b0b82d0-729ae00bf9f094c0de351ea47f"
																		className="custom-control-label checkout-checkbox">
																		This is a Gift
																	</label>
																</div>
															</div>
														</div>
													</div>
													<div className="row gift-message d-none">
														<div className="col-12">
															<div>
																<label htmlFor="giftMessage">Message</label>
																<textarea
																	className="form-control gift-message-729ae00bf9f094c0de351ea47f"
																	id="giftMessage"
																	rows={3}
																	name="dwfrm_shipping_shippingAddress_giftMessage"
																	value=""
																	maxLength={250}
																	readOnly
																/>
															</div>
														</div>
													</div>
												</fieldset>
											</div>
											<div className="view-address-block d-none">
												<h6 className="shipping-header-text">Shipping To</h6>
												<p>
													<span className="ship-to-message" />
													<span className="ship-to-name">Name Name</span>
													<span className="ship-to-address1">
														2173 Mars Ave
													</span>
													<span
														className="ship-to-address2"
														style={{ display: "none" }}
													/>
													<span className="ship-to-city-st-zip">
														<span className="ship-to-city">Lakewood</span>
														<span className="ship-to-st">OH</span>
														<span className="ship-to-zip">44107</span>
													</span>
													<span className="ship-to-phone">(216) 228-3651</span>
												</p>
												<h5>
													Shipping Method
													<span />
												</h5>
												<div className="row">
													<p className="col-8">
														<span className="display-name">Standard</span>
														<span className="arrival-time">
															(3 - 5 business days)
														</span>
													</p>
													<p className="col-4 text-right">
														<span className="price">$0.00</span>
													</p>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div className="col-12 next-step-button">
									<div className="next-step-button-inner">
										<button
											className="btn btn-secondary btn-block submit-shipping"
											type="submit"
											name="submit"
											value="submit-shipping">
											Continue to Billing
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="card shipping-summary">
							<div className="card-header clearfix">
								<span className="checkout-step-number filled">1</span>
								<h6>Shipping</h6>
								<a
									href="#"
									className="edit-button pull-right"
									aria-label="Edit Shipping Address">
									Edit
								</a>
							</div>
							<div className="card-body">
								<div
									className="single-shipping"
									data-shipment-summary="729ae00bf9f094c0de351ea47f">
									<div className="row shipping-summary-row">
										<div className="shipping-summary-col col-12 col-md-4 shipping-dealer-info-block hidden aria-hidden">
											<div className="row no-gutters">
												<div className="col-12">
													{/* Dealer info */}
													<div>
														<div className="summary-section-label">
															Dealer Information
														</div>
														<div className="dealer-info-name summary-section-sublabel"></div>
														<div className="summary-section-report">
															<span className="address1"></span>
															<div>
																<span className="city"></span>
																<span className="stateCode"></span>
																<span className="postalCode"></span>
															</div>
															<div className="dealer-info-phone"></div>
														</div>
													</div>
												</div>
											</div>
											{/* /.row */}
										</div>
										<div className="shipping-summary-col col-12 col-md-4 ">
											<p className="summary-section-label shipping-addr-label">
												Shipping Address
											</p>
											<p className="summary-section-label dealer-delivery-addr-label hidden">
												Delivery Address
											</p>
											<p className="summary-section-label dealer-pickup-addr-label hidden">
												Delivery Address
											</p>
											<div className="summary-details shipping">
												<div className="address-summary">
													<div className="summary-section-sublabel">
														<span className="firstName">Name</span>
														<span className="lastName">Name</span>
													</div>
													<div className="dealerName hidden"></div>
													<div className="summary-section-report">
														<span className="address1">2173 Mars Ave</span>
														<span className="address2" />
														<span className="city">Lakewood</span>
														<span className="stateCode">OH</span>
														<span className="postalCode">44107</span>
													</div>
												</div>
												<div className="shipping-phone hidden">
													(216) 228-3651
												</div>
											</div>
										</div>
										{/* Order contact info */}
										<div className="shipping-summary-col col-12 col-md-4 shipping-contact-information-block ">
											<div className="row no-gutters">
												<div className="col-12">
													<div className="shipping-contact-info-block">
														<div className="summary-section-label">
															Contact Information
														</div>
														<div className="summary-section-report">
															<div className="order-email-info">
																todd@consumedesign.com
															</div>
															<div className="shipping-phone">
																(216) 228-3651
															</div>
														</div>
													</div>
												</div>
											</div>
											{/* /.row */}
										</div>
										<div className="shipping-summary-col col-12 col-md-4 shipping-method-info ">
											<div className="row no-gutters">
												<div className="col-12">
													<div className="content-asset">
														{/* dwMarker="content" dwContentID="27a1d07883ba35663361cd28d7" */}
														<p className="message">
															Please note: This item ships directly from our
															factory and will arrive to you in a wood crate.
														</p>
														<a className="link" href="/">
															Learn More&nbsp;&gt;
														</a>
													</div>
													{/* End content-asset */}
												</div>
											</div>
											{/* /.row */}
										</div>
									</div>
									{/* /.row */}
								</div>
								<p className="summary-section-label shipping-addr-label multi-shipping">
									Addresses &amp; shipping methods are listed under your items.
								</p>
							</div>
						</div>
						{/* Step 2: Payment and Billing*/}
						<div className="card payment-form">
							<div className="card-header">
								<span className="checkout-step-number filled">2</span>
								<h6 className="checkout-card-header">Billing</h6>
							</div>
							<div className="card-body">
								<form
									autoComplete="on"
									method="POST"
									action="/on/demandware.store/Sites-cubcadet-Site/en_US/CheckoutServices-SubmitPayment"
									data-address-mode="edit"
									name="dwfrm_billing"
									id="dwfrm_billing"
									noValidate="">
									{/* Billing Address Selector                                             */}
									<fieldset className="address-selector-block">
										<legend>
											<h6>Billing Address</h6>
										</legend>
										<div>
											<label
												className="form-control-label d-none d-none-shipment"
												htmlFor="addressSelector">
												Billing Address
											</label>
											<div className="select-wrapper select-wrapper--secondary">
												<select
													name="addressSelector"
													id="addressSelector"
													className="addressSelector form-control"
													data-create-shipment-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Checkout-SetBillingAddress">
													<option
														className=""
														value="new"
														data-first-name=""
														data-last-name=""
														data-address1=""
														data-address2=""
														data-city=""
														data-state-code=""
														data-postal-code=""
														data-country-code=""
														data-phone=""
														data-is-gift=""
														data-gift-message="">
														New Address
													</option>
													<option disabled="">- Existing Shipments -</option>
													<option
														className=""
														value="729ae00bf9f094c0de351ea47f"
														data-first-name="Todd"
														data-last-name="Heckeler"
														data-address1="2173 Mars Ave"
														data-address2=""
														data-city="Lakewood"
														data-state-code="OH"
														data-postal-code={44107}
														data-country-code="US"
														data-phone={2162283651}
														data-is-gift="true"
														data-gift-message="">
														Name 2173 Address Ave City ST 44111
													</option>
												</select>
												<span className="selector" />
											</div>
											<div className="invalid-feedback" />
											<div className="row">
												<a
													className="col-6 col-lg-3 btn-show-details"
													href="#top">
													Update Address
												</a>
												<a className="col-6 col-lg-9 btn-add-new" href="#top">
													Add New Address
												</a>
											</div>
										</div>
										{/* Billing Address                                                      */}
										<div className="billing-address">
											<div className="row">
												<div className="col-sm-6">
													<div className=" required  dwfrm_billing_addressFields_firstName">
														<label
															className="form-control-label"
															htmlFor="billingFirstName">
															First Name
														</label>
														<input
															autoFocus=""
															type="text"
															className="form-control billingFirstName"
															id="billingFirstName"
															autoComplete="given-name"
															defaultValue=""
															name="dwfrm_billing_addressFields_firstName"
															required=""
															maxLength={17}
														/>
														<div className="invalid-feedback" />
													</div>
												</div>
												<div className="col-sm-6">
													<div className=" required  dwfrm_billing_addressFields_lastName">
														<label
															className="form-control-label"
															htmlFor="billingLastName">
															Last Name
														</label>
														<input
															type="text"
															className="form-control billingLastName"
															id="billingLastName"
															autoComplete="family-name"
															defaultValue=""
															name="dwfrm_billing_addressFields_lastName"
															required=""
															maxLength={17}
														/>
														<div className="invalid-feedback" />
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm-6">
													<div className=" required  dwfrm_billing_addressFields_address1">
														<label
															className="form-control-label"
															htmlFor="billingAddressOne">
															Address 1
														</label>
														<input
															type="text"
															className="form-control billingAddressOne"
															id="billingAddressOne"
															autoComplete="billing address-line1"
															defaultValue=""
															name="dwfrm_billing_addressFields_address1"
															required=""
															maxLength={35}
															pattern="^(?!.*(?:(.*(([pP]|[pP][oO][sS][tT])[-.\s]*([oO]|[oO][fF][fF][iI][cC][eE])[-.\s]*([bB]|[bB][oO][xX]|[bB][iI][nN])[-.\s]*(#?\d))|.*(([pP]|[pP][oO][sS][tT])[-.\s]*([oO]|[oO][fF][fF][iI][cC][eE]|[bB][oO][xX]|[bB][iI][nN])[-.\s]*(#?\d))))).*$"
														/>
														<div className="invalid-feedback" />
													</div>
												</div>
												<div className="col-sm-6">
													<div className=" dwfrm_billing_addressFields_address2">
														<label
															className="form-control-label"
															htmlFor="billingAddressTwo">
															Address 2
														</label>
														<input
															type="text"
															className="form-control billingAddressTwo"
															id="billingAddressTwo"
															autoComplete="billing address-line2"
															defaultValue=""
															name="dwfrm_billing_addressFields_address2"
															maxLength={35}
														/>
														<div className="invalid-feedback" />
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm-6">
													<div className=" required  dwfrm_billing_addressFields_country">
														<label
															className="form-control-label"
															htmlFor="billingCountry">
															Country
														</label>
														<div className="select-wrapper select-wrapper--secondary">
															<select
																className="form-control billingCountry custom-select"
																id="billingCountry"
																autoComplete="billing country"
																name="dwfrm_billing_addressFields_country"
																required="">
																<option id="US" value="US">
																	United States
																</option>
															</select>
															<span className="selector" />
														</div>
														<div className="invalid-feedback" />
													</div>
												</div>
												<div className="col-sm-6">
													<div className=" required  dwfrm_billing_addressFields_city">
														<label
															className="form-control-label"
															htmlFor="billingAddressCity">
															City
														</label>
														<input
															type="text"
															className="form-control billingAddressCity"
															id="billingAddressCity"
															autoComplete="billing address-level2"
															defaultValue=""
															name="dwfrm_billing_addressFields_city"
															required=""
															maxLength={35}
															minLength={2}
														/>
														<div className="invalid-feedback" />
													</div>
												</div>
											</div>
											<div className="row">
												<div className="col-sm-6">
													<div className=" required  dwfrm_billing_addressFields_states_stateCode">
														<label
															className="form-control-label"
															htmlFor="billingState">
															State
														</label>
														<div className="select-wrapper select-wrapper--secondary">
															<select
																className="form-control billingState custom-select"
																id="billingState"
																autoComplete="billing address-level1"
																name="dwfrm_billing_addressFields_states_stateCode"
																required="">
																<option id="" value=""></option>
																<option id="AL" value="AL">
																	Alabama
																</option>
																<option id="AK" value="AK">
																	Alaska
																</option>
																<option id="AZ" value="AZ">
																	Arizona
																</option>
																<option id="AR" value="AR">
																	Arkansas
																</option>
																<option id="CA" value="CA">
																	California
																</option>
																<option id="CO" value="CO">
																	Colorado
																</option>
																<option id="CT" value="CT">
																	Connecticut
																</option>
																<option id="DE" value="DE">
																	Delaware
																</option>
																<option id="DC" value="DC">
																	District of Columbia
																</option>
																<option id="FL" value="FL">
																	Florida
																</option>
																<option id="GA" value="GA">
																	Georgia
																</option>
																<option id="HI" value="HI">
																	Hawaii
																</option>
																<option id="ID" value="ID">
																	Idaho
																</option>
																<option id="IL" value="IL">
																	Illinois
																</option>
																<option id="IN" value="IN">
																	Indiana
																</option>
																<option id="IA" value="IA">
																	Iowa
																</option>
																<option id="KS" value="KS">
																	Kansas
																</option>
																<option id="KY" value="KY">
																	Kentucky
																</option>
																<option id="LA" value="LA">
																	Louisiana
																</option>
																<option id="ME" value="ME">
																	Maine
																</option>
																<option id="MD" value="MD">
																	Maryland
																</option>
																<option id="MA" value="MA">
																	Massachusetts
																</option>
																<option id="MI" value="MI">
																	Michigan
																</option>
																<option id="MN" value="MN">
																	Minnesota
																</option>
																<option id="MS" value="MS">
																	Mississippi
																</option>
																<option id="MO" value="MO">
																	Missouri
																</option>
																<option id="MT" value="MT">
																	Montana
																</option>
																<option id="NE" value="NE">
																	Nebraska
																</option>
																<option id="NV" value="NV">
																	Nevada
																</option>
																<option id="NH" value="NH">
																	New Hampshire
																</option>
																<option id="NJ" value="NJ">
																	New Jersey
																</option>
																<option id="NM" value="NM">
																	New Mexico
																</option>
																<option id="NY" value="NY">
																	New York
																</option>
																<option id="NC" value="NC">
																	North Carolina
																</option>
																<option id="ND" value="ND">
																	North Dakota
																</option>
																<option id="OH" value="OH">
																	Ohio
																</option>
																<option id="OK" value="OK">
																	Oklahoma
																</option>
																<option id="OR" value="OR">
																	Oregon
																</option>
																<option id="PA" value="PA">
																	Pennsylvania
																</option>
																<option id="RI" value="RI">
																	Rhode Island
																</option>
																<option id="SC" value="SC">
																	South Carolina
																</option>
																<option id="SD" value="SD">
																	South Dakota
																</option>
																<option id="TN" value="TN">
																	Tennessee
																</option>
																<option id="TX" value="TX">
																	Texas
																</option>
																<option id="UT" value="UT">
																	Utah
																</option>
																<option id="VT" value="VT">
																	Vermont
																</option>
																<option id="VA" value="VA">
																	Virginia
																</option>
																<option id="WA" value="WA">
																	Washington
																</option>
																<option id="WV" value="WV">
																	West Virginia
																</option>
																<option id="WI" value="WI">
																	Wisconsin
																</option>
																<option id="WY" value="WY">
																	Wyoming
																</option>
															</select>
															<span className="selector" />
														</div>
														<div className="invalid-feedback" />
													</div>
												</div>
												<div className="col-sm-6">
													<div className=" required  dwfrm_billing_addressFields_postalCode">
														<label
															className="form-control-label"
															htmlFor="billingZipCode">
															Zip
														</label>
														<input
															type="text"
															className="form-control billingZipCode"
															id="billingZipCode"
															autoComplete="billing postal-code"
															defaultValue=""
															name="dwfrm_billing_addressFields_postalCode"
															required=""
															maxLength={10}
															minLength={5}
															pattern="^\d{5}(-\d{4})?$"
														/>
														<div className="invalid-feedback" />
														<span>Ex: 12345</span>
													</div>
												</div>
											</div>
											<fieldset className="shipping-address-block">
												<legend>
													<h6>Contact Information</h6>
												</legend>
											</fieldset>
											<div className="row">
												<div className="col-sm-6">
													<div
														className=" billing-phone-field
      required  dwfrm_billing_creditCardFields_phone">
														<label
															className="form-control-label"
															htmlFor="phoneNumber">
															Phone Number
														</label>
														<input
															type="tel"
															className="form-control phone"
															id="phoneNumber"
															autoComplete="tel"
															data-pattern-mismatch="Please enter using the format 9876543210"
															defaultValue=""
															name="dwfrm_billing_creditCardFields_phone"
															required=""
															maxLength={10}
															pattern="^\(?([2-9][0-8][0-9])\)?[\-\. ]?([2-9][0-9]{2})[\-\. ]?([0-9]{4})(\s*x[0-9]+)?$"
														/>
														<div className="invalid-feedback" />
														<span className="info-icon ">
															<img
																className="icon"
																src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwfb1a03d9/images/svg-icons/icon-help.svg"
																alt="Tooltip Icon"
																data-toggle="popover"
																tabIndex={0}
																data-placement="top"
																title=""
																data-original-title="The phone number associated with this credit card."
															/>
														</span>
														<span className="input-description">
															Ex: 9234567890
														</span>
													</div>
												</div>
											</div>
										</div>
									</fieldset>
									{/* Payment Options                                                      */}
									<Finance />
									<input
										type="hidden"
										name="csrf_token"
										defaultValue="gayplmCMvym9ikKotBJUMdNzXXkjLP5pssNwRzrmAHKN6yvkpexFMF8rMAItCNaF8NKGtXCvlJukAuRO47SjIHXastp-SKql1pnXSH1TwVZ8byHg6ORhznV9Zcwf63mj3z-Qg1baUuhZKapDftuVmli1r0ulnjtx7Fc3AyGreJTix9g17yc="
									/>
								</form>
								<div className="col-12 next-step-button">
									<div className="next-step-button-inner">
										<button
											className="btn btn-secondary btn-block submit-payment js-pay-btn"
											type="submit"
											name="submit"
											value="submit-payment">
											Continue to Order Review
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="card payment-summary">
							<div className="card-header clearfix">
								<span className="checkout-step-number ">2</span>
								<h6 className="checkout-card-header">Billing</h6>
								<span
									className="edit-button pull-right"
									aria-label="Edit Delivery Address">
									Edit
								</span>
							</div>
							<div className="card-body">
								<div className="row billing-summary-row">
									<div className="billing-summary-col col-12 col-md-4 ">
										<div className="summary-section-label billing-addr-label">
											Billing Information
										</div>
										<div className="summary-details billing">
											<div className="address-summary">
												<div className="summary-section-sublabel">
													<span className="firstName">Todd</span>
													<span className="lastName">Heckeler</span>
												</div>
												<div className="summary-section-report">
													<div className="address1">2173 Mars Ave</div>
													<div className="address2" />
													<span className="city">Lakewood</span>
													<span className="stateCode">OH</span>
													<span className="postalCode">44107</span>
												</div>
											</div>
											<div className="order-summary-phone">2162283651</div>
										</div>
									</div>
									<div className="billing-summary-col col-12 col-md-4">
										<div className="summary-details">
											<div className="summary-section-label payment-info-label">
												Payment Method
											</div>
											<div className="summary-section-report">
												<div className="payment-details" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Product Registration for EW Purchase*/}
						{/* Checkout Step Fake Accordions */}
						<div className="row fake-checkout-steps">
							<div className="col-12 payment-card">
								<div className="card payment">
									<div className="card-header">
										<span className="checkout-step-number ">2</span>
										<h6 className="checkout-card-header">Billing</h6>
									</div>
								</div>
							</div>
							<div className="col-12 order-review-card">
								<div className="card order-review">
									<div className="card-header">
										<span className="checkout-step-number">3</span>
										<h6 className="checkout-card-header">Order Review</h6>
									</div>
								</div>
							</div>
						</div>
						{/* Step 3: Order Review */}
						<div className="card review-summary">
							<div className="card-header clearfix">
								<span className="checkout-step-number filled">3</span>
								<h6 className="checkout-card-header">Review Order</h6>
							</div>
							<div className="card-body">
								<div className="row">
									<div className="col-12">
										<div className="customer-message-review">
											Please take a moment to review all the details on this
											page are accurate.
										</div>
									</div>
								</div>
								<div className="col-12 next-step-button">
									<div className="next-step-button-inner">
										<button
											className="btn btn-secondary btn-block place-order"
											data-action="/on/demandware.store/Sites-cubcadet-Site/en_US/CheckoutServices-PlaceOrder"
											type="submit"
											name="submit"
											value="place-order">
											<span className="d-none d-md-inline">Submit Order</span>
											<span className="d-md-none">Submit</span>
										</button>
									</div>
								</div>
							</div>
						</div>
						{/* Checkout Workflow Buttons */}
						<div className="row no-gutters checkout-button">
							<div className="col-12 next-step-button">
								<div className="next-step-button-inner">
									<input
										type="hidden"
										name="prop65VerifyUrl"
										id="prop65VerifyUrl"
										defaultValue="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Prop65-Verify"
									/>
								</div>
							</div>
						</div>
					</div>
					{/* Order Totals, Details and Summary */}
					<div className="col-md-4 order-summary">
						<div className="card">
							<div className="card-header">
								<h6>Your Items (1)</h6>
								<span className="edit-link" aria-label="">
									<a
										href="https://www.cubcadet.com/en_US/cart"
										title="Edit Cart"
										aria-label="Edit Cart">
										Edit Order
									</a>
								</span>
							</div>
							<div className="card-body order-total-summary">
								<div className="order-total-summary-heading">
									<h6>Items to Ship</h6>
								</div>
								<div className="order-total-summary-products">
									<div className="row order-product-summary">
										<div className="col product-summary-block">
											<div
												className="product-line-item"
												data-product-line-item="e9e7b75881874b33671b0b82d0">
												<div className="product-line-item-row row  no-gutters ">
													<div className="item-image  col-6 ">
														<img
															className="product-image"
															src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw40c262c8/products/Attachments_Accessories/19A30014OEM_12.jpg?sw=180&sh=180&sm=fit"
															alt="Bagger for 30-inch Decks"
															title="Bagger for 30-inch Decks"
														/>
													</div>
													<div className="product-line-item-details  col-6 ">
														<div className="line-item-header">
															<div className="line-item-name">
																<span>Bagger for 30-inch Decks</span>
															</div>
															<p className="item-number ">
																<strong>Item#:</strong> 19A30014OEM
															</p>
														</div>
														<div className="item-attributes">
															<div className="item-options"></div>
														</div>
														<div className="product-line-item-results row">
															<div className="col-12 line-item-price-e9e7b75881874b33671b0b82d0">
																<div className="row no-gutters">
																	<p className="line-item-price-info  col-5">
																		Price:
																	</p>
																	<div className="col-7">
																		<div
																			className="price"
																			itemProp="offers"
																			itemScope=""
																			itemType="http://schema.org/Offer">
																			<span>
																				<meta
																					itemProp="priceCurrency"
																					content="USD"
																				/>
																				<span className="sales">
																					<span
																						className="value"
																						itemProp="price"
																						content="389.99"
																					/>
																					<span className="msrp-text d-none">
																						From
																					</span>
																					<span className="formatted-price">
																						$389.99
																					</span>
																					<span className="msrp-text d-none">
																						MSRP
																					</span>
																					<span className="info-icon msrp-info">
																						<span
																							className="icon"
																							data-toggle="tooltip"
																							title=""
																							data-original-title="Manufacturer’s buy online price. Taxes are additional and vary by location. Freight, setup, delivery, PDI, and other dealer specific charges are not included in the pricing and vary by dealer. Prices shown are in U.S dollars and valid only in the United States."></span>
																					</span>
																				</span>
																			</span>
																		</div>
																	</div>
																</div>
															</div>
															<div className="line-item-quantity col-12">
																<p className="line-item-pricing-info row no-gutters">
																	<span className="line-item-total-text qty-card-quantity-label col-5">
																		Qty:
																	</span>
																	<span className="pricing qty-card-quantity-count col-7">
																		1
																	</span>
																</p>
															</div>
															<div className="line-item-total-price justify-content-end col-12">
																<div className="row no-gutters">
																	<p className="line-item-pricing-info col-5">
																		<span className="line-item-total-text line-item-total-price-label ">
																			Total:
																		</span>
																	</p>
																	<div className="item-total-e9e7b75881874b33671b0b82d0 price col-7">
																		<div className="pricing line-item-total-price-amount item-total-e9e7b75881874b33671b0b82d0">
																			$389.99
																		</div>
																	</div>
																</div>
																{/* / .row */}
															</div>
														</div>
														<div className="item-prop65-msg half-width d-none invisible">
															<div className="alert brand-warning alert-sm">
																<span className="font-bold">Warning:</span>
																Cancer and Reproductive Harm –
																<a
																	href="http://www.P65Warnings.ca.gov"
																	target="_blank"
																	title="go to the Proposition65 website">
																	www.P65Warnings.ca.gov
																</a>
															</div>
														</div>
													</div>
													<div className="item-prop65-msg full-width d-none invisible">
														<div className="alert brand-warning alert-sm">
															<span className="font-bold">Warning:</span>
															Cancer and Reproductive Harm –
															<a
																href="http://www.P65Warnings.ca.gov"
																target="_blank"
																title="go to the Proposition65 website">
																www.P65Warnings.ca.gov
															</a>
														</div>
													</div>
												</div>
											</div>
											<div
												className="multi-shipping"
												data-shipment-summary="729ae00bf9f094c0de351ea47f">
												<h6 className="shipping-header-text">Shipping To</h6>
												<p>
													<span className="ship-to-message" />
													<span className="ship-to-name">Todd Heckeler</span>
													<span className="ship-to-address1">
														2173 Mars Ave
													</span>
													<span
														className="ship-to-address2"
														style={{ display: "none" }}
													/>
													<span className="ship-to-city-st-zip">
														<span className="ship-to-city">Lakewood</span>
														<span className="ship-to-st">OH</span>
														<span className="ship-to-zip">44107</span>
													</span>
													<span className="ship-to-phone">2162283651</span>
												</p>
												<h5>
													Shipping Method
													<span />
												</h5>
												<div className="row">
													<p className="col-8">
														<span className="display-name">Standard</span>
														<span className="arrival-time">
															( 3 - 5 business days )
														</span>
													</p>
													<p className="col-4 text-right">
														<span className="price">$0.00</span>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="order-total-summary-recap">
									<h6 className="order-total-summary-recap-heading">
										Order Summary
									</h6>
									<div className="order-total-summary-recap-body">
										<div className="row no-gutters order-total-summary-row subtotal-item">
											<div className="col-5">
												<p className="order-receipt-label">
													<span>Subtotal</span>
												</p>
											</div>
											<div className="col-7">
												<p className="order-receipt-value text-right">
													<span className="sub-total">$389.99</span>
												</p>
											</div>
										</div>
										<div
											className="row no-gutters order-total-summary-row order-discount hide-order-discount"
											style={{ display: "none" }}>
											<div className="col-5">
												<p className="order-receipt-label">
													<span>Order Discount</span>
												</p>
											</div>
											<div className="col-7">
												<p className="order-receipt-value text-right">
													<span className="order-discount-total">-$0.00</span>
												</p>
											</div>
										</div>
										<div className="row no-gutters order-total-summary-row shipping-item ">
											<div className="col-5">
												<p className="order-receipt-label">
													<span>Delivery Charge</span>
												</p>
											</div>
											<div className="col-7">
												<p className="order-receipt-value text-right">
													<span className="shipping-total-cost">$0.00</span>
												</p>
											</div>
										</div>
										<div
											className="row no-gutters order-total-summary-row shipping-discount hide-shipping-discount"
											style={{ display: "none" }}>
											<div className="col-5">
												<p className="order-receipt-label">
													<span>Delivery Discount</span>
												</p>
											</div>
											<div className="col-7">
												<p className="order-receipt-value text-right">
													<span className="shipping-discount-total">
														-$0.00
													</span>
												</p>
											</div>
										</div>
										<div className="row no-gutters order-total-summary-row sales-tax-item">
											<div className="col-5">
												<p className="order-receipt-label">
													<span>Sales Tax</span>
												</p>
											</div>
											<div className="col-7">
												<p className="order-receipt-value text-right">
													<span className="tax-total">$26.32</span>
												</p>
											</div>
										</div>
										<div className="row grand-total order-total-summary-row no-gutters">
											<div className="col-5">
												<p className="order-receipt-label">
													<span>Estimated Total</span>
												</p>
											</div>
											<div className="col-7">
												<p className="order-receipt-value text-right">
													<span className="grand-total-sum">$416.31</span>
												</p>
											</div>
										</div>
									</div>
								</div>
								{/* Prop65 Message and checkbox */}
								<div
									className="prop65-checkout-message card"
									style={{ display: "none" }}>
									<div className="card-body">
										<div className="content-asset">
											{/* dwMarker="content" dwContentID="9304b3363808c50b7a9dc8a26c" */}
											<div style={{ color: "red" }}>
												<strong>Notice: </strong>The Proposition 65
												acknowledgement box below must be checked to proceed
												with your order
											</div>
										</div>
										{/* End content-asset */}
										<div className=" custom-control custom-checkbox">
											<input
												type="checkbox"
												className="custom-control-input"
												id="acknowledgeProp65"
												name="acknowledgeProp65"
											/>
											<label
												className="custom-control-label"
												htmlFor="acknowledgeProp65">
												I acknowledge items in my cart display Proposition 65
												warnings.
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckoutIndex;
