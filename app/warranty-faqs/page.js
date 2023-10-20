"use client";

import jsonData from "./home.json";

import Faqs from "@/components/Faqs";
import ResponsiveImage from "@/components/ResponsiveImage";

const WarrantyFaqs = () => {
	return (
		<div className="mtd-page">
			{/* HERO */}
			<section className="position-relative" style={{ minHeight: "400px" }}>
				<ResponsiveImage
					id="hero"
					src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/snow-blowers/31AM5HVSB56_2X26_Inteli_env02.jpg"
					alt=""
					className="h-100 w-100 position-absolute"
					style={{ objectFit: "cover", top: 0 }}
					hero
				/>
			</section>

			{/* copyBlock */}
			<section className="mt-0 mb-0 text-white bg-primary">
				<div className="container p-3 text-left text-lg-center">
					<h1 className="h1 d-block text-white">Warranty FAQs</h1>
				</div>
			</section>

			<section className="container">
				<Faqs faqs={jsonData.faqs} id="warranty-faqs" className="p-2 p-lg-4" />
			</section>
		</div>
	);
};

export default WarrantyFaqs;
