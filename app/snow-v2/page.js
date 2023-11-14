"use client";
import React, { useState, useEffect } from "react";

import { lineup, quote, machineExtreme, compare } from "./data/home.json";

import Articles from "@/components/Articles";
import AttchmentsAccessories from "@/components/AttchmentsAccessories";
import Faqs from "@/components/Faqs";
import RelatedLinks from "@/components/RelatedLinks";
import ResponsiveImage from "@/components/ResponsiveImage";
import ImgSwappin from "./elements/ImgSwappin";
import Button from "@/components/Button";
import IntellipowerLogo from "../../components/images/IntellipowerLogo";
import Lineup from "./elements/Lineup";
import QuoteBlock from "@/components/QuoteBlock";
import IconTextBlock from "./elements/IconTextBlock";
import CompareRow from "./elements/CompareRow";

export default function SnowV2({}) {
	const [imgType, setImgType] = useState("res");

	useEffect(() => {
		document.querySelectorAll("#finder-script").forEach(function (elem) {
			elem.remove();
		});
		const html = `
	<script type="text/javascript" id="finder-script">
	  (function(c,a,r,t,f,u,l)
	            {
	              ((c[u] =
	                c[u] ||
	                function () {
	                  (c[u].q = c[u].q || []).push(arguments);
	                }),
	              (l = a.createElement(r)),
	              (l.async = 1),
	              (l.id = u + "scr"),
	              (l.src = f),
	              a[t].appendChild(l))
	            }
	            )(window,document,"script","body","https://embed.cartfulsolutions.com/cub-cadet-finder/recommendation.min.js","cfl643");
	</script>`;
		const scriptEl = document.createRange().createContextualFragment(html);
		document.body.appendChild(scriptEl);
	});

	const addPromo = false;

	return (
		<>
			{/* <div
				className="position-fixed p-2 bg-white"
				style={{ right: "20px", top: "20px", zIndex: 1001 }}>
				<button
					className="border-0 p-1 mr-1"
					style={{ fontSize: "12px", background: "#000", color: "#fff" }}
					onClick={() => {
						setImgType("orig");
					}}>
					Original Images
				</button>
				<button
					className="border-0  p-1"
					style={{ fontSize: "12px", background: "#000", color: "#fff" }}
					onClick={() => {
						setImgType("res");
					}}>
					Responsive Images
				</button>
			</div> */}

			<div className="upper">
				<section className="relative section-1 d-flex flex-column align-items-stretch">
					<div className="relative min-h-[600px]">
						<div className="mb-0 container px-0 relative z-10 min-h-[600px]">
							<div className="absolute top-2 lg:top-auto lg:bottom-8 lg:right-8 w-full lg:max-w-[480px] px-8 px-lg-0">
								{addPromo && (
									<>
										<a
											className="d-block text-white bg-black no-underline"
											href="https://www.cubcadet.com/en_US/financing"
											aria-label="See Details">
											<ul className="mb-0 list-unstyled grid grid-cols-[80px_1fr_120px] gap-2 items-stretch p-1">
												<li className="overflow-hidden relative">
													<ResponsiveImage
														id="financing-18"
														src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/cub-cadet-credit-card-new.jpg"
														alt=""
														className="position-absolute w-full h-full top-0 left-0  object-contain min-w-[60px]"
													/>
												</li>
												<li className="px-0 font-bold text-center lg:text-left">
													<span style={{ fontSize: "1.2em" }}>
														18 Month Financing Available
													</span>
													<br />
													<small>Restrictions apply</small>
												</li>
												<li className="">
													<Button
														copy="Learn More"
														className="p-1 border-0 bg-secondary w-full h-full text-black"
													/>
												</li>
											</ul>
										</a>
									</>
								)}
							</div>

							<div
								className="block bg-black clip-corner fill-white position-absolute bottom-8 lg:bottom-auto lg:top-8 right-8 p-3"
								style={{
									clipPath:
										"polygon(1.5rem 0, 100% 0%, 100% 100%, 0 100%, 0 1.5rem)",
								}}>
								<svg
									id="Layer_1"
									xmlns="http://www.w3.org/2000/svg"
									x={0}
									y={0}
									viewBox="0 0 544.1 123"
									xmlSpace="preserve"
									className="w-full">
									<path
										className="st0"
										d="M94.7 0 65.5 22.1 52.1 0H25l19.9 31.5L0 63.1h28.2L59 40.2l14.3 22.9h28.2L79.3 31.5 121.8 0H94.7z"
									/>
									<path d="M0 0h544.1v63.7H0z" style={{ fill: "none" }} />
									<path
										className="st0"
										d="M127.3 46.5h16.9c-1.9 5.4.3 5.8 5.2 5.8h20.7c3.6 0 7.4-.4 8.8-4.3 1.6-4.4-.3-4.7-22.1-4.7-25.4 0-27.3-2.8-22.8-15.3 3.3-9.2 6.8-16.3 28.1-16.3h23.6c19.5 0 19.1 6.1 15.9 15l-.6 1.6h-16.9c1.3-3.7 1.4-5.3-6.3-5.3h-18.7c-3.8 0-6.8 1.2-7.8 3.9-1.6 4.4.4 4.6 18.6 4.5 26.3-.1 31.8 1.4 26.5 16.2-4.9 13.7-10.7 15.9-33.2 15.9h-20.5c-15.4 0-20.6-2.7-16.6-13.7l1.2-3.3zM220 12.3h60.3L276 24.1h-43.4l-2.9 8.1h41.1L267 42.7h-41.1l-2.9 8.1h44.4L263 63.1h-61.3zM343.1 12.3h-51L273.9 63h16.9l4.7-13.2h26.6c5.3 0 6.3 1.8 4.4 7.1l-2.2 6.1h16.9l3.1-8.6c3-8.3-.5-10.4-5.2-11.2v-.1c8.3-1.7 11.5-5.7 13.9-12.5l1.2-3.2c3.3-9.1 1.9-15.1-11.1-15.1zm-6.4 17.9-.6 1.7c-1.4 3.6-3.6 5.3-8.2 5.3H300l4.5-12.3h26.4c5.3 0 7.4.8 5.8 5.3zM371.8 12.2h16.9L370.4 63h-16.9zM401.1 12.2h60.3L457.1 24h-43.4l-2.9 8.1h41.1l-3.8 10.5H407l-2.9 8.1h44.4L444.1 63h-61.3zM460.4 46.4h16.9c-1.9 5.4.3 5.8 5.2 5.8h20.7c3.6 0 7.4-.4 8.8-4.3 1.6-4.4-.3-4.7-22.1-4.7-25.4 0-27.3-2.8-22.8-15.3 3.3-9.2 6.8-16.3 28.1-16.3h23.6c19.5 0 19.1 6.1 15.9 15l-.6 1.6h-16.9c1.3-3.7 1.4-5.3-6.3-5.3h-18.7c-3.8 0-6.8 1.2-7.8 3.9-1.6 4.4.4 4.6 18.6 4.5 26.3-.1 31.8 1.4 26.5 16.2-4.9 13.7-10.8 15.9-33.2 15.9h-20.5c-15.4 0-20.6-2.7-16.6-13.7l1.2-3.3z"
									/>
									<path d="M4.7 92.4h19v6.1H11.3v5.8h11.4v6.1H11.3v6.6h12.4v6.1h-19zM52.4 123H46l-10.2-17.8V123h-6.4V92.4h6.4L46 110.3V92.4h6.4zM68.3 106.3h11.2v11.6c0 2.8-2.3 5.1-5.1 5.1H63.6c-2.8 0-5.1-2.3-5.1-5.1V97.4c0-2.8 2.3-5.1 5.1-5.1h10.8c2.8 0 5.1 2.3 5.1 5.1v3.7l-6.5 1.1v-3.4c0-.3-.2-.5-.5-.5h-6.8c-.3 0-.5.2-.5.5v17.6c0 .3.2.5.5.5h6.8c.3 0 .5-.2.5-.5V112h-4.6l-.1-5.7zM85.5 92.4h6.7V123h-6.7zM121.9 123h-6.4l-10.2-17.8V123h-6.4V92.4h6.4l10.2 17.9V92.4h6.4zM128.4 92.4h19v6.1H135v5.8h11.4v6.1H135v6.6h12.4v6.1h-19.1V92.4zM153 92.4h19v6.1h-12.4v5.8H171v6.1h-11.4v6.6H172v6.1h-19zM196 111.6c2.1-.7 3.6-2.6 3.6-4.9v-9.2c0-2.8-2.3-5.1-5.1-5.1h-17V123h6.7v-11.3h4.6l5.3 11.4h7.3l-5.4-11.5zm-2.9-6.5c0 .3-.2.5-.5.5h-8.3v-7.3h8.3c.3 0 .5.2.5.5v6.3zM206.1 92.4h19v6.1h-12.4v5.8h11.4v6.1h-11.4v6.6h12.4v6.1H206V92.4zM246.5 92.4h-15.8v30.7h15.8c2.8 0 5.1-2.3 5.1-5.1V97.5c0-2.8-2.3-5.1-5.1-5.1zm-1.6 24c0 .3-.2.5-.5.5h-7.1V98.4h7.1c.3 0 .5.2.5.5v17.5zM267.6 123V92.4h19.3v6.1h-12.7v5.8h11.6v6.1h-11.6V123h-6.6zM307.4 92.3h-11.3c-2.8 0-5.1 2.3-5.1 5.1v20.5c0 2.8 2.3 5.1 5.1 5.1h11.3c2.8 0 5.1-2.3 5.1-5.1V97.4c0-2.8-2.3-5.1-5.1-5.1zm-1.5 24.2c0 .3-.2.5-.5.5h-7.2c-.3 0-.5-.2-.5-.5V98.9c0-.3.2-.5.5-.5h7.2c.2 0 .4.2.5.5v17.6zM337.1 111.6c2.1-.7 3.6-2.6 3.6-4.9v-9.2c0-2.8-2.3-5.1-5.1-5.1h-17V123h6.7v-11.3h4.6l5.3 11.4h7.3l-5.4-11.5zm-2.9-6.5c0 .3-.2.5-.5.5h-8.3v-7.3h8.3c.3 0 .5.2.5.5v6.3zM357 92.4h19v6.1h-12.4v5.8H375v6.1h-11.4v6.6H376v6.1h-19zM391.9 101.5l4.9-9.2h7l-8.1 15.1L404 123h-7l-5.1-9.6-5.1 9.6h-7l8.3-15.5-8.1-15.1h7l4.9 9.1zM406.5 92.4H429v6.1h-7.9V123h-6.7V98.4h-7.9zM451.8 111.6c2.1-.7 3.6-2.6 3.6-4.9v-9.2c0-2.8-2.3-5.1-5.1-5.1h-17V123h6.7v-11.3h4.6l5.3 11.4h7.3l-5.4-11.5zm-2.9-6.5c0 .3-.2.5-.5.5h-8.3v-7.3h8.3c.3 0 .5.2.5.5v6.3zM461.9 92.4h19v6.1h-12.4v5.8h11.4v6.1h-11.4v6.6H481v6.1h-19.1zM492.9 106.9V123h-6.4V92.4h6.4l7.7 18.4 7.7-18.4h6.4V123h-6.4v-16.1l-4.9 11.4h-5.6l-4.9-11.4zM521.2 92.4h19v6.1h-12.4v5.8h11.4v6.1h-11.4v6.6h12.4v6.1h-19.1V92.4zM538.7 63.4c-3 0-5.4-2.4-5.4-5.4 0-3 2.4-5.4 5.4-5.4 3 0 5.4 2.4 5.4 5.4 0 3-2.4 5.4-5.4 5.4zm0-10.1c-2.6 0-4.7 2.1-4.7 4.7s2.1 4.7 4.7 4.7 4.7-2.1 4.7-4.7-2.1-4.7-4.7-4.7z" />
									<path d="M538.4 57.6c.3 0 .5-.1.7-.2.1-.1.2-.3.2-.6s-.1-.5-.2-.6c-.1-.1-.4-.2-.7-.2h-.6v1.5h.6m-.6 1.1v2.2h-1.5V55h2.3c.8 0 1.3.1 1.7.4.4.3.5.7.5 1.2 0 .4-.1.7-.3 1-.2.2-.5.4-.8.5l.6.3c.2.2.3.4.5.8l.8 1.7H540l-.7-1.5c-.1-.3-.3-.5-.4-.6-.1-.1-.3-.2-.6-.2h-.5" />
								</svg>
							</div>
						</div>

						<ResponsiveImage
							id="hero"
							src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/31AM5HVSB56_2X26_Inteli_env02.jpg"
							alt=""
							className="h-full w-full position-absolute object-cover top-0 left-0"
							hero
						/>
					</div>
				</section>

				<section className="bg-black d-flex flex-column">
					<div className="wrapper text-center text-white p-2 lg:px-52 py-4 lg:py-10">
						<h1 className="">
							X Series Snow Blowers by Cub Cadet<sup>®</sup>
						</h1>
						<p className="lg:px-48 mt-1 lg:mt-4">
							The Cub Cadet X Series lineup offers three levels of snow-clearing
							power and a host of model options. Choose from the compact
							performance of the 1X<sup>®</sup>, the impressive power and
							handling of the 2X
							<sup>®</sup> or the three-stage system of the 3X<sup>®</sup>.
						</p>
					</div>
				</section>

				<section className="">
					<div className="wrapper">
						<div className="container py-4 lg:py-10">
							<h2 className="text-center block mb-6">The X Series Lineup</h2>
							<ul className="grid gap-4 lg:grid-cols-3 list-unstyled">
								{lineup.blocks.map((block, i) => (
									<li className="flex flex-col" key={i}>
										<Lineup block={block} imgType={imgType} />
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				<section className="snow-picker">
					<div id="product-finder-snow-blowers" />
				</section>

				<section className="relative mb-6 flex flex-col flex-col-reverse">
					<div className="container relative z-10 pt-2 lg:pt-14 lg:pb-64">
						<QuoteBlock
							quote={quote}
							className="bg-white lg:p-4 lg:max-w-[40rem]"
						/>
					</div>

					<ResponsiveImage
						src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/31AH5EVZ596_3X30HD_Env03.jpg"
						// webp="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/31AH5EVZ596_3X30HD_Env03.webp"
						alt=""
						id="snowguy"
						className="lg:absolute top-0 left-0 z-0 w-full h-full object-cover"
						hero={false}
					/>
				</section>

				<section className="mb-6">
					<div className="container">
						<ul className="grid lg:grid-cols-2 gap-4 ">
							<li className="relative">
								<div
									className="bg-black text-white h-full p-1"
									style={{
										clipPath:
											"polygon(1.5rem 0, 100% 0%, 100% 100%, 0 100%, 0 1.5rem)",
									}}>
									<div
										className="logo intellipower p-4 position-relative"
										style={{ zIndex: 1 }}>
										<IntellipowerLogo style={{ fill: "#fff" }} />
									</div>
									<ul
										className="d-flex list-unstyled p-2 position-relative"
										style={{ zIndex: 1 }}>
										<li className="plus">+</li>
										<li className="content">
											<p className="copy title">
												Discover power that rises to the occasion.
											</p>
											<p className="copy">
												IntelliPower<sup>®</sup> technology provides
												<strong>up to 13% more available power</strong> for the
												272cc engine, resulting in less bogging down when
												clearing heavy, wet and deep snow.<sup>*</sup>
											</p>
											<small>
												<sup>*</sup>When compared to the same engine without
												IntelliPower<sup>®</sup> technology. Improvements vary
												depending on engine models and specific operating
												conditions.
											</small>
										</li>
									</ul>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
										x="0px"
										y="0px"
										viewBox="0 0 1600 559.3"
										xmlSpace="preserve"
										className="absolute top-0 left-0 w-full h-full fill-white z-0 opacity-60">
										<line
											x1={0}
											y1={-467}
											x2={1600}
											y2={-467}
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0-423.1c5.2,0,314.8,8.4,320,8.4s314.9-8.4,320-8.4 s314.8,8.4,320,8.4s314.8-8.4,320-8.4s314.8,8.4,320,8.4"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0-379.4c10.3,0,309.7,16.7,320,16.7s309.7-16.7,320-16.7 s309.7,16.8,320,16.8s309.7-16.7,320-16.7s309.7,16.7,320,16.7"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0-335.5c15.5,0,304.5,25.1,320,25.1s304.5-25.1,320-25.1 s304.5,25.1,320,25.1s304.5-25.1,320-25.1s304.5,25.1,320,25.1"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0-291.6c20.6,0,299.3,33.5,320,33.5s299.4-33.5,320-33.5 s299.3,33.5,320,33.5s299.4-33.5,320-33.5s299.4,33.5,320,33.5"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0-247.8c25.8,0,294.2,41.9,320,41.9s294.2-41.9,320-41.9 s294.2,41.9,320,41.9s294.2-41.9,320-41.9s294.2,41.9,320,41.9"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0-203.9c31,0,289,50.2,320,50.2s289.1-50.2,320-50.2 s289,50.2,320,50.2s289-50.2,320-50.2s289,50.2,320,50.2"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0-160.1c36.1,0,283.8,58.6,320,58.6s283.9-58.6,320-58.6 s283.9,58.6,320,58.6s283.9-58.6,320-58.6s283.9,58.6,320,58.6"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0-116.2c41.3,0,278.7,67,320,67s278.7-67,320-67s278.7,67,320,67 s278.7-67,320-67s278.7,67,320,67"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0-72.3C46.5-72.3,273.5,3,320,3s273.6-75.3,320-75.3 S913.5,3,960,3s273.6-75.3,320-75.3S1553.6,3,1600,3"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0-28.5c51.6,0,268.4,83.7,320,83.7s268.4-83.7,320-83.7 s268.4,83.7,320,83.7s268.4-83.7,320-83.7s268.4,83.7,320,83.7"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,15.4c56.8,0,263.2,92.1,320,92.1s263.2-92.1,320-92.1 s263.2,92.1,320,92.1s263.2-92.1,320-92.1s263.2,92.1,320,92.1"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,59.2c61.9,0,258,100.5,320,100.5S578.1,59.1,640,59.1 s258,100.5,320,100.5s258.1-100.5,320-100.5s258.1,100.5,320,100.5"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,103.1c67.1,0,252.9,108.8,320,108.8s252.9-108.8,320-108.8 s252.9,108.8,320,108.8s252.9-108.8,320-108.8s252.9,108.8,320,108.8"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,146.9c72.3,0,247.7,117.2,320,117.2s247.8-117.2,320-117.2 S887.7,264,960,264s247.7-117.2,320-117.2S1527.7,264,1600,264"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,190.8c77.4,0,242.6,125.6,320,125.6s242.6-125.6,320-125.6 s242.6,125.6,320,125.6s242.6-125.6,320-125.6s242.6,125.6,320,125.6"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,234.6c82.6,0,237.4,133.9,320,133.9s237.4-133.9,320-133.9 s237.4,133.9,320,133.9s237.4-133.9,320-133.9s237.4,133.9,320,133.9"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,278.5c87.7,0,232.2,142.3,320,142.3s232.3-142.3,320-142.3 s232.2,142.3,320,142.3s232.3-142.3,320-142.3s232.3,142.3,320,142.3"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,322.2c92.9,0,227.1,150.7,320,150.7s227.1-150.7,320-150.7 S867.1,473,960,473s227.1-150.7,320-150.7S1507.1,473,1600,473"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,366.1c98.1,0,221.9,159,320,159s221.9-159,320-159 s221.9,159.1,320,159.1s221.9-159,320-159s221.9,159,320,159"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,410c103.2,0,216.8,167.4,320,167.4s216.8-167.4,320-167.4 s216.8,167.5,320,167.5S1176.8,410,1280,410s216.8,167.4,320,167.4"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,453.9c108.4,0,211.6,175.8,320,175.8s211.6-175.8,320-175.8 s211.6,175.8,320,175.8s211.6-175.8,320-175.8s211.6,175.8,320,175.8"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,497.6c113.5,0,206.4,184.2,320,184.2s206.5-184.2,320-184.2 s206.4,184.2,320,184.2s206.5-184.2,320-184.2s206.5,184.2,320,184.2"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,541.5c118.7,0,201.3,192.5,320,192.5s201.3-192.5,320-192.5 S841.3,734,960,734s201.3-192.5,320-192.5S1481.3,734,1600,734"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,585.3c123.9,0,196.1,200.9,320,200.9s196.1-200.9,320-200.9 s196.1,200.9,320,200.9s196.1-200.9,320-200.9s196.1,200.9,320,200.9"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,629.2c129,0,191,209.3,320,209.3s191-209.3,320-209.3 s191,209.3,320,209.3s191-209.3,320-209.3s191,209.3,320,209.3"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,673c134.2,0,185.8,217.6,320,217.6s185.8-217.6,320-217.6 s185.8,217.6,320,217.6s185.8-217.6,320-217.6s185.8,217.6,320,217.6"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,717c139.4,0,180.6,226,320,226s180.6-226,320-226 s180.6,226,320,226s180.6-226,320-226s180.6,226,320,226"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,760.8c144.5,0,175.5,234.4,320,234.4s175.5-234.4,320-234.4 s175.5,234.4,320,234.4s175.5-234.4,320-234.4s175.5,234.4,320,234.4"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,804.7c149.7,0,170.3,242.8,320,242.8s170.3-242.8,320-242.8 s170.3,242.8,320,242.8s170.3-242.8,320-242.8s170.3,242.8,320,242.8"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,848.5c154.8,0,165.2,251.1,320,251.1s165.2-251.1,320-251.1 s165.2,251.1,320,251.1s165.2-251.1,320-251.1s165.2,251.1,320,251.1"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
										<path
											d="M0,892.3c160,0,160,259.5,320,259.5s160-259.5,320-259.5 s160,259.5,320,259.5s160-259.5,320-259.5s160,259.5,320,259.5"
											style={{
												fill: "none",
												stroke: "rgb(255, 255, 255)",
												strokeMiterlimit: 10,
											}}
										/>
									</svg>
								</div>
							</li>
							<li className="">
								<div
									className="bg-black text-white h-full"
									style={{
										clipPath:
											"polygon(1.5rem 0, 100% 0%, 100% 100%, 0 100%, 0 1.5rem)",
									}}>
									<div className="logo efi p-6 w-75 mx-auto">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 393 152.1"
											xmlSpace="preserve">
											<path
												d="M154.3 90H58.9l6.9-19h88.4l8.9-24.6H74.8l6.9-19H175L185 0H55.4L12.2 118.5H144L154.3 90zM310.3 50.6H227l8-22.1h87.4L332.8 0H209.1L166 118.5h36.3L217 78.1h83.3l10-27.5zM393 0h-36.3l-43.1 118.5h36.3L393 0zM13.4 147.5l.8-2.3H5.9l.7-1.8h8.8l.9-2.6H4.1L0 152h12.4l1-2.7h-9l.7-1.8h8.3zM22 140.8h-3.4L14.5 152h11.1l1-2.9H19l3-8.3zM40.5 147.5l.8-2.3H33l.7-1.8h8.8l.9-2.6H31.2L27.1 152h12.4l1-2.7h-9l.7-1.8h8.3zM54.5 140.7h-4c-3.1 0-5.2.8-6.4 4.1l-1.2 3.3c-1.2 3.3.4 4.1 3.5 4.1h5.5c3.4 0 4.7-1.5 5.4-3.4l.4-1.1h-3.4c-.5 1.4-1 1.5-2.6 1.5H48c-1.6 0-1.7-.6-1.1-2.2l.4-1.2c.5-1.4 1.2-2.2 3-2.2H54c1 0 1.5.2 1.2 1l-.1.3h3.4c1.1-3.1.9-4.2-4-4.2zM74.4 140.8H61.3l-1 2.8h4.8L62 152h3.4l3.1-8.4h4.8l1.1-2.8zM86.3 140.8H75.9L71.8 152h3.4l1.1-2.9h5.4c1.1 0 1.3.4.8 1.6L82 152h3.4l.7-1.9c.7-1.8 0-2.3-1-2.5 1.4-.2 2.6-1.3 2.9-2.8l.3-.7c.8-2 .6-3.3-2-3.3zm-1.5 4-.1.4c-.2.8-.9 1.3-1.7 1.2h-5.7l1-2.7h5.4c1.1-.1 1.5.1 1.1 1.1zM102.2 140.7h-5.5c-3.1 0-5.2.8-6.4 4.1l-1.2 3.3c-1.2 3.3.4 4.1 3.5 4.1H98c3.1 0 5.2-.8 6.4-4.1l1.2-3.3c1.2-3.3-.3-4.1-3.4-4.1zm-.5 5.1-.4 1.2c-.6 1.6-1.2 2.2-2.8 2.2h-4.4c-1.6 0-1.7-.6-1.1-2.2l.4-1.2c.5-1.4 1.2-2.2 3-2.2h4c1.8 0 1.8.8 1.3 2.2zM120.9 140.8l-3 8.1-3.5-8.1h-5.3L105 152h3.4l3-8.1 3.5 8.1h5.3l4.1-11.2h-3.4zM126.9 140.8l-4.1 11.2h3.4l4.1-11.2h-3.4zM141.6 140.7h-4c-3.1 0-5.2.8-6.4 4.1l-1.2 3.3c-1.2 3.3.4 4.1 3.5 4.1h5.5c3.4 0 4.7-1.5 5.4-3.4l.4-1.1h-3.4c-.5 1.4-1 1.5-2.6 1.5H135c-1.6 0-1.7-.6-1.1-2.2l.4-1.2c.5-1.4 1.2-2.2 3-2.2h3.7c1 0 1.5.2 1.2 1l-.1.3h3.4c1.2-3.1.9-4.2-3.9-4.2zM167.6 143.5l1-2.7h-11.7l-4.1 11.2h3.4l1.4-3.8h7.9l.9-2.6h-7.9l.8-2.1h8.3zM181.3 140.8l-2.4 6.5c-.2 1.2-1.4 2.1-2.6 2h-3.4c-1.4 0-1.7-.6-1.2-2l2.4-6.5h-3.4L168 148c-1 2.8-.1 4.1 3.1 4.1h4.9c3.2 0 5.1-1.3 6.1-4.1l2.6-7.2h-3.4zM196.4 147.5l.8-2.3h-8.3l.7-1.8h8.8l.9-2.6H187l-4 11.2h12.4l1-2.7h-9l.7-1.8h8.3zM205 140.8h-3.4l-4.1 11.2h11.1l1-2.9H202l3-8.3zM222 140.8l-4.1 11.2h3.4l4.1-11.2H222zM239.7 140.8l-3 8.1-3.5-8.1h-5.3l-4.1 11.2h3.4l3-8.1 3.5 8.1h5.3l4.1-11.2h-3.4zM252.7 140.8l-2.7 7.4c-.4 1-1.1 1.2-2.2 1.2h-1.4c-1.1 0-1.4-.3-1.1-1.2l.4-1h-3.3l-.5 1.3c-1 2.6-.1 3.6 3.1 3.6h2.2c3.1 0 5-.6 6.1-3.7l2.8-7.6h-3.4zM267.8 147.5l.8-2.3h-8.3l.7-1.8h8.8l.9-2.6h-12.2l-4.1 11.2h12.4l1-2.7h-9l.7-1.8h8.3zM281.7 140.7h-4c-3.1 0-5.2.8-6.4 4.1l-1.2 3.3c-1.2 3.3.4 4.1 3.5 4.1h5.5c3.4 0 4.7-1.5 5.4-3.4l.4-1.1h-3.4c-.5 1.4-1 1.5-2.6 1.5h-3.7c-1.6 0-1.7-.6-1.1-2.2l.4-1.2c.5-1.4 1.2-2.2 3-2.2h3.7c1 0 1.5.2 1.2 1l-.1.3h3.4c1.1-3.1.9-4.2-4-4.2zM301.6 140.8h-13.1l-1 2.8h4.8l-3.1 8.4h3.4l3.1-8.4h4.8l1.1-2.8zM303.3 140.8l-4.1 11.2h3.4l4.1-11.2h-3.4zM319.5 140.7H314c-3.1 0-5.2.8-6.4 4.1l-1.2 3.3c-1.2 3.3.4 4.1 3.5 4.1h5.5c3.1 0 5.2-.8 6.4-4.1l1.2-3.3c1.1-3.3-.4-4.1-3.5-4.1zm-.5 5.1-.4 1.2c-.6 1.6-1.2 2.2-2.8 2.2h-4.4c-1.6 0-1.7-.6-1.1-2.2l.4-1.2c.5-1.4 1.2-2.2 3-2.2h4c1.8 0 1.8.8 1.3 2.2zM335.3 149l-3.5-8.1h-5.3l-4.1 11.2h3.4l3-8.1 3.5 8.1h5.3l4.1-11.2h-3.4l-3 8.1z"
												style={{ fill: "rgb(255, 255, 255)" }}
											/>
										</svg>
									</div>
									<ul className="d-flex list-unstyled p-2">
										<li className="plus">+</li>
										<li className="content">
											<p className="copy title">
												Cub Cadet electronic fuel-injected (EFI) engines set new
												standards in strength and power. EFI provides reliable
												starting in most conditions.
											</p>
											<p className="copy">
												Available with IntelliPower<sup>®</sup> engine
												technology to take on heavy, deep and wet snow
												conditions.
											</p>
											<small />
										</li>
									</ul>
								</div>
							</li>
						</ul>
						<div className="text-center">
							<a
								href="https://www.cubcadet.com/en_US/engine-advantage.html"
								className="bg-black px-10 py-2 text-center text-white inline-block no-underline uppercase font-bold"
								style={{
									clipPath:
										"polygon(1rem 0px,100% 0%,100% 100%,0px 100%,0px 1rem)",
								}}>
								Learn more about cub cadet engine innovation
							</a>
						</div>
					</div>
				</section>

				<section className="mb-8">
					<div className="container">
						<h2 className="text-center">A Machine for the Extreme</h2>
						<p className="text-center">
							All Cub Cadet X Series models come with premium features to get
							your winter done right.
						</p>
						<ul className="grid gap-4 lg:grid-cols-2 mt-6">
							{machineExtreme.blocks.map((block, i) => (
								<li className="" key={i}>
									<IconTextBlock block={block} imgType={imgType} />
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className="container">
					<div className="wrapper p-1">
						<ResponsiveImage
							className="md:hidden w-full h-full"
							src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/Group3564.png"
							alt=""
							id="Group3564-mobile"
						/>

						<ResponsiveImage
							className="overflow-hidden w-0 h-0 md:h-full md:w-full"
							src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/Group3540.png"
							alt=""
							id="Group3564-desktop"
						/>
					</div>
				</section>

				<section className="mt-6">
					<div className="container">
						<h2 className="text-center">
							Shop and Compare X Series Snow Blowers
						</h2>

						<div className="max-w-screen overflow-x-auto">
							<ul className="grid grid-cols-[20rem_10rem_10rem_10rem] lg:grid-cols-[1fr_16rem_16rem_16rem] mt-4">
								{compare.blocks.map((block, i) => {
									return (
										<CompareRow
											block={block}
											numRows={compare.blocks.length}
											rowNum={i}
											key={i}
										/>
									);
								})}
							</ul>
						</div>
						<h3 className="text-center mt-2">
							Explore the full brochure for specific model and trim options
						</h3>
						<div className="text-center">
							<a
								href="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/Cub_Cadet_Snow_Brochure__USA_2022.pdf"
								className="button text-uppercase font-weight-bold text-decoration-none d-inline-block border-0 bg-black mx-auto mt-2 p-2 text-white"
								style={{
									clipPath:
										"polygon(1rem 0px,100% 0%,100% 100%,0px 100%,0px 1rem)",
								}}>
								View brochure
							</a>
						</div>
					</div>
				</section>
			</div>

			<div className="container mt-8">
				<Articles
					imgType={imgType}
					articles={{
						h2: "Snow Blower Articles & How To’s",
						blocks: [
							{
								img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/SnowBlow_ProdLineBrow_Hero_LineUp_01_desktop_1015x630_v1.jpg",
								title: "Cub Cadet Snow Blower Buyers Guide",
								copy: "If you live in areas where snowfall is frequent or heavy, shoveling becomes part of your daily routine. Ditching your shovel, along with the heavy lifting and repetitive strain that comes with shoveling snow, in favor of a snow blower can save you time and energy. A couple of reasons to justify a snow blower…",
								url: "https://www.cubcadet.com/en_US/product-information/cub-cadet-snow-blower-buying-guide.html",
								res: (
									<ResponsiveImage
										src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/SnowBlow_ProdLineBrow_Hero_LineUp_01_desktop_1015x630_v1.jpg"
										id="Hero_LineUp_01"
										className="absolute w-full h-full object-cover"
									/>
								),
							},
							{
								img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/recommended-snow-thrower-back-up-parts_1100x572.jpg",
								title: "Recommended Snow Blower Back-Up Parts",
								copy: "Always prepare your snow blower for maintenance before starting any repairs. Move your snow blower to a flat surface.  Turn the engine off and let it cool. Disconnect the spark plug ignition wire and remove the safety ignition key to prevent accidental starting of the engine…",
								url: "https://www.cubcadet.com/en_US/product-information/knowledge-recommended-snow-thrower-back-up-parts.html",
								res: (
									<ResponsiveImage
										src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/recommended-snow-thrower-back-up-parts_1100x572.jpg"
										id="recommended-snow-thrower-back-up-parts"
										className="absolute w-full h-full object-cover"
									/>
								),
							},
							{
								img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/snow-thrower-operation-tips_1100x572.jpg",
								title: "How to Prepare Your Snow Thrower for Winter Use",
								copy: "Whether you're prepping your trusty 2X two-stage snow thrower for yet another winter, or getting your new 3X three-stage snow thrower ready to face its first blizzard, these snow thrower maintenance tips can help ensure you're prepared for cold and stormy weather this…",
								url: "https://www.cubcadet.com/en_US/how-to/knowledge-how-to-prepare-your-snow-thrower-for-winter-use.html",
								res: (
									<ResponsiveImage
										src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/snow-thrower-operation-tips_1100x572.jpg"
										id="snow-thrower-operation-tips"
										className="absolute w-full h-full object-cover"
									/>
								),
							},
							{
								img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/snow-thrower-safety-tips_1100x572.jpg",
								title: "Snow Blower Safety Tips",
								copy: "Snow blowers, often referred to as snow blowers are an easy way to keep the snow off your driveway during the winter months. Like any piece of power equipment, snow blower safety should be a top priority…",
								url: "https://www.cubcadet.com/en_US/product-information/knowledge-snow-thrower-safety-tips.html",
								res: (
									<ResponsiveImage
										src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/snow-thrower-safety-tips_1100x572.jpg"
										id="snow-thrower-safety-tips"
										className="absolute w-full h-full object-cover"
									/>
								),
							},
						],
					}}
					numRows={4}
				/>

				<AttchmentsAccessories
					imgType={imgType}
					attAcc={{
						h2: "Snow Blower Attachments & Accessories",
						blocks: [
							{
								img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/490-241-0032.jpg",
								title: "Universal Cab",
								item: "490-241-0032",
								price: "$132.99",
								url: "https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cab/490-241-0032.html#q=490-241-0032&lang=en_US&start=0",
								res: (
									<ResponsiveImage src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/490-241-0032.jpg" />
								),
								orig: (
									<img
										src="https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cab/490-241-0032.html?fitsOnModel=false"
										alt=""
									/>
								),
							},
							{
								img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/490-290-0010_1.jpg",
								title: "Snow Blower Cover",
								item: "490-290-0010",
								price: "$38.99",
								url: "https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cover/490-290-0010.html#q=490-290-0010&lang=en_US&start=0",
								res: (
									<ResponsiveImage src="https://www.cubcadet.com/en_US/snow-blower-accessories/snow-blower-cover/490-290-0010.html#q=490-290-0010&lang=en_US&start=0" />
								),
								orig: (
									<img
										src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw2a0b010e/products/Attachments_Accessories/490-290-0010_1.jpg?sw=280&sh=280&sm=fit"
										alt=""
									/>
								),
							},
							{
								img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/OEM-390-679.jpg",
								title: "Drift Cutter Kit",
								item: "OEM-390-679",
								price: "$41.99",
								url: "https://www.cubcadet.com/en_US/snow-blower-accessories/drift-cutter-kit/OEM-390-679.html#q=OEM-390-679&lang=en_US&start=0",
								res: (
									<ResponsiveImage src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/OEM-390-679.jpg" />
								),
								orig: (
									<img
										src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw32dc42ff/products/Attachments_Accessories/OEM-390-679.jpg?sw=280&sh=280&sm=fit"
										alt=""
									/>
								),
							},
							{
								img: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/753-08629.jpg",
								title: "LED Light Bar Kit",
								item: "753-08629A",
								price: "$135.89",
								url: "https://www.cubcadet.com/en_US/snow-blower-accessories/led-light-bar-kit/753-08629A.html#q=753-08629A&lang=en_US&start=0",
								res: (
									<ResponsiveImage src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/753-08629.jpg" />
								),
								orig: (
									<img
										src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw301fe215/products/753-08629.jpg?sw=280&sh=280&sm=fit"
										alt=""
									/>
								),
							},
						],
					}}
				/>

				<RelatedLinks
					relatedCats={{
						h3: "Related Categories",
						list: [
							{
								title: "Single-Stage Snow Blowers",
								href: "https://www.cubcadet.com/en_US/snow-blowers/single-stage-snow-blowers",
							},
							{
								title: "Two-Stage Snow Blowers",
								href: "https://www.cubcadet.com/en_US/snow-blowers/two-stage-snow-blowers",
							},
							{
								title: "Three-Stage Snow Blowers",
								href: "https://www.cubcadet.com/en_US/snow-blowers/three-stage-snow-blowers",
							},
							{
								title: "Snow Blower Accessories",
								href: "https://www.cubcadet.com/en_US/snow-blowers/snow-blower-accessories",
							},
						],
					}}
					className="mt-6"
				/>

				<RelatedLinks
					relatedCats={{
						h3: "Related Searches",
						list: [
							{
								title: "Financing",
								href: "https://www.cubcadet.com/en_US/financing",
							},
							{
								title: "Extended Warranty",
								href: "https://www.cubcadet.com/en_US/ew-info-page.html",
							},
							{
								title: "Register My Product",
								href: "https://www.cubcadet.com/en_US/content-asset-page-includes/registration.html",
							},
							{
								title: "Operator’s Manual",
								href: "https://www.cubcadet.com/en_US/operatorsmanuals",
							},
							{
								title: "Snow Plow Blade Attachment",
								href: "https://www.cubcadet.com/en_US/riding-mower-accessories/46-inch-snow-plow-blade-attachment/19A30017OEM.html?fitsOnModel=false#q=snow%2Bplow%2Bblade&lang=en_US&start=0",
							},
						],
					}}
					className="mt-2"
				/>

				<RelatedLinks
					relatedCats={{
						h3: "Snow Blower Maintenance",
						p: "When customers buy Snow Blowers they often buy or consider:",
						list: [
							{
								title: "Shear Pins",
								href: "https://www.cubcadet.com/en_US/snow-blower-parts/snow-blower-shear-pins",
							},
							{
								title: "Belts",
								href: "https://www.cubcadet.com/en_US/snow-blower-parts/snow-blower-belts",
							},
							{
								title: "Shave Plates",
								href: "https://www.cubcadet.com/en_US/snow-blower-parts/snow-blower-shave-plates",
							},
							{
								title: "Slide Shoes",
								href: "https://www.cubcadet.com/en_US/snow-blower-parts/snow-blower-slide-shoes",
							},
							{
								title: "Tires and Wheels",
								href: "https://www.cubcadet.com/en_US/snow-blower-parts/snow-blower-tires-and-wheels",
							},
							{
								title: "All Snow Blower Parts",
								href: "https://www.cubcadet.com/en_US/shop-by-machine-type/snow-blower-parts",
							},
						],
					}}
					className="mt-2"
				/>

				<h3 className="mt-6">Questions & Answers</h3>
				<Faqs
					faqs={[
						{
							question: "What does a snow blower do?",
							answer:
								"Cub Cadet® snow blowers are engineered to quickly remove snow from unwanted areas. A single stage snow blower is the most basic kind, where the auger paddle pulls snow into the machine and throws it out of the chute. More advanced stages are designed to handle more snow.",
						},
						{
							question: "What is the best type of snow blower for a driveway?",
							answer:
								'There’s no one size fits all snow blower. Cub Cadet has models ideal for up to 6-in, 12-in, and 18-in. of snowfall, so take stock of how much snow is expected in your area to zero in on a category. From there, determine what kind of features you’d benefit from, like electric start, heated hand grips, IntelliPower™ engines, or LED headlights, among others. This <a href="https://www.cubcadet.com/en_US/product-information/cub-cadet-snow-blower-buying-guide.html">snow blower buyers guide</a> goes into more detail.',
						},
						{
							question: "Do I need a 1, 2 or 3 stage snow blower?",
							answer: `
								Once you determine how much snowfall your area is expected to get, you can <a href="https://www.cubcadet.com/en_US/product-information/cub-cadet-snow-blower-buying-guide.html">choose the right model</a> for your needs. Cub Cadet® single-stage snow blowers are generally ideal for up to 6-in. of snowfall, 2-stage models can handle up to 12-in. of snowfall and 3-stage units typically can handle up to 18-in. of snowfall. Cub Cadet® MAX units — available in 2-stage and 3-stage models — can tackle up to 23-in. of snowfall.
								`,
						},
						{
							question: "How do I finance a Cub Cadet snow blower?",
							answer: `
								Cub Cadet® offers a variety of financing plans depending on your budget and your purchase minimum. <a href="https://www.cubcadet.com/en_US/financing">Click here</a> for more details.
								`,
						},
						{
							question: "How do I store my snow blower in the off season?",
							answer: `
								Always refer to your <a href="https://www.cubcadet.com/en_US/operatorsmanuals">operator’s manual</a> for comprehensive instructions on maintenance and storage. Instructions will differ between single-, 2-, and 3-stage snow blowers. <a href="https://www.cubcadet.com/en_US/knowledge-center/knowledge-how-to-prepare-your-snow-thrower-for-storage-in-the-off-season.html">This guide</a> can help walk you through some of the most common steps.
								`,
						},
						{
							question: "How do I register my Cub Cadet snow blower?",
							answer: `
								Once you’ve purchased a Cub Cadet® snow blower, you can register your machine <a href="https://www.cubcadet.com/en_US/content-asset-page-includes/registration.html">here</a>.
								`,
						},
					]}
				/>
			</div>
		</>
	);
}
