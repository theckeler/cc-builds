"use client";

// import Hours from "@/components/Hours";
// import ToggleTab from "@/components/ToggleTab";

import Stars from "@/components/Stars";

import PhoneIcon from "@/components/icons/Phone";
import SupportIcon from "@/components/icons/Support";
import DirectionsIcon from "@/components/icons/Directions";
import ClockIcon from "@/components/icons/Clock";
import ContactsIcon from "@/components/icons/Contacts";

import Phone from "@/components/Phone";
import Website from "@/components/Website";
import Address from "@/components/Address";
import IconBlock from "./IconBlock";

export default function StickyMenu({ dealer }) {
	const icon = {
		style: {
			width: "48px",
			height: "48px",
			backgroundColor: "#ffc20f",
		},
		class: "rounded-circle p-1",
	};

	const icons = [
		{
			icon: <PhoneIcon style={icon.style} className={icon.class} />,
			title: "Phone",
		},
		{
			icon: <SupportIcon style={icon.style} className={icon.class} />,
			title: "Support",
		},
		{
			icon: <DirectionsIcon style={icon.style} className={icon.class} />,
			title: "Directions",
			className: "d-xl-none",
		},
		{
			icon: <ClockIcon style={icon.style} className={icon.class} />,
			title: "Hours",
		},
		{
			icon: <ContactsIcon style={icon.style} className={icon.class} />,
			title: "Contact",
		},
	];

	const navButtons = [
		{ title: "Book Service", id: "book-service" },
		{ title: "Lineup", id: "lineup" },
		{ title: "Parts & Accessories", id: "parts-accessories" },
		{ title: "Promotions", id: "promotions" },
		{ title: "Financing", id: "financing" },
		{ title: "Contact", id: "contact" },
		{ title: "Faqs", id: "faqs" },
	];

	return (
		<div
			className="align-self-start col-12 px-0 col-xl-4 list-unstyled w-100 flex flex-xl-column pt-xl-2 bg-white"
			style={{
				position: "sticky",
				bottom: 0,
				top: 0,
				zIndex: 1001,
			}}>
			<div className="p-1 border">
				<h1
					className="text-center mt-1"
					style={{ fontSize: "22px", lineHeight: 1 }}>
					{dealer.name}
				</h1>

				<ul className="p-1 mt-2 mx-auto mb-0 list-unstyled d-none d-xl-block">
					<li>
						<Stars stars={dealer.stars} />
					</li>
					<li>
						<Address address={dealer.address} />
						<Phone />
					</li>
					<li>
						<IconBlock
							block={{
								icon: (
									<DirectionsIcon style={icon.style} className={icon.class} />
								),
								title: "Directions",
							}}
						/>
					</li>
				</ul>
			</div>

			<ul
				className="list-unstyled border border-top-0 mb-0"
				style={{ backgroundColor: "#efefef", gap: "0.5em" }}>
				<li className="border-bottom">
					<button
						className="w-100 d-block border-0 text-left p-2 font-weight-bold"
						style={{ cursor: "pointer" }}
						onClick={(e) => {}}>
						Menu
					</button>
				</li>
				{navButtons.map((block, i) => (
					<li
						className={`border-bottom d-none d-xl-block ${block.className}`}
						key={i}>
						<button
							className="w-100 d-block border-0 text-left p-2 font-weight-bold"
							style={{ cursor: "pointer" }}
							onClick={(e) => {
								document
									.querySelector(`#${block.id}`)
									.scrollIntoView({ behavior: "smooth" });
							}}>
							{block.title}
						</button>
					</li>
				))}
			</ul>

			<ul
				className="flex list-unstyled border-bottom border-right border-left mb-0"
				style={{ backgroundColor: "#efefef" }}>
				{icons.map(
					(block, i) =>
						dealer.icons[i] === true && (
							<li className={`d-block ${block.className}`} key={i}>
								<IconBlock block={block} />
							</li>
						)
				)}
			</ul>
		</div>
	);
}
