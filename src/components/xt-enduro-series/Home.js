import jsonData from "./data/home.json";

import IconCopyBlock from "../elements/IconCopyBlock";
import QuoteBlock from "../elements/QuoteBlock";
import HowToMaintence from "../elements/HowToMaintence";
import Articles from "../elements/Articles";
import ProductBlock from "../elements/ProductBlock";
import ImgBackDesktopMobile from "../elements/ImgBackDesktopMobile";

const XTEnduroSeriesHome = () => {
	return (
		<>
			{/* Head */}
			<div className="">
				{/* HERO */}
				<section className="position-relative" style={{ minHeight: "30em" }}>
					<img
						src={jsonData.hero.img}
						alt={jsonData.hero.alt}
						className="position-absolute w-100 h-100"
						style={{ objectFit: "cover" }}
					/>
				</section>

				{/* copyBlock */}
				<section className="mt-0 mb-4 text-white">
					<ul className="row list-unstyled no-gutters">
						<li className="col-md-2 d-none d-lg-block bg-secondary position-relative">
							<img
								src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw0d2ca778/products/Equipment/Cub-Cadet_2X28_IP_4.jpg"
								alt=""
								className="w-100 h-100 position-absolute"
								style={{ objectFit: "cover" }}
							/>
						</li>
						<li className="col-12 col-md-8 py-9 bg-primary">
							<div className="container py-3 text-center">
								<h1 className="h1 d-block">{jsonData.copyBlock.h1}</h1>
								<p className="">{jsonData.copyBlock.copy}</p>
							</div>
						</li>
						<li className="col-md-2 d-none d-lg-block bg-secondary position-relative">
							<img
								src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw0d2ca778/products/Equipment/Cub-Cadet_2X28_IP_4.jpg"
								alt=""
								className="w-100 h-100 position-absolute"
								style={{ objectFit: "cover" }}
							/>
						</li>
					</ul>
				</section>

				{/* lineup */}
				<section className="container d-flex flex-column p-0 mt-8 mb-4 bg-light">
					<h2 className="h2 d-block text-center mb-8">{jsonData.lineup.h2}</h2>

					<ul className="row list-unstyled">
						{jsonData.lineup.blocks.map((block, i) => {
							return (
								<li key={i} className="col col-12 col-sm-12 col-md-6">
									<ProductBlock {...{ block }} />
									{/* <div className="d-flex flex-column h-100">
										<img
											src={block.img}
											alt={block.alt}
											className="w-100 p-2"
										/>
										<div
											className="p-4 d-flex flex-column h-100"
											style={{ backgroundColor: "#efefef" }}>
											<strong className="title">{block.title}</strong>
											<p className="copy">{block.copy}</p>
											<ul
												className="row list-unstyled"
												style={{
													minHeight: "220px",
												}}>
												{block.engFor.map((subblock, i) => {
													return (
														<li
															key={i}
															className="flex-column col col-12 col-sm-12 col-md-4 eng-for-blocks">
															<strong>{subblock.title}</strong>
															<img src={subblock.img} alt="" className="icon" />
															<p
																dangerouslySetInnerHTML={{
																	__html: subblock.copy,
																}}
																style={{ marginTop: "auto" }}></p>
														</li>
													);
												})}
											</ul>
											<Button
												addClass="text-center border-0 w-100 bg-secondary text-black mt-auto"
												copy={block.button.copy}
											/>
										</div>
									</div> */}
								</li>
							);
						})}
					</ul>
				</section>

				{/* powerLevel */}
				<section className="container d-flex flex-column p-0 mt-3 bg-light">
					<ul className="row list-unstyled">
						{jsonData.powerLevel.blocks.map((block, i) => {
							return (
								<li key={i} className="col col-12 col-sm-12 col-md-6">
									<IconCopyBlock {...{ block }} />
								</li>
							);
						})}
					</ul>
				</section>

				{/* QuoteBlock */}
				<section className="d-flex flex-column p-0 mt-3 bg-light position-relative">
					<div
						className="container position-absolute position-lg-relative w-100"
						style={{ zIndex: "2", paddingTop: "3em" }}>
						<QuoteBlock
							quote={jsonData.quote}
							addClass="position-relative text-white"
							addCSS={{ maxWidth: "700px", zIndex: 1 }}
							stackStars={true}
							starFill="#fff"
						/>
					</div>
					<ImgBackDesktopMobile
						imgMobile={jsonData.quote.imgMobile}
						imgDesktop={jsonData.quote.imgDesktop}
						addCSS={{
							mobile: {
								block: {
									background:
										"linear-gradient(to bottom, rgb(0,0,0) 0%, rgba(0,0,0,0) 60%)",
								},
								img: { maxHeight: "44em" },
							},
							desktop: {
								block: { minHeight: "20em" },
								img: {},
							},
						}}
					/>
				</section>

				{/* forEveryJob */}
				<section className="container d-flex flex-column p-0 mt-8 bg-light">
					<h2 className="text-center mb-3">{jsonData.forEveryJob.h2}</h2>
					<p className="text-center mb-6">{jsonData.forEveryJob.copy}</p>
					<ul className="row list-unstyled">
						{jsonData.forEveryJob.blocks.map((block, i) => {
							return (
								<li key={i} className="col col-12 col-sm-12 col-md-6">
									<IconCopyBlock {...{ block }} />
								</li>
							);
						})}
					</ul>
				</section>

				{/* RIDING MOWER FINDER */}
				<section
					className="d-flex flex-column p-9 mt-3"
					style={{ backgroundColor: "#efefef" }}>
					<div className="container p-9 text-center">
						FOR RIDING MOWER FINDER
					</div>
				</section>
			</div>

			{/* Footer */}
			<div className="">
				<HowToMaintence {...{ jsonData }} />
				<Articles {...{ jsonData }} />
			</div>
		</>
	);
};

export default XTEnduroSeriesHome;
