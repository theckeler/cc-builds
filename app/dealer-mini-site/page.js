import Directions from "@/components/icons/Directions";
import Hamburger from "@/components/icons/Hamburger";
import DealerInfo from "@/components/DealerInfo";
import Hours from "@/components/Hours";
import Address from "@/components/Address";
import Website from "@/components/Website";
import DealerMiniSiteOrig from "./orig";

export default function DealerMiniSite() {
	//document.querySelector("#onetrust-consent-sdk").remove;

	return (
		<DealerMiniSiteOrig />

		// <div className="mtd-page py-5">
		// 	<link
		// 		rel="stylesheet"
		// 		href="https://www.cubcadet.com/on/demandware.static/Sites-cubcadet-Site/-/en_US/v1688643386603/css/dealerHomePage.css"
		// 	/>
		// 	<section className="container py-2">
		// 		<ul className="d-flex flex-column flex-xl-row align-items-center list-unstyled w-100">
		// 			<li className="col-xl-8 px-0 pr-2">
		// 				<DealerInfo />
		// 			</li>
		// 			<li
		// 				className="col-xl-4 p-2 d-flex flex-column list-unstyled"
		// 				style={{ backgroundColor: "#efefef" }}>
		// 				<Website />
		// 				<Address />
		// 				<Hours />
		// 			</li>
		// 		</ul>
		// 	</section>

		// 	<section className="sticky-top bg-secondary">
		// 		<div className="container">
		// 			<ul className="d-flex list-unstyled align-items-center">
		// 				<li className="col-11 px-0">Worcester Sales and Service, Inc.</li>
		// 				<li className="col-1 px-0">
		// 					<button className="border-0 p-1">
		// 						<Hamburger style={{ width: "2.4em" }} />
		// 					</button>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</section>

		// 	<section
		// 		className="position-fixed bg-primary w-100 d-md-none"
		// 		style={{ bottom: 0, left: 0, zIndex: 101 }}>
		// 		<div className="container">
		// 			<ul className="d-flex list-unstyled align-items-center">
		// 				<li className="col px-0">
		// 					<button
		// 						className="border-0 p-1 w-100"
		// 						style={{ outline: 0, backgroundColor: "transparent" }}>
		// 						<Directions style={{ width: "100%", fill: "white" }} />
		// 					</button>
		// 				</li>
		// 				<li className="col px-0">
		// 					<button
		// 						className="border-0 p-1 w-100"
		// 						style={{ outline: 0, backgroundColor: "transparent" }}>
		// 						<Directions style={{ width: "100%", fill: "white" }} />
		// 					</button>
		// 				</li>
		// 				<li className="col px-0">
		// 					<button
		// 						className="border-0 p-1 w-100"
		// 						style={{ outline: 0, backgroundColor: "transparent" }}>
		// 						<Directions style={{ width: "100%", fill: "white" }} />
		// 					</button>
		// 				</li>
		// 			</ul>
		// 		</div>
		// 	</section>
		// </div>
	);
}
