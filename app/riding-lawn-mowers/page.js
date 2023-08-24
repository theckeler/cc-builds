import Image from "next/image";

// import React, { useEffect } from "react";
import jsonData from "./data/riding-lawn.json";
import Explore from "@/components/Explore";
// import jsonCommonData from "./data/common.json";
// import jsonDataArticles from "./data/articles.json";

// import HowToMaintence from "@/components/HowToMaintence";
import Articles from "@/components/Articles";
import Faqs from "@/components/Faqs";
import RelatedLinks from "@/components/RelatedLinks";
// import AttchmentsAccessories from "@/components/AttchmentsAccessories";
import ImageNew from "@/components/Image";

export default function ZeroTurn({}) {
	// 	useEffect(() => {
	// 		document.querySelectorAll("#finder-script").forEach(function (elem) {
	// 			elem.remove();
	// 		});
	// 		const html = `<script>
	// (function(c,a,r,t,f,u,l){c[u]=c[u]||function(){(c[u].q=c[u].q||[]).push(arguments)},l=a.createElement(r),l.async=1,l.id=u+"scr",l.src=f,a[t].appendChild(l)})(window,document,"script","body","//embed.cartfulsolutions.com/zero-turn-finder/recommendation.min.js","cfl659");
	// </script>`;
	// 		const scriptEl = document.createRange().createContextualFragment(html);
	// 		document.body.appendChild(scriptEl);
	// 	});

	return (
		<>
			<div className="top">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="search-breadcrumb">
								<div className="row">
									<div className="col">
										<ol className="breadcrumb">
											<li className="breadcrumb-item">
												<a href="/en_US/lawn-mowers">Lawn Mowers</a>
											</li>
											<li className="breadcrumb-item">Riding Lawn Mowers</li>
										</ol>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<section
					className="d-flex p-0 position-relative"
					style={{ minHeight: "500px" }}>
					<Image
						src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/vd543c4bdcb4ecd57647da8407d6249a8b0c7f051/xt-enduro-series/hero-1024w.jpg?version=1,678,369,065,000"
						alt=""
						className="w-100 h-100"
						//width={1200}
						//height={450}
						fill={true}
						style={{ objectFit: "cover" }}
						priority
					/>
				</section>

				<section className="py-5 px-1">
					<div className="container">
						<h1 className="text-lg-center">{jsonData.copyBlock.h1}</h1>
						<p
							className="text-lg-center mt2 mb-0 mx-auto"
							style={{ maxWidth: "800px", lineHeight: "1.8" }}>
							{jsonData.copyBlock.copy}
						</p>
					</div>
				</section>

				<Explore jsonData={jsonData} addButton={false} />

				{/* <section>
					<div
						className="container position-absolute position-lg-relative w-100"
						style={{ zIndex: "2", paddingTop: "3em" }}>
						<QuoteBlock
							quote={jsonData.quote}
							className="text-white"
							addCSS={{ maxWidth: "700px" }}
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
				</section> */}

				{/* <section className="py-5 px-1">
					<div id="product-finder-zero-turns"></div>
				</section> */}

				<section>
					<div className="container-fluid">
						<h2 className="mt-4 display-3 text-center">
							Shop & Compare Riding Lawn Mowers
						</h2>
					</div>
				</section>
			</div>

			<div
				className="middle my-6 d-flex justify-content-center align-items-center h2"
				style={{ backgroundColor: "#cfcfcf", minHeight: "600px" }}>
				For PLP
			</div>

			<div className="bottom container">
				<Articles jsonData={jsonData} />

				<hr />

				<Faqs faqs={jsonData.faqs} allOpen={true} />

				<RelatedLinks relatedCats={jsonData.relatedCats} className="mt-4" />
			</div>
		</>
	);
}
