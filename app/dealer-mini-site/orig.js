"use client";
import { useState, useEffect } from "react";

import Logo1 from "./logos/Logo1";
import Logo2 from "./logos/Logo2";
import Logo3 from "./logos/Logo3";
import Logo4 from "./logos/Logo4";
import Logo5 from "./logos/Logo5";
import Logo6 from "./logos/Logo6";
import Logo7 from "./logos/Logo7";
import Logo8 from "./logos/Logo8";
import Logo9 from "./logos/Logo9";
import Logo10 from "./logos/Logo10";

export default function DealerMiniSiteOrig() {
	const svgStyle = { width: "100%", minWidth: "100%" };
	const [logoCSS, setLogoCSS] = useState("");
	const [logoStyle, setLogoStyle] = useState({});
	// const [imgCSS, setImgCSS] = useState("mb-1");
	const [imgStyle, setImgStyle] = useState({});
	const [logoSize, setLogoSize] = useState(100);
	const [leftPos, setLeft] = useState(10);
	const [topPos, setTop] = useState(10);

	const [logoNum, setLogoNum] = useState(0);
	const [showImg, setShowImg] = useState(false);
	const [overlay, setOverlay] = useState(false);
	const [reverse, setReverse] = useState(false);
	const [white, setWhite] = useState(false);
	const [hideMenu, setHideMenu] = useState(false);
	const [whitePercent, setWhitePercent] = useState(100);

	const imgs = [
		<Logo1 key={1} style={svgStyle} />,
		<Logo2 key={2} style={svgStyle} />,
		<Logo3 key={3} style={svgStyle} />,
		<Logo4 key={4} style={svgStyle} />,
		<Logo5 key={5} style={svgStyle} />,
		<Logo6 key={6} style={svgStyle} />,
		<Logo7 key={7} style={svgStyle} />,
		<Logo8 key={8} style={svgStyle} />,
		<Logo9 key={9} style={svgStyle} />,
		<Logo10 key={10} style={svgStyle} />,
	];

	useEffect(() => {
		if (overlay === true) {
			setLogoCSS("position-absolute p-1");
			setLogoStyle({
				zIndex: 9999,
				top: topPos + "px",
				left: leftPos + "px",
				width: logoSize + "%",
			});
		} else {
			setLogoCSS("");
			setLogoStyle({ width: logoSize + "%" });
		}
	}, [overlay, leftPos, topPos, logoSize]);

	useEffect(() => {
		if (showImg === false) {
			setReverse(false);
			setOverlay(false);
			setLogoCSS("");
			setLogoStyle({});
		}
	}, [showImg]);

	const buttonStyle = {
		outline: 0,
		minWidth: "48px",
		minHeight: "48px",
	};
	const buttonClass = "bg-secondary border-0 mr-1 mb-1 w-100";
	const buttonClick = (e) => {
		setLogoNum(e.currentTarget.value);
	};

	return (
		<>
			<div
				className="position-fixed p-1 bg-white d-flex flex-column border"
				style={{
					left: 10,
					top: 10,
					zIndex: 9999,
					width: hideMenu === true ? "auto" : "200px",
				}}>
				<button
					className={`${buttonClass} mt-1`}
					style={{ ...buttonStyle, borderRadius: "10px" }}
					onClick={() => {
						setHideMenu(!hideMenu);
					}}>
					{hideMenu === true ? "Show" : "Hide Menu"}
				</button>

				<div className={hideMenu === true ? "d-none" : "Hide"}>
					<button
						className={`${buttonClass} mt-1`}
						style={{ ...buttonStyle, borderRadius: "10px" }}
						onClick={() => {
							setShowImg(!showImg);
						}}>
						Show Image
					</button>
					{showImg === true && (
						<>
							{!overlay && (
								<button
									className={`${buttonClass} mt-1`}
									style={{ ...buttonStyle, borderRadius: "10px" }}
									onClick={() => {
										setReverse(!reverse);
									}}>
									Reverse Logo/Image
								</button>
							)}
							<button
								className={`${buttonClass} mt-1`}
								style={{ ...buttonStyle, borderRadius: "10px" }}
								onClick={() => {
									setOverlay(!overlay);
								}}>
								Overlay Image w/ Logo
							</button>

							{overlay && (
								<>
									<div className="mt-1 border-top border-bottom p-1 mb-1">
										Overlay Options
									</div>
									<button
										className={`${buttonClass} mt-1`}
										style={{ ...buttonStyle, borderRadius: "10px" }}
										onClick={() => {
											setWhite(!white);
										}}>
										White Background
									</button>
									{white && (
										<div className="">
											<span className="mr-1">White %:</span>
											<input
												type="number"
												id="size"
												name="size"
												className="mt-1 p-1"
												value={whitePercent}
												min={20}
												max={100}
												onChange={(e) => {
													setWhitePercent(e.target.value);
												}}
											/>
										</div>
									)}
									<div className="">
										<span className="mr-1">Top:</span>
										<input
											type="number"
											className="mt-1 p-1"
											value={topPos}
											min={0}
											max={600}
											step={10}
											onChange={(e) => {
												setTop(e.target.value);
											}}
										/>
									</div>
									<div className="">
										<span className="mr-1">Left:</span>
										<input
											type="number"
											className="mt-1 p-1"
											value={leftPos}
											min={0}
											max={90}
											onChange={(e) => {
												setLeft(e.target.value);
											}}
										/>
									</div>
								</>
							)}
						</>
					)}
					<div className="mt-1 border-top border-bottom p-1 mb-1">
						IMG Options
					</div>
					<div className="">
						<span className="mr-1">Logo Size:</span>
						<input
							type="number"
							id="size"
							name="size"
							className="mt-1 p-1"
							value={logoSize}
							min={20}
							max={100}
							onChange={(e) => {
								setLogoSize(e.target.value);
							}}
						/>
					</div>

					<div className="mt-1 border-top border-bottom p-1 mb-1">Logos</div>
					<div className="d-flex">
						{[...Array(2)].map((x, i) => (
							<button
								className={buttonClass}
								style={{
									...buttonStyle,
									borderRadius: "100%",
									maxWidth: "48px",
								}}
								onClick={(e) => buttonClick(e)}
								value={i}
								key={i}>
								{i + 1}
							</button>
						))}
					</div>

					<div className="mt-1 border-top border-bottom p-1 mb-1">
						Alt Logos
					</div>
					<div className="d-flex flex-wrap">
						{[...Array(8)].map((x, i) => (
							<button
								className={buttonClass}
								style={{
									...buttonStyle,
									borderRadius: "100%",
									maxWidth: "48px",
								}}
								onClick={(e) => buttonClick(e)}
								value={i + 2}
								key={i}>
								{i + 1}
							</button>
						))}
					</div>
				</div>
			</div>

			<link
				rel="stylesheet"
				href="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/en_US/v1694516744870/css/dealerHomePage.css"
			/>
			<div id="main">
				<div className="dealer-home">
					<div className="dealer-home-head">
						<div className="dealer-container">
							<div className="row">
								<div className="col-12 col-md-5 col-lg-6 col-xl-5 ml-auto">
									<div
										className={`dealer-image-wrap position-relative d-flex ${
											reverse === true ? "flex-column-reverse" : "flex-column"
										} flex-column`}>
										{showImg === true && (
											<img
												src="https://www.cubcadet.com/on/demandware.static/-/Sites/default/dw14470f46/images/stores/heros/store-hero-default.png"
												alt="The dealer image"
												className="mb-1"
												style={imgStyle}
											/>
										)}
										<div className={logoCSS} style={logoStyle}>
											<div
												className="p-1"
												style={
													white
														? {
																background:
																	"rgba(255,255,255," +
																	whitePercent / 100 +
																	")",
														  }
														: {}
												}
												key={0}>
												{imgs[logoNum]}
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-7 col-lg-6 col-xl-7 order-md-first">
									<div className="dealer-details-col">
										<div className="elite-dealer-badge-wrap">
											<div className="elite-dealer-badge">
												<span>&gt;&gt;&gt;</span>
												<p>cub cadet elite dealer</p>
												<span>&lt;&lt;&lt;</span>
											</div>
										</div>
										<div className="dealer-details">
											<div className="row no-gutters dealer-details-attic">
												<div className="col-auto dealer-details-logo-col">
													<div className="dealer-details-logo-wrap">
														<img
															src="https://www.cubcadet.com/on/demandware.static/-/Sites/default/dw6e5f5583/images/stores/dealer-logos/Wellington_Implement_5278_4C_2.png"
															alt="The dealer logo"
														/>
													</div>
												</div>
												<div className="col dealer-details-general-col">
													<div className="dealer-details-general">
														<h1 className="dealer-details-name">
															Wellington Implement Company, Inc.
														</h1>
														<div className="dealer-details-phone">
															(330) 725-4951
														</div>
														<div className="dealer-details-address d-none d-md-block">
															<span>6080 NORWALK ROAD, MEDINA, OH 44256</span>
															<a
																href="https://maps.google.com/?daddr=41.156086,-81.905802"
																target="_blank"
																title="Get Directions Link opens in a new window"
																aria-label="Get Directions Link opens in a new window">
																Get Directions
															</a>
														</div>
														<div className="dealer-details-website d-none d-md-block">
															<span>Website:</span>
															<a
																href="http://www.wellingtonimplement.com"
																target="_blank"
																title="Open dealer's website in a new window"
																aria-label="Open dealer's website in a new window">
																http://www.wellingtonimplement.com
															</a>
														</div>
													</div>
												</div>
											</div>
											<div className="row d-md-none">
												<div className="col">
													<div className="dealer-details-address">
														<a
															href="https://maps.google.com/?daddr=41.156086,-81.905802"
															target="_blank"
															title="Get Directions Link opens in a new window"
															aria-label="Get Directions Link opens in a new window">
															6080 NORWALK ROAD, MEDINA, OH 44256
														</a>
													</div>
													<div className="dealer-details-website">
														<span>Website:</span>
														<a
															href="http://www.wellingtonimplement.com"
															target="_blank"
															title="Open dealer's website in a new window"
															aria-label="Open dealer's website in a new window">
															http://www.wellingtonimplement.com
														</a>
													</div>
												</div>
											</div>
										</div>
										<div className="social-media-tab">
											<div className="row no-gutters dealer-details-attic">
												<div className="col-auto">
													<span className="social-media-heading">
														Follow Us On Social
													</span>
												</div>
												<div className="col">
													<ul className="social-links">
														<li>
															<a
																className="social-icon facebook"
																title="Go to Facebook"
																href="https://www.facebook.com/WellingtonImplement"
																target="_blank"
															/>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="dealer-hours">
											<a
												className="dealer-hours-head collapsed"
												href="#dealerHoursBody"
												data-toggle="collapse"
												aria-expanded="false">
												<span>Hours</span>
												<i className="dealer-hours-toggle-icon" />
											</a>
											<div
												className="dealer-hours-body collapse"
												id="dealerHoursBody">
												Sunday: CLOSED - CLOSED
												<br />
												Monday: 8:00 AM - 5:00 PM
												<br />
												Tuesday: 8:00 AM - 5:00 PM
												<br />
												Wednesday: 8:00 AM - 5:00 PM
												<br />
												Thursday: 8:00 AM - 5:00 PM
												<br />
												Friday: 8:00 AM - 5:00 PM
												<br />
												Saturday: 8:00 AM - 12:00 PM
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="dealer-tabs">
						<div className="dealer-tabs-head-container dealer-container">
							<div className="dealer-tabs-head-wrap">
								<div className="dealer-tabs-head">
									<i
										className="dealer-tab-heading-active-bg"
										style={{ left: 100, width: "110.109px" }}
									/>
									{/* @PRODUCTS */}
									<a
										className="dealer-tab-heading active"
										data-tab-heading="products"
										aria-expanded="true"
										href="#">
										<span className="dealer-tab-heading-copy">Products</span>
									</a>
									{/* @LEARN MORE */}
									<a
										className="dealer-tab-heading "
										data-tab-heading="learn-more"
										aria-expanded="false"
										href="#">
										<span className="dealer-tab-heading-copy">Learn more</span>
									</a>
									{/* @SCHEDULE A TEST DRIVE */}
									<a
										className="dealer-tab-heading "
										data-tab-heading="schedule-test-drive"
										aria-expanded="false"
										href="#">
										<span className="dealer-tab-heading-copy">
											Schedule a test drive
										</span>
									</a>
									{/* @SEE PROMOTIONS */}
									<a
										className="dealer-tab-heading "
										data-tab-heading="see-promotions"
										aria-expanded="false"
										href="#">
										<span className="dealer-tab-heading-copy">
											See promotions
										</span>
									</a>
									{/* @CONTACT US */}
									<a
										className="dealer-tab-heading "
										data-tab-heading="contact-us"
										aria-expanded="false"
										href="#">
										<span className="dealer-tab-heading-copy">Contact us</span>
									</a>
									{/* @NEWS */}
									<a
										className="dealer-tab-heading "
										data-tab-heading="news"
										aria-expanded="false"
										href="#">
										<span className="dealer-tab-heading-copy">News</span>
									</a>
								</div>
							</div>
						</div>
						<div className="dealer-tabs-body">
							{/* @PRODUCTS */}
							<a
								className="dealer-tab-heading dealer-tab-heading--mobile active"
								data-tab-heading="products"
								aria-expanded="true"
								href="#">
								<span className="dealer-tab-heading-copy">Products</span>
								<i className="dealer-tab-heading-icon" />
							</a>
							<div
								className="dealer-tab-content active"
								data-tab-content="products">
								<div className="dealer-products-container dealer-container">
									<h3 className="dealer-products-title">
										Explore Our Product Lineup
									</h3>
									<div className="row">
										{/* CARD */}
										<div
											className="col-12 col-lg-4 product-col"
											category="lawn-and-garden-tractors">
											<div
												className="card category-card-dealer"
												style={{
													backgroundImage:
														'url("https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw7939edfc/menu-card-images/CategoryHover-Tractors_13AFA2TLA10_XT2_SLX50_500x495 (1).jpg")',
												}}>
												<div className="card-body">
													<h3 className="card-title">
														Lawn &amp; Garden Tractors
													</h3>
													<p className="card-text">
														Our riding lawn mowers are designed to give you
														unmatched strength and durability, and they’re
														packed with performance features you’ll appreciate.
														Financing available.
													</p>
													<picture>
														<source
															media="(min-width: 1024px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw0f88e685/menu-card-images/Cub-Cadet-XT1LT42_NavCard.png"
														/>
														<source
															media="(min-width: 767px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw0f88e685/menu-card-images/Cub-Cadet-XT1LT42_NavCard.png"
														/>
														<source
															media="(min-width: 480px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw0f88e685/menu-card-images/Cub-Cadet-XT1LT42_NavCard.png"
														/>
														<img
															alt="category tile"
															className="primary-tile-image lazyloaded"
															data-src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw0f88e685/menu-card-images/Cub-Cadet-XT1LT42_NavCard.png"
															src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw0f88e685/menu-card-images/Cub-Cadet-XT1LT42_NavCard.png"
															title="Lawn & Garden Tractors"
														/>
													</picture>
													<div className="category-cta">
														<a
															className="btn btn-outline-secondary btn-sm"
															href="/en_US/riding-lawn-mowers/lawn-and-garden-tractors"
															id="category-lawn-and-garden-tractors"
															aria-label="Lawn & Garden Tractors">
															Lawn &amp; Garden Tractors
														</a>
														<a
															className="icon"
															href="/en_US/riding-lawn-mowers/lawn-and-garden-tractors"
															aria-label="Lawn & Garden Tractors"
														/>
													</div>
													<a
														className="overlay-link"
														href="/en_US/riding-lawn-mowers/lawn-and-garden-tractors"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
										{/* /CARD */}
										{/* CARD */}
										<div
											className="col-12 col-lg-4 product-col"
											category="zero-turn-mowers">
											<div
												className="card category-card-dealer"
												style={{
													backgroundImage:
														'url("https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw0596cb03/menu-card-images/CategoryHover-ZeroTurn_34ABA2CS710_Ultima_ZT1_42E_500x495.jpg")',
												}}>
												<div className="card-body">
													<h3 className="card-title">Zero-Turn Mowers</h3>
													<p className="card-text">
														Zero-Turn Mowers including the award-winning Ultima
														ZT and the new Ultima ZTX series. Financing
														available.
													</p>
													<picture>
														<source
															media="(min-width: 1024px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwca88d6c1/menu-card-images/17RREACT010_ZT146_hero_476x263.png"
														/>
														<source
															media="(min-width: 767px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwca88d6c1/menu-card-images/17RREACT010_ZT146_hero_476x263.png"
														/>
														<source
															media="(min-width: 480px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwca88d6c1/menu-card-images/17RREACT010_ZT146_hero_476x263.png"
														/>
														<img
															alt="category tile"
															className="primary-tile-image lazyloaded"
															data-src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwca88d6c1/menu-card-images/17RREACT010_ZT146_hero_476x263.png"
															src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwca88d6c1/menu-card-images/17RREACT010_ZT146_hero_476x263.png"
															title="Zero-Turn Mowers"
														/>
													</picture>
													<div className="category-cta">
														<a
															className="btn btn-outline-secondary btn-sm"
															href="/en_US/riding-lawn-mowers/zero-turn-mowers"
															id="category-zero-turn-mowers"
															aria-label="Zero-Turn Mowers">
															Zero-Turn Mowers
														</a>
														<a
															className="icon"
															href="/en_US/riding-lawn-mowers/zero-turn-mowers"
															aria-label="Zero-Turn Mowers"
														/>
													</div>
													<a
														className="overlay-link"
														href="/en_US/riding-lawn-mowers/zero-turn-mowers"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
										{/* /CARD */}
										{/* CARD */}
										<div
											className="col-12 col-lg-4 product-col"
											category="snow-blowers-main">
											<div
												className="card category-card-dealer"
												style={{
													backgroundImage:
														'url("https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw8081266a/menu-card-images/Home_CC_Snow_hover_desktop_500x495_v1.jpg")',
												}}>
												<div className="card-body">
													<h3 className="card-title">Snow Blowers</h3>
													<p className="card-text">
														Cub Cadet Snow Blowers are available in 1X, 2X or 3X
														Series. Find a powerful Snow Thrower to quickly and
														easily clear snow with incredible control.
													</p>
													<picture>
														<source
															media="(min-width: 1024px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw35b23dc7/menu-card-images/Home_CC_Snow_3X-30-ProH_desktop_435x240_v1.png"
														/>
														<source
															media="(min-width: 767px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw35b23dc7/menu-card-images/Home_CC_Snow_3X-30-ProH_desktop_435x240_v1.png"
														/>
														<source
															media="(min-width: 480px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw35b23dc7/menu-card-images/Home_CC_Snow_3X-30-ProH_desktop_435x240_v1.png"
														/>
														<img
															alt="category tile"
															className="primary-tile-image lazyloaded"
															data-src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw35b23dc7/menu-card-images/Home_CC_Snow_3X-30-ProH_desktop_435x240_v1.png"
															src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw35b23dc7/menu-card-images/Home_CC_Snow_3X-30-ProH_desktop_435x240_v1.png"
															title="Snow Blowers"
														/>
													</picture>
													<div className="category-cta">
														<a
															className="btn btn-outline-secondary btn-sm"
															href="/en_US/snow-blowers-main"
															id="category-snow-blowers-main"
															aria-label="Snow Blowers">
															Snow Blowers
														</a>
														<a
															className="icon"
															href="/en_US/snow-blowers-main"
															aria-label="Snow Blowers"
														/>
													</div>
													<a
														className="overlay-link"
														href="/en_US/snow-blowers-main"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
										{/* /CARD */}
										{/* CARD */}
										<div
											className="col-12 col-lg-4 product-col"
											category="push-mowers">
											<div
												className="card category-card-dealer"
												style={{
													backgroundImage:
														'url("https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwa3783b86/menu-card-images/Home_CC_LawnMowers_hover_desktop_500x495_v1.jpg")',
												}}>
												<div className="card-body">
													<h3 className="card-title">Walk-Behind Mowers</h3>
													<p className="card-text">
														With rugged durability, Cub Cadet Walk-Behind Mowers
														deliver flawless performance and incredible control
														with unmatched efficiency and comfort.
													</p>
													<picture>
														<source
															media="(min-width: 1024px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwb9318559/menu-card-images/Cub-Cadet-SC300HW_NavCard.png"
														/>
														<source
															media="(min-width: 767px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwb9318559/menu-card-images/Cub-Cadet-SC300HW_NavCard.png"
														/>
														<source
															media="(min-width: 480px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwb9318559/menu-card-images/Cub-Cadet-SC300HW_NavCard.png"
														/>
														<img
															alt="category tile"
															className="primary-tile-image lazyloaded"
															data-src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwb9318559/menu-card-images/Cub-Cadet-SC300HW_NavCard.png"
															src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwb9318559/menu-card-images/Cub-Cadet-SC300HW_NavCard.png"
															title="Walk-Behind Mowers"
														/>
													</picture>
													<div className="category-cta">
														<a
															className="btn btn-outline-secondary btn-sm"
															href="/en_US/lawn-mowers/walk-behind-mowers"
															id="category-push-mowers"
															aria-label="Walk-Behind Mowers">
															Walk-Behind Mowers
														</a>
														<a
															className="icon"
															href="/en_US/lawn-mowers/walk-behind-mowers"
															aria-label="Walk-Behind Mowers"
														/>
													</div>
													<a
														className="overlay-link"
														href="/en_US/lawn-mowers/walk-behind-mowers"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
										{/* /CARD */}
										{/* CARD */}
										<div
											className="col-12 col-lg-4 product-col"
											category="lawn-and-garden-equipment">
											<div
												className="card category-card-dealer"
												style={{
													backgroundImage:
														'url("https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw2e745d16/menu-card-images/CategoryHover-YardEquipment_24B-05MP710_CSV050_500x495.jpg")',
												}}>
												<div className="card-body">
													<h3 className="card-title">Yard Equipment</h3>
													<p className="card-text">
														Browse a great selection of lawn equipment including
														pressure washers, string trimmers, garden tillers
														and more!
													</p>
													<picture>
														<source
															media="(min-width: 1024px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw129da566/menu-card-images/Cub-Cadet-CB2800_NavCard.png"
														/>
														<source
															media="(min-width: 767px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw129da566/menu-card-images/Cub-Cadet-CB2800_NavCard.png"
														/>
														<source
															media="(min-width: 480px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw129da566/menu-card-images/Cub-Cadet-CB2800_NavCard.png"
														/>
														<img
															alt="category tile"
															className="primary-tile-image lazyloaded"
															data-src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw129da566/menu-card-images/Cub-Cadet-CB2800_NavCard.png"
															src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw129da566/menu-card-images/Cub-Cadet-CB2800_NavCard.png"
															title="Yard Equipment"
														/>
													</picture>
													<div className="category-cta">
														<a
															className="btn btn-outline-secondary btn-sm"
															href="/en_US/yard-equipment"
															id="category-lawn-and-garden-equipment"
															aria-label="Yard Equipment">
															Yard Equipment
														</a>
														<a
															className="icon"
															href="/en_US/yard-equipment"
															aria-label="Yard Equipment"
														/>
													</div>
													<a
														className="overlay-link"
														href="/en_US/yard-equipment"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
										{/* /CARD */}
										{/* CARD */}
										<div
											className="col-12 col-lg-4 product-col"
											category="leaf-blowers">
											<div
												className="card category-card-dealer"
												style={{
													backgroundImage:
														'url("https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw2bc491f2/menu-card-images/CategoryHover-LeafBlower_41AN125C810_LB600E_500x495.jpg")',
												}}>
												<div className="card-body">
													<h3 className="card-title">Leaf Blowers</h3>
													<p className="card-text">
														Cub Cadet Leaf Blowers make yard cleanup easy! Blow
														grass clippings off walkways and drives, or quickly
														clear away leaves in the fall.
													</p>
													<picture>
														<source
															media="(min-width: 1024px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw1abe9b0b/menu-card-images/Cub-Cadet-BV428_NavCard.png"
														/>
														<source
															media="(min-width: 767px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw1abe9b0b/menu-card-images/Cub-Cadet-BV428_NavCard.png"
														/>
														<source
															media="(min-width: 480px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw1abe9b0b/menu-card-images/Cub-Cadet-BV428_NavCard.png"
														/>
														<img
															alt="category tile"
															className="primary-tile-image lazyloaded"
															data-src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw1abe9b0b/menu-card-images/Cub-Cadet-BV428_NavCard.png"
															src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw1abe9b0b/menu-card-images/Cub-Cadet-BV428_NavCard.png"
															title="Leaf Blowers"
														/>
													</picture>
													<div className="category-cta">
														<a
															className="btn btn-outline-secondary btn-sm"
															href="/en_US/leaf-blowers"
															id="category-leaf-blowers"
															aria-label="Leaf Blowers">
															Leaf Blowers
														</a>
														<a
															className="icon"
															href="/en_US/leaf-blowers"
															aria-label="Leaf Blowers"
														/>
													</div>
													<a
														className="overlay-link"
														href="/en_US/leaf-blowers"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
										{/* /CARD */}
										{/* CARD */}
										<div
											className="col-12 col-lg-4 product-col"
											category="chipper-shredders">
											<div
												className="card category-card-dealer"
												style={{
													backgroundImage:
														'url("https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw748b087c/menu-card-images/CategoryHover-Chipper_24A-424M710_CS3310_500x495.jpg")',
												}}>
												<div className="card-body">
													<h3 className="card-title">
														Chipper Shredders &amp; Vacs
													</h3>
													<p className="card-text">
														Cub Cadet's Chipper Shredders feature durable steel
														chutes and powerful engines that chip branches up to
														2" in diameter and shreds leaves. Learn more here!
													</p>
													<picture>
														<source
															media="(min-width: 1024px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw510a063b/menu-card-images/Cub-Cadet-CSV070_NavCard.png"
														/>
														<source
															media="(min-width: 767px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw510a063b/menu-card-images/Cub-Cadet-CSV070_NavCard.png"
														/>
														<source
															media="(min-width: 480px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw510a063b/menu-card-images/Cub-Cadet-CSV070_NavCard.png"
														/>
														<img
															alt="category tile"
															className="primary-tile-image lazyloaded"
															data-src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw510a063b/menu-card-images/Cub-Cadet-CSV070_NavCard.png"
															src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw510a063b/menu-card-images/Cub-Cadet-CSV070_NavCard.png"
															title="Chipper Shredders & Vacs"
														/>
													</picture>
													<div className="category-cta">
														<a
															className="btn btn-outline-secondary btn-sm"
															href="/en_US/chipper-shredders-and-vacs-1"
															id="category-chipper-shredders"
															aria-label="Chipper Shredders & Vacs">
															Chipper Shredders &amp; Vacs
														</a>
														<a
															className="icon"
															href="/en_US/chipper-shredders-and-vacs-1"
															aria-label="Chipper Shredders & Vacs"
														/>
													</div>
													<a
														className="overlay-link"
														href="/en_US/chipper-shredders-and-vacs-1"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
										{/* /CARD */}
										{/* CARD */}
										<div
											className="col-12 col-lg-4 product-col"
											category="edgers-and-trenchers">
											<div
												className="card category-card-dealer"
												style={{
													backgroundImage:
														'url("https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwbdfbca3b/menu-card-images/CategoryHover-Edger_25B-55SD710_LE100_500x495.jpg")',
												}}>
												<div className="card-body">
													<h3 className="card-title">Edgers &amp; Trenchers</h3>
													<p className="card-text">
														Edgers create a defined edge in your yard along
														driveways, walkways, and flower beds that deliver
														the precise look you're after. Learn more today!
													</p>
													<picture>
														<source
															media="(min-width: 1024px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwa5f1b9dc/menu-card-images/Cub-Cadet_LE100_NavCard.png"
														/>
														<source
															media="(min-width: 767px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwa5f1b9dc/menu-card-images/Cub-Cadet_LE100_NavCard.png"
														/>
														<source
															media="(min-width: 480px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwa5f1b9dc/menu-card-images/Cub-Cadet_LE100_NavCard.png"
														/>
														<img
															alt="category tile"
															className="primary-tile-image lazyloaded"
															data-src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwa5f1b9dc/menu-card-images/Cub-Cadet_LE100_NavCard.png"
															src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwa5f1b9dc/menu-card-images/Cub-Cadet_LE100_NavCard.png"
															title="Edgers & Trenchers"
														/>
													</picture>
													<div className="category-cta">
														<a
															className="btn btn-outline-secondary btn-sm"
															href="/en_US/edgers-and-trenchers"
															id="category-edgers-and-trenchers"
															aria-label="Edgers & Trenchers">
															Edgers &amp; Trenchers
														</a>
														<a
															className="icon"
															href="/en_US/edgers-and-trenchers"
															aria-label="Edgers & Trenchers"
														/>
													</div>
													<a
														className="overlay-link"
														href="/en_US/edgers-and-trenchers"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
										{/* /CARD */}
										{/* CARD */}
										<div
											className="col-12 col-lg-4 product-col"
											category="log-splitters">
											<div
												className="card category-card-dealer"
												style={{
													backgroundImage:
														'url("https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw59149ba6/menu-card-images/CategoryHover-LogSplitter_24BL59M5710_LS33_500x495.jpg")',
												}}>
												<div className="card-body">
													<h3 className="card-title">Log Splitters</h3>
													<p className="card-text">
														Cub Cadet Log Splitters feature a precision-made
														beam, rugged cast-iron wedge and robust cast-steel
														foot plate that ensure years of operation. Learn
														more here!
													</p>
													<picture>
														<source
															media="(min-width: 1024px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw5d54157c/menu-card-images/Cub-Cadet-LS33CCHP_NavCard.png"
														/>
														<source
															media="(min-width: 767px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw5d54157c/menu-card-images/Cub-Cadet-LS33CCHP_NavCard.png"
														/>
														<source
															media="(min-width: 480px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw5d54157c/menu-card-images/Cub-Cadet-LS33CCHP_NavCard.png"
														/>
														<img
															alt="category tile"
															className="primary-tile-image lazyloaded"
															data-src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw5d54157c/menu-card-images/Cub-Cadet-LS33CCHP_NavCard.png"
															src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw5d54157c/menu-card-images/Cub-Cadet-LS33CCHP_NavCard.png"
															title="Log Splitters"
														/>
													</picture>
													<div className="category-cta">
														<a
															className="btn btn-outline-secondary btn-sm"
															href="/en_US/log-splitters"
															id="category-log-splitters"
															aria-label="Log Splitters">
															Log Splitters
														</a>
														<a
															className="icon"
															href="/en_US/log-splitters"
															aria-label="Log Splitters"
														/>
													</div>
													<a
														className="overlay-link"
														href="/en_US/log-splitters"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
										{/* /CARD */}
										{/* CARD */}
										<div
											className="col-12 col-lg-4 product-col"
											category="trimmers">
											<div
												className="card category-card-dealer"
												style={{
													backgroundImage:
														'url("https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwb187a4e2/menu-card-images/CategoryHover-StringTrimmer_41AD490C912_BC490_500x495.jpg")',
												}}>
												<div className="card-body">
													<h3 className="card-title">Trimmers</h3>
													<p className="card-text">
														Trim near sidewalks, driveways and landscaping to
														give your lawn the perfect finishing touch. Shop Cub
														Cadet for String Trimmers and attachments.
													</p>
													<picture>
														<source
															media="(min-width: 1024px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw6adf0d2b/menu-card-images/Cub-Cadet-BC280_NavCard.png"
														/>
														<source
															media="(min-width: 767px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw6adf0d2b/menu-card-images/Cub-Cadet-BC280_NavCard.png"
														/>
														<source
															media="(min-width: 480px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw6adf0d2b/menu-card-images/Cub-Cadet-BC280_NavCard.png"
														/>
														<img
															alt="category tile"
															className="primary-tile-image lazyloaded"
															data-src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw6adf0d2b/menu-card-images/Cub-Cadet-BC280_NavCard.png"
															src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw6adf0d2b/menu-card-images/Cub-Cadet-BC280_NavCard.png"
															title="Trimmers"
														/>
													</picture>
													<div className="category-cta">
														<a
															className="btn btn-outline-secondary btn-sm"
															href="/en_US/trimmers"
															id="category-trimmers"
															aria-label="Trimmers">
															Trimmers
														</a>
														<a
															className="icon"
															href="/en_US/trimmers"
															aria-label="Trimmers"
														/>
													</div>
													<a
														className="overlay-link"
														href="/en_US/trimmers"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
										{/* /CARD */}
										{/* CARD */}
										<div
											className="col-12 col-lg-4 product-col"
											category="pressure-washers">
											<div
												className="card category-card-dealer"
												style={{
													backgroundImage:
														'url("https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw5f73a72f/menu-card-images/CategoryHover-PressureWasher_26B-FFH5710_CC3024H_500x495.jpg")',
												}}>
												<div className="card-body">
													<h3 className="card-title">Pressure Washers</h3>
													<p className="card-text">
														Prepping your home for a new coat of paint or
														cleaning your patio has never been faster or easier
														with a Cub Cadet Pressure Washer. Blast through the
														dirt!
													</p>
													<picture>
														<source
															media="(min-width: 1024px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwe4183271/menu-card-images/Cub-Cadet-CC3024H_NavCard.png"
														/>
														<source
															media="(min-width: 767px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwe4183271/menu-card-images/Cub-Cadet-CC3024H_NavCard.png"
														/>
														<source
															media="(min-width: 480px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwe4183271/menu-card-images/Cub-Cadet-CC3024H_NavCard.png"
														/>
														<img
															alt="category tile"
															className="primary-tile-image lazyloaded"
															data-src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwe4183271/menu-card-images/Cub-Cadet-CC3024H_NavCard.png"
															src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwe4183271/menu-card-images/Cub-Cadet-CC3024H_NavCard.png"
															title="Pressure Washers"
														/>
													</picture>
													<div className="category-cta">
														<a
															className="btn btn-outline-secondary btn-sm"
															href="/en_US/pressure-washers"
															id="category-pressure-washers"
															aria-label="Pressure Washers">
															Pressure Washers
														</a>
														<a
															className="icon"
															href="/en_US/pressure-washers"
															aria-label="Pressure Washers"
														/>
													</div>
													<a
														className="overlay-link"
														href="/en_US/pressure-washers"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
										{/* /CARD */}
										{/* CARD */}
										<div
											className="col-12 col-lg-4 product-col"
											category="commercial-equipment">
											<div
												className="card category-card-dealer"
												style={{
													backgroundImage:
														'url("https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw195488e4/menu-card-images/Home_CC_CommercialEquip_hover_desktop_500x495_v1.jpg")',
												}}>
												<div className="card-body">
													<h3 className="card-title">Commercial Equipment</h3>
													<p className="card-text">
														Cub Cadet's commercial lawn equipment is designed
														with professionals in mind and sets new standards
														for performance, durability and comfort.
													</p>
													<picture>
														<source
															media="(min-width: 1024px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwe7bf9930/menu-card-images/Cub-Cadet-ProZ-LAP_NavCard.png"
														/>
														<source
															media="(min-width: 767px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwe7bf9930/menu-card-images/Cub-Cadet-ProZ-LAP_NavCard.png"
														/>
														<source
															media="(min-width: 480px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwe7bf9930/menu-card-images/Cub-Cadet-ProZ-LAP_NavCard.png"
														/>
														<img
															alt="category tile"
															className="primary-tile-image lazyloaded"
															data-src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwe7bf9930/menu-card-images/Cub-Cadet-ProZ-LAP_NavCard.png"
															src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwe7bf9930/menu-card-images/Cub-Cadet-ProZ-LAP_NavCard.png"
															title="Commercial Equipment"
														/>
													</picture>
													<div className="category-cta">
														<a
															className="btn btn-outline-secondary btn-sm"
															href="/en_US/commercial-equipment"
															id="category-commercial-equipment"
															aria-label="Commercial Equipment">
															Commercial Equipment
														</a>
														<a
															className="icon"
															href="/en_US/commercial-equipment"
															aria-label="Commercial Equipment"
														/>
													</div>
													<a
														className="overlay-link"
														href="/en_US/commercial-equipment"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
										{/* /CARD */}
										{/* CARD */}
										<div
											className="col-12 col-lg-4 product-col"
											category="utility-vehicles">
											<div
												className="card category-card-dealer"
												style={{
													backgroundImage:
														'url("https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dw448b175d/menu-card-images/Home_CC_UTV_hover_desktop_500x495_v1.jpg")',
												}}>
												<div className="card-body">
													<h3 className="card-title">UTV</h3>
													<p className="card-text">
														Cub Cadet Utility Vehicles offer powerful utility
														and extreme versatility with four-wheel drive
														performance and comfortable travel.
													</p>
													<picture>
														<source
															media="(min-width: 1024px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwf0e2109e/menu-card-images/Cub-Cadet-Challenger750_NavCard.png"
														/>
														<source
															media="(min-width: 767px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwf0e2109e/menu-card-images/Cub-Cadet-Challenger750_NavCard.png"
														/>
														<source
															media="(min-width: 480px)"
															srcSet="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwf0e2109e/menu-card-images/Cub-Cadet-Challenger750_NavCard.png"
														/>
														<img
															alt="category tile"
															className="primary-tile-image lazyloaded"
															data-src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwf0e2109e/menu-card-images/Cub-Cadet-Challenger750_NavCard.png"
															src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-sales-catalog/default/dwf0e2109e/menu-card-images/Cub-Cadet-Challenger750_NavCard.png"
															title="UTV"
														/>
													</picture>
													<div className="category-cta">
														<a
															className="btn btn-outline-secondary btn-sm"
															href="/en_US/utility-vehicles-and-accessories"
															id="category-utility-vehicles"
															aria-label="UTV">
															UTV
														</a>
														<a
															className="icon"
															href="/en_US/utility-vehicles-and-accessories"
															aria-label="UTV"
														/>
													</div>
													<a
														className="overlay-link"
														href="/en_US/utility-vehicles-and-accessories"
														aria-hidden="true"
													/>
												</div>
											</div>
										</div>
										{/* /CARD */}
									</div>
								</div>
							</div>
							{/* @LEARN MORE */}
							<a
								className="dealer-tab-heading dealer-tab-heading--mobile  "
								data-tab-heading="learn-more"
								aria-expanded="false"
								href="#">
								<span className="dealer-tab-heading-copy">Learn more</span>
								<i className="dealer-tab-heading-icon" />
							</a>
							<div
								className="dealer-tab-content "
								data-tab-content="learn-more">
								<div className="dealer-container dealer-learn-more-container"></div>
							</div>
							{/* @SCHEDULE A TEST DRIVE */}
							<a
								className="dealer-tab-heading dealer-tab-heading--mobile "
								data-tab-heading="schedule-test-drive"
								aria-expanded="false"
								href="#">
								<span className="dealer-tab-heading-copy">
									Schedule a test drive
								</span>
								<i className="dealer-tab-heading-icon" />
							</a>
							<div
								className="dealer-tab-content "
								data-tab-content="schedule-test-drive">
								<div className="dealer-testdrive-container dealer-container">
									<div className="content-asset">
										{/* dwMarker="content" dwContentID="7ed5f329fa6ea0fcc3fe100aa4" */}
										<h3 className="dealer-testdrive-title">
											Schedule Your Test Drive
										</h3>
										<p className="dealer-testdrive-msg">
											Take a spin on remarkable zero-turn riders and incredible
											lawn tractors. Talk to us, your locally owned dealer,
											about which Cub Cadet is right for you. We’re specially
											trained to deliver expert service and advice. Learn about
											exceptional offers available for a limited time.
										</p>
									</div>{" "}
									{/* End content-asset */}
									<div
										id="testDriveFormSuccessMessage"
										className="w-100"
										style={{ display: "none" }}>
										<div className="html-slot-container">
											<div
												className="alert alert-success text-center"
												role="alert">
												Your message is successfully sent.
											</div>
										</div>
									</div>
									<div
										id="testDriveFormErrorMessage"
										className="w-100"
										style={{ display: "none" }}>
										<div className="html-slot-container">
											<div
												className="alert alert-danger text-center"
												role="alert">
												Your message wasn't sent due to technical problem. Our
												team is working on it.
											</div>
										</div>
									</div>
									<form
										action="https://forms.cubcadetondemandmarketing.com/tde"
										className="col-md-12 col-lg-8 mx-auto"
										id="testDriveForm"
										method="POST"
										name="dwfrm_scheduletestdrive">
										<div className="row">
											<div className="col-md-5">
												<div className="form-group required">
													<label
														className="form-control-label"
														htmlFor="testdrive-form-firstname">
														First Name
													</label>
													<input
														type="text"
														className="form-control"
														id="testdrive-form-firstname"
														name="firstname"
														required=""
														//
														maxLength={50}
													/>
													<div className="invalid-feedback" />
												</div>
												<div className="form-group required">
													<label
														className="form-control-label"
														htmlFor="testdrive-form-lastname">
														Last Name
													</label>
													<input
														type="text"
														className="form-control"
														id="testdrive-form-lastname"
														name="lastname"
														required=""
														//
														maxLength={50}
													/>
													<div className="invalid-feedback" />
												</div>
												<div className="form-group form-group-phone required">
													<label
														className="form-control-label"
														htmlFor="testdrive-form-phone">
														Phone
													</label>
													<input
														type="tel"
														className="form-control"
														id="testdrive-form-phone"
														name="phone"
														data-range-error="Must be between 10 to 20 characters required."
														data-pattern-mismatch="Please enter using the format 9876543210"
														placeholder="Ex: 9234567890"
														required=""
														maxLength={10}
														minLength={8}
														pattern="^\(?([2-9][0-8][0-9])\)?[\-\. ]?([2-9][0-9]{2})[\-\. ]?([0-9]{4})(\s*x[0-9]+)?$"
													/>
													<div className="invalid-feedback" />
												</div>
												<div className="form-group required">
													<label
														className="form-control-label"
														htmlFor="testdrive-form-email">
														Email
													</label>
													<input
														type="email"
														className="form-control"
														data-pattern-mismatch="Email must include '@' and a domain (e.g .com)"
														id="testdrive-form-email"
														name="email"
														required=""
														maxLength={50}
														pattern="^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$"
													/>
													<div className="invalid-feedback" />
												</div>
											</div>
											<div className="col-md-5 ml-auto">
												<div className="form-group available-products-group">
													<label className="form-control-label">
														What would you like to test?
													</label>
													<div className="available-products-list">
														<div className="form-group custom-control custom-checkbox">
															<input
																type="checkbox"
																name="EquipmentTypes[0]"
																id="testdrive-product-0"
																className="custom-control-input"
															/>
															<label
																className="custom-control-label"
																htmlFor="testdrive-product-0">
																Ultima Series
															</label>
														</div>
														<div className="form-group custom-control custom-checkbox">
															<input
																type="checkbox"
																name="EquipmentTypes[1]"
																id="testdrive-product-1"
																className="custom-control-input"
															/>
															<label
																className="custom-control-label"
																htmlFor="testdrive-product-1">
																XT Enduro Series™
															</label>
														</div>
														<div className="form-group custom-control custom-checkbox">
															<input
																type="checkbox"
																name="EquipmentTypes[2]"
																id="testdrive-product-2"
																className="custom-control-input"
															/>
															<label
																className="custom-control-label"
																htmlFor="testdrive-product-2">
																CC 30 H Rider
															</label>
														</div>
														<div className="form-group custom-control custom-checkbox">
															<input
																type="checkbox"
																name="EquipmentTypes[3]"
																id="testdrive-product-3"
																className="custom-control-input"
															/>
															<label
																className="custom-control-label"
																htmlFor="testdrive-product-3">
																RZT® SX Series
															</label>
														</div>
														<div className="form-group custom-control custom-checkbox">
															<input
																type="checkbox"
																name="EquipmentTypes[4]"
																id="testdrive-product-4"
																className="custom-control-input"
															/>
															<label
																className="custom-control-label"
																htmlFor="testdrive-product-4">
																Z-FORCE® LX Series
															</label>
														</div>
														<div className="form-group custom-control custom-checkbox">
															<input
																type="checkbox"
																name="EquipmentTypes[5]"
																id="testdrive-product-5"
																className="custom-control-input"
															/>
															<label
																className="custom-control-label"
																htmlFor="testdrive-product-5">
																Z-FORCE® S/SX Series
															</label>
														</div>
														<div className="form-group custom-control custom-checkbox">
															<input
																type="checkbox"
																name="EquipmentTypes[6]"
																id="testdrive-product-6"
																className="custom-control-input"
															/>
															<label
																className="custom-control-label"
																htmlFor="testdrive-product-6">
																PRO Z™ Series
															</label>
														</div>
														<div className="form-group custom-control custom-checkbox">
															<input
																type="checkbox"
																name="EquipmentTypes[7]"
																id="testdrive-product-7"
																className="custom-control-input"
															/>
															<label
																className="custom-control-label"
																htmlFor="testdrive-product-7">
																Other
															</label>
														</div>
													</div>
													<div className="custom-invalid-feedback">
														Please select which product line you would like to
														test.
													</div>
												</div>
											</div>
										</div>
										<div className="recaptch-content">
											<div id="testDriveRecaptcha" className="g-recaptcha">
												<div style={{ width: 304, height: 78 }}>
													<div>
														<iframe
															title="reCAPTCHA"
															src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Ld6dcgUAAAAAGojPFvbKFqpMamNEcyYpYel8rdy&co=aHR0cHM6Ly93d3cuY3ViY2FkZXQuY29tOjQ0Mw..&hl=en&v=0hCdE87LyjzAkFO5Ff-v7Hj1&size=normal&cb=tfk43i98krm1"
															width={304}
															height={78}
															role="presentation"
															name="a-2lgj4hkikybe"
															frameBorder={0}
															scrolling="no"
															sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
														/>
													</div>
													<textarea
														id="g-recaptcha-response-1"
														name="g-recaptcha-response"
														className="g-recaptcha-response"
														style={{
															width: 250,
															height: 40,
															border: "1px solid rgb(193, 193, 193)",
															margin: "10px 25px",
															padding: 0,
															resize: "none",
															display: "none",
														}}
													/>
												</div>
												<iframe style={{ display: "none" }} />
											</div>
											<div className="invalid-feedback">
												ReCaptcha validation failed
											</div>
										</div>
										<div className="form-group-cta">
											<button
												type="submit"
												id="sendTestDrive"
												className="btn btn-block btn-secondary">
												Submit
											</button>
										</div>
										<input type="hidden" name="CompanyId" />
										<input type="hidden" name="null" />
									</form>
								</div>
							</div>
							{/* @SEE PROMOTIONS */}
							<a
								className="dealer-tab-heading dealer-tab-heading--mobile "
								data-tab-heading="see-promotions"
								aria-expanded="false"
								href="#">
								<span className="dealer-tab-heading-copy">See promotions</span>
								<i className="dealer-tab-heading-icon" />
							</a>
							<div
								className="dealer-tab-content "
								data-tab-content="see-promotions">
								<div className="container">
									<h4
										className="h4 text-center mb-3"
										style={{ fontSize: "2.2rem" }}>
										Current In-Store Promotions &amp; Financing Offers
									</h4>
									<ul className="list-unstyled d-flex flex-wrap">
										<li className="col-md-6 col-lg-4 mx-0 p-1 mb-1">
											<div className="border h-100 x d-flex flex-column ">
												<ul className="list-unstyled text-center p-2 bg-secondary">
													<li className="display-1" style={{ fontSize: 68 }}>
														24
													</li>
													<li className="display-4">months</li>
												</ul>
												<ul className="list-unstyled px-2 pt-2">
													<li
														className="text-center font-bold mb-1"
														style={{ fontSize: "1.4rem" }}>
														0% APR for 24 months with equal payments<sup>3</sup>
													</li>
													<li>
														<ul
															className="mx-auto"
															style={{ fontSize: "1.1rem" }}>
															<li>
																<strong>
																	There is a promotional fee of $125 for this
																	transaction
																</strong>
															</li>
															<li>
																Minimum purchase <strong>$2,000</strong>
															</li>
															<li>
																<strong>Valid from:</strong> 8/1/23 - 10/31/23
															</li>
														</ul>
													</li>
												</ul>
												<ul className="mt-auto list-unstyled pt-1 pb-2 px-6">
													<li className="pt-1 text-center">
														<a
															className="td-payment-details btn-text"
															data-title="Details & Disclosures"
															data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
															href="javascript:void(0)"
															tabIndex={0}>
															Click for Details
														</a>
													</li>
													<li className="text-center mt-3">
														<a
															className="btn btn-primary w-100 w-lg-auto"
															href="https://finance.consumercreditapp.com/cc/landing/cub_cadet"
															tabIndex={0}>
															Apply Now
														</a>
													</li>
												</ul>
											</div>
										</li>
										<li className="col-md-6 col-lg-4 mx-0 p-1 mb-1">
											<div className="border h-100 x d-flex flex-column ">
												<ul className="list-unstyled text-center p-2 bg-secondary">
													<li className="display-1" style={{ fontSize: 68 }}>
														36
													</li>
													<li className="display-4">months</li>
												</ul>
												<ul className="list-unstyled px-2 pt-2">
													<li
														className="text-center font-bold mb-1"
														style={{ fontSize: "1.4rem" }}>
														0% APR for 36 months with equal payments<sup>5</sup>
													</li>
													<li>
														<ul
															className="mx-auto"
															style={{ fontSize: "1.1rem" }}>
															<li>
																<strong>
																	There is a promotional fee of $125 for this
																	transaction.
																</strong>
															</li>
															<li>
																Minimum purchase <strong>$3,000</strong>
															</li>
															<li>Excludes Utility Vehicles</li>
															<li>
																<strong>Valid from:</strong> 8/1/23 - 10/31/23
															</li>
														</ul>
													</li>
												</ul>
												<ul className="mt-auto list-unstyled pt-1 pb-2 px-6">
													<li className="pt-1 text-center">
														<a
															className="td-payment-details btn-text"
															data-title="Details & Disclosures"
															data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
															href="javascript:void(0)"
															tabIndex={0}>
															Click for Details
														</a>
													</li>
													<li className="text-center mt-3">
														<a
															className="btn btn-primary w-100 w-lg-auto"
															href="https://finance.consumercreditapp.com/cc/landing/cub_cadet"
															tabIndex={0}>
															Apply Now
														</a>
													</li>
												</ul>
											</div>
										</li>
										<li className="col-md-6 col-lg-4 mx-0 p-1 mb-1">
											<div className="border h-100 x d-flex flex-column ">
												<ul className="list-unstyled text-center p-2 bg-secondary">
													<li className="display-1" style={{ fontSize: 68 }}>
														48
													</li>
													<li className="display-4">months</li>
												</ul>
												<ul className="list-unstyled px-2 pt-2">
													<li
														className="text-center font-bold mb-1"
														style={{ fontSize: "1.4rem" }}>
														0% APR for 48 months with equal payments<sup>6</sup>
													</li>
													<li>
														<ul
															className="mx-auto"
															style={{ fontSize: "1.1rem" }}>
															<li>
																<strong>
																	There is a promotional fee of $125 for this
																	transaction.
																</strong>
															</li>
															<li>
																Minimum purchase <strong>$5,000</strong>
															</li>
															<li>Excludes Utility Vehicles</li>
															<li>
																<strong>Valid from:</strong> 9/1/23 - 10/31/23
															</li>
														</ul>
													</li>
												</ul>
												<ul className="mt-auto list-unstyled pt-1 pb-2 px-6">
													<li className="pt-1 text-center">
														<a
															className="td-payment-details btn-text"
															data-title="Details & Disclosures"
															data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
															href="javascript:void(0)"
															tabIndex={0}>
															Click for Details
														</a>
													</li>
													<li className="text-center mt-3">
														<a
															className="btn btn-primary w-100 w-lg-auto"
															href="https://finance.consumercreditapp.com/cc/landing/cub_cadet"
															tabIndex={0}>
															Apply Now
														</a>
													</li>
												</ul>
											</div>
										</li>
										<li className="col-md-6 col-lg-4 mx-0 p-1 mb-1">
											<div className="border h-100 x d-flex flex-column ">
												<ul className="list-unstyled text-center p-2 bg-secondary">
													<li className="display-1" style={{ fontSize: 68 }}>
														60
													</li>
													<li className="display-4">months</li>
												</ul>
												<ul className="list-unstyled px-2 pt-2">
													<li
														className="text-center font-bold mb-1"
														style={{ fontSize: "1.4rem" }}>
														0% APR for 60 Months with Equal Payments
														<sup>15</sup>
													</li>
													<li>
														<ul
															className="mx-auto"
															style={{ fontSize: "1.1rem" }}>
															<li>
																<strong>
																	There is a promotional fee of $125 for this
																	transaction.
																</strong>
															</li>
															<li>
																Minimum purchase <strong>$6,000</strong>
															</li>
															<li>Excludes Utility Vehicles</li>
															<li>
																<strong>Valid from:</strong> 8/1/23 - 10/31/23
															</li>
														</ul>
													</li>
												</ul>
												<ul className="mt-auto list-unstyled pt-1 pb-2 px-6">
													<li className="pt-1 text-center">
														<a
															className="td-payment-details btn-text"
															data-title="Details & Disclosures"
															data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
															href="javascript:void(0)"
															tabIndex={0}>
															Click for Details
														</a>
													</li>
													<li className="text-center mt-3">
														<a
															className="btn btn-primary w-100 w-lg-auto"
															href="https://finance.consumercreditapp.com/cc/landing/cub_cadet"
															tabIndex={0}>
															Apply Now
														</a>
													</li>
												</ul>
											</div>
										</li>
										<li className="col-md-6 col-lg-4 mx-0 p-1 mb-1">
											<div className="border h-100 x d-flex flex-column ">
												<ul className="list-unstyled text-center p-2 bg-secondary">
													<li className="display-1" style={{ fontSize: 68 }}>
														36
													</li>
													<li className="display-4">months</li>
												</ul>
												<ul className="list-unstyled px-2 pt-2">
													<li
														className="text-center font-bold mb-1"
														style={{ fontSize: "1.4rem" }}>
														1.99% APR with 36 Monthly Payments<sup>7</sup>
													</li>
													<li>
														<ul
															className="mx-auto"
															style={{ fontSize: "1.1rem" }}>
															<li>
																<strong>
																	There is a promotional fee of $125 for this
																	transaction.
																</strong>
															</li>
															<li>
																Minimum purchase <strong>$1,500</strong>
															</li>
															<li>
																<strong>Valid from:</strong> 8/1/23 - 10/31/23
															</li>
														</ul>
													</li>
												</ul>
												<ul className="mt-auto list-unstyled pt-1 pb-2 px-6">
													<li className="pt-1 text-center">
														<a
															className="td-payment-details btn-text"
															data-title="Details & Disclosures"
															data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
															href="javascript:void(0)"
															tabIndex={0}>
															Click for Details
														</a>
													</li>
													<li className="text-center mt-3">
														<a
															className="btn btn-primary w-100 w-lg-auto"
															href="https://finance.consumercreditapp.com/cc/landing/cub_cadet"
															tabIndex={0}>
															Apply Now
														</a>
													</li>
												</ul>
											</div>
										</li>
										<li className="col-md-6 col-lg-4 mx-0 p-1 mb-1">
											<div className="border h-100 x d-flex flex-column ">
												<ul className="list-unstyled text-center p-2 bg-secondary">
													<li className="display-1" style={{ fontSize: 68 }}>
														48
													</li>
													<li className="display-4">months</li>
												</ul>
												<ul className="list-unstyled px-2 pt-2">
													<li
														className="text-center font-bold mb-1"
														style={{ fontSize: "1.4rem" }}>
														2.99% APR with 48 Monthly Payments<sup>8</sup>
													</li>
													<li>
														<ul
															className="mx-auto"
															style={{ fontSize: "1.1rem" }}>
															<li>
																<strong>
																	There is a promotional fee of $125 for this
																	transaction.
																</strong>
															</li>
															<li>
																Minimum purchase <strong>$1,500</strong>
															</li>
															<li>
																<strong>Valid from:</strong> 8/1/23 - 10/31/23
															</li>
														</ul>
													</li>
												</ul>
												<ul className="mt-auto list-unstyled pt-1 pb-2 px-6">
													<li className="pt-1 text-center">
														<a
															className="td-payment-details btn-text"
															data-title="Details & Disclosures"
															data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
															href="javascript:void(0)"
															tabIndex={0}>
															Click for Details
														</a>
													</li>
													<li className="text-center mt-3">
														<a
															className="btn btn-primary w-100 w-lg-auto"
															href="https://finance.consumercreditapp.com/cc/landing/cub_cadet"
															tabIndex={0}>
															Apply Now
														</a>
													</li>
												</ul>
											</div>
										</li>
										<li className="col-md-6 col-lg-4 mx-0 p-1 mb-1">
											<div className="border h-100 x d-flex flex-column ">
												<ul className="list-unstyled text-center p-2 bg-secondary">
													<li className="display-1" style={{ fontSize: 68 }}>
														60
													</li>
													<li className="display-4">months</li>
												</ul>
												<ul className="list-unstyled px-2 pt-2">
													<li
														className="text-center font-bold mb-1"
														style={{ fontSize: "1.4rem" }}>
														3.99% APR with 60 Monthly Payments<sup>9</sup>
													</li>
													<li>
														<ul
															className="mx-auto"
															style={{ fontSize: "1.1rem" }}>
															<li>
																<strong>
																	There is a promotional fee of $125 for this
																	transaction.
																</strong>
															</li>
															<li>
																Minimum purchase <strong>$1,500</strong>
															</li>
															<li>
																<strong>Valid from:</strong> 8/1/23 - 10/31/23
															</li>
														</ul>
													</li>
												</ul>
												<ul className="mt-auto list-unstyled pt-1 pb-2 px-6">
													<li className="pt-1 text-center">
														<a
															className="td-payment-details btn-text"
															data-title="Details & Disclosures"
															data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
															href="javascript:void(0)"
															tabIndex={0}>
															Click for Details
														</a>
													</li>
													<li className="text-center mt-3">
														<a
															className="btn btn-primary w-100 w-lg-auto"
															href="https://finance.consumercreditapp.com/cc/landing/cub_cadet"
															tabIndex={0}>
															Apply Now
														</a>
													</li>
												</ul>
											</div>
										</li>
									</ul>
									<div className="p-1">&nbsp;</div>
								</div>
							</div>
							{/* @CONTACT US */}
							<a
								className="dealer-tab-heading dealer-tab-heading--mobile "
								data-tab-heading="contact-us"
								aria-expanded="false"
								href="#">
								<span className="dealer-tab-heading-copy">Contact us</span>
								<i className="dealer-tab-heading-icon" />
							</a>
							<div
								className="dealer-tab-content "
								data-tab-content="contact-us">
								<div className="dealer-contactus-container dealer-container">
									<div className="content-asset">
										{/* dwMarker="content" dwContentID="766a0fdf5eeaa954a846f7fdf1" */}
										<h3 className="dealer-contactus-title">How Can We Help?</h3>
										<p className="dealer-contactus-msg">
											No matter your needs or questions, your local Cub Cadet
											dealer is just waiting to help. Our dealers stick with you
											past the point of purchase, along every step of the way,
											making sure that your Cub Cadet keeps running like it did
											the day you bought it. Because even your Cub Cadet Dealer
											relationship is strong and built to last.
										</p>
									</div>{" "}
									{/* End content-asset */}
									<div
										id="contactUsFormSuccessMessage"
										className="w-100 px-sm-1"
										style={{ display: "none" }}>
										<div className="html-slot-container">
											<div
												className="alert alert-success text-center"
												role="alert">
												Your message is successfully sent.
											</div>
										</div>
									</div>
									<div
										id="contactUsFormErrorMessage"
										className="w-100 px-sm-1"
										style={{ display: "none" }}>
										<div className="html-slot-container">
											<div
												className="alert alert-danger text-center"
												role="alert">
												Your message wasn't sent due to technical problem. Our
												team is working on it.
											</div>
										</div>
									</div>
									<form
										action="https://forms.cubcadetondemandmarketing.com/contact"
										className="col-md-12 col-lg-8 mx-auto"
										id="contactUsForm"
										method="POST"
										name="dwfrm_contactus">
										<div className="form-group required">
											<label
												className="form-control-label"
												htmlFor="registration-form-firstname">
												First Name
											</label>
											<input
												type="text"
												className="form-control"
												id="registration-form-firstname"
												name="firstname"
												required=""
												maxLength={50}
											/>
											<div className="invalid-feedback" />
										</div>
										<div className="form-group required">
											<label
												className="form-control-label"
												htmlFor="registration-form-lastname">
												Last Name
											</label>
											<input
												type="text"
												className="form-control"
												id="registration-form-lastname"
												name="lastname"
												required=""
												maxLength={50}
											/>
											<div className="invalid-feedback" />
										</div>
										<div className="form-group required">
											<label
												className="form-control-label"
												htmlFor="registration-form-phone">
												Phone
											</label>
											<input
												type="tel"
												className="form-control"
												id="registration-form-phone"
												name="phone"
												data-range-error="Must be between 10 to 20 characters required."
												data-pattern-mismatch="Please enter using the format 9876543210"
												required=""
												maxLength={10}
												minLength={8}
												pattern="^\(?([2-9][0-8][0-9])\)?[\-\. ]?([2-9][0-9]{2})[\-\. ]?([0-9]{4})(\s*x[0-9]+)?$"
											/>
											<div className="invalid-feedback" />
										</div>
										<div className="form-group required">
											<label
												className="form-control-label"
												htmlFor="registration-form-email">
												Email
											</label>
											<input
												type="email"
												className="form-control"
												data-pattern-mismatch="Email must include '@' and a domain (e.g .com)"
												id="registration-form-email"
												name="email"
												required=""
												maxLength={50}
												pattern="^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$"
											/>
											<div className="invalid-feedback" />
										</div>
										<div className="form-group required">
											<label
												className="form-control-label"
												htmlFor="registration-form-message">
												Message
											</label>
											<textarea
												className="form-control"
												id="registration-form-message"
												name="message"
												placeholder="Type something..."
												required=""
												maxLength={250}
											/>
											<div className="invalid-feedback" />
										</div>
										<div className="recaptcha-content">
											<div id="contactUsRecaptcha" className="g-recaptcha">
												<div style={{ width: 304, height: 78 }}>
													<div>
														<iframe
															title="reCAPTCHA"
															src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Ld6dcgUAAAAAGojPFvbKFqpMamNEcyYpYel8rdy&co=aHR0cHM6Ly93d3cuY3ViY2FkZXQuY29tOjQ0Mw..&hl=en&v=0hCdE87LyjzAkFO5Ff-v7Hj1&size=normal&cb=c7wm65i0uzta"
															width={304}
															height={78}
															role="presentation"
															name="a-a6ynn3roct4m"
															frameBorder={0}
															scrolling="no"
															sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
														/>
													</div>
													<textarea
														id="g-recaptcha-response"
														name="g-recaptcha-response"
														className="g-recaptcha-response"
														style={{
															width: 250,
															height: 40,
															border: "1px solid rgb(193, 193, 193)",
															margin: "10px 25px",
															padding: 0,
															resize: "none",
															display: "none",
														}}
													/>
												</div>
											</div>
											<div className="invalid-feedback">
												ReCaptcha validation failed
											</div>
										</div>
										<input type="hidden" name="null" />
										<input type="hidden" name="CompanyId" />
										<div className="form-group-cta">
											<button
												type="submit"
												id="sendContactUs"
												className="btn contact-us btn-block btn-secondary">
												Submit
											</button>
										</div>
									</form>
									<div className="invalid-feedback">
										ReCaptcha validation failed
									</div>
								</div>
							</div>
							{/* @NEWS */}
							<a
								className="dealer-tab-heading dealer-tab-heading--mobile  "
								data-tab-heading="news"
								aria-expanded="false"
								href="#">
								<span className="dealer-tab-heading-copy">News</span>
								<i className="dealer-tab-heading-icon" />
							</a>
							<div className="dealer-tab-content " data-tab-content="news">
								<div className="dealer-container">
									<div className="news-items-heading">Our Latest News</div>
									<div className="news-item-cards container slick-initialized slick-slider slick-dotted">
										<div className="slick-list draggable">
											<div
												className="slick-track"
												style={{
													opacity: 1,
													width: 0,
													transform: "translate3d(0px, 0px, 0px)",
												}}
											/>
										</div>
										<ul className="slick-dots" role="tablist" />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* About Us */}
					<div className="dealer-aboutus">
						<div className="dealer-aboutus-container dealer-container">
							Come by and see us for Cub Cadet product demonstrations. If you
							are not sure which Cub Cadet product is right for your needs, we
							will assist you. As always, we want you to have the right Cub
							Cadet product for the right job.
							<br />
							<br />
							For years our customers have turned to us when they needed outdoor
							power equipment and also when they've needed that equipment
							serviced. We are proud of our commitment to our neighbors and
							community and it's our promise to you that we'll help you find the
							right equipment for your home or business.
							<br />
							<br />
							With our service after the sale, we'll keep that equipment running
							right for as long as you own it. So, before you make your next
							purchase, give a call or visit our store location. We're sure
							you'll find great products and services to meet your needs.
							<br />
							<br />
							We look forward to seeing you and if you have any questions in the
							meantime, please don't hesitate to contact us.
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
