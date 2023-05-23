import jsonData from "./data.json";

import Faqs from "@/c/Faqs";
import CTABlock from "@/c/CTABlock";
import PartsListing from "@/c/PartsListing";
import DealerLocation from "@/c/DealerLocation";
import Diagrams from "@/c/Diagrams";
import Warranty from "@/c/Warranty";
import HowTos from "@/c/HowTos";
import Registration from "@/c/Registration";
import Button from "@/c/Button";

import Image from "next/image";

const Dynosite = () => {
	const containerCSS = "container mb-3 pb-3 border-bottom";
	const buttonCSS =
		"ml-auto btn bg-secondary d-flex align-items-center justify-content-center p-1 ";

	return (
		<div className="mtd-page product-dyno-results">
			<section className={`overflow-auto w-100 sticky-top bg-white pt-2`}>
				<ul className="container d-flex align-items-center list-unstyled mb-0">
					<li className="pr-2">
						<h1 className="mb-0 pr-1" style={{ fontSize: "2.5em" }}>
							XT1 ST54
						</h1>
					</li>
					<li className="ml-auto">
						<Button
							url="#parts"
							copy="Menu ▿"
							addClass={buttonCSS}
							style={{}}
						/>
						<ul className="list-unstyled flex flex-column flex-lg-row w-100 d-none">
							<li className="mb-1 mr-lg-1 mb-lg-0">
								<Button
									url="#parts"
									copy="Buy Parts"
									addClass={buttonCSS}
									style={{}}
								/>
							</li>
							<li className="mb-1 mr-lg-1 mb-lg-0">
								<Button
									url="#support"
									copy="Dealer Support"
									addClass={buttonCSS}
								/>
							</li>
							<li className="mb-1 mr-lg-1 mb-lg-0">
								<Button url="#diagrams" copy="Diagrams" addClass={buttonCSS} />
							</li>
							<li className="mb-1 mr-lg-1 mb-lg-0">
								<Button url="#warranty" copy="Warranty" addClass={buttonCSS} />
							</li>
							<li className="mb-1 mr-lg-1 mb-lg-0">
								<Button url="#how-tos" copy="How-Tos" addClass={buttonCSS} />
							</li>
							<li>
								<Button
									url="#registration"
									copy="Registration"
									addClass={buttonCSS}
								/>
							</li>
						</ul>
					</li>
				</ul>
				<div className="border-bottom mb-1 pb-2 d-none">
					<div className="container" style={{ fontSize: "0.7em" }}>
						For Model(s)#: 13AQA2CM010, 13AQA2CM011, 13AQA2CM012, 13AQA2CM014,
						13AQA2CM018, 13AQA2CM010, 13AQA2CM011, 13AQA2CM012, 13AQA2CM014,
						13AQA2CM018, 13AQA2CM010, 13AQA2CM011, 13AQA2CM012, 13AQA2CM014,
						13AQA2CM018, 13AQA2CM010, 13AQA2CM011, 13AQA2CM012, 13AQA2CM014,
						13AQA2CM018, 13AQA2CM010, 13AQA2CM011, 13AQA2CM012, 13AQA2CM014,
						13AQA2CM018
					</div>
				</div>
			</section>

			<section className={`mt-2 ${containerCSS}`}>
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
							fit
							className=""
							style={{ width: "auto", height: "100%", maxHeight: "200px" }}
						/>
					</li>
				</ul>
			</section>

			<a id="parts" name="parts"></a>
			<section className={containerCSS}>
				<PartsListing />
			</section>

			<a id="support" name="support"></a>
			<section className={containerCSS}>
				<DealerLocation />
			</section>
			<a id="diagrams" name="diagrams"></a>
			<section className={containerCSS}>
				<Diagrams />
			</section>

			<a id="warranty" name="warranty"></a>
			<section
				className={containerCSS}
				style={{ maxWidth: "100%", padding: 0 }}>
				<Warranty />
			</section>

			<a id="how-tos" name="how-tos"></a>
			<section className="" style={{ backgroundColor: "#e2e2e2" }}>
				<div className={containerCSS}>
					<HowTos />
				</div>
			</section>

			<a id="registration" name="registration"></a>
			<section className={containerCSS}>
				<Registration />
			</section>

			<section className="container">
				<h2 className="h2 text-center">Answers & Questions</h2>
				<Faqs faqs={jsonData.faqs} addID="faqs-financing" />
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
