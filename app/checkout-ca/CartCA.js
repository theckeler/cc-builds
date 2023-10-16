"use client";
// import { useState, useEffect } from "react";

import StateSelector from "./StateSelector";
import ItemBlock from "./ItemBlock";
import ErrorMessage from "./ErrorMessage";

export default function CartCA() {
	// const [curState, setCurState] = useState("");
	// useEffect(() => {
	// 	document.querySelector(".submit-shipping").disabled = false;
	// 	if (curState === "CA") {
	// 		console.log(curState);
	// 		document.querySelector(".submit-shipping").disabled = true;
	// 	}
	// }, [curState]);

	return (
		<div className="container cart cart-page">
			<link
				rel="stylesheet"
				href="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/cart/style.css"
			/>
			<link
				rel="stylesheet"
				href="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/en_US/v1697454332408/css/cart.css"
			/>
			<div className="row">
				<div className="col-lg-8 cart-product-cards">
					<div
						className="card product-info  uuid-e134ca58e155bed1dad31c0c58  last
    alert alert-danger ">
						<div className="row  no-gutters">
							<div className="col-5 col-md-2 col-lg-4 col-xl-3">
								<div className="item-image">
									<div className="CARBIcon position-absolute w-100 flex justify-content-center align-items-center p-xl-3">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 -960 960 960"
											className="w-100">
											<path
												d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
												className="iconPath"
											/>
										</svg>
									</div>
									<img
										className="product-image"
										style={{ maxWidth: "100%" }}
										src="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BCSH_S10/on/demandware.static/-/Sites-mtd-master-catalog/default/dw16081e8e/products/Equipment/Cub-Cadet_ZT154_5.jpg?sw=180&sh=180&sm=fit"
										alt="ZT1 54"
										title="ZT1 54"
									/>
								</div>
								<div className="d-md-none text-center">
									<div className="remove-line-item">
										<button
											type="button"
											className="remove-product btn-link"
											data-toggle="modal"
											data-target="#removeProductModal"
											data-pid="17AREACM010"
											data-name="ZT1 54"
											data-action="/on/demandware.store/Sites-cubcadet-Site/en_US/Cart-RemoveProductLineItem"
											data-uuid="e134ca58e155bed1dad31c0c58"
											data-gtmdata='{"id":"17AREACM010","name":"ZT1 54","productType":"WholeGood"}'
											data-qty={2.0}
											aria-label="remove ZT1 54">
											<span aria-hidden="true" />
											Remove
										</button>
									</div>
								</div>
							</div>
							<div className="col-7 col-md-10 col-lg-8 col-xl-9">
								<div className="item-attributes d-flex flex-column flex-md-row flex-lg-column flex-xl-row">
									<div className="product-card-body">
										<div className="line-item-header">
											<div className="line-item-name">
												<a href="/on/demandware.store/Sites-cubcadet-Site/en_US/Product-Show?pid=17AREACM010">
													ZT1 54
												</a>
											</div>
										</div>
										<p className="extended-name">Ultima Series™ ZT</p>
										<p>
											<strong>Item#:</strong> 17AREACM010
										</p>
										<div className="d-none d-md-block">
											<div className="remove-line-item">
												<button
													type="button"
													className="remove-product btn-link"
													data-toggle="modal"
													data-target="#removeProductModal"
													data-pid="17AREACM010"
													data-name="ZT1 54"
													data-action="/on/demandware.store/Sites-cubcadet-Site/en_US/Cart-RemoveProductLineItem"
													data-uuid="e134ca58e155bed1dad31c0c58"
													data-gtmdata='{"id":"17AREACM010","name":"ZT1 54","productType":"WholeGood"}'
													data-qty={2.0}
													aria-label="remove ZT1 54">
													<span aria-hidden="true" />
													Remove
												</button>
											</div>
										</div>
									</div>

									<div className="product-card-footer">
										<div className="line-item-price line-item-price-e134ca58e155bed1dad31c0c58">
											<p className="line-item-price-info">
												Price<span className="d-md-none">:</span>
											</p>

											<div
												className="price"
												itemProp="offers"
												itemScope=""
												itemType="http://schema.org/Offer">
												<span>
													<meta itemProp="priceCurrency" content="USD" />
													<span className="sales">
														<span
															className="value"
															itemProp="price"
															content={3799.0}
														/>
														<span className="msrp-text d-none">From</span>
														<span className="formatted-price">$3,799.00</span>
													</span>
													<span className="msrp-text d-none">MSRP</span>
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
										<div className="line-item-quantity">
											<p className="line-item-quantity-info sr-only">Qty</p>

											<div className="quantity-form">
												<label
													className="line-item-pricing-info quantity-label d-none d-none-qty"
													htmlFor="quantity">
													Quantity
												</label>
												<label className="minus">
													<input
														type="button"
														name="minus"
														defaultValue="-"
														aria-label="decrease ZT1 54 quantity"
													/>
													<a
														href="#"
														aria-label="decrease ZT1 54 quantity"
														role="button"
														className="minusWrapper">
														<img
															className="icon icon-qty-minus "
															src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw9550cd03/images/svg-icons/icon-qty-minus.svg"
															alt="decrease ${lineItem.productName} quantity"
														/>
													</a>
												</label>
												<input
													id="quantity"
													type="text"
													name="quantity-input"
													className="quantity-input quantity form-control"
													aria-label="Quantity of ZT1 54"
													defaultValue={2}
													min={1}
													max={4}
													data-uuid="e134ca58e155bed1dad31c0c58"
													data-pid="17AREACM010"
													data-action="/on/demandware.store/Sites-cubcadet-Site/en_US/Cart-UpdateQuantity"
													data-pre-select-qty={2.0}
												/>
												<label className="plus">
													<input
														type="button"
														name="plus"
														defaultValue="+"
														aria-label="increase ZT1 54 quantity"
													/>
													<a
														href="#"
														aria-label="increase ZT1 54 quantity"
														role="button"
														className="plusWrapper">
														<img
															className="icon icon-qty-plus "
															src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw414cb505/images/svg-icons/icon-qty-plus.svg"
															alt="increase ${lineItem.productName} quantity"
														/>
													</a>
												</label>
											</div>
										</div>
										<div className="line-item-total-price">
											<p className="line-item-price-info d-md-none">Total:</p>
											<p className="line-item-price-info d-none d-md-block">
												Total Price
											</p>
											<div className="item-total-e134ca58e155bed1dad31c0c58 price">
												<div className="pricing line-item-total-price-amount item-total-null">
													$3,799.00
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="d-none d-md-block">
									<div className="row">
										<div className="col">
											<div
												className="where-to-buy where-to-buy--cart-page"
												data-product-id="17AREACM010">
												<div className="where-to-buy__availability">
													<div className="row no-gutters">
														<div className="col-auto mr-1">
															<span className="where-to-buy__availability__title">
																Availability:
															</span>
														</div>
														<div className="col">
															<span className="where-to-buy__availability__time">
																Ship to home in 8-10 days
															</span>
														</div>
													</div>
												</div>
												<div
													className="where-to-buy__options"
													id="deliveryMethods">
													<div
														id="dealer-delivery"
														style={{ backgroundColor: "#fff" }}
														className="where-to-buy__option where-to-buy__option--dealer-delivery disabled"
														data-set-shipping-method-url="https://dev10-na01-mtd.demandware.net/on/demandware.store/Sites-cubcadet-Site/en_US/Dealer-CartSetShippingMethod?method=dealer-delivery">
														<div className="where-to-buy__option__icon-wrap">
															<i className="where-to-buy__option__icon" />
														</div>
														<div className="where-to-buy__option__title">
															<span>Dealer Delivery</span>
														</div>
														<div className="where-to-buy__option__subtitle">
															<span className="where-to-buy__option__subtitle__available">
																Arrives in 2-3 days
															</span>
															<span className="where-to-buy__option__subtitle__unavailable">
																Unavailable
															</span>
														</div>
														<div className="where-to-buy__option__cost">
															<span>$ 129</span>
														</div>
														<div className="where-to-buy__option__badge">
															<i className="where-to-buy__option__badge__icon" />
														</div>
													</div>
													<div
														id="in-store-pickup"
														style={{ backgroundColor: "#fff" }}
														className="where-to-buy__option where-to-buy__option--in-store-pickup enabled"
														data-set-shipping-method-url="https://dev10-na01-mtd.demandware.net/on/demandware.store/Sites-cubcadet-Site/en_US/Dealer-CartSetShippingMethod?method=dealer-pickup">
														<div className="where-to-buy__option__icon-wrap">
															<i className="where-to-buy__option__icon" />
														</div>
														<div className="where-to-buy__option__title">
															<span>Dealer Pick-Up</span>
														</div>
														<div className="where-to-buy__option__subtitle">
															<span className="where-to-buy__option__subtitle__available">
																Available in 1-2 days
															</span>
															<span className="where-to-buy__option__subtitle__unavailable">
																Unavailable
															</span>
														</div>
														<div className="where-to-buy__option__cost">
															<span>FREE</span>
														</div>
														<div className="where-to-buy__option__badge">
															<i className="where-to-buy__option__badge__icon" />
														</div>
													</div>
													<div
														id="ship-to-home"
														style={{ backgroundColor: "#fff" }}
														className="where-to-buy__option where-to-buy__option--ship-to-home enabled selected"
														data-set-shipping-method-url="https://dev10-na01-mtd.demandware.net/on/demandware.store/Sites-cubcadet-Site/en_US/Dealer-CartSetShippingMethod?method=standard">
														<div className="where-to-buy__option__icon-wrap">
															<i className="where-to-buy__option__icon" />
														</div>
														<div className="where-to-buy__option__title">
															<span>Ship to Home</span>
														</div>
														<div className="where-to-buy__option__subtitle">
															<span className="where-to-buy__option__subtitle__available">
																Ships in 8-10 days
															</span>
															<span className="where-to-buy__option__subtitle__unavailable">
																Unavailable
															</span>
														</div>
														<div className="where-to-buy__option__cost">
															<span></span>
														</div>
														<div className="where-to-buy__option__badge">
															<i className="where-to-buy__option__badge__icon" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-auto d-flex align-items-end pb-3">
											<div className="remove-line-item">
												<button
													type="button"
													className="remove-product btn-link"
													data-toggle="modal"
													data-target="#removeProductModal"
													data-pid="17AREACM010"
													data-name="ZT1 54"
													data-action="/on/demandware.store/Sites-cubcadet-Site/en_US/Cart-RemoveProductLineItem"
													data-uuid="e134ca58e155bed1dad31c0c58"
													data-gtmdata='{"id":"17AREACM010","name":"ZT1 54","productType":"WholeGood"}'
													data-qty={2.0}
													aria-label="remove ZT1 54">
													<span aria-hidden="true" />
													Remove
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 d-md-none">
								<div
									className="where-to-buy where-to-buy--cart-page"
									data-product-id="17AREACM010">
									<div className="where-to-buy__availability">
										<div className="row no-gutters">
											<div className="col-auto mr-1">
												<span className="where-to-buy__availability__title">
													Availability:
												</span>
											</div>
											<div className="col">
												<span className="where-to-buy__availability__time">
													Ship to home in 8-10 days
												</span>
											</div>
										</div>
									</div>
									<div className="where-to-buy__options" id="deliveryMethods">
										<div
											id="dealer-delivery"
											className="where-to-buy__option where-to-buy__option--dealer-delivery disabled"
											data-set-shipping-method-url="https://dev10-na01-mtd.demandware.net/on/demandware.store/Sites-cubcadet-Site/en_US/Dealer-CartSetShippingMethod?method=dealer-delivery">
											<div className="where-to-buy__option__icon-wrap">
												<i className="where-to-buy__option__icon" />
											</div>
											<div className="where-to-buy__option__title">
												<span>Dealer Delivery</span>
											</div>
											<div className="where-to-buy__option__subtitle">
												<span className="where-to-buy__option__subtitle__available">
													Arrives in 2-3 days
												</span>
												<span className="where-to-buy__option__subtitle__unavailable">
													Unavailable
												</span>
											</div>
											<div className="where-to-buy__option__cost">
												<span>$ 129</span>
											</div>
											<div className="where-to-buy__option__badge">
												<i className="where-to-buy__option__badge__icon" />
											</div>
										</div>
										<div
											id="in-store-pickup"
											className="where-to-buy__option where-to-buy__option--in-store-pickup enabled"
											data-set-shipping-method-url="https://dev10-na01-mtd.demandware.net/on/demandware.store/Sites-cubcadet-Site/en_US/Dealer-CartSetShippingMethod?method=dealer-pickup">
											<div className="where-to-buy__option__icon-wrap">
												<i className="where-to-buy__option__icon" />
											</div>
											<div className="where-to-buy__option__title">
												<span>Dealer Pick-Up</span>
											</div>
											<div className="where-to-buy__option__subtitle">
												<span className="where-to-buy__option__subtitle__available">
													Available in 1-2 days
												</span>
												<span className="where-to-buy__option__subtitle__unavailable">
													Unavailable
												</span>
											</div>
											<div className="where-to-buy__option__cost">
												<span>FREE</span>
											</div>
											<div className="where-to-buy__option__badge">
												<i className="where-to-buy__option__badge__icon" />
											</div>
										</div>
										<div
											id="ship-to-home"
											style={{ backgroundColor: "#fff" }}
											className="where-to-buy__option where-to-buy__option--ship-to-home enabled selected"
											data-set-shipping-method-url="https://dev10-na01-mtd.demandware.net/on/demandware.store/Sites-cubcadet-Site/en_US/Dealer-CartSetShippingMethod?method=standard">
											<div className="where-to-buy__option__icon-wrap">
												<i className="where-to-buy__option__icon" />
											</div>
											<div className="where-to-buy__option__title">
												<span>Ship to Home</span>
											</div>
											<div className="where-to-buy__option__subtitle">
												<span className="where-to-buy__option__subtitle__available">
													Ships in 8-10 days
												</span>
												<span className="where-to-buy__option__subtitle__unavailable">
													Unavailable
												</span>
											</div>
											<div className="where-to-buy__option__cost">
												<span></span>
											</div>
											<div className="where-to-buy__option__badge">
												<i className="where-to-buy__option__badge__icon" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<hr />
						<p className="">
							This model cannot be shipped to an address in California. If you
							have questions, please contact customer service.
						</p>
					</div>

					<div className="approaching-discounts" />
					<div id="financeInfoCart" style={{ display: "block" }}>
						<div
							className="estimation-finance-info"
							data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-UpdateCartEstimation?pageType=cart">
							<div className="row">
								<div className="cc-container col-lg-2">
									<img
										src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dwff12c9dc/images/cc-td-card.jpg"
										alt=""
									/>
								</div>
								<div className="col-lg-10">
									<div className="td-estimation">
										<div className="td-details">
											<h3>Work Now, Pay Later</h3>
											<div className="td-info">
												Your Order is eligible for Cub Cadet Financing.
											</div>
											<div className="td-info-detail">
												<strong>$113 Per Month, </strong>
												<strong>36 months</strong>{" "}
												<strong>
													1.99% APR<sup>5</sup>{" "}
												</strong>
												financing with <strong>$25 Promo Fee</strong>.{" "}
												<strong>Total: $4,068.00</strong>
											</div>
										</div>
										<div className="td-buttons">
											<div className="td-apply-button">
												<a
													href="/"
													data-url="https://dev10-na01-mtd.demandware.net/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-GetURL"
													className="td-apply-finance btn btn-outline-secondary">
													Apply Now
												</a>
											</div>
											<div className="td-payment">
												<a
													href="/"
													data-url="https://dev10-na01-mtd.demandware.net/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
													data-title="Details & Disclosures"
													className="td-payment-details">
													See Details
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 totals">
					<div className="card">
						<div className="card-header">
							<h6>Order Summary</h6>
						</div>
						<div className="card-body">
							<div className="cart-total-wrapper">
								<div className="row cart-total-row sub-total">
									<div className="col-6">
										<p className="cart-total-label">Subtotal</p>
									</div>
									<div className="col-6">
										<p className="text-right sub-total-value cart-total-value">
											$3,799.00
										</p>
									</div>
								</div>
								<div className="row cart-total-row">
									<div className="col-6">
										<p className="cart-total-label">Delivery Charge</p>
									</div>
									<div className="col-6">
										<p className="text-right shipping-cost cart-total-value">
											$0.00
										</p>
									</div>
								</div>

								<div className="row cart-total-row">
									<div className="col-6">
										<p id="cartSalesTaxLabel" className="cart-total-label">
											Sales Tax
										</p>
									</div>
									<div className="col-6">
										<p className="text-right tax-total cart-total-value">
											$227.94
										</p>
									</div>
								</div>
								<div className="row cart-total-row order-discount hide-order-discount">
									<div className="col-6">
										<p className="cart-total-label">Order Discount</p>
									</div>
									<div className="col-6">
										<p className="text-right order-discount-total cart-total-value">
											{" "}
											- $0.00
										</p>
									</div>
								</div>
								<div className="row cart-total-row estimated-total">
									<div className="col-6">
										<p className="cart-total-label">Estimated Total</p>
									</div>
									<div className="col-6">
										<p className="text-right grand-total cart-total-value">
											$4,026.94
										</p>
									</div>
								</div>
								<div className="row cart-total-info-row">
									<div className="col-12">
										<div className="tax-calculation-msg">
											Shipping and taxes are calculated during checkout
										</div>
										<div className="content-asset">
											<div className="cart-financing-msg">
												Your order may be eligible for local{" "}
												<strong>Dealer Delivery or Pickup.</strong>{" "}
												<span className="info-icon">
													{" "}
													<span
														className="icon"
														data-content="Proceed to Checkout and enter your Zip Code to find a Dealer in your area."
														data-placement="top"
														data-toggle="popover"
														tabIndex={0}
														title=""
														data-original-title="">
														{" "}
													</span>{" "}
												</span>
											</div>
											<div className="cart-financing-msg">
												<span style={{ fontSize: 14 }}>
													*
													<em>
														<strong>Estimated Total</strong>: Actual order total
														will be calculated in Checkout including any
														discounts &amp; offers.
													</em>
												</span>
											</div>
										</div>{" "}
									</div>
								</div>
							</div>

							<div className="row cart-promo-code-row">
								<div className="col-12">
									<form
										action="/on/demandware.store/Sites-cubcadet-Site/en_US/Cart-AddCoupon"
										className="promo-code-form"
										method="GET"
										name="promo-code-form">
										<div className="form-group">
											<label htmlFor="couponCode">Enter Promo Code</label>
											<div className="row">
												<div className="col-8">
													<input
														type="text"
														className="form-control coupon-code-field"
														id="couponCode"
														name="couponCode"
													/>
													<div className="coupon-error">
														<span className="coupon-missing-error">
															No coupon code entered
														</span>
														<span className="coupon-error-message" />
													</div>
												</div>
												<input
													type="hidden"
													name="csrf_token"
													defaultValue="J-k3xJ6qDV4X9XYll5RYPy3zXi4lvfStAb9fVl-4uBtEXEYpnMEK0I7ocDhtBwD32SvyTN9_ddbX19V5GrVtj_2f5yAUpi7jiiiFG_axHIlsJvbSn0n3YhQHX2g_8AWDdwOBW0R-bsBa3XKB2_NvF-tCKpHxTLWkPt44BQ8POOszBgYxL4k="
												/>
												<div className="col-4 promo-code-submit">
													<button
														type="submit"
														className="btn btn-sm btn-outline-secondary btn-block promo-code-btn">
														Apply
													</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="coupons-and-promos"></div>
							<div className="row">
								<div className="col-12">
									<div className="checkout-continue-wrap">
										<div className="checkout-continue">
											<div>
												<a
													href="https://dev10-na01-mtd.demandware.net/on/demandware.store/Sites-cubcadet-Site/en_US/Checkout-Login"
													className="btn btn-secondary btn-block checkout-btn"
													role="button">
													Checkout
												</a>
												<a
													className="continue-shopping-link"
													href="https://dev10-na01-mtd.demandware.net/on/demandware.store/Sites-cubcadet-Site/en_US/Home-Show">
													Continue Shopping
												</a>
											</div>
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
}
