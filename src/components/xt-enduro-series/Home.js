import jsonData from "./data/home.json";

import IconCopyBlock from "../elements/IconCopyBlock";
import QuoteBlock from "../elements/QuoteBlock";
import HowToMaintence from "../elements/HowToMaintence";
import Articles from "../elements/Articles";
import ProductBlock from "../elements/ProductBlock";
import ImgCopyBlock from "../elements/ImgCopyBlock";
import Button from "../elements/Button";
import HeroImg from "../elements/HeroImg";

const XTEnduroSeriesHome = () => {
	return (
		<>
			{/* Head */}
			<div className="">
				{/* HERO */}
				<section className="position-relative">
					<HeroImg hero={jsonData.hero} />
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
						<li className="col-12 col-lg-8 py-9 bg-primary flex flex-column justify-content-center">
							<div className="container p-3 text-left text-lg-center">
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
				<section className="container d-flex flex-column p-1 mt-8 mb-4">
					<h2 className="h2 d-block text-center mb-8">{jsonData.lineup.h2}</h2>

					<ul className="row list-unstyled">
						{jsonData.lineup.blocks.map((block, i) => {
							return (
								<li key={i} className="col-12  col-md-4">
									<ProductBlock {...{ block }} />
								</li>
							);
						})}
					</ul>
				</section>

				{/* powerLevel */}
				<section className="container d-flex flex-column p-1 mt-3">
					<ul
						className="row list-unstyled p-2 no-gutters"
						style={{ backgroundColor: "#efefef" }}>
						{jsonData.powerLevel.blocks.map((block, i) => {
							return (
								<li key={i} className="col col-12 col-sm-12 col-md-6 p-2">
									<IconCopyBlock
										{...{ block }}
										//addStyle={{ maxHeight: "3em" }}
									/>
								</li>
							);
						})}
					</ul>
				</section>

				{/* QuoteBlock */}
				<section className="d-flex flex-column p-0 mt-3 position-relative">
					<HeroImg hero={jsonData.quote.hero} addClass="position-absolute" />
					<div
						className="container w-100 p-1 pb-9 pb-lg-9"
						style={{ zIndex: "2", paddingTop: "3em", minHeight: "45em" }}>
						<QuoteBlock
							quote={jsonData.quote}
							addClass="position-relative text-white pb-9 pb-lg-9"
							addCSS={{ maxWidth: "700px", zIndex: 1 }}
							stackStars={true}
							starFill="#fff"
						/>
					</div>
				</section>

				{/* forEveryJob */}
				<section className="container d-flex flex-column align-items-center p-0 mt-8">
					<h2 className="text-center mb-3">{jsonData.forEveryJob.h2}</h2>
					<p className="text-center mb-6">{jsonData.forEveryJob.copy}</p>
					<ul className="flex flex-column flex-md-row list-unstyled">
						{jsonData.forEveryJob.blocks.map((block, i) => {
							return (
								<li key={i} className="col-12 col-md-4">
									<ImgCopyBlock {...{ block }} linkable={false} />
								</li>
							);
						})}
					</ul>
					<Button
						copy={jsonData.forEveryJob.button.copy}
						url={jsonData.forEveryJob.button.url}
						addClass={jsonData.forEveryJob.button.addClass}
					/>
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
