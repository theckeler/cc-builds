export default function UtilityNav({}) {
	return (
		<div className="utility-nav d-none d-lg-block">
			<ul className="utility-list" style={{ textAlign: "right" }}>
				<li>
					<a
						href="javascript:void(0)"
						id="header-live-chat"
						className="icon-chat">
						<span>Live Chat</span>
					</a>
				</li>
				<li>
					<div className="content-asset">
						<a href="https://www.cubcadet.com/en_US/ew-info-page.html">
							<svg
								height={18}
								id="svg10"
								version="1.1"
								viewBox="0 0 24 24"
								width={18}
								xmlSpace="preserve"
								xmlns="http://www.w3.org/2000/svg">
								<path
									className="st0"
									d="M10 1.5 3 4.1v5.2c0 4.3 3 8.3 7 9.3 4-1 7-5 7-9.3V4.1l-7-2.6zm5.3 7.7c0 3.4-2.2 6.5-5.3 7.5-3-1-5.3-4.1-5.3-7.5v-4L10 3.3l5.3 1.9v4z"
									fill="#ffc20f"
								/>
							</svg>
							Extended Warranty
						</a>
					</div>
				</li>
				<li>
					<div className="content-asset">
						<a
							className="icon-find-service"
							href="https://www.cubcadet.com/en_US/servicelocator">
							<span>Find Service</span>
						</a>
					</div>
				</li>
				<li>
					<div className="content-asset">
						<a
							className="icon-finance"
							href="https://www.cubcadet.com/en_US/financing">
							{/* <svg
								height="18"
								id="svg10"
								version="1.1"
								viewBox="0 0 24 24"
								width="18"
								xmlns="http://www.w3.org/2000/svg">
								<defs id="defs14"></defs>
								<g
									id="g8"
									style="fill: none; fill-rule: evenodd"
									transform="translate(1,1)">
									<circle
										3px=""
										cx="11"
										cy="11"
										id="circle2"
										r="11"
										style="stroke: #ffc20f"></circle>
									<g aria-label="$" id="text6" style="fill: #ffffff">
										<path
											d="m 14.704,12.32 q 0,1.168 -0.816,1.984 -0.736,0.768 -1.92,0.992 V 16 H 10.256 V 15.296 Q 7.9839998,14.928 7.2959998,12.624 l 1.808,-0.496 q 0.288,0.96 1.1520002,1.248 v -2.352 q -1.2800002,-0.336 -1.9200002,-0.848 -0.848,-0.688 -0.848,-1.84 0,-1.104 0.864,-1.824 0.736,-0.624 1.9040002,-0.8 v -0.88 h 1.712 V 5.68 q 1.392,0.24 2.352,1.552 l -1.392,1.152 q -0.4,-0.544 -0.96,-0.816 v 1.936 q 2.736,0.8 2.736,2.816 z M 10.256,7.6 q -0.8160002,0.224 -0.8160002,0.736 0,0.448 0.8160002,0.736 z m 2.48,4.768 q 0,-0.544 -0.768,-0.848 v 1.856 q 0.768,-0.256 0.768,-1.008 z"
											id="path823"></path>
									</g>
								</g>
							</svg> */}
							Financing
						</a>
					</div>
				</li>
				<li>
					<div className="content-asset">
						<a href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true">
							<svg
								height={21}
								viewBox="0 0 16 24"
								width={13}
								xmlns="http://www.w3.org/2000/svg">
								<g fill="none" fillRule="evenodd" transform="translate(1 1)">
									<path
										d="M0 6.923C0 3.089 3.13 0 6.986 0 10.87 0 14 3.09 14 6.923 14 9.726 8.522 19.424 6.986 23 5.478 19.452 0 9.726 0 6.923z"
										stroke="#FFC20F"
									/>
									<circle cx={7} cy={6} fill="#FFF" r={3} />
								</g>
							</svg>
							Find a Store
						</a>
					</div>
				</li>
				<li>
					<div className="content-asset">
						<a
							className="icon-registration"
							href="https://www.cubcadet.com/en_US/content-asset-page-includes/registration.html">
							Registration
						</a>
					</div>
				</li>
				<li className="icon-account user">
					<a href="https://www.cubcadet.com/en_US/login">
						<span className="user-message">Account</span>
					</a>
				</li>
				<li
					className="menu-item dropdown country-selector"
					tabIndex={0}
					data-url="/on/demandware.store/Sites-cubcadet-Site/en_US/Page-SetLocale">
					<button
						tabIndex={-1}
						className="dropdown-toggle"
						id="dropdownCountrySelector"
						data-toggle="dropdown"
						data-currentcountry="USA"
						aria-haspopup="true"
						aria-expanded="false"
						aria-owns="countryList">
						<i className="flag-icon flag-icon-us" />
						USA (en)
					</button>
					<div
						id="countryList"
						className="dropdown-menu dropdown-country-selector"
						aria-labelledby="dropdownCountrySelector">
						<a
							className="dropdown-item"
							href="#"
							data-locale="en_CA"
							data-currencycode="CAD"
							data-country="CAN">
							<i className="flag-icon flag-icon-ca" />
							Canada - English
						</a>
						<a
							className="dropdown-item"
							href="#"
							data-locale="fr_CA"
							data-currencycode="CAD"
							data-country="CAN">
							<i className="flag-icon flag-icon-ca" />
							Canada - français
						</a>
					</div>
				</li>
				<li>
					<div
						className="minicart"
						data-action-url="/on/demandware.store/Sites-cubcadet-Site/en_US/Cart-MiniCartShow">
						<div className="minicart-total">
							<a
								className="minicart-link"
								href="https://www.cubcadet.com/en_US/cart"
								title="View Cart">
								<img
									className="icon icon-cart"
									src="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/default/dw15e69641/images/svg-icons/icon-cart.svg"
									alt=""
								/>
								<span className="minicart-label">
									Cart
									<span className="minicart-quantity">0</span>
								</span>
							</a>
						</div>
						<div className="popover popover-bottom" />
					</div>
				</li>
			</ul>
		</div>
	);
}
