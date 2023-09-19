"use client";
import { useState, useEffect } from "react";

// import extraCSS from "./css/main.css";
import mainJSON from "./data/main.json";

import ToggleTab from "@/components/ToggleTab";
import StickyMenu from "./components/StickyMenu";
import Phone from "@/components/Phone";
import Website from "@/components/Website";
import Address from "@/components/Address";
import Social from "@/components/Social";
import DealerInfo from "./components/DealerInfo";
import Menu from "./components/Menu";
import Faqs from "@/components/Faqs";

export default function DealerMiniSite() {
	let dealer = mainJSON.dealers;
	const [currentDealer, setCurrentDealer] = useState(0);

	return (
		<>
			<Menu
				setCurrentDealer={setCurrentDealer}
				button={{
					style: { outline: 0, minWidth: "48px", minHeight: "48px" },
					className: "bg-secondary border-0 mr-1 mb-1 w-100",
				}}
			/>

			<div className="list-unstyled mtd-page py-2 mx-0 mx-lg-auto py-xl-5 container px-0 d-flex flex-column flex-column-reverse flex-xl-row">
				<StickyMenu dealer={dealer[currentDealer]} />

				<div
					className="col-12 col-xl-8 px-0 px-xl-2 pt-xl-2 align-self-start"
					style={{ minHeight: "1000vh" }}>
					<ul className="list-unstyled d-flex flex-column-reverse flex-lg-row border">
						<li className="col-12 col-lg-6 px-0">
							<DealerInfo dealer={dealer[currentDealer]} />
						</li>
						<li className="col-12 col-lg-6 px-0">
							<div
								className="position-relative"
								style={{
									height: "400px",
									overflow: "hidden",
								}}>
								<img
									src="https://www.cubcadet.com/on/demandware.static/-/Sites/default/dw14470f46/images/stores/heros/store-hero-default.png"
									style={{
										height: "100%",
										width: "100%",
										objectFit: "cover",
										objectPosition: "center",
									}}
									alt=""
								/>
							</div>
						</li>
					</ul>

					<ToggleTab
						className="mt-2 border p-2"
						component={<div>{dealer[currentDealer].name}</div>}
						id="lineup"
						title={`${dealer[currentDealer].name}'s Product Lineup`}
					/>

					<ToggleTab
						className="mt-2 border p-2"
						component={<div>Promos</div>}
						id="promotions"
						title="Promotions"
					/>

					<ToggleTab
						className="mt-2 border p-2"
						component={
							<div className="">
								<Phone />
								<Website
									style={{
										fontSize: "22px",
										fontWeight: "bold",
										display: "block",
									}}
								/>
								<Address address={dealer[currentDealer].address} />
								<Social className="mt-2" />
							</div>
						}
						id="contact"
						title="Contact"
					/>

					<ToggleTab
						className="mt-2 border p-2"
						component={<Faqs faqs={mainJSON.faqs} />}
						id="faqs"
						title="FAQs"
					/>
				</div>
			</div>
		</>
	);
}
