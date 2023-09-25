const Financing = () => {
	return (
		<div>
			<link
				rel="stylesheet"
				href="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/en_US/v1673006777382/css/checkout/checkout.css"
			/>
			<h1 className="page-title condensed-header-title">Checkout</h1>
			<div
				id="checkout-main"
				className="checkout-main container data-checkout-stage"
				data-customer-type="registered"
				data-checkout-stage="payment"
				data-checkout-get-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/CheckoutServices-Get"
				data-verify-address-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/AVS-Verify"
				data-use-original-address-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/AVS-UseOriginal"
				data-product-registration="">
				<div className="row d-md-none mb-1 sr-only">
					<div className="col-12">
						<span className="grand-total-label">1 Items</span>
						<span className="grand-total-price">$2,599.00</span>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<div className="shipping-section">
							<div className="single-shipping">
								<div
									className="card"
									data-shipment-uuid="a6ead63e9b52f6e529d73ab2a3">
									<div className="card-header">
										<span className="checkout-step-number filled">1</span>
										<h6>Pick Up</h6>
									</div>
									<div className="card-body">
										<div className="shipping-error" />
										<fieldset>
											<legend>
												<h6 className="mb-0">Dealer Pick Up Location</h6>
											</legend>
										</fieldset>
										<div>
											<div className="row dealer-section-container">
												<div className="col-sm-6 mb-2 mb-sm-0">
													<div className="dealer-details-info">
														<div className="dealer-details-name">
															Worcester Sales and Service, Inc.
														</div>
														<div className="dealer-details-address">
															<div>
																<span>34200 LORAIN ROAD,</span>
															</div>
															<div>
																<span>NORTH RIDGEVILLE, OH 44039</span>
															</div>
														</div>
														<div className="dealer-details-phone">
															(440) 327-2196
														</div>
													</div>
												</div>
												<div className="col-sm-6">
													<div className="checkout-callout">
														<p className="title">
															Current pick up estimate: 6-8 days
														</p>
														<div className="content-asset">
															<p className="message">
																Please note: This dealer will contact you when
																your machine is tested and ready for pick up.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div
											className="dealer-shipping-block"
											data-hide-shipping-item="false"
											data-carb-enabled="true"
											data-carb-compliance="null"
											data-delivery-method="dealer-delivery"
											data-pickup-method="dealer-pickup"
											data-dealer-zip-code={44039}
											data-delivery-pickup-firstname="Delivery"
											data-delivery-pickup-lastname="Pickup">
											<fieldset>
												<input
													type="hidden"
													name="dwfrm_shipping_shippingAddress_shippingMethodID"
													id="dealerShippingMethod"
													value="dealer-pickup"
												/>
											</fieldset>
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
									data-shipment-uuid="a6ead63e9b52f6e529d73ab2a3">
									<div className="card-header">
										<div className="product-line-item">
											<div className="line-item-header">
												<div className="line-item-name">
													<span>XT1 LT46</span>
													<p className="extended-name">XT1 ENDURO SERIES</p>
												</div>
												<p className="item-number">
													<strong>Item#:</strong> 13AQA9TTA10
												</p>
											</div>
											<div className="product-line-item-details d-flex flex-row">
												<div className="item-image">
													<img
														className="product-image"
														src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw8f055b11/products/Equipment/Cub-Cadet_XT1LT46_New_2000x2000_8.jpg?sw=180&sh=180&sm=fit"
														alt="XT1 LT46"
														title="XT1 LT46"
													/>
												</div>
												<div className="item-attributes">
													<div className="item-options" />
												</div>
											</div>
										</div>
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
								<h6>Pick Up</h6>
							</div>
							<div className="card-body">
								<div
									className="single-shipping"
									data-shipment-summary="a6ead63e9b52f6e529d73ab2a3">
									<div className="row shipping-summary-row">
										<div className="shipping-summary-col col-12 col-md-4 shipping-dealer-info-block">
											<div className="row no-gutters">
												<div className="col-12">
													<div>
														<div className="summary-section-label">
															Dealer Information
														</div>
														<div className="dealer-info-name summary-section-sublabel">
															Worcester Sales and Service, Inc.
														</div>
														<div className="summary-section-report">
															<span className="address1">
																34200 LORAIN ROAD,
															</span>
															<div>
																<span className="city">NORTH RIDGEVILLE</span>
																<span className="stateCode">OH</span>
																<span className="postalCode">44039</span>
															</div>
															<div className="dealer-info-phone">
																(440) 327-2196
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="shipping-summary-col col-12 col-md-4 hidden aria-hidden">
											<p className="summary-section-label shipping-addr-label hidden" />
											<p className="summary-section-label dealer-delivery-addr-label hidden">
												Delivery Address
											</p>
											<p className="summary-section-label dealer-pickup-addr-label">
												Delivery Address
											</p>
											<div className="summary-details shipping">
												<div className="address-summary">
													<div className="summary-section-sublabel">
														<span className="firstName hidden">Delivery</span>
														<span className="lastName hidden">Pickup</span>
													</div>
													<div className="dealerName">
														Worcester Sales and Service, Inc.
													</div>
													<div className="summary-section-report">
														<span className="address1">34200 LORAIN ROAD</span>
														<span className="address2" />
														<span className="city">NORTH RIDGEVILLE</span>
														<span className="stateCode">OH</span>
														<span className="postalCode">44039</span>
													</div>
												</div>
												<div className="shipping-phone hidden">
													(440) 327-2196
												</div>
											</div>
										</div>
										<div className="shipping-summary-col col-12 col-md-4 shipping-contact-information-block hidden aria-hidden">
											<div className="row no-gutters">
												<div className="col-12">
													<div className="shipping-contact-info-block">
														<div className="summary-section-label">
															Contact Information
														</div>
														<div className="summary-section-report">
															<div className="order-email-info" />
															<div className="shipping-phone">
																(440) 327-2196
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="shipping-summary-col col-12 col-md-4 shipping-method-info hidden aria-hidden">
											<div className="row no-gutters">
												<div className="col-12">
													<div className="content-asset">
														<p className="message">
															Please note: This item ships directly from our
															factory and will arrive to you in a wood crate.
														</p>
														<a className="link" href="/">
															Learn More&nbsp;&gt;
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<p className="summary-section-label shipping-addr-label multi-shipping hidden">
									Addresses &amp; shipping methods are listed under your items.
								</p>
							</div>
						</div>
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
													data-create-shipment-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Checkout-SetBillingAddress"></select>
												<span className="selector" />
											</div>
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
									</fieldset>
									<fieldset id="financing">
										{/* Financing Redo */}

										<h2>Buy Now, Pay Later!</h2>
										<h3>Your order is eligible for Cub Cadet Financing.</h3>

										{/* Financing Redo */}
									</fieldset>
								</form>
								<div className="col-12 next-step-button">
									<div className="next-step-button-inner">
										<button
											className="btn btn-secondary btn-block submit-payment"
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
								<span className="checkout-step-number">2</span>
								<h6 className="checkout-card-header">Billing</h6>
							</div>
							<div className="card-body">
								<div className="row billing-summary-row">
									<div className="billing-summary-col col-12 col-md-4">
										<div className="summary-section-label billing-addr-label">
											Billing Information
										</div>
										<div className="summary-details billing">
											<div className="address-summary">
												<div className="summary-section-sublabel">
													<span className="firstName hidden">Delivery</span>
													<span className="lastName hidden">Pickup</span>
												</div>
												<div className="summary-section-report">
													<div className="address1">34200 LORAIN ROAD</div>
													<div className="address2" />
													<span className="city">NORTH RIDGEVILLE</span>
													<span className="stateCode">OH</span>
													<span className="postalCode">44039</span>
												</div>
											</div>
											<div className="summary-section-report">
												<div className="order-summary-phone">2162283651</div>
											</div>
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
									<div className="billing-summary-col col-12 col-md-4">
										<div className="summary-details">
											<div className="summary-section-label payment-info-label">
												Contact Information
											</div>
											<div className="summary-section-report">
												<div id="billingContactEmailDealerPickup" />
												<div id="billingContactPhoneDealerPickup">
													2162283651
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row fake-checkout-steps">
							<div className="col-12 payment-card">
								<div className="card payment">
									<div className="card-header">
										<span className="checkout-step-number">2</span>
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
						<div className="row no-gutters checkout-button">
							<div className="col-12 next-step-button">
								<div className="next-step-button-inner">
									<input
										type="hidden"
										name="prop65VerifyUrl"
										id="prop65VerifyUrl"
										value="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Prop65-Verify"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4 order-summary">
						<div className="card">
							<div className="card-header">
								<h6>Your Items (1)</h6>
							</div>
							<div className="card-body order-total-summary">
								<div className="order-total-summary-heading">
									<h6>Items for Pick Up</h6>
								</div>
								<div className="order-total-summary-products">
									<div className="row order-product-summary">
										<div className="col product-summary-block">
											<div
												className="product-line-item"
												data-product-line-item="05c418cf69e93744ecba59cb07">
												<div className="product-line-item-row row no-gutters">
													<div className="item-image col-6">
														<img
															className="product-image"
															src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw8f055b11/products/Equipment/Cub-Cadet_XT1LT46_New_2000x2000_8.jpg?sw=180&sh=180&sm=fit"
															alt="XT1 LT46"
															title="XT1 LT46"
														/>
													</div>
													<div className="product-line-item-details col-6">
														<div className="line-item-header">
															<div className="line-item-name">
																<span>XT1 LT46</span>
																<p className="extended-name">
																	XT1 ENDURO SERIES
																</p>
															</div>
															<p className="item-number">
																<strong>Item#:</strong> 13AQA9TTA10
															</p>
														</div>
														<div className="item-attributes">
															<div className="item-options" />
														</div>
														<div className="product-line-item-results row">
															<div className="col-12 line-item-price-05c418cf69e93744ecba59cb07">
																<div className="row no-gutters">
																	<p className="line-item-price-info col-5">
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
																						content={2599.0}
																					/>
																					<span className="formatted-price">
																						$2,599.00
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
																		<span className="line-item-total-text line-item-total-price-label">
																			Total:
																		</span>
																	</p>
																	<div className="item-total-05c418cf69e93744ecba59cb07 price col-7">
																		<div className="pricing line-item-total-price-amount item-total-05c418cf69e93744ecba59cb07">
																			$2,599.00
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="item-prop65-msg half-width d-none invisible">
															<div className="alert brand-warning alert-sm">
																<span className="font-bold">Warning:</span>
																Cancer and Reproductive Harm –{"{"}" "{"}"}
																<a
																	href="http://www.P65Warnings.ca.gov"
																	title="go to the Proposition65 website">
																	www.P65Warnings.ca.gov
																</a>
															</div>
														</div>
													</div>
													<div className="item-prop65-msg full-width d-none invisible">
														<div className="alert brand-warning alert-sm">
															<span className="font-bold">Warning:</span>
															Cancer and Reproductive Harm –{"{"}" "{"}"}
															<a
																href="http://www.P65Warnings.ca.gov"
																title="go to the Proposition65 website">
																www.P65Warnings.ca.gov
															</a>
														</div>
													</div>
												</div>
											</div>
											<div
												className="multi-shipping"
												data-shipment-summary="a6ead63e9b52f6e529d73ab2a3">
												<h6 className="shipping-header-text">Shipping To</h6>
												<p>
													<span className="ship-to-message" />
													<span className="ship-to-name">Delivery Pickup</span>
													<span className="ship-to-address1">
														34200 LORAIN ROAD
													</span>
													<span
														className="ship-to-address2"
														style={{ display: "none" }}
													/>
													<span className="ship-to-city-st-zip">
														<span className="ship-to-city">
															NORTH RIDGEVILLE
														</span>
														{"{"}" "{"}"}
														<span className="ship-to-st">OH</span>
														{"{"}" "{"}"}
														<span className="ship-to-zip">44039</span>
														{"{"}" "{"}"}
													</span>
													<span className="ship-to-phone">4403272196</span>
												</p>
												<h5>
													Shipping Method
													<span />
												</h5>
												<div className="row">
													<p className="col-8">
														<span className="display-name">Dealer Pickup</span>
														<span className="arrival-time" />
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
													<span className="sub-total">$2,599.00</span>
												</p>
											</div>
										</div>

										<div className="row no-gutters order-total-summary-row shipping-item">
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
													<span className="tax-total">$141.68</span>
												</p>
											</div>
										</div>
										<div className="row grand-total order-total-summary-row no-gutters">
											<div className="col-5">
												<p className="order-receipt-label">
													<span>Order Total</span>
												</p>
											</div>
											<div className="col-7">
												<p className="order-receipt-value text-right">
													<span className="grand-total-sum">$2,740.68</span>
												</p>
											</div>
										</div>
									</div>
								</div>
								<div
									className="prop65-checkout-message card"
									style={{ display: "none" }}>
									<div className="card-body">
										<div className="content-asset">
											<div style={{ color: "red" }}>
												<strong>Notice: </strong>The Proposition 65
												acknowledgement box below must be checked to proceed
												with your order
											</div>
										</div>
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
		</div>
	);
};

export default Financing;
