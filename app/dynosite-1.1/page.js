"use client";
import Image from "next/image";
import jsonData from "./data.json";

import Faqs from "@/components/Faqs";
import CTABlock from "@/components/CTABlock";
import PartsListing from "@/components/PartsListing";
import DealerLocation from "@/components/DealerLocation";
import Diagrams from "@/components/Diagrams";
import Warranty from "@/components/Warranty";
import HowTos from "@/components/HowTos";
import Registration from "@/components/Registration";
import Button from "@/components/Button";

const Dynosite = () => {
	const containerCSS = "container ";
	const buttonCSS =
		"ml-auto btn d-flex align-items-center justify-content-center p-1 border border-primary";

	const scrollToTop = (e = "parts-listing") => {
		document.querySelector("#dyno-dropdown").classList.toggle("d-none");
		const top = document.querySelector(`#${e}`).offsetTop - 120;
		window.scrollTo({
			top: top,
			behavior: "smooth",
		});
	};

	return (
		<div className="mtd-page product-dyno-results">
			<section
				className="w-100 sticky-top pt-1"
				style={{ backgroundColor: "#efefef" }}>
				<ul className="container d-flex align-items-center list-unstyled mb-0">
					<li className="pr-2 d-none d-md-block">
						<Image
							src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw855f971f/products/Equipment/Cub-Cadet_XT1ST54_New_2000x2000_7.jpg"
							alt=""
							width={100}
							height={100}
							fit={true}
							className=""
							//style={{ width: "auto", height: "100%", maxHeight: "100px" }}
						/>
					</li>
					<li className="pr-2">
						<h1 className="mb-0 pr-1" style={{ fontSize: "2.5em" }}>
							XT1 ST54
						</h1>
					</li>
					<li className="ml-auto d-flex">
						<Button
							//url="#parts"
							copy="Fits Models: ▿"
							className={`${buttonCSS} d-block d-lg-none mr-1`}
							style={{}}
							onClick={(e) => {
								document.querySelector("#dyno-fits").classList.toggle("d-none");
							}}
						/>
						<Button
							//url="#parts"
							copy="Menu ▿"
							className={`${buttonCSS} d-block d-lg-none`}
							style={{}}
							onClick={(e) => {
								document
									.querySelector("#dyno-dropdown")
									.classList.toggle("d-none");
							}}
						/>
						<div
							id="dyno-dropdown"
							className="d-none d-lg-block bg-white bg-lg-transparant position-absolute position-lg-relative p-2 w-100"
							style={{ zIndex: 101, right: 0, top: "100%" }}>
							<ul className="list-unstyled flex flex-column flex-lg-row w-100">
								<li className="mb-1 mr-lg-1 mb-lg-0">
									<Button
										//url="#parts"
										copy="Parts"
										className={`${buttonCSS} w-100`}
										onClick={(e) => {
											scrollToTop("parts-listing");
										}}
									/>
								</li>
								<li className="mb-1 mr-lg-1 mb-lg-0">
									<Button
										//url="#support"
										copy="Support"
										className={`${buttonCSS} w-100`}
										onClick={(e) => {
											scrollToTop("support");
										}}
									/>
								</li>
								<li className="mb-1 mr-lg-1 mb-lg-0">
									<Button
										//url="#diagrams"
										copy="Diagrams"
										className={`${buttonCSS} w-100`}
										onClick={(e) => {
											scrollToTop("diagrams");
										}}
									/>
								</li>
								<li className="mb-1 mr-lg-1 mb-lg-0">
									<Button
										//url="#warranty"
										copy="Warranty"
										className={`${buttonCSS} w-100`}
										onClick={(e) => {
											scrollToTop("warranty");
										}}
									/>
								</li>
								<li className="mb-1 mr-lg-1 mb-lg-0">
									<Button
										//url="#how-tos"
										copy="How-Tos"
										className={`${buttonCSS} w-100`}
										onClick={(e) => {
											scrollToTop("how-tos");
										}}
									/>
								</li>
								<li className="mb-1 mr-lg-1 mb-lg-0">
									<Button
										//url="#registration"
										copy="Registration"
										className={`${buttonCSS} w-100`}
										onClick={(e) => {
											scrollToTop("registration");
										}}
									/>
								</li>
								<li>
									<Button
										//url="#aandq"
										copy="A&Q"
										className={`${buttonCSS} w-100`}
										onClick={(e) => {
											scrollToTop("aandq");
										}}
									/>
								</li>
							</ul>
						</div>
					</li>
				</ul>
				<div className="border-bottom mb-1 pb-1">
					<div
						className="container d-none d-lg-block"
						id="dyno-fits"
						style={{ fontSize: "0.7em" }}>
						For Model(s)#: 13AQA2CM010, 13AQA2CM011, 13AQA2CM012, 13AQA2CM014,
						13AQA2CM018, 13AQA2CM010, 13AQA2CM011, 13AQA2CM012, 13AQA2CM014,
						13AQA2CM018, 13AQA2CM010, 13AQA2CM011, 13AQA2CM012, 13AQA2CM014,
						13AQA2CM018
					</div>
				</div>
			</section>

			{/* <section className={`mt-2 ${containerCSS}`}>
				<ul className="list-unstyled flex flex-column-reverse flex-lg-row flex-wrap">
					<li className="col-12 col-lg-9">
						<ul className="" style={{ fontSize: "0.9em", lineHeight: "1.8" }}>
							<li className="">
								The Cub Cadet XT1 ST54 FAB is powered by a 24 hp KOHLER 7000
								Series twin cylinder engine.
							</li>

							<li className="">
								54-inch fabricated, 11-gauge, triple-blade deck with
								AeroForce(TM) deck design that optimizes airflow and maximizes
								suction to reduce clumping during discharge and improves bagging
								performance while delivering the pristine Cub Cadet Signature
								Cut™.
							</li>

							<li className="">
								Optimized steering system for responsive handling gives a
								16-inch turn radius a zero-turn feel.
							</li>

							<li className="">
								3-year/no hour limit warranty (includes powertrain) and 5-year
								chassis and front axle unlimited hours/limited lifetime
								fabricated deck shell.
							</li>

							<li className="">
								Ideal for mowing up 2-4 acres of mostly flat terrain and a few
								obstacles.
							</li>
						</ul>
					</li>
					<li className="col-12 col-lg-3 position-relative text-center">
						<Image
							src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw855f971f/products/Equipment/Cub-Cadet_XT1ST54_New_2000x2000_7.jpg"
							alt=""
							width={300}
							height={300}
							fit={true}
							className=""
							style={{ width: "auto", height: "100%", maxHeight: "200px" }}
						/>
					</li>
				</ul>
			</section> */}

			<a name="parts"></a>
			<section className="" id="parts-listing">
				<div className={containerCSS}>
					<PartsListing />
				</div>
			</section>

			<a id="support" name="support"></a>
			<section
				className="border-bottom border-top "
				style={{ backgroundColor: "#efefef" }}>
				<div className={`${containerCSS}`}>
					<DealerLocation />
				</div>
			</section>

			<a id="diagrams" name="diagrams"></a>
			<section className={`${containerCSS} pt-3`}>
				<Diagrams />
			</section>

			<a id="warranty" name="warranty"></a>
			<section
				className={containerCSS}
				style={{ maxWidth: "100%", padding: 0 }}>
				<Warranty />
			</section>

			<a id="how-tos" name="how-tos"></a>
			<section className="pb-3 mb-3" style={{ backgroundColor: "#e2e2e2" }}>
				<div className={containerCSS}>
					<HowTos />
				</div>
			</section>

			<a id="registration" name="registration"></a>
			<section className="border-bottom pb-2 mb-4">
				<div className={containerCSS}>
					<Registration />
				</div>
			</section>

			<a id="aandq" name="aandq"></a>
			<section className="container mb-6">
				<h2 className="h2 text-center">Answers & Questions</h2>
				<Faqs faqs={jsonData.faqs} addID="faqs-financing" className="pt-2" />
			</section>

			<section className="d-flex justify-content-center align-items-center p-8 bg-secondary">
				<div className="container d-flex flex-column align-items-center">
					<CTABlock block={jsonData.cta} />
				</div>
			</section>
		</div>
	);
};

export default Dynosite;
