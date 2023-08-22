// import React, { useEffect } from "react";
import jsonData from "./data/riding-lawn.json";
import Explore from "@/c/Explore";
// import jsonCommonData from "./data/common.json";
// import jsonDataArticles from "./data/articles.json";

// import HowToMaintence from "@/c/HowToMaintence";
import Articles from "@/c/Articles";
import Faqs from "@/c/Faqs";
import RelatedLinks from "@/components/RelatedLinks";
// import AttchmentsAccessories from "@/c/AttchmentsAccessories";

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
				<section className="d-flex p-0">
					<img
						src={jsonData.hero.img}
						alt={jsonData.hero.alt}
						className="d-none d-md-block w-100"
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
						<h2 className="mt-4 display-1 text-center">
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
