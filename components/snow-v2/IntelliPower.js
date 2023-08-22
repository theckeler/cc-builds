import React, { useEffect } from "react";
import jsonData from "./data/intellipower.json";

import { ReactComponent as Intellipower } from "../../images/intellipower-logo.svg";
import { ReactComponent as EFI } from "../../images/efi-logo.svg";
import Button from "@/c/Button";
import QuoteBlock from "@/c/QuoteBlock";
import Faqs from "@/c/Faqs";
import Video from "@/c/Video";
import ImgCopyBlock from "@/c/ImgCopyBlock";

const IntelliPower = () => {
	// console.log(jsonData);
	useEffect(() => {
		document.querySelectorAll(".js-scripts").forEach(function (elem) {
			elem.remove();
		});

		const headHTML = `
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    `;
		const scriptHeadHTML = document
			.createRange()
			.createContextualFragment(headHTML);
		document.body.prepend(scriptHeadHTML);

		const footerHTML = `

<script type="text/javascript" className="js-scripts">
  document.querySelector("#button-efi-faqs").onClick = () => {
     document.querySelector("#button-intellipower-faqs").classList.remove("active");
    document.querySelector("#button-efi-faqs").classList.add("active");

    document.querySelector("#faqs-intellipower").classList.remove("active");
    document.querySelector("#faqs-efi").classList.add("active");
  };

  document.querySelector("#button-intellipower-faqs").onClick = () => {
    document.querySelector("#button-intellipower-faqs").classList.add("active");
    document.querySelector("#button-efi-faqs").classList.remove("active");
    
    document.querySelector("#faqs-intellipower").classList.add("active");
    document.querySelector("#faqs-efi").classList.remove("active");
  };
</script>
<script type="text/javascript" className="js-scripts" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script className="js-scripts">
  $(".videos-slick").slick({
   slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  });
</script>
`;
		const scriptFooterHTML = document
			.createRange()
			.createContextualFragment(footerHTML);
		document.body.appendChild(scriptFooterHTML);
	});

	return (
		<div className="snow-v2 snow-v2-intellipower">
			{/* HERO */}
			<section className="section-1" style={{ background: "#efefef" }}>
				<div className="wrapper d-flex flex-column align-items-center justify-content-center px-3">
					<h1
						className="text-center"
						dangerouslySetInnerHTML={{ __html: jsonData.hero.h1 }}></h1>
					<p
						className="mt-3 text-center"
						dangerouslySetInnerHTML={{ __html: jsonData.hero.copy }}></p>
				</div>
			</section>

			{/* Intellpower */}
			<section className="section-2 bg-black">
				<div className="wrapper d-flex flex-column align-items-center justify-content-center px-3">
					<div className="logo">
						<Intellipower />
					</div>
					<h2
						className="w-100 text-uppercase mt-9 text-center"
						dangerouslySetInnerHTML={{
							__html: jsonData.intellipower.text,
						}}></h2>
				</div>
				<img
					src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v70fc5788285a154928b80b856144e85813f5051f/snow-v2/intellipower-back.svg"
					alt=""
					className="position-absolute w-100 h-100"
					style={{ top: "0", opacity: "0.25", objectFit: "cover" }}
				/>
			</section>

			{/* Stats */}
			<section className="section-3 pt-8 pb-8">
				<div className="wrapper px-3">
					<h2
						className="text-uppercase text-center h2 mb-0"
						dangerouslySetInnerHTML={{
							__html: jsonData.stats.h2,
						}}></h2>
					<p
						className="text-center small ml-auto mr-auto mt-0 text-black-50"
						dangerouslySetInnerHTML={{
							__html: jsonData.stats.copy,
						}}></p>
					<ul className="row list-unstyled power">
						{jsonData.stats.blocks.map((block, i) => {
							return (
								<li className="col-12 col-sm-12 col-md-4 p-2 mt-2" key={i}>
									<div className="p-2 d-flex flex-column">
										<p className="text-uppercase text-center font-weight-bold text-uppercase h3 mb-0">
											Up To
										</p>
										<p
											className="text-uppercase text-center font-weight-bold text-uppercase h1"
											dangerouslySetInnerHTML={{
												__html: block.line1,
											}}
											style={{ lineHeight: "0.8" }}
										/>
										<p
											className="text-uppercase text-center font-weight-bold text-uppercase h3 mt-0"
											dangerouslySetInnerHTML={{
												__html: block.line2,
											}}
										/>
										<p
											className="text-center small line-4 mb-0 pb-0 text-black-50 mt-4 pt-2 w-75 ml-auto mr-auto"
											dangerouslySetInnerHTML={{
												__html: block.line3,
											}}
										/>
									</div>
								</li>
							);
						})}
					</ul>

					<ul className="row list-unstyled consistent">
						{jsonData.consistent.blocks.map((block, i) => {
							return (
								<li className="col-12 col-sm-12 col-md-6 p-1" key={i}>
									<div
										className="h-100 p-5 d-flex flex-column bg-secondary"
										//style={{ background: "#efefef" }}
									>
										<p
											className="text-center h3 mt-0 pt-0 line-1"
											dangerouslySetInnerHTML={{
												__html: block.title,
											}}
										/>
										<p
											className="text-center w-100 pt-2 mt-2 pb-0 mb-0 line-2"
											dangerouslySetInnerHTML={{
												__html: block.copy,
											}}
										/>
									</div>
								</li>
							);
						})}
					</ul>

					<h3
						className="text-center pt-8 mt-6"
						dangerouslySetInnerHTML={{
							__html: jsonData.howItWorks.h2,
						}}></h3>
					<ul className="row list-unstyled mt-6">
						{jsonData.howItWorks.blocks.map((block, i) => {
							return (
								<li className="col-12 col-sm-12 col-md-6 p-1" key={i}>
									<div className="bg-black clip-corner p-4 d-flex flex-column">
										<p
											className="text-uppercase font-weight-bold"
											dangerouslySetInnerHTML={{
												__html: block.title,
											}}></p>
										<p
											className=""
											dangerouslySetInnerHTML={{
												__html: block.copy,
											}}></p>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			{/* Videos */}
			<section className="pb-8">
				<div className="wrapper">
					<ul className="row list-unstyled videos-slick">
						{jsonData.videoBlock.blocks.map((block, i) => {
							return (
								<li className="col-12 col-lg-6 p-6" key={i}>
									<Video
										img={block.img}
										ytVideo={block.ytVideo}
										className="w-100"
									/>

									{/* <ImgCopyBlock
                    {...{
                      className: "d-flex flex-column h-100 bg-white",
                      block,
                      linkable: false,
                      divClass: "",
                    }}
                    // style={{ background: "#efefef" }}
                  /> */}
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			{/* Quotes */}
			<section className="section-3 pt-8 pb-8 bg-yellow">
				<div className="wrapper">
					<ul className="row list-unstyled bg-yellow">
						{jsonData.quotes.blocks.map((block, i) => {
							return (
								<li
									className="quote col-12 col-sm-12 col-md-6 pt-3 pr-3 pb-3 pl-3"
									key={i}>
									<QuoteBlock quote={block} className="bg-white" />
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			<section className="p-9"></section>

			{/* EFI Blocks */}
			<section className="section-4 bg-black pt-9 pb-9">
				<div className="wrapper">
					<div className="logo w-50 m-auto">
						<EFI />
					</div>
					<p
						className="w-50 mt-6 ml-auto mr-auto text-center copy"
						dangerouslySetInnerHTML={{ __html: jsonData.efi.copy }}></p>
					<p
						className="w-50 mt-3 ml-auto mr-auto text-center small"
						dangerouslySetInnerHTML={{ __html: jsonData.efi.small }}></p>

					<ul className="row list-unstyled blocks">
						{jsonData.efi.blocks.map((block, i) => {
							return (
								<li className="block col-12 col-sm-12 col-md-6 p-3" key={i}>
									<div className="p-4 h-100 d-flex flex-column bg-white clip-corner">
										<strong
											className="title text-center mb-2 pb-2"
											dangerouslySetInnerHTML={{
												__html: block.title,
											}}></strong>
										<p
											className="text-center mb-0"
											dangerouslySetInnerHTML={{
												__html: block.copy,
											}}></p>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			{/* Video */}
			{/* <section className="section-5 pt-9 pb-9">
        <div className="wrapper p-3">
          <h2
            className="text-center"
            dangerouslySetInnerHTML={{
              __html: jsonData.efiBlock.h2,
            }}
          ></h2>

          <Video
            img={jsonData.efiBlock.img}
            ytVideo={jsonData.efiBlock.ytVideo}
            className="w-100 mt-6"
          />
        </div>
      </section> */}

			<section className="p-9"></section>

			{/* 2 Quotes */}
			<section className="section-6 pt-9 pb-9 bg-yellow">
				<div className="wrapper">
					<ul className="row list-unstyled bg-yellow">
						{jsonData.quotesIntellipower.blocks.map((block, i) => {
							return (
								<li
									className="quote col-12 col-sm-12 col-md-6 pt-3 pr-3 pb-3 pl-3"
									key={i}>
									<QuoteBlock quote={block} className="bg-white" />
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			{/* Learn More */}
			<section className="section-7 pt-9 pb-9">
				<div className="wrapper">
					<h2
						className="text-center"
						dangerouslySetInnerHTML={{
							__html: jsonData.learnMore.h2,
						}}></h2>
					<ul className="row list-unstyled">
						{jsonData.learnMore.blocks.map((block, i) => {
							return (
								<li
									className="quote col-12 col-sm-12 col-md-6 pt-3 pr-3 pb-3 pl-3"
									key={i}>
									<ImgCopyBlock
										{...{ block }}
										linkable={false}
										style={{ background: "#efefef" }}
										flushImg={true}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			{/* View More */}
			<section className="section-8 pt-9 pb-9">
				<div className="wrapper">
					<h2
						className="text-center"
						dangerouslySetInnerHTML={{
							__html: jsonData.viewMore.h2,
						}}></h2>
					<ul className="row list-unstyled">
						{jsonData.viewMore.blocks.map((block, i) => {
							return (
								<li
									className="d-flex flex-column quote col-12 col-sm-12 col-md-4 p-1"
									key={i}>
									<ImgCopyBlock
										{...{ block }}
										linkable={false}
										style={{ background: "#efefef" }}
										className="p-2"
									/>
								</li>
							);
						})}
						<li className="d-flex flex-column col-12 col-sm-12 col-md-4 p-1">
							<div
								className="d-flex flex-column p-3 h-100 text-decoration-none"
								style={{ background: "#efefef" }}>
								<div className="img-wrapper" style={{ minHeight: "500px" }}>
									<img
										src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw26bee84c/images/product-line-browse/Main-Carousel/SnowBlow_PLB_31AH5GVO710_2X_30EFI_desktop_1015x630.jpg"
										alt=""
										className="w-100 h-100"
									/>
								</div>
								<Button
									copy="View All 2X Snowblowers"
									url="https://www.cubcadet.com/en_US/snow-blowers/two-stage-snow-blowers"
									className="bg-secondary align-self-start mt-auto"
								/>
							</div>
						</li>
					</ul>
				</div>
			</section>

			{/* FAQs */}
			<section className="section-9 pt-9 pb-9 p-0">
				<div className="wrapper p-3">
					<ul className="row list-unstyled">
						<li className="col-12 col-sm-12 col-md-6 p-0">
							<div className="p-0 d-flex flex-column">
								<button
									className="active py-2 px-5 border-0"
									id="button-intellipower-faqs">
									IntelliPower<sup>™</sup>
								</button>
							</div>
						</li>
						<li className="col-12 col-sm-12 col-md-6 p-0">
							<div className="p-0 d-flex flex-column">
								<button className="py-2 px-5 border-0" id="button-efi-faqs">
									EFI
								</button>
							</div>
						</li>
					</ul>

					<div className="">
						<Faqs
							faqs={jsonData.faqs[0].intellipower}
							className="faqs-intellipower active"
							addID="faqs-intellipower"
						/>
						<Faqs
							faqs={jsonData.faqs[1].efi}
							className="faqs-efi"
							addID="faqs-efi"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default IntelliPower;
