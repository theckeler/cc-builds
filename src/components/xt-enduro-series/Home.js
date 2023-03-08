import jsonData from "./data/home.json";

import IconCopyBlock from "../elements/IconCopyBlock";
import QuoteBlock from "../elements/QuoteBlock";
import HowToMaintence from "../elements/HowToMaintence";
import Articles from "../elements/Articles";
import ProductBlock from "../elements/ProductBlock";
import ImgBackDesktopMobile from "../elements/ImgBackDesktopMobile";
import ImgCopyBlock from "../elements/ImgCopyBlock";

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
				<section className="mt-0 mb-4 text-white bg-primary">
					<ul className="flex list-unstyled no-gutters">
						<li
							className="col-md-2 d-none d-lg-flex justify-content-end"
							style={{
								background:
									"linear-gradient(to right, #ffc20f 0%, #ffc20f 70%, #000 70%, #000 100%)",
							}}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-100 w-auto"
								style={{
									enableBackground: "new 0 0 167.9 352",
									maxHeight: "24em",
								}}
								viewBox="0 0 167.9 352">
								<path d="M-1.8-.8h169.4v355.6H-1.8z" />
								<path
									d="M144.1 0 142 27.6c-.7 8.8-1.3 17.6-2 26.4-.3 4.1-.5 8.3-1 12.4s-2.4 7.3-6.2 9.3c-9.6 5.2-19.4 10.3-29.2 15.5-5.9 3.1-11.7 6.2-17.6 9.3-4.1 2.2-5.7 5.6-4.9 10.3l5.7 36c1.8 11.2 3.6 22.5 5.4 33.7 1.9 11.8 3.7 23.6 5.6 35.3 1.6 9.9 3.2 19.9 4.7 29.8 1.5 9.6 3.1 19.2 4.7 28.8 1.5 9.2 2.9 18.5 4.3 27.7.2 1.6.5 3.1.8 4.7.7 4 3.6 6.3 7.7 6.3h30.6c4.6 0 7.4 2.2 8.5 6.7 2.4 9.6 4.8 19.2 7.1 28.8.3 1.2.5 2.3.7 3.5H-1C-.8 234.6-.8 117.3-.8 0h144.9z"
									fill="#ffc20f"
								/>
							</svg>
						</li>
						<li className="col-12 col-md-8 py-9 bg-primary flex flex-column justify-content-center">
							<div className="container py-3 text-center ">
								<h1 className="h1 d-block">{jsonData.copyBlock.h1}</h1>
								<p className="">{jsonData.copyBlock.copy}</p>
							</div>
						</li>
						<li
							className="col-md-2 d-none d-lg-block"
							style={{
								background:
									"linear-gradient(to left, #ffc20f 0%, #ffc20f 70%, #000 70%, #000 100%)",
							}}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 167.9 352"
								className="h-100 w-auto"
								style={{
									enableBackground: "new 0 0 167.9 352",
									transform: "scaleX(-1)",
									maxHeight: "24em",
								}}>
								<path d="M51.6-.8h116v355.6h-116z" />
								<path
									d="M144.1 0 142 27.6c-.7 8.8-1.3 17.6-2 26.4-.3 4.1-.5 8.3-1 12.4s-2.4 7.3-6.2 9.3c-9.6 5.2-19.4 10.3-29.2 15.5-5.9 3.1-11.7 6.2-17.6 9.3-4.1 2.2-5.7 5.6-4.9 10.3l5.7 36c1.8 11.2 3.6 22.5 5.4 33.7 1.9 11.8 3.7 23.6 5.6 35.3 1.6 9.9 3.2 19.9 4.7 29.8 1.5 9.6 3.1 19.2 4.7 28.8 1.5 9.2 2.9 18.5 4.3 27.7.2 1.6.5 3.1.8 4.7.7 4 3.6 6.3 7.7 6.3h30.6c4.6 0 7.4 2.2 8.5 6.7 2.4 9.6 4.8 19.2 7.1 28.8.3 1.2.5 2.3.7 3.5H-1C-.8 234.6-.8 117.3-.8 0h144.9z"
									fill="#ffc20f"
								/>
							</svg>
						</li>
					</ul>
				</section>

				{/* lineup */}
				<section className="container d-flex flex-column p-0 mt-8 mb-4 bg-light">
					<h2 className="h2 d-block text-center mb-8">{jsonData.lineup.h2}</h2>

					<ul className="row list-unstyled">
						{jsonData.lineup.blocks.map((block, i) => {
							return (
								<li key={i} className="col-12 col-md-6 col-lg-4">
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
								<li key={i} className="col col-12 col-sm-12 col-md-4">
									<ImgCopyBlock {...{ block }} linkable={false} />
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
