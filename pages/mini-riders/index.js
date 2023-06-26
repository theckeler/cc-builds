import React, { useState, useEffect } from "react";

import jsonDataUS from "./home.json";

import IconCopyBlock from "@/c/IconCopyBlock";
import QuoteBlock from "@/c/QuoteBlock";
import HowToMaintence from "@/c/HowToMaintence";
import ProductBlock from "@/c/ProductBlock";
import ImgCopyBlock from "@/c/ImgCopyBlock";
import HeroImg from "@/c/HeroImg";
import Faqs from "@/c/Faqs";
import HeroWing from "@/c/HeroWing";
import CTABlock from "../../components/CTABlock";

const MiniRiders = () => {
	const [jsonData, setJsonData] = useState({ ...jsonDataUS });

	return (
		<>
			{/* Head */}
			<div className="mtd-page">
				{/* HERO */}
				<section className="position-relative">
					<HeroImg hero={jsonData.hero} />
				</section>

				{/* copyBlock */}
				<section className="mt-0 mb-4 text-white bg-primary">
					<ul className="flex list-unstyled no-gutters">
						<HeroWing left />
						<li className="col-12 col-lg-8 py-9 bg-primary flex flex-column justify-content-center">
							<div className="container p-3 text-left text-lg-center">
								<h2
									className="h1 d-block"
									dangerouslySetInnerHTML={{
										__html: jsonData.copyBlock.h1,
									}}
								/>
								<p
									className=""
									dangerouslySetInnerHTML={{
										__html: jsonData.copyBlock.copy,
									}}></p>
							</div>
						</li>
						<HeroWing />
					</ul>
				</section>

				{/* lineup */}
				<section className="container d-flex flex-column p-1 mt-8 mb-4">
					<h1
						className="h2 d-block text-center mb-8"
						style={{ fontSize: "2.375rem" }}
						dangerouslySetInnerHTML={{
							__html: jsonData.lineup.h2,
						}}
					/>

					<ul className="row list-unstyled">
						{jsonData.lineup.blocks.map((block, i) => {
							return (
								<li key={i} className="col-12 col-md-6">
									<ProductBlock {...{ block }} />
								</li>
							);
						})}
					</ul>
				</section>

				<section className="py-2" style={{ backgroundColor: "#efefef" }}>
					<CTABlock
						block={{
							className: "container p-1 mt-8 mb-4 text-center",
							title: {
								copy: "Looking for something bigger?",
								className: "text-center",
							},
							button: {
								copy: "Explore 42” in Mowers",
								url: "https://www.cubcadet.com/en_US/riding-lawn-mowers/lawn-and-garden-tractors",
								className: "text-center d-inline-block bg-secondary",
							},
						}}
					/>
				</section>

				{/* powerLevel */}
				<section className="container d-flex flex-column p-1 mt-3">
					<ul
						className="row list-unstyled p-2 no-gutters"
						style={{ backgroundColor: "#efefef" }}>
						{jsonData.powerLevel.blocks.map((block, i) => {
							return (
								<li key={i} className="col col-12 col-sm-12 col-md-6 p-2">
									<IconCopyBlock {...{ block }} />
								</li>
							);
						})}
					</ul>
				</section>

				{/* forEveryJob */}
				<section className="container d-flex flex-column align-items-center p-0 mt-8">
					<h2 className="text-center mb-3 p-1">{jsonData.forEveryJob.h2}</h2>
					<p className="text-center mb-6 p-1">{jsonData.forEveryJob.copy}</p>
					<ul className="flex flex-column flex-md-row list-unstyled">
						{jsonData.forEveryJob.blocks.map((block, i) => {
							return (
								<li key={i} className="col-12 col-md-4 mb-2 mb-lg-0">
									<ImgCopyBlock {...{ block }} linkable={false} />
								</li>
							);
						})}
					</ul>
				</section>

				{/* QuoteBlock */}
				<section className="d-flex flex-column p-0 mt-8 position-relative bg-primary">
					<HeroImg
						hero={jsonData.quote.hero}
						className="position-absolute"
						addCSS={{
							maxWidth: "100em",
							left: "50%",
							transform: "translateX(-50%)",
						}}
					/>
					<div
						className="container w-100 p-1 pb-9 pb-lg-9"
						style={{ zIndex: "2", paddingTop: "3em", minHeight: "35em" }}>
						<QuoteBlock
							quote={jsonData.quote}
							className="position-relative text-white pb-9 pb-lg-9"
							addCSS={{ maxWidth: "700px", zIndex: 1 }}
							stackStars={true}
							starFill="#fff"
						/>
					</div>
				</section>
			</div>

			{/* Footer */}
			<div className="container">
				<HowToMaintence centerH2={true} {...{ jsonData }} />
				{/* <Articles {...{ jsonData }} /> */}

				<h2 className="text-center mb-3 p-1">Questions & Answers</h2>
				<Faqs faqs={jsonData.faqs} id="faqs-financing" className="p-2 p-lg-4" />
			</div>
		</>
	);
};

export default MiniRiders;
