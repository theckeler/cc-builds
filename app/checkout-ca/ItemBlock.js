"use client";

export default function ItemBlock({ curState }) {
	const suggestions = [
		{
			name: "XT1 LT42E",
			sub: "XT ENDURO SERIES",
			href: "/en_US/electric-riding-mowers/xt1-lt42e/33ABA7ES710.html?fitsOnModel=false",
			src: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwbe9b8d44/products/Equipment/Cub_Cadet_XT1_LT42E_2000x2000_1.jpg?sw=290&sh=290&sm=fit",
		},
		{
			name: "SCP21E",
			sub: "60V CORDLESS LAWN MOWER",
			href: "https://www.cubcadet.com/en_US/electric-lawn-mowers/scp21e/18AEB9C5B10.html?fitsOnModel=false",
			src: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw298dbefa/products/Equipment/Cub_Cadet_SCP21E_2000x2000_1.jpg?sw=290&sh=290&sm=fit",
		},
		{
			name: "ZT1 42E",
			sub: "Ultima Series™ ZT",
			href: "https://www.cubcadet.com/en_US/electric-riding-mowers/zt1-42e/34CBA2CS710.html?fitsOnModel=false",
			src: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw227836b3/products/Equipment/Cub_Cadet_ZT142E_2000x2000_6.jpg?sw=290&sh=290&sm=fit",
		},
	];

	return (
		<div
			className={`product-line-item mb-0 ${
				curState === "CA" && "alert alert-danger "
			}`}
			data-product-line-item="7789652938c304bdbc4f258be7">
			<div className="product-line-item-row row no-gutters">
				<div className="item-image col-6 position-relative">
					{curState === "CA" && (
						<div
							className="position-absolute w-100 h-100 flex justify-content-center align-items-center p-xl-3"
							style={{ zIndex: 101 }}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 -960 960 960"
								className="w-100 h-100">
								<path
									d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
									style={{ fill: "#e04444" }}
								/>
							</svg>
						</div>
					)}
					<img
						className="product-image position-relative"
						src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dwf256de94/products/Equipment/Cub_Cadet_SCP100_2000x2000_2.jpg?sw=180&sh=180&sm=fit"
						alt="SCP100"
						title="SCP100"
						style={{ zIndex: 0 }}
					/>
				</div>
				<div className="product-line-item-details col-6">
					<div className="line-item-header">
						<div className="line-item-name">
							<span>SCP100</span>
							<p className="extended-name ">SIGNATURE CUT™ PUSH LAWN MOWER</p>
						</div>
						<p className="item-number ">
							<strong>Item#:</strong> 11A-A9KM710
						</p>
					</div>
					<div className="item-attributes">
						<div className="item-options"></div>
					</div>
					<div className="product-line-item-results row">
						<div className="col-12 line-item-price-7789652938c304bdbc4f258be7">
							<div className="row no-gutters">
								<p className="line-item-price-info  col-5">Price:</p>
								<div className="col-7">
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
													content={399.0}
												/>
												<span className="msrp-text d-none">From</span>
												<span className="formatted-price">$399.00</span>
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
							</div>
						</div>
						<div className="line-item-quantity col-12">
							<p className="line-item-pricing-info row no-gutters">
								<span className="line-item-total-text qty-card-quantity-label col-5">
									Qty:
								</span>
								<span className="pricing qty-card-quantity-count col-7">1</span>
							</p>
						</div>
						<div className="line-item-total-price justify-content-end col-12">
							<div className="row no-gutters">
								<p className="line-item-pricing-info col-5">
									<span className="line-item-total-text line-item-total-price-label ">
										Total:
									</span>
								</p>
								<div className="item-total-7789652938c304bdbc4f258be7 price col-7">
									<div className="pricing line-item-total-price-amount item-total-7789652938c304bdbc4f258be7">
										$399.00
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
			{curState === "CA" && (
				<div className="p-1 mt-2" style={{ background: "#fff" }}>
					<div className="text-center">
						This model cannot be shipped to an address in California. If you
						have questions, please contact customer service.
					</div>
					<div className="text-center mt-1" style={{ fontSize: "18px" }}>
						Alternative Products:
					</div>
					<ul className="list-unstyled flex mt-1">
						{suggestions.map((suggestion, i) => {
							return (
								<li className="col-4" key={i}>
									<a
										href={suggestion.href}
										data-gtmdata='{"id":"33ABA7ES710","name":"XT1 LT42E","productType":"WholeGood"}'
										itemprop="url"
										style={{ textDecoration: "none" }}
										className="d-block">
										<div
											className="position-relative"
											style={{
												//display: "inline-block",
												maxWidth: "100%",
												overflow: "hidden",
												position: "relative",
												boxSizing: "border-box",
												margin: 0,
												minHeight: "100px",
											}}>
											<img
												src={suggestion.src}
												alt=""
												className="w-100 h-100 position-absolute"
											/>
										</div>

										<div
											className="font-bold text-center"
											style={{ fontSize: "16px" }}>
											{suggestion.name}
										</div>

										<div className="text-center" style={{ fontSize: "12px" }}>
											{suggestion.sub}
										</div>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
}
