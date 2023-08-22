import React, { useEffect } from "react";
import jsonData from "./data/zero-turn.json";
import jsonCommonData from "./data/common.json";

import Footer from "./elements/Footer";
import QuoteBlock from "@/c/QuoteBlock";
import ImgBackDesktopMobile from "@/c/ImgBackDesktopMobile";
import Introducing from "./elements/Introducing";
import Explore from "@/c/Explore";

const ZeroTurn = () => {
	useEffect(() => {
		document.querySelectorAll("#finder-script").forEach(function (elem) {
			elem.remove();
		});
		const html = `<script>
(function(c,a,r,t,f,u,l){c[u]=c[u]||function(){(c[u].q=c[u].q||[]).push(arguments)},l=a.createElement(r),l.async=1,l.id=u+"scr",l.src=f,a[t].appendChild(l)})(window,document,"script","body","//embed.cartfulsolutions.com/zero-turn-finder/recommendation.min.js","cfl659");
</script>`;
		const scriptEl = document.createRange().createContextualFragment(html);
		document.body.appendChild(scriptEl);
	});

	return (
		<>
			<div className="top">
				<section className="d-flex p-0">
					<img
						src={jsonData.hero.img}
						alt={jsonData.hero.alt}
						className="d-none d-md-block w-100"
					/>
					<img
						src={jsonData.hero.mobile}
						alt={jsonData.hero.alt}
						className="d-block d-md-none w-100"
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

				<Introducing {...{ jsonData }} />

				<Explore {...{ jsonCommonData }} addButton={true} />

				<section>
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
				</section>

				<section className="py-5 px-1">
					<div id="product-finder-zero-turns"></div>
				</section>

				<section>
					<div className="container-fluid">
						<h2 className="mt-4 display-1 text-center">
							Shop & Compare Zero-Turn Mowers
						</h2>
					</div>
				</section>
			</div>

			<div className="bottom">
				<Footer jsonData={jsonData} />
			</div>
		</>
	);
};

export default ZeroTurn;
