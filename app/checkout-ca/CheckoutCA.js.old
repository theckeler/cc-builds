"use client";
import { useState, useEffect } from "react";

import StateSelector from "./StateSelector";
import ItemBlock from "./ItemBlock";
import ErrorMessage from "./ErrorMessage";

export default function CheckoutCA() {
	const [curState, setCurState] = useState("");
	useEffect(() => {
		document.querySelector(".submit-shipping").disabled = false;
		if (curState === "CA") {
			console.log(curState);
			document.querySelector(".submit-shipping").disabled = true;
		}
	}, [curState]);

	return (
		<div
			id="checkout-main"
			className="checkout-main container data-checkout-stage "
			data-customer-type="guest"
			data-checkout-stage="shipping"
			data-checkout-get-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/CheckoutServices-Get"
			data-verify-address-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/AVS-Verify"
			data-use-original-address-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/AVS-UseOriginal"
			data-product-registration="">
			<div className="row d-md-none mb-1 sr-only">
				<div className="col-12">
					<span className="grand-total-label">1 Items</span>
					<span className="grand-total-price">$399.00</span>
				</div>
			</div>
			<div className="row">
				<div className="col-md-8">
					{/* Checkout Forms: Shipping, Payment, Coupons, Billing, etc */}
					{/* <div className="alert alert-danger error-message" role="alert">
						<p className="error-message-text" />
					</div> */}
					{/* Step 1: Shipping */}
					<div className="shipping-section">
						<div className="single-shipping">
							<div
								className="card"
								data-shipment-uuid="a19014b679290082650beb4dc7">
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
												defaultValue="a19014b679290082650beb4dc7"
											/>
											<input
												name="shipmentUUID"
												type="hidden"
												defaultValue="a19014b679290082650beb4dc7"
											/>
											<input
												type="hidden"
												name="csrf_token"
												defaultValue="M5rGAB-uR9sBuXSzhWj2llyXR6CffengcxKiapFNW_hIuWWhoPJw6Sp5E7NzZq4Nc-HIZnDMi_vQE9lHi6AF4zDe35UalEMNliKQNYL0gWwsKYFrWMho0eYHDsIzmsqACx1lPYtZMXLNQsVFi8pEdFmjV7A7AxfLEKTArLyIoJCbwomyL-g="
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
																<input
																	name="shipmentUUID"
																	type="hidden"
																	defaultValue="a19014b679290082650beb4dc7"
																/>
																<div className="form-check col-9">
																	<input
																		id="shippingMethod-LTL-standard"
																		name="dwfrm_shipping_shippingAddress_shippingMethodID"
																		type="radio"
																		className="custom-control-input form-check-input"
																		defaultValue="LTL-standard"
																		aria-labelledby="shippingMethod-LTL-standard-label"
																		data-pickup="null"
																		defaultChecked=""
																	/>
																	<label
																		className="custom-control-label shipping-method-option"
																		htmlFor="shippingMethod-LTL-standard"
																		id="shippingMethod-LTL-standard-label">
																		<span className="display-name">
																			Truck Delivery
																		</span>
																		<span className="shipping-cost">
																			$39.00
																		</span>
																		<div className="font-weight-normal arrival-time">
																			(3 - 5 business days)
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
																</div>{" "}
																{/* End content-asset */}
															</div>
														</div>
													</div>
												</fieldset>
												<div className="clearfix mb-4 mb-sm-0">
													<hr className="d-none d-sm-block" />
												</div>
												<fieldset className="shipment-selector-block d-none ">
													<div className="form-group">
														<label
															className="form-control-label"
															htmlFor="shipmentSelector-bc8ad310229ec8756b51f5d1a5">
															Select From a Saved Address
														</label>
														<div className="select-wrapper select-wrapper--secondary">
															<select
																name="shipmentSelector"
																id="shipmentSelector-bc8ad310229ec8756b51f5d1a5"
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
																href="#none"
																className="col-6 col-md-3 btn-show-details normal">
																Update Address
															</a>
															<a
																href="#none"
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
																className="form-group
          required
          dwfrm_shipping_shippingAddress_addressFields_firstName">
																<label
																	className="form-control-label"
																	id="shippingFirstNameLabel"
																	htmlFor="shippingFirstName">
																	First Name
																</label>
																<input
																	aria-labelledby="shippingFirstNameLabel"
																	type="text"
																	className="form-control shippingFirstName"
																	id="shippingFirstName"
																	autoComplete="given-name"
																	defaultValue="Joe"
																	name="dwfrm_shipping_shippingAddress_addressFields_firstName"
																	required=""
																	maxLength={17}
																/>
																{/* <div
																	className="invalid-feedback"
																	id={16963460158050}>
																	<strong>Required Field: </strong>(First Name)
																	Please fill out this field.
																</div> */}
															</div>
														</div>
														<div className="col-sm-6">
															<div
																className="form-group
          required
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
																	defaultValue="Smith"
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
														<div className="col-sm-6 shipping-checkout-field">
															<div
																className="form-group
          required
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
																	className="form-control shippingAddressOne pac-target-input"
																	id="shippingAddressOne"
																	placeholder=""
																	defaultValue="234 Main Ave"
																	autoComplete="off"
																	data-pattern-mismatch="Please enter an address that is not a P.O. Box."
																	name="dwfrm_shipping_shippingAddress_addressFields_address1"
																	required=""
																	maxLength={35}
																	pattern="^(?!.*(?:(.*(([pP]|[pP][oO][sS][tT])[-.\s]*([oO]|[oO][fF][fF][iI][cC][eE])[-.\s]*([bB]|[bB][oO][xX]|[bB][iI][nN])[-.\s]*(#?\d))|.*(([pP]|[pP][oO][sS][tT])[-.\s]*([oO]|[oO][fF][fF][iI][cC][eE]|[bB][oO][xX]|[bB][iI][nN])[-.\s]*(#?\d))))).*$"
																/>
																<div className="invalid-feedback" />
															</div>
														</div>
														<div className="col-sm-6 shipping-checkout-field">
															<div
																className="form-group
          
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
														<div className="col-sm-6 shipping-checkout-field">
															<div
																className="form-group
          required
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
														<div className="col-sm-6 shipping-checkout-field">
															<div
																className="form-group
          required
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
																	defaultValue="Small Town"
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
														<div className="col-sm-6 shipping-checkout-field">
															{/* ------------------------------------------------------------------------------------------ */}
															<StateSelector
																setCurState={setCurState}
																curState={curState}
															/>
															{/* ------------------------------------------------------------------------------------------ */}
														</div>
														<div className="col-sm-6 shipping-checkout-field">
															<div
																className="form-group
          required
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
																className="form-group
          required
          dwfrm_shipping_shippingAddress_addressFields_firstName">
																<label
																	className="form-control-label text-danger"
																	id="shippingFirstNameLabel"
																	htmlFor="shippingFirstName">
																	First Name
																</label>
																<input
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
																className="form-group
          required
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
														<div className="col-sm-6 shipping-checkout-field">
															<div
																className="form-group
          required
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
														<div className="col-sm-6 shipping-checkout-field">
															<div
																className="form-group
          
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
														<div className="col-sm-6 shipping-checkout-field">
															<div
																className="form-group
          required
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
																		<option id="">United States</option>
																	</select>
																	<span className="selector" />
																</div>
																<div className="invalid-feedback" />
															</div>
														</div>
														<div className="col-sm-6 shipping-checkout-field">
															<div
																className="form-group
          required
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
														<div className="col-sm-6 shipping-checkout-field">
															<div
																className="form-group
          required
          dwfrm_shipping_shippingAddress_addressFields_states_stateCode">
																<label
																	className="form-control-label"
																	htmlFor="shippingState"
																	id="shippingStateLabel">
																	State
																</label>
																<div
																	className="select-wrapper select-wrapper--secondary"
																	onClick={(e) => {
																		console.log("onClick");
																	}}>
																	<select
																		className="form-control shippingState custom-select"
																		aria-labelledby="shippingStateLabel"
																		id="shippingState"
																		autoComplete="shipping address-level1"
																		name="dwfrm_shipping_shippingAddress_addressFields_states_stateCode"
																		onSelect={(e) => {
																			console.log("select");
																		}}>
																		<option id=""> </option>
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
														<div className="col-sm-6 shipping-checkout-field">
															<div
																className="form-group
          required
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

													{curState === "CA" && <ErrorMessage />}

													<fieldset className="shipping-address-block">
														<legend>
															<h6>Contact Information</h6>
														</legend>
													</fieldset>
													<div className="row">
														<div className="col-sm-6">
															<div className="row">
																<div className="col">
																	<div
																		className="form-group
      required dwfrm_shipping_shippingAddress_orderContactFields_email">
																		<label
																			className="form-control-label"
																			id="shippingEmailLabel"
																			htmlFor="email">
																			Email Address
																		</label>
																		<input
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
																	<div
																		className="form-group
      required dwfrm_shipping_shippingAddress_orderContactFields_email_confirm">
																		<label
																			className="form-control-label"
																			id="shippingEmailConfirmLabel"
																			htmlFor="email-confirm">
																			Confirm Email Address
																		</label>
																		<input
																			autoComplete="off"
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
																	<div className="form-group email-signup-group dwfrm_shipping_shippingAddress_orderContactFields_emailSignup">
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
																					Sign up for emails and special offers
																				</label>
																			</div>
																		</fieldset>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-sm-6">
															<div
																className="form-group
      required
      dwfrm_shipping_shippingAddress_addressFields_phone">
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
																		src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw9a7d8095/images/svg-icons/icon-help.svg"
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
															<div className="form-group">
																<div className="custom-control custom-checkbox">
																	<input
																		className="custom-control-input gift"
																		type="hidden"
																		id="isGift-default-a19014b679290082650beb4dc7"
																		name="dwfrm_shipping_shippingAddress_isGift"
																		defaultValue="true"
																	/>
																	<label
																		htmlFor="isGift-default-a19014b679290082650beb4dc7"
																		className="custom-control-label checkout-checkbox">
																		This is a Gift
																	</label>
																</div>
															</div>
														</div>
													</div>
													<div className="row gift-message d-none">
														<div className="col-12">
															<div className="form-group">
																<label htmlFor="giftMessage">Message</label>
																<textarea
																	className="form-control gift-message-a19014b679290082650beb4dc7"
																	id="giftMessage"
																	rows={3}
																	name="dwfrm_shipping_shippingAddress_giftMessage"
																	maxLength={250}
																	defaultValue={""}
																/>
															</div>
														</div>
													</div>
												</fieldset>
											</div>
											<div className="view-address-block d-none">
												<h6>
													Shipping Method
													<span></span>
												</h6>
												<div className="row">
													<p className="col-8">
														<span className="display-name">Truck Delivery</span>
														<span className="font-weight-normal arrival-time">
															(3 - 5 business days)
														</span>
													</p>
													<p className="col-4 text-right">
														<span className="price">$39.00</span>
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
								data-shipment-uuid="a19014b679290082650beb4dc7">
								<div className="card-header">
									<ItemBlock curState={curState} />
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
											defaultValue="7789652938c304bdbc4f258be7"
										/>
										<input
											name="originalShipmentUUID"
											type="hidden"
											defaultValue="a19014b679290082650beb4dc7"
										/>
										<input
											name="shipmentUUID"
											type="hidden"
											defaultValue="a19014b679290082650beb4dc7"
										/>
										<input
											type="hidden"
											name="csrf_token"
											defaultValue="M5rGAB-uR9sBuXSzhWj2llyXR6CffengcxKiapFNW_hIuWWhoPJw6Sp5E7NzZq4Nc-HIZnDMi_vQE9lHi6AF4zDe35UalEMNliKQNYL0gWwsKYFrWMho0eYHDsIzmsqACx1lPYtZMXLNQsVFi8pEdFmjV7A7AxfLEKTArLyIoJCbwomyL-g="
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
															<input
																name="shipmentUUID"
																type="hidden"
																defaultValue="a19014b679290082650beb4dc7"
															/>
															<div className="form-check col-9">
																<input
																	id="shippingMethod-LTL-standard"
																	name="dwfrm_shipping_shippingAddress_shippingMethodID"
																	type="radio"
																	className="custom-control-input form-check-input"
																	defaultValue="LTL-standard"
																	aria-labelledby="shippingMethod-LTL-standard-label"
																	data-pickup="null"
																	defaultChecked=""
																/>
																<label
																	className="custom-control-label shipping-method-option"
																	htmlFor="shippingMethod-LTL-standard"
																	id="shippingMethod-LTL-standard-label">
																	<span className="display-name">
																		Truck Delivery
																	</span>
																	<span className="shipping-cost">$39.00</span>
																	<div className="font-weight-normal arrival-time">
																		(3 - 5 business days)
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
																	Please note: This item ships directly from our
																	factory and will arrive to you in a wood
																	crate.
																</p>
																<a className="link" href="/">
																	Learn More&nbsp;&gt;
																</a>
															</div>{" "}
															{/* End content-asset */}
														</div>
													</div>
												</div>
											</fieldset>
											<div className="clearfix mb-4 mb-sm-0">
												<hr className="d-none d-sm-block" />
											</div>
											<fieldset className="shipment-selector-block  ">
												<div className="form-group">
													<label
														className="form-control-label"
														htmlFor="shipmentSelector-50e1a30da69b51f8a1ce2b954a">
														Select From a Saved Address
													</label>
													<div className="select-wrapper select-wrapper--secondary">
														<select
															name="shipmentSelector"
															id="shipmentSelector-50e1a30da69b51f8a1ce2b954a"
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
															href="#none"
															className="col-6 col-md-3 btn-show-details normal">
															Update Address
														</a>
														<a
															href="#none"
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
															className="form-group
          required
          dwfrm_shipping_shippingAddress_addressFields_firstName">
															<label
																className="form-control-label text-danger"
																id="shippingFirstNameLabel"
																htmlFor="shippingFirstName">
																First Name
															</label>
															<input
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
															className="form-group
          required
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
												<div className="row">
													<div className="col-sm-6 shipping-checkout-field">
														<div
															className="form-group
          required
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
																placeholder=""
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
													<div className="col-sm-6 shipping-checkout-field">
														<div
															className="form-group
          
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
													<div className="col-sm-6 shipping-checkout-field">
														<div
															className="form-group
          required
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
													<div className="col-sm-6 shipping-checkout-field">
														<div
															className="form-group
          required
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
													<div className="col-sm-6 shipping-checkout-field">
														<div
															className="form-group
          required
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
																	<option id=""> </option>
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
													<div className="col-sm-6 shipping-checkout-field">
														<div
															className="form-group
          required
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
															className="form-group
          required
          dwfrm_shipping_shippingAddress_addressFields_firstName">
															<label
																className="form-control-label text-danger"
																id="shippingFirstNameLabel"
																htmlFor="shippingFirstName">
																First Name
															</label>
															<input
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
															className="form-group
          required
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
													<div className="col-sm-6 shipping-checkout-field">
														<div
															className="form-group
          required
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
													<div className="col-sm-6 shipping-checkout-field">
														<div
															className="form-group
          
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
													<div className="col-sm-6 shipping-checkout-field">
														<div
															className="form-group
          required
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
																	<option id="">United States</option>
																</select>
																<span className="selector" />
															</div>
															<div className="invalid-feedback" />
														</div>
													</div>
													<div className="col-sm-6 shipping-checkout-field">
														<div
															className="form-group
          required
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
													<div className="col-sm-6 shipping-checkout-field">
														<div
															className="form-group
          required
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
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																	<option id="">OH</option>
																</select>
																<span className="selector" />
															</div>
															<div className="invalid-feedback" />
														</div>
													</div>
													<div className="col-sm-6 shipping-checkout-field">
														<div
															className="form-group
          required
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
																<div
																	className="form-group
      required dwfrm_shipping_shippingAddress_orderContactFields_email">
																	<label
																		className="form-control-label"
																		id="shippingEmailLabel"
																		htmlFor="email">
																		Email Address
																	</label>
																	<input
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
																<div
																	className="form-group
      required dwfrm_shipping_shippingAddress_orderContactFields_email_confirm">
																	<label
																		className="form-control-label"
																		id="shippingEmailConfirmLabel"
																		htmlFor="email-confirm">
																		Confirm Email Address
																	</label>
																	<input
																		autoComplete="off"
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
																<div className="form-group email-signup-group dwfrm_shipping_shippingAddress_orderContactFields_emailSignup">
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
																				Sign up for emails and special offers
																			</label>
																		</div>
																	</fieldset>
																</div>
															</div>
														</div>
													</div>
													<div className="col-sm-6">
														<div
															className="form-group
      required
      dwfrm_shipping_shippingAddress_addressFields_phone">
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
																	src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw9a7d8095/images/svg-icons/icon-help.svg"
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
														<div className="form-group">
															<div className="custom-control custom-checkbox">
																<input
																	className="custom-control-input gift"
																	type="hidden"
																	id="isGift-7789652938c304bdbc4f258be7-a19014b679290082650beb4dc7"
																	name="dwfrm_shipping_shippingAddress_isGift"
																	defaultValue="true"
																/>
																<label
																	htmlFor="isGift-7789652938c304bdbc4f258be7-a19014b679290082650beb4dc7"
																	className="custom-control-label checkout-checkbox">
																	This is a Gift
																</label>
															</div>
														</div>
													</div>
												</div>
												<div className="row gift-message d-none">
													<div className="col-12">
														<div className="form-group">
															<label htmlFor="giftMessage">Message</label>
															<textarea
																className="form-control gift-message-a19014b679290082650beb4dc7"
																id="giftMessage"
																rows={3}
																name="dwfrm_shipping_shippingAddress_giftMessage"
																maxLength={250}
																defaultValue={""}
															/>
														</div>
													</div>
												</div>
											</fieldset>
										</div>
										<div className="view-address-block d-none">
											<h6>
												Shipping Method
												<span></span>
											</h6>
											<div className="row">
												<p className="col-8">
													<span className="display-name">Truck Delivery</span>
													<span className="font-weight-normal arrival-time">
														(3 - 5 business days)
													</span>
												</p>
												<p className="col-4 text-right">
													<span className="price">$39.00</span>
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
								data-shipment-summary="a19014b679290082650beb4dc7">
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
										</div>{" "}
										{/* /.row */}
									</div>
									<div className="shipping-summary-col col-12 col-md-4 ">
										<p
											className="summary-section-label shipping-addr-label
    ">
											Shipping Address
										</p>
										<p
											className="summary-section-label dealer-delivery-addr-label
    hidden">
											Delivery Address
										</p>
										<p
											className="summary-section-label dealer-pickup-addr-label
    hidden">
											Delivery Address
										</p>
										<div className="summary-details shipping">
											<div className="address-summary">
												<div className="summary-section-sublabel">
													<span
														className="firstName
      "></span>
													<span
														className="lastName
      "></span>
												</div>
												<div className="dealerName hidden"></div>
												<div className="summary-section-report">
													<span className="address1"></span>
													<span className="address2"></span>
													<span className="city"></span>
													<span className="stateCode"></span>
													<span className="postalCode"></span>
												</div>
											</div>
											<div className="shipping-phone hidden"></div>
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
														<div className="order-email-info"></div>
														<div className="shipping-phone"></div>
													</div>
												</div>
											</div>
										</div>{" "}
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
												</div>{" "}
												{/* End content-asset */}
											</div>
										</div>{" "}
										{/* /.row */}
									</div>
								</div>{" "}
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
								data-address-mode="new"
								name="dwfrm_billing"
								id="dwfrm_billing"
								noValidate="">
								{/* Billing Address Selector                                             */}
								<fieldset className="address-selector-block">
									<legend>
										<h6>Billing Address</h6>
									</legend>
									<div className="form-group">
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
										<div className="row">
											<a
												className="col-6 col-lg-3 btn-show-details"
												href="#none">
												Update Address
											</a>
											<a className="col-6 col-lg-9 btn-add-new" href="#none">
												Add New Address
											</a>
										</div>
									</div>
									{/* Billing Address                                                      */}
									<div className="billing-address">
										<div className="row">
											<div className="col-sm-6">
												<div
													className="form-group
      required
      dwfrm_billing_addressFields_firstName">
													<label
														className="form-control-label"
														htmlFor="billingFirstName">
														First Name
													</label>
													<input
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
												<div
													className="form-group
      required
      dwfrm_billing_addressFields_lastName">
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
											<div className="col-sm-6 billing-checkout-field">
												<div
													className="form-group
      required
      dwfrm_billing_addressFields_address1">
													<label
														className="form-control-label"
														htmlFor="billingAddressOne">
														Address 1
													</label>
													<input
														type="text"
														placeholder=""
														className="form-control billingAddressOne pac-target-input"
														id="billingAddressOne"
														autoComplete="off"
														defaultValue=""
														name="dwfrm_billing_addressFields_address1"
														required=""
														maxLength={35}
														pattern="^(?!.*(?:(.*(([pP]|[pP][oO][sS][tT])[-.\s]*([oO]|[oO][fF][fF][iI][cC][eE])[-.\s]*([bB]|[bB][oO][xX]|[bB][iI][nN])[-.\s]*(#?\d))|.*(([pP]|[pP][oO][sS][tT])[-.\s]*([oO]|[oO][fF][fF][iI][cC][eE]|[bB][oO][xX]|[bB][iI][nN])[-.\s]*(#?\d))))).*$"
													/>
													<div className="invalid-feedback" />
												</div>
											</div>
											<div className="col-sm-6 billing-checkout-field">
												<div
													className="form-group
      
      dwfrm_billing_addressFields_address2">
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
											<div className="col-sm-6 billing-checkout-field">
												<div
													className="form-group
      required
      dwfrm_billing_addressFields_country">
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
											<div className="col-sm-6 billing-checkout-field">
												<div
													className="form-group
      required
      dwfrm_billing_addressFields_city">
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
											<div className="col-sm-6 billing-checkout-field">
												<div
													className="form-group
      required
      dwfrm_billing_addressFields_states_stateCode">
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
															<option id=""></option>
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
											<div className="col-sm-6 billing-checkout-field">
												<div
													className="form-group
      required
      dwfrm_billing_addressFields_postalCode">
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
													className="form-group billing-phone-field
      required
      dwfrm_billing_creditCardFields_phone">
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
															src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw9a7d8095/images/svg-icons/icon-help.svg"
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
								<fieldset>
									<div className="row payment-options-section">
										<legend className="col-12 col-md-5">
											<h6>Payment Method</h6>
										</legend>
									</div>
									<input
										type="hidden"
										className="form-control"
										name="dwfrm_billing_paymentMethod"
										defaultValue="null"
									/>
									<div className="estimation-finance-info">
										<div className="cc-container">
											<img
												className="cc-icon"
												src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw58684a97/images/cc-td-card-3d.png"
												alt=""
											/>
										</div>
										<div
											className="finance-estimation-block py-2"
											data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Estimation?pageType=billing">
											<div className="td-estimation">
												<h2>Buy Now, Pay Later!</h2>
												<h3>Your order is eligible for Cub Cadet Financing.</h3>
												<p className="finance-estimate-disclaimer">
													<span>
														Interest will be charged from the purchase date if
														the purchase is not in full at the end of the
														promotional period.
													</span>
													<span>
														Advertised minimum payment is greater than required
														minimum payment.
													</span>
												</p>
												<p>
													<span className="td-links">
														{" "}
														<a
															className="btn btn-secondary td-apply-finance"
															href="#none"
															data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-GetURL">
															Apply Now
														</a>
														<a
															className="td-payment-details ml-3"
															data-title="Details & Disclosures"
															data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
															href="#none">
															See Details
														</a>
													</span>
												</p>
											</div>
										</div>
									</div>
									<div className="col-12 financing-options-text">
										<div className="label-text">
											<div className="estimation label-title financing-plan-title">
												<span className="position-relative">
													$73/MO &amp; No Interest if Paid in Full within 6
													Months
													<span className="superscript">1</span>
												</span>
												<span className="text-uppercase text-nowrap">
													Total: $438.00
												</span>
											</div>
											<div className="label-disclaimer financing-plan-disclaimer">
												Interest will be charged from the purchase date if the
												purchase balance is not paid in full by the end of the
												promotional period. Minimum purchase $199.
												<a
													href="#none"
													data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
													data-title="Details & Disclosures"
													className="td-payment-details">
													See Details
												</a>
											</div>
										</div>
									</div>
									<div
										className="form-nav billing-nav payment-information"
										data-payment-method-id="null"
										data-is-new-payment="true">
										<ul
											className="nav nav-pills content-switcher payment-options"
											role="tablist">
											<li
												className="nav-item col-12"
												data-method-id="TD_FINANCE">
												<a
													className="nav-link finance-card-tab "
													data-toggle="tab"
													href="#finance-card-content"
													aria-controls="finance-card-content"
													role="tab"
													aria-selected="false">
													<span className="payment-input finance-card">
														Cub Cadet Financing
													</span>
													<span className="instore-note">
														<b>Note:</b> Offers below available online.
														Additional offers may be available in-store.
													</span>
												</a>
											</li>
											<div className="credit-card-selection-new">
												<div className="tab-content">
													<div
														className="tab-pane  finance-card-content"
														id="finance-card-content"
														role="tabpanel"
														aria-labelledby="finance-card-content">
														<fieldset className="credit-card-form">
															<div
																className="financing-plans-list"
																data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Plans?useNewRules=true">
																<div className="row">
																	<div className="col-12">
																		<div className="form-group">
																			<div className="custom-control custom-radio financing-radio">
																				<input
																					type="radio"
																					className="form-control custom-control-input"
																					id="financePlanId_43439"
																					defaultValue={43439}
																					name="dwfrm_billing_financeCardFields_planId"
																					data-is-default-plan="true"
																					defaultChecked=""
																					encoding="off"
																				/>
																				<label
																					className="form-control-label custom-control-label finance-radio"
																					htmlFor="financePlanId_43439"
																					style={{
																						backgroundColor:
																							"rgb(255, 255, 255)",
																					}}>
																					<div className="label-text-plan">
																						<div className="label-title financing-plan-title">
																							<span className="position-relative mr-2">
																								$73/MO &amp; No Interest if Paid
																								in Full within 6 Months
																								<span className="superscript">
																									1
																								</span>
																							</span>
																							<span className="text-uppercase text-nowrap">
																								Total: $438.00
																							</span>
																						</div>
																						<div
																							className="label-disclaimer financing-plan-disclaimer"
																							data-disclaimer="
                                  Interest will be charged from the purchase date if the purchase balance is not paid in full by the end of the promotional period. Minimum purchase $199.
                              "
																							data-plan-type="deferred"
																							data-fee="">
																							Interest will be charged from the
																							purchase date if the purchase
																							balance is not paid in full by the
																							end of the promotional period.
																							Minimum purchase $199.
																							<a
																								href="#none"
																								data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
																								data-title="Details & Disclosures"
																								className="td-payment-details">
																								See Details
																							</a>
																						</div>
																					</div>
																				</label>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="row">
																	<div className="col-12">
																		<div className="form-group">
																			<div className="custom-control custom-radio financing-radio">
																				<input
																					type="radio"
																					className="form-control custom-control-input"
																					id="financePlanId_43438"
																					defaultValue={43438}
																					name="dwfrm_billing_financeCardFields_planId"
																					encoding="off"
																				/>
																				<label
																					className="form-control-label custom-control-label finance-radio"
																					htmlFor="financePlanId_43438"
																					style={{
																						backgroundColor:
																							"rgb(255, 255, 255)",
																					}}>
																					<div className="label-text-plan">
																						<div className="label-title financing-plan-title">
																							<span className="position-relative mr-2">
																								Standard Purchase APR and
																								Payments
																								<span className="superscript">
																									4
																								</span>
																							</span>
																							<span className="text-uppercase text-nowrap">
																								Total: $438.00
																							</span>
																						</div>
																						<div
																							className="label-disclaimer financing-plan-disclaimer"
																							data-disclaimer="
                                  29.99% APR.
                              "
																							data-plan-type="standard"
																							data-fee="">
																							29.99% APR.
																							<a
																								href="#none"
																								data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
																								data-title="Details & Disclosures"
																								className="td-payment-details">
																								See Details
																							</a>
																						</div>
																					</div>
																				</label>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div className="row financing-returning-customer py-3">
																<div className="col-12">
																	<div className="financing-returning-customer-title">
																		For Existing Cub Cadet Credit Card Account
																		Holders
																	</div>
																	<div
																		className="form-group financing-customer-links
              required
              dwfrm_billing_financeCardFields_accountNumber">
																		<label
																			className="form-control-label"
																			htmlFor="accountNumber">
																			Enter your account number
																		</label>
																		<div className="card-number-wrapper mb-2 mt-1">
																			<input
																				type="text"
																				className="form-control accountNumber js-account-number"
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
																		<a
																			href="#none"
																			className="finance-account-lookup-link btn-secondary px-3"
																			data-title="Find Your Account Number"
																			data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-AccountLookup">
																			Can't Find/Remember Your Account Number?
																		</a>
																		<a
																			href="#none"
																			data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-GetURL"
																			className="ml-5 finance-account-register-link td-apply-finance">
																			Don't have an account? Apply for financing
																		</a>
																	</div>
																</div>
															</div>
														</fieldset>
													</div>
												</div>
											</div>
											<li
												className="nav-item col-12 mt-3"
												data-method-id="CREDIT_CARD">
												<a
													className="nav-link credit-card-tab "
													data-toggle="tab"
													href="#credit-card-content"
													aria-controls="credit-card-content"
													role="tab"
													aria-selected="true">
													<span className="payment-input credit-card">
														Credit Card
													</span>
													<span className="cc-imgs credit-card-option">
														<img
															className="icon visa "
															src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw53722174/images/svg-icons/visa.svg"
															alt="Visa Accepted"
														/>
														<img
															className="icon amex "
															src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw6f485f61/images/svg-icons/amex.svg"
															alt="American Express Accepted"
														/>
														<img
															className="icon master "
															src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwea107ea3/images/svg-icons/master.svg"
															alt="Master Card Accepted"
														/>
														<img
															className="icon discover "
															src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw1febf4a0/images/svg-icons/discover.svg"
															alt="Discover Accepted"
														/>
													</span>
												</a>
											</li>
										</ul>
									</div>
									<div className="credit-card-selection-new">
										<div className="tab-content">
											<div
												className="tab-pane  credit-card-content"
												id="credit-card-content"
												role="tabpanel"
												aria-labelledby="credit-card-content">
												<fieldset className="credit-card-form ">
													<input
														type="hidden"
														className="form-control"
														id="cardType"
														name="dwfrm_billing_creditCardFields_cardType"
														defaultValue=""
													/>
													<div className="row">
														<div className="col-12">
															<div
																className="form-group
      required
      dwfrm_billing_creditCardFields_cardNumber">
																<label
																	className="form-control-label"
																	htmlFor="cardNumber"
																	id="cardNumberLabel">
																	Card Number
																</label>
																<div className="card-number-wrapper">
																	<input
																		type="text"
																		className="form-control cardNumber"
																		id="cardNumber"
																		data-pattern-mismatch="Credit card number invalid."
																		defaultValue=""
																		autoComplete="cc-number"
																		aria-labelledby="cardNumberLabel"
																		name="dwfrm_billing_creditCardFields_cardNumber"
																		required=""
																		maxLength={20}
																		minLength={10}
																		pattern="^(?:\d[ -]*?){13,16}$"
																	/>
																	<div className="invalid-feedback" />
																</div>
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-6 col-md-4">
															<div
																className="form-group
      required
      dwfrm_billing_creditCardFields_expirationMonth">
																<label
																	className="form-control-label"
																	htmlFor="expirationMonth"
																	id="expirationMonthLabel">
																	Expiration Month
																</label>
																<div className="select-wrapper select-wrapper--secondary">
																	<select
																		className="form-control expirationMonth custom-select"
																		id="expirationMonth"
																		autoComplete="cc-exp-month"
																		aria-labelledby="expirationMonthLabel"
																		name="dwfrm_billing_creditCardFields_expirationMonth"
																		required="">
																		<option id="">month</option>
																		<option id={1} value={1}>
																			01
																		</option>
																		<option id={2} value={2}>
																			02
																		</option>
																		<option id={3} value={3}>
																			03
																		</option>
																		<option id={4} value={4}>
																			04
																		</option>
																		<option id={5} value={5}>
																			05
																		</option>
																		<option id={6} value={6}>
																			06
																		</option>
																		<option id={7} value={7}>
																			07
																		</option>
																		<option id={8} value={8}>
																			08
																		</option>
																		<option id={9} value={9}>
																			09
																		</option>
																		<option id={10} value={10}>
																			10
																		</option>
																		<option id={11} value={11}>
																			11
																		</option>
																		<option id={12} value={12}>
																			12
																		</option>
																	</select>
																	<span className="selector" />
																</div>
																<div className="invalid-feedback" />
															</div>
														</div>
														<div className="col-6 col-md-4">
															<div
																className="form-group
      required
      dwfrm_billing_creditCardFields_expirationYear">
																<label
																	className="form-control-label"
																	htmlFor="expirationYear"
																	id="expirationYearLabel">
																	Expiration Year
																</label>
																<div className="select-wrapper select-wrapper--secondary">
																	<select
																		className="form-control expirationYear custom-select"
																		id="expirationYear"
																		aria-labelledby="expirationYearLabel"
																		autoComplete="cc-exp-year"
																		name="dwfrm_billing_creditCardFields_expirationYear"
																		required="">
																		<option>year</option>
																		<option id={2023} value={2023}>
																			2023
																		</option>
																		<option id={2024} value={2024}>
																			2024
																		</option>
																		<option id={2025} value={2025}>
																			2025
																		</option>
																		<option id={2026} value={2026}>
																			2026
																		</option>
																		<option id={2027} value={2027}>
																			2027
																		</option>
																		<option id={2028} value={2028}>
																			2028
																		</option>
																		<option id={2029} value={2029}>
																			2029
																		</option>
																		<option id={2030} value={2030}>
																			2030
																		</option>
																		<option id={2031} value={2031}>
																			2031
																		</option>
																		<option id={2032} value={2032}>
																			2032
																		</option>
																	</select>
																	<span className="selector" />
																</div>
																<div className="invalid-feedback" />
															</div>
														</div>
														<div className="col-6 col-md-4">
															<div
																className="form-group security-code-input
      required
      dwfrm_billing_creditCardFields_securityCode">
																<label
																	className="form-control-label"
																	htmlFor="securityCode"
																	id="securityCodeLabel">
																	Security Code
																</label>
																<input
																	type="text"
																	className="form-control securityCode"
																	id="securityCode"
																	aria-labelledby="securityCodeLabel"
																	autoComplete="cc-csc"
																	name="dwfrm_billing_creditCardFields_securityCode"
																	required=""
																	defaultValue=""
																	maxLength={4}
																	pattern="^[0-9]{3,4}$"
																	data-pattern-mismatch="Invalid Security Code"
																/>
																<span className="info-icon ">
																	<img
																		className="icon"
																		src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw9a7d8095/images/svg-icons/icon-help.svg"
																		alt="Tooltip Icon"
																		data-toggle="popover"
																		tabIndex={0}
																		data-placement="top"
																		data-content="Please enter the security (CVV) code on the back of your card."
																		data-original-title=""
																		title=""
																	/>
																</span>
																<div className="invalid-feedback" />
															</div>
														</div>
													</div>
													<div className="row d-none">
														<div className="col-sm-6">
															<div
																className="form-group cc-email-input
      required
      dwfrm_billing_creditCardFields_email">
																<label
																	className="form-control-label"
																	htmlFor="emailBilling"
																	id="billingEmailLabel">
																	Email
																</label>
																<input
																	type="email"
																	className="form-control"
																	id="email"
																	autoComplete="email"
																	data-pattern-mismatch="Email must include '@' and a domain (e.g .com)"
																	defaultValue=""
																	aria-labelledby="billingEmailLabel"
																	name="dwfrm_billing_creditCardFields_email"
																	required=""
																	maxLength={50}
																	pattern="^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$"
																/>
																<span className="info-icon ">
																	<img
																		className="icon"
																		src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw9a7d8095/images/svg-icons/icon-help.svg"
																		alt="Tooltip Icon"
																		data-toggle="popover"
																		tabIndex={0}
																		data-placement="top"
																		data-content="Please enter a valid email address."
																		data-original-title=""
																		title=""
																	/>
																</span>
																<div className="invalid-feedback" />
															</div>
														</div>
													</div>
													<div className="row">
														<div className="col-12"></div>
													</div>
												</fieldset>
											</div>
										</div>
									</div>
								</fieldset>
								<input
									type="hidden"
									name="csrf_token"
									defaultValue="M5rGAB-uR9sBuXSzhWj2llyXR6CffengcxKiapFNW_hIuWWhoPJw6Sp5E7NzZq4Nc-HIZnDMi_vQE9lHi6AF4zDe35UalEMNliKQNYL0gWwsKYFrWMho0eYHDsIzmsqACx1lPYtZMXLNQsVFi8pEdFmjV7A7AxfLEKTArLyIoJCbwomyL-g="
								/>
							</form>
							<div className="col-12 next-step-button">
								<div className="next-step-button-inner">
									<button
										className="btn btn-secondary btn-block submit-payment js-pay-btn"
										type="submit"
										name="submit"
										value="submit-payment"
										disabled="disabled">
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
												<span className="firstName"></span>
												<span className="lastName"></span>
											</div>
											<div className="summary-section-report">
												<div className="address1"></div>
												<div className="address2"></div>
												<span className="city"></span>
												<span className="stateCode"></span>
												<span className="postalCode"></span>
											</div>
										</div>
										<div className="order-summary-phone" />
									</div>
								</div>
								<div className="billing-summary-col col-12 col-md-4">
									<div className="summary-details">
										<div className="summary-section-label payment-info-label">
											Payment Method
										</div>
										<div className="summary-section-report">
											<div className="payment-details"></div>
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
										Please take a moment to review all the details on this page
										are accurate.
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
										<ItemBlock curState={curState} />
									</div>
									<div className="col product-summary-block mt-0">
										<div
											className="product-line-item border-top pt-1"
											data-product-line-item="272ca829c199c6be49c050bbc9">
											<div className="product-line-item-row row no-gutters ">
												<div className="item-image  col-6 ">
													<img
														className="product-image"
														src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw506ac45e/products/Equipment/Cub_Cadet_CC30E_2000x2000_4.jpg?sw=180&sh=180&sm=fit"
														alt="CC30E"
														title="CC30E"
													/>
												</div>
												<div className="product-line-item-details  col-6 ">
													<div className="line-item-header">
														<div className="line-item-name">
															<span>CC30E</span>
															<p className="extended-name ">
																ELECTRIC MINI RIDING MOWER
															</p>
														</div>
														<p className="item-number ">
															<strong>Item#:</strong> 33BA27JDB10
														</p>
													</div>
													<div className="item-attributes">
														<div className="item-options"></div>
													</div>
													<div className="product-line-item-results row">
														<div className="col-12 line-item-price-272ca829c199c6be49c050bbc9">
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
																					content={3599.0}
																				/>
																				<span className="msrp-text d-none">
																					From
																				</span>
																				<span className="formatted-price">
																					$3,599.00
																				</span>
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
																<div className="item-total-272ca829c199c6be49c050bbc9 price col-7">
																	<div className="pricing line-item-total-price-amount item-total-272ca829c199c6be49c050bbc9">
																		$3,599.00
																	</div>
																</div>
															</div>{" "}
															{/* / .row */}
														</div>
													</div>
													<div className="item-prop65-msg half-width d-none invisible">
														<div className="alert brand-warning alert-sm">
															<span className="font-bold">Warning:</span>
															Cancer and Reproductive Harm –{" "}
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
														Cancer and Reproductive Harm –{" "}
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
												<span className="sub-total">$399.00</span>
											</p>
										</div>
									</div>
									<div className="row no-gutters order-total-summary-row order-discount hide-order-discount">
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
												<span className="shipping-total-cost">$39.00</span>
											</p>
										</div>
									</div>
									<div className="row no-gutters order-total-summary-row shipping-discount hide-shipping-discount">
										<div className="col-5">
											<p className="order-receipt-label">
												<span>Delivery Discount</span>
											</p>
										</div>
										<div className="col-7">
											<p className="order-receipt-value text-right">
												<span className="shipping-discount-total">-$0.00</span>
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
												<span className="tax-total">-</span>
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
												<span className="grand-total-sum">-</span>
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
											acknowledgement box below must be checked to proceed with
											your order
										</div>
									</div>{" "}
									{/* End content-asset */}
									<div className="form-group custom-control custom-checkbox">
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
	);
}
