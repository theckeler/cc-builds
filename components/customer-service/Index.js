import React from "react";
import jsonData from "./data/customerservice.json";
import "../../scss/main.scss";
import "../../scss/customerservice.scss";

import Button from "@/components/Button";
import SupportModel from "@/components/SupportModel";
//import TrackOrder from "@/components/TrackOrder";
import TrackOrderCTA from "@/components/TrackOrderCTA";

import { ReactComponent as IconBelt } from "../../images/icon-belt.svg";
import { ReactComponent as IconBlades } from "../../images/icon-blades.svg";
import { ReactComponent as IconLevel } from "../../images/icon-level.svg";
import { ReactComponent as IconAward } from "../../images/icon-award.svg";
import { ReactComponent as IconScrewdriverWrench } from "../../images/icon-screwdriver-wrench.svg";
import { ReactComponent as IconManuals } from "../../images/icon-manuals.svg";
import { ReactComponent as IconMagGlassBolt } from "../../images/icon-mag-glass-bolt.svg";
import { ReactComponent as IconPhone } from "../../images/icon-phone.svg";
import { ReactComponent as IconChat } from "../../images/icon-chat.svg";

const App = () => {
	const IconMap = {
		iconBelt: IconBelt,
		iconBlades: IconBlades,
		iconLevel: IconLevel,
		iconAward: IconAward,
		iconScrewdriverWrench: IconScrewdriverWrench,
		iconManuals: IconManuals,
		iconMagGlassBolt: IconMagGlassBolt,
	};

	return (
		<div className="customer-service">
			{/* HERO */}
			<section className="section-1" style={{ background: "#ffc20f" }}>
				<div className="container px-3 py-4">
					<h1
						className="text-center mb-0"
						dangerouslySetInnerHTML={{ __html: jsonData.section1.h1 }}></h1>
					<p
						className="mt-2 mb-0 text-center"
						dangerouslySetInnerHTML={{ __html: jsonData.section1.copy }}></p>
				</div>
			</section>

			{/* Three Blocks */}
			<section className="section-2">
				<div className="container px-3 py-6">
					<ul className="row list-unstyled">
						{jsonData.section2.blocks.map((block, i) => {
							let ComponentName = IconMap[`${block.img}`];

							return (
								<li
									className="d-flex flex-column col-12 col-sm-12 col-md-4 p-1"
									key={i}>
									<a
										href={block.url}
										className="d-flex flex-column p-6 h-100 text-decoration-none justify-content-center"
										style={{ background: "#d8d8d8" }}>
										<div
											className="icon w-75 mx-auto d-flex flex-column justify-content-center"
											style={{ minHeight: "130px" }}>
											<ComponentName />
										</div>
										<strong
											className="text-center mt-4 mb-0"
											dangerouslySetInnerHTML={{
												__html: block.title,
											}}
										/>
									</a>
								</li>
							);
						})}
					</ul>
					<a
						href={jsonData.section2.button.url}
						className="text-uppercase font-weight-bold d-flex justify-content-center">
						{jsonData.section2.button.copy}
					</a>
				</div>
			</section>

			{/* Track Order / Find Support */}
			<section className="section-3">
				<div className="container px-3 py-6">
					<ul className="row list-unstyled justify-content-center">
						<li className="d-flex flex-column quote col-12 col-md-6 p-1">
							<div
								className="d-flex flex-column p-6 h-100"
								style={{ background: "#d8d8d8" }}>
								<TrackOrderCTA
									title={jsonData.section3.findOrder.h2}
									sub={jsonData.section3.findOrder.copy}
									className=""
									style=""
								/>
							</div>
						</li>
						<li className="d-flex flex-column quote col-12 col-md-6 p-1">
							<div
								className="d-flex flex-column p-6 h-100"
								style={{ background: "#d8d8d8" }}>
								<SupportModel
									title={jsonData.section3.findModel.h2}
									sub={jsonData.section3.findModel.copy}
									className=""
									style=""
								/>
							</div>
						</li>
					</ul>
				</div>
			</section>

			{/* CTA */}
			<section
				className="section-4 py-5 px-3"
				style={{ background: "#000", color: "#fff" }}>
				<div className="container">
					<h2
						className="text-center"
						dangerouslySetInnerHTML={{ __html: jsonData.section4.h2 }}
					/>
					<p
						className="mx-auto"
						style={{ maxWidth: "840px" }}
						dangerouslySetInnerHTML={{ __html: jsonData.section4.copy }}
					/>
				</div>
			</section>

			{/* Popular Links */}
			<section className="section-5 py-4">
				<div className="container px-3 py-6">
					<h2
						className="text-center mb-3"
						dangerouslySetInnerHTML={{ __html: jsonData.section5.h2 }}
					/>
					<ul className="row list-unstyled">
						{jsonData.section5.blocks.map((block, i) => {
							let ComponentName = IconMap[`${block.img}`];

							return (
								<li
									className="d-flex flex-column col-12 col-sm-12 col-md-6 col-lg-3 p-1"
									key={i}>
									<a
										href={block.url}
										className="d-flex flex-column p-2 h-100 text-decoration-none justify-content-center">
										<div className="icon mx-auto d-flex justify-content-center pb-4">
											<ComponentName
												style={{
													width: "100%",
													height: "140px",
												}}
											/>
										</div>
										<p
											className="text-center mb-0 mt-auto pb-2"
											dangerouslySetInnerHTML={{
												__html: block.copy,
											}}
										/>
										<Button
											copy={block.button.copy}
											className="bg-black mt-1"
										/>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			{/* Find Support */}
			<section className="section-6">
				<div className="container px-3 py-6">
					<h2
						className="text-center"
						dangerouslySetInnerHTML={{ __html: jsonData.section6.h2 }}
					/>
					<ul className="row list-unstyled">
						{jsonData.section6.blocks.map((block, i) => {
							return (
								<li
									className="d-flex flex-column col-12 col-sm-12 col-md-6 col-lg-3 p-1"
									key={i}>
									<a
										href={block.url}
										className="d-flex flex-column p-3 h-100 text-decoration-none justify-content-center">
										<h3
											className="text-center mt-4 mb-0"
											dangerouslySetInnerHTML={{
												__html: block.title,
											}}
										/>
										<img src={block.img} alt="" />
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</section>

			{/* Didn’t Find What You Were Looking For? */}
			<section className="section-7 py-5" style={{ background: "#ffc20f" }}>
				<div className="container" style={{ maxWidth: "700px" }}>
					<h2
						className="text-center"
						dangerouslySetInnerHTML={{ __html: jsonData.section7.h2 }}
					/>
					<p
						className="text-center"
						dangerouslySetInnerHTML={{ __html: jsonData.section7.copy }}
					/>

					<ul className="row list-unstyled mx-auto">
						<li className="d-flex flex-column quote col-12 col-sm-12 col-md-6 p-1">
							<div className="d-flex flex-column p-0">
								<button
									className="d-flex justify-content-center align-items-center py-2 px-5 border-0"
									style={{ background: "#000", color: "#fff" }}>
									<span
										className="mr-1"
										style={{
											width: "1.25rem",
											height: "1.25rem",
											marginLeft: "8px",
										}}>
										<IconPhone style={{ fill: "#fff" }} />
									</span>
									866-931-9544
								</button>
							</div>
						</li>
						<li className="d-flex flex-column quote col-12 col-sm-12 col-md-6 p-1">
							<div className="d-flex flex-column p-0">
								<button
									className="d-flex justify-content-center align-items-center py-2 px-5 border-0"
									style={{ background: "#000", color: "#fff" }}>
									<span
										className="mr-1"
										style={{
											width: "1.25rem",
											height: "1.25rem",
											marginLeft: "8px",
										}}>
										<IconChat style={{ fill: "#fff" }} />
									</span>
									Live chat
								</button>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
};

export default App;
