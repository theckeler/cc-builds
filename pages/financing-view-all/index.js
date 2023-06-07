import Image from "next/image";
import Faqs from "@/c/Faqs";
import jsonData from "./data.json";

const Financing = () => {
	const containerCSS = "container mb-3 pb-3 border-bottom";
	const buttonCSS =
		"ml-auto btn bg-secondary d-flex align-items-center justify-content-center p-1 ";

	return (
		<div className="">
			<section
				className="p-2 px-lg-3 py-lg-5"
				style={{ backgroundColor: "#e2e2e2" }}>
				<ul className="container d-flex flex-column flex-lg-row-reverse list-unstyled">
					<li className="p-lg-4">
						<Image
							alt="Cub Cadet Credit Card"
							src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v2d2985a90f92210137904004bd415f8c604159aa/financing-view-all/cub-cadet-credit-card.png"
							width={400}
							height={251}
							className="w-100 h-auto"
						/>
					</li>
					<li className="p-lg-2 mt-3 mt-lg-0">
						<h1 className="h1">Exceptional Financing Offers Available</h1>
						<p>
							The strength of Cub Cadet products is enough to convince you to
							buy. But to help you make the purchase, we're offering incredible
							financing opportunities.
						</p>
						<p>
							<strong>
								Select financing options available online. To see a complete
								list of financing options, please see below or at your local
								dealer. Qualifying product purchase subject to credit approval.
							</strong>
						</p>
						<a
							className="btn btn-primary d-block d-lg-inline-block"
							href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&horizontalView=true&isForm=true&rid=dealers"
							title="Find a dealer">
							Find a dealer
						</a>
					</li>
				</ul>
			</section>

			<section className="">
				<div className="bg-secondary p-2 p-lg-4">
					<h2 className="text-uppercase text-center">Online Financing</h2>
				</div>
				<div className="container">
					<Faqs faqs={jsonData.online} id="faqs-financing" className="p-2 p-lg-4" />
				</div>
				<div className="bg-secondary p-2 p-lg-4">
					<h2 className="text-uppercase text-center">
						IN-STORE FINANCING (TD BANK)
					</h2>
				</div>
				<div className="container">
					<Faqs faqs={jsonData.inStore} id="faqs-financing" className="p-2 p-lg-4" />
				</div>
				<div className="bg-secondary p-2 p-lg-4">
					<h2 className="text-uppercase text-center">
						IN-STORE FINANCING (SHEFFIELD FINANCIAL)
					</h2>
				</div>
				<div className="container">
					<Faqs
						faqs={jsonData.inStoreSheffield}
						id="faqs-financing"
						className="p-2 p-lg-4"
					/>
				</div>
				<div className="bg-secondary p-2 p-lg-4">
					<h2 className="text-uppercase text-center">
						IN-STORE STANDARD FINANCING (SHEFFIELD FINANCIAL)
					</h2>
				</div>
				<div className="container">
					<Faqs
						faqs={jsonData.inStoreStandardSheffield}
						id="faqs-financing"
						className="p-2 p-lg-4"
					/>
				</div>
				<div className="bg-secondary p-2 p-lg-4">
					<h2 className="text-uppercase text-center">
						IN-STORE UTILITY VEHICLE FINANCING (TD BANK)
					</h2>
				</div>
				<div className="container">
					<Faqs
						faqs={jsonData.inStoreUVTDBank}
						id="faqs-financing"
						className="p-2 p-lg-4"
					/>
				</div>
				<div className="bg-secondary p-2 p-lg-4">
					<h2 className="text-uppercase text-center">
						IN-STORE UTILITY VEHICLE FINANCING (SHEFFIELD FINANCIAL)
					</h2>
				</div>
				<div className="container">
					<Faqs
						faqs={jsonData.inStoreUVSheffield}
						id="faqs-financing"
						className="p-2 p-lg-4"
					/>
				</div>
			</section>
		</div>
	);
};

export default Financing;
