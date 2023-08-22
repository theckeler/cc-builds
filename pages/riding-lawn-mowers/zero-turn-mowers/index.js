export default function ZeroTurn() {
	return (
		<div className="mtd-page">
			<style
				dangerouslySetInnerHTML={{
					__html:
						"\n\t\t.container.content-asset-container {\n\t\t\tmax-width: 100%;\n\t\t\tpadding: 0;\n\t\t\tmargin: 0;\n\t\t}\n\n\t\t.mtd-page {\n\t\t\tfont-size: 16px;\n\t\t}\n\t\t.mtd-page .bg-yellow {\n\t\t\tbackground: #fff;\n\t\t}\n\t\t.mtd-page .wrapper {\n\t\t\tposition: relative;\n\t\t\tz-index: 1;\n\t\t\twidth: 100%;\n\t\t\tmax-width: 80.625rem;\n\t\t\tmargin: auto;\n\t\t}\n\t\t.mtd-page .bg-black {\n\t\t\tbackground-color: #000;\n\t\t\tcolor: #fff;\n\t\t}\n\t\t.mtd-page .bg-white {\n\t\t\tbackground-color: #fff;\n\t\t\tcolor: #000;\n\t\t}\n\t\t.mtd-page .bg-grey {\n\t\t\tbackground-color: #d8d8d8;\n\t\t\tcolor: #000;\n\t\t}\n\t\t.mtd-page .bg-grey-dark {\n\t\t\tbackground-color: #c8c8c8;\n\t\t}\n\t\t.mtd-page .bg-grey-dark-2 {\n\t\t\tbackground-color: #2c2b2b;\n\t\t\tcolor: #fff;\n\t\t}\n\t\t.mtd-page .bg-yellow {\n\t\t\tbackground-color: #ffc20f;\n\t\t}\n\t\t.mtd-page .bg-none {\n\t\t\tbackground-color: transparent;\n\t\t}\n\t\t.mtd-page a.link-yellow {\n\t\t\tcolor: #ffc20f;\n\t\t}\n\t\t.mtd-page h1 {\n\t\t\tfont-size: 3.125rem;\n\t\t}\n\t\t.mtd-page .fw-bold {\n\t\t\tfont-weight: 600;\n\t\t}\n\t\t.mtd-page .star-rating svg * {\n\t\t\tfill: #000;\n\t\t}\n\t\t.mtd-page .quote-block .title {\n\t\t\tfont-size: 1.125rem;\n\t\t}\n\t\t.mtd-page .quote-block .copy {\n\t\t\tfont-size: 1.375rem;\n\t\t}\n\t\t.mtd-page .quote-block .row {\n\t\t\tmargin-bottom: 0;\n\t\t}\n\t\t.mtd-page .quote-block .author,\n\t\t.mtd-page .quote-block .unit {\n\t\t\tfont-size: 1rem;\n\t\t\tflex: 0 1 auto;\n\t\t\twidth: auto;\n\t\t}\n\t\t.mtd-page .quote-block .unit {\n\t\t\tborder-left: 1px solid #000;\n\t\t}\n\t\t.mtd-page .clip-corner {\n\t\t\t-webkit-clip-path: polygon(\n\t\t\t\t1.5rem 0,\n\t\t\t\t100% 0%,\n\t\t\t\t100% 100%,\n\t\t\t\t0 100%,\n\t\t\t\t0 1.5rem\n\t\t\t);\n\t\t\tclip-path: polygon(1.5rem 0, 100% 0%, 100% 100%, 0 100%, 0 1.5rem);\n\t\t}\n\t\t.mtd-page .desktop {\n\t\t\tdisplay: block;\n\t\t}\n\t\t.mtd-page .mobile {\n\t\t\tdisplay: none;\n\t\t}\n\t\t.mtd-page .unstyled.link {\n\t\t\ttext-decoration: none;\n\t\t}\n\t\t.mtd-page button.bg-black,\n\t\t.mtd-page .button.bg-black,\n\t\t.mtd-page .btn.bg-black {\n\t\t\tcolor: #fff;\n\t\t\tbackground: #000;\n\t\t}\n\t\t.mtd-page button.bg-yellow,\n\t\t.mtd-page .button.bg-yellow,\n\t\t.mtd-page .btn.bg-yellow {\n\t\t\tcolor: #000;\n\t\t\tbackground: #ffc20f;\n\t\t}\n\t\t.mtd-page button:hover,\n\t\t.mtd-page .button:hover,\n\t\t.mtd-page .btn:hover {\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.mtd-page .slick-next,\n\t\t.mtd-page .slick-prev {\n\t\t\tpadding: initial;\n\t\t\tfont-weight: initial;\n\t\t}\n\t\t.mtd-page .slick-next:before,\n\t\t.mtd-page .slick-prev:before {\n\t\t\tpadding: 0.625rem;\n\t\t}\n\t\t.mtd-page .faqs .question {\n\t\t\tdisplay: flex;\n\t\t\tposition: relative;\n\t\t\tfont-size: 1.375rem;\n\t\t\tpadding: 32px 0;\n\t\t\tfont-weight: 700;\n\t\t}\n\t\t.mtd-page .faqs .question.active span {\n\t\t\ttransform: rotate(0);\n\t\t}\n\t\t.mtd-page .faqs .question span {\n\t\t\tdisplay: flex;\n\t\t\talign-content: center;\n\t\t\tjustify-content: center;\n\t\t\tposition: relative;\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t\ttransform: rotate(45deg);\n\t\t\ttransform-origin: center;\n\t\t\ttransition: all 0.2s;\n\t\t\tmargin-left: auto;\n\t\t}\n\t\t.mtd-page .faqs .answer {\n\t\t\toverflow: hidden;\n\t\t\tmax-height: 0;\n\t\t\tborder-bottom: 1px solid #d9d9d9;\n\t\t\ttransition: max-height 0.2s;\n\t\t}\n\t\t.mtd-page .faqs .answer.active {\n\t\t\tmax-height: 1000px;\n\t\t}\n\t\t.mtd-page .faqs .answer.active span {\n\t\t\ttransform: rotate(0);\n\t\t}\n\t\t.mtd-page .video-wrapper {\n\t\t\tposition: relative;\n\t\t\tpadding-bottom: 56.25%; /* 16:9 */\n\t\t\tpadding-top: 25px;\n\t\t\theight: 0;\n\t\t}\n\t\t.mtd-page .video-wrapper iframe {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t}\n\t\t.mtd-page .max-width-1000 {\n\t\t\tmax-width: 62.5rem;\n\t\t\tmargin: auto;\n\t\t}\n\t\t.mtd-page .max-width-800 {\n\t\t\tmax-width: 50rem;\n\t\t\tmargin: auto;\n\t\t}\n\t\t.mtd-page .cursor-grab {\n\t\t\tcursor: -webkit-grab;\n\t\t\tcursor: grab;\n\t\t}\n\t\t.mtd-page .overlay {\n\t\t\tdisplay: none;\n\t\t\tz-index: 99;\n\t\t\tbackground: rgba(0, 0, 0, 0.5);\n\t\t\tposition: absolute;\n\t\t\twidth: 0;\n\t\t\theight: 0;\n\t\t\ttop: 0px;\n\t\t\tleft: 0px;\n\t\t\toverflow: hidden;\n\t\t}\n\t\t.mtd-page .overlay.active {\n\t\t\tdisplay: block;\n\t\t\twidth: 100vw;\n\t\t\theight: 100vh;\n\t\t}\n\n\t\t@media (min-width: 64em) {\n\t\t\t.position-lg-relative {\n\t\t\t\tposition: relative !important;\n\t\t\t}\n\t\t\t.position-lg-absolute {\n\t\t\t\tposition: absolute !important;\n\t\t\t}\n\t\t\t.border-lg-right {\n\t\t\t\tborder-right-width: 1px;\n\t\t\t\tborder-right-style: solid;\n\t\t\t}\n\t\t\t.w-lg-500 {\n\t\t\t\twidth: 500px;\n\t\t\t}\n\t\t\t.text-lg-white {\n\t\t\t\tcolor: #fff !important;\n\t\t\t}\n\t\t\t.text-lg-white a {\n\t\t\t\tcolor: #fff !important;\n\t\t\t}\n\t\t\t.text-lg-black {\n\t\t\t\tcolor: #000 !important;\n\t\t\t}\n\t\t\t.text-lg-black a {\n\t\t\t\tcolor: #000 !important;\n\t\t\t}\n\t\t\t.bg-lg-transparant {\n\t\t\t\tbackground: transparent !important;\n\t\t\t\tbackground-color: transparent !important;\n\t\t\t}\n\t\t\t.bg-lg-black {\n\t\t\t\tbackground: #000 !important;\n\t\t\t\tbackground-color: #000 !important;\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 64rem) {\n\t\t\t.quote-block {\n\t\t\t\tmax-width: 100%;\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 48rem) {\n\t\t\t.mtd-page .desktop {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.mtd-page .mobile {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\t\t.hide {\n\t\t\tdisplay: none;\n\t\t}\n\t\t.hide.active {\n\t\t\tdisplay: block;\n\t\t}\n\t",
				}}
			/>
			<div className="top">
				<section className="position-relative" style={{ minHeight: "500px" }}>
					<img
						alt=""
						rel="preload"
						as="image"
						fetchpriority="high"
						decoding="async"
						data-nimg="fill"
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						srcSet="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/vd543c4bdcb4ecd57647da8407d6249a8b0c7f051/ZeroTurnLanding/hero.jpg?version=1,671,452,470,000 384w, https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/vd543c4bdcb4ecd57647da8407d6249a8b0c7f051/ZeroTurnLanding/hero.jpg?version=1,671,452,470,000 640w, https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/vd543c4bdcb4ecd57647da8407d6249a8b0c7f051/ZeroTurnLanding/hero.jpg?version=1,671,452,470,000 1080w, https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/vd543c4bdcb4ecd57647da8407d6249a8b0c7f051/ZeroTurnLanding/hero.jpg?version=1,671,452,470,000 1200w, https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/vd543c4bdcb4ecd57647da8407d6249a8b0c7f051/ZeroTurnLanding/hero.jpg?version=1,671,452,470,000 1920w, https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/vd543c4bdcb4ecd57647da8407d6249a8b0c7f051/ZeroTurnLanding/hero.jpg?version=1,671,452,470,000"
						src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/vd543c4bdcb4ecd57647da8407d6249a8b0c7f051/ZeroTurnLanding/hero.jpg?version=1,671,452,470,000"
						style={{
							position: "absolute",
							objectFit: "cover",
							height: "100%",
							width: "100%",
							inset: 0,
							color: "transparent",
						}}
					/>
				</section>
				<section className="py-5 px-1">
					<div className="container">
						<h1 className="text-lg-center">Cub Cadet Zero-Turn Mowers</h1>
						<p
							className="text-lg-center mt2 mb-0 mx-auto"
							style={{ maxWidth: 800, lineHeight: "1.8" }}>
							Zero-turn lawn mowers answer the call of challenging yards and
							difficult obstacles. It’s time to explore the full Cub Cadet
							line-up of innovative zero-turns, including lap bar and Cub Cadet
							exclusive steering wheel options as part of the Ultima series.
							With a zero-turn mower, the possibilities are at every turn.
						</p>
					</div>
				</section>
				<section className="py-5 px-1">
					<div className="container">
						<ul className="list-unstyled d-flex flex-column flex-lg-row">
							<li className="col-12 col-lg-5 p-0 overflow-hidden">
								<img
									alt=""
									className="h-100"
									src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/ZeroTurnLanding/intro.jpg"
									style={{}}
									loading="lazy"
								/>
							</li>
							<li className="col-12 col-lg-7 bg-secondary">
								<div className="p-3">
									<h2 className="mb-2 display-2">
										Introducing the Ultima Series
										<sup>™</sup>
										ZTXS
									</h2>
									<h3 className="mb-2 display-3">
										The Ultima Series™ Zero-Turn with
										<br />
										Commercial-Grade Features
									</h3>
									<p className="mb-2" style={{ lineHeight: "1.8" }}>
										From tight turns to inclined hillsides and stretching
										valleys, the Ultima ZTXS is built to help tackle your yard’s
										unique challenges. The Ultima ZTXS brings Cub Cadet’s
										innovative and proprietary Synchro-Steer
										<sup>™</sup>
										technology to the proven Ultima Series
										<sup>™</sup>
										platform for reliable precision and confident control.
									</p>
									<a
										className="button text-uppercase font-weight-bold text-decoration-none d-inline-block border-0 bg-black"
										href="https://www.cubcadet.com/en_US/ultima-ztxs-zero-turn-mowers"
										style={{ padding: "0.625rem 2.5rem" }}>
										Learn more about the Ultima ztxs
									</a>
								</div>
							</li>
						</ul>
					</div>
				</section>
				<section>
					<div className="container py-5 px-1 d-flex flex-column">
						<h2 className="mb-2 display-1 text-center">
							Explore Zero-Turn Mowers
						</h2>
						<ul className="list-unstyled d-flex flex-column flex-lg-row flex-wrap justify-content-center">
							<li className="col-12 col-lg-4 p-2">
								<div
									className="mb-2 p-2 h-100 d-flex flex-column h-100 position-relative"
									style={{ backgroundColor: "rgb(239, 239, 239)" }}>
									<div className="bg-white p-2">
										<img
											alt=""
											className="w-100 mb-2"
											src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/product-ZT.jpg?version=1,639,577,706,000"
											loading="lazy"
										/>
									</div>
									<h2 className="h2">Ultima ZT</h2>
									<p className="mb-2" style={{ lineHeight: "1.8" }}>
										The award-winning Ultima Series™ features enhanced strength
										and durability, redefined comfort and uncompromised
										performance.
									</p>
									<ul className="list-unstyled d-flex">
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/icon-area-5.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Up to 5 acres
											</p>
										</li>
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vecc23e1f14788ec513ab6069e28803b4ad390a90/ultima/icon-speed.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Up to 7.5 mph​
											</p>
										</li>
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vecc23e1f14788ec513ab6069e28803b4ad390a90/ultima/icon-slope-10.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Up to 15 degree slopes​
											</p>
										</li>
									</ul>
									<a
										className="button text-uppercase font-weight-bold text-decoration-none d-inline-block border-0 bg-black mb-0 text-center w-100 mt-auto"
										href="https://www.cubcadet.com/en_US/ultima-zt-zero-turn-mowers"
										style={{ padding: "0.625rem 2.5rem" }}>
										Shop Now
									</a>
								</div>
							</li>
							<li className="col-12 col-lg-4 p-2">
								<div
									className="mb-2 p-2 h-100 d-flex flex-column h-100 position-relative"
									style={{ backgroundColor: "rgb(239, 239, 239)" }}>
									<div className="bg-white p-2">
										<img
											alt=""
											className="w-100 mb-2"
											src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/product-ZT-el.jpg"
											loading="lazy"
										/>
									</div>
									<h2 className="h2">Ultima Electric ZT</h2>
									<p className="mb-2" style={{ lineHeight: "1.8" }}>
										The Ultima Series(TM) ZT1 42E is equipped with the latest
										lithium-ion battery technology for a quiet operation, run
										time up to 1.5 hours of run time and limited power fade.
									</p>
									<ul className="list-unstyled d-flex">
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vecc23e1f14788ec513ab6069e28803b4ad390a90/ultima/icon-battery.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">Electric​</p>
										</li>
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/icon-area-2.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Up to 2 acres on a single charge​
											</p>
										</li>
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vecc23e1f14788ec513ab6069e28803b4ad390a90/ultima/icon-speed.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Up to 7.0 mph​​​
											</p>
										</li>
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vecc23e1f14788ec513ab6069e28803b4ad390a90/ultima/icon-slope-10.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Up to 15 degree slopes​​
											</p>
										</li>
									</ul>
									<a
										className="button text-uppercase font-weight-bold text-decoration-none d-inline-block border-0 bg-black mb-0 text-center w-100 mt-auto"
										href="https://www.cubcadet.com/en_US/electric-lawn-mowers/zt1-42e/34CBA2CS710.html"
										style={{ padding: "0.625rem 2.5rem" }}>
										Shop Now
									</a>
								</div>
							</li>
							<li className="col-12 col-lg-4 p-2">
								<div
									className="mb-2 p-2 h-100 d-flex flex-column h-100 position-relative"
									style={{ backgroundColor: "rgb(239, 239, 239)" }}>
									<div className="bg-white p-2">
										<img
											alt=""
											className="w-100 mb-2"
											src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/product-ZTS.jpg"
											loading="lazy"
										/>
									</div>
									<h2 className="h2">Ultima ZTS</h2>
									<p className="mb-2" style={{ lineHeight: "1.8" }}>
										Equipped with Cub Cadet® Synchro-Steer™ Technology, the
										Ultima ZTS line delivers precision, control and stability on
										hills up to 20 degrees.
									</p>
									<ul className="list-unstyled d-flex">
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vecc23e1f14788ec513ab6069e28803b4ad390a90/ultima/icon-steer.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Synchro Steer® Technology​
											</p>
										</li>
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/icon-area-5.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Up to 5 acres​
											</p>
										</li>
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vecc23e1f14788ec513ab6069e28803b4ad390a90/ultima/icon-speed.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Up to 7.5 mph​
											</p>
										</li>
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vecc23e1f14788ec513ab6069e28803b4ad390a90/ultima/icon-slope-15.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Up to 20 degree slopes​
											</p>
										</li>
									</ul>
									<a
										className="button text-uppercase font-weight-bold text-decoration-none d-inline-block border-0 bg-black mb-0 text-center w-100 mt-auto"
										href="https://www.cubcadet.com/en_US/ultima-zts-zero-turn-mowers"
										style={{ padding: "0.625rem 2.5rem" }}>
										Shop Now
									</a>
								</div>
							</li>
							<li className="col-12 col-lg-4 p-2">
								<div
									className="mb-2 p-2 h-100 d-flex flex-column h-100 position-relative"
									style={{ backgroundColor: "rgb(239, 239, 239)" }}>
									<div className="bg-white p-2">
										<img
											alt=""
											className="w-100 mb-2"
											src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/product-ZTX.jpg?version=1,639,577,718,000"
											loading="lazy"
										/>
									</div>
									<h2 className="h2">Ultima ZTX</h2>
									<p className="mb-2" style={{ lineHeight: "1.8" }}>
										The Ultima Series™ ZTX is engineered with commercial-grade
										features that allow you to tackle tough challenges on your
										large property.&nbsp;
									</p>
									<ul className="list-unstyled d-flex">
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vecc23e1f14788ec513ab6069e28803b4ad390a90/ultima/icon-strength.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Commercial grade features​
											</p>
										</li>
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/icon-area-12.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Up to 12 acres​
											</p>
										</li>
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vecc23e1f14788ec513ab6069e28803b4ad390a90/ultima/icon-speed.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Up to 9 mph​​​
											</p>
										</li>
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vecc23e1f14788ec513ab6069e28803b4ad390a90/ultima/icon-slope-10.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Up to 15 degree slopes​​
											</p>
										</li>
									</ul>
									<a
										className="button text-uppercase font-weight-bold text-decoration-none d-inline-block border-0 bg-black mb-0 text-center w-100 mt-auto"
										href="https://www.cubcadet.com/en_US/ultima-ztx-zero-turn-mowers"
										style={{ padding: "0.625rem 2.5rem" }}>
										Shop Now
									</a>
								</div>
							</li>
							<li className="col-12 col-lg-4 p-2">
								<div
									className="mb-2 p-2 h-100 d-flex flex-column h-100 position-relative"
									style={{ backgroundColor: "rgb(239, 239, 239)" }}>
									<div
										className="bg-black position-absolute"
										style={{
											fontSize: "0.9em",
											padding: "4px 15px",
											right: 26,
											top: 26,
										}}>
										NEW
									</div>
									<div className="bg-white p-2">
										<img
											alt=""
											className="w-100 mb-2"
											src="https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/BCSH_STG/on/demandware.static/-/Sites-mtd-master-catalog/default/dwe14ecb96/products/Equipment/Cub-Cadet_ZTXS448_7.jpg?sw=400&sh=400&sm=fit"
											loading="lazy"
										/>
									</div>
									<h2 className="h2">Ultima ZTXS</h2>
									<p className="mb-2" style={{ lineHeight: "1.8" }}>
										The Ultima Series™ ZTXS is engineered with commercial-grade
										features that allow you to tackle tough challenges on your
										large property.&nbsp;
									</p>
									<ul className="list-unstyled d-flex">
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vecc23e1f14788ec513ab6069e28803b4ad390a90/ultima/icon-steer.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Synchro Steer® Technology​​
											</p>
										</li>
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v9e835077e52279a69a54b4c30b00cf9f3c2d0358/ultima/icon-area-12.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Up to 12 acres​
											</p>
										</li>
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vecc23e1f14788ec513ab6069e28803b4ad390a90/ultima/icon-strength.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Commercial grade features​
											</p>
										</li>
										<li className="col-3 p-2">
											<img
												alt=""
												className="w-100"
												src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vecc23e1f14788ec513ab6069e28803b4ad390a90/ultima/icon-slope-10.png"
												loading="lazy"
											/>
											<p className="small text-center mt-1 mb-0">
												Up to 20 degree slopes​​
											</p>
										</li>
									</ul>
									<a
										className="button text-uppercase font-weight-bold text-decoration-none d-inline-block border-0 bg-black mb-0 text-center w-100 mt-auto"
										href="https://www.cubcadet.com/en_US/ultima-ztxs-zero-turn-mowers"
										style={{ padding: "0.625rem 2.5rem" }}>
										Shop Now
									</a>
								</div>
							</li>
						</ul>
						<a
							className="button text-uppercase font-weight-bold text-decoration-none d-inline-block border-0 bg-secondary mb-0 text-center w-lg-auto flex-fill mx-lg-auto mt-2 d-block d-lg-inline-block"
							href="https://www.cubcadet.com/en_US/ultima-series-features-benefits.html"
							style={{ padding: "0.625rem 2.5rem" }}>
							Learn more about the Ultima series
						</a>
					</div>
				</section>
				<section className="position-relative">
					<div
						className="container position-absolute position-lg-relative w-100"
						style={{ zIndex: 2, paddingTop: "3em" }}>
						<div
							className="quote-block flex flex-column h-100 w-100 p-4 text-white"
							style={{ maxWidth: 700 }}>
							<ul className="list-unstyled d-flex mb-0 flex-column">
								<li className="col-12 font-weight-bold h3 text-uppercase p-0">
									LOOK NO MORE FOR A GREAT MOWER.
								</li>
								<li className="col-4 text-right p-0">
									<div className="star-rating d-flex undefined">
										<svg
											className="w-100"
											viewBox="0 0 48 48"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="m11.6 43 3.2-14L4 19.5l14.4-1.2L24 5l5.6 13.2L44 19.5 33.1 29l3.2 14L24 35.5 11.6 43z"
												style={{ fill: "rgb(255, 255, 255)" }}
											/>
										</svg>
										<svg
											className="w-100"
											viewBox="0 0 48 48"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="m11.6 43 3.2-14L4 19.5l14.4-1.2L24 5l5.6 13.2L44 19.5 33.1 29l3.2 14L24 35.5 11.6 43z"
												style={{ fill: "rgb(255, 255, 255)" }}
											/>
										</svg>
										<svg
											className="w-100"
											viewBox="0 0 48 48"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="m11.6 43 3.2-14L4 19.5l14.4-1.2L24 5l5.6 13.2L44 19.5 33.1 29l3.2 14L24 35.5 11.6 43z"
												style={{ fill: "rgb(255, 255, 255)" }}
											/>
										</svg>
										<svg
											className="w-100"
											viewBox="0 0 48 48"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="m11.6 43 3.2-14L4 19.5l14.4-1.2L24 5l5.6 13.2L44 19.5 33.1 29l3.2 14L24 35.5 11.6 43z"
												style={{ fill: "rgb(255, 255, 255)" }}
											/>
										</svg>
										<svg
											className="w-100"
											viewBox="0 0 48 48"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="m11.6 43 3.2-14L4 19.5l14.4-1.2L24 5l5.6 13.2L44 19.5 33.1 29l3.2 14L24 35.5 11.6 43z"
												style={{ fill: "rgb(255, 255, 255)" }}
											/>
										</svg>
									</div>
								</li>
							</ul>
							<p className="mt-2">
								This Cub Cadet mower is a beast. I absolutely love it and all of
								its features. Honestly, I haven’t found one negative thing to
								say about it since I’ve bene using it. Needless to say, I love
								this mower!”
							</p>
							<ul className="list-unstyled d-flex mt-1">
								<li className="border-right font-weight-bold pr-2">
									Twwagoner from Lexington, NC
								</li>
								<li className="font-weight-bold pl-2">Ultima ZT1</li>
							</ul>
						</div>
					</div>
					<div
						className="d-block d-lg-none w-100 h-100 position-absolute"
						style={{
							background:
								"linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 60%)",
						}}>
						&nbsp;
					</div>
					<img
						alt=""
						className="w-100 h-100 d-block d-lg-none"
						src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/ZeroTurnLanding/quote-mobile.jpg"
						style={{ zIndex: 0, objectFit: "cover", maxHeight: "44em" }}
						loading="lazy"
					/>
					<div
						className="d-none d-lg-block position-relative"
						style={{ zIndex: 0, minHeight: "20em" }}>
						&nbsp;
					</div>
					<img
						alt=""
						className="d-none d-lg-block position-lg-absolute w-100 h-100"
						src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/ZeroTurnLanding/quote-desktop.jpg"
						style={{ zIndex: 0, left: 0, top: 0, objectFit: "cover" }}
						loading="lazy"
					/>
				</section>
				<section classname="py-5 px-1">
					<div id="product-finder-zero-turns">FINDER</div>
				</section>
				<section>
					<div className="container-fluid">
						<h2 className="mt-4 display-1 text-center">
							Shop &amp; Compare Zero-Turn Mowers
						</h2>
					</div>
				</section>
			</div>
		</div>
	);
}
