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
			width: "36px",
			height: "36px",
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
		<ul
			className="align-self-start col-12 px-0 col-xl-4 list-unstyled w-100 flex flex-xl-column bg-white border border-bottom-0 border-left-0 border-right-0 border-xl-bottom-1"
			style={{
				position: "sticky",
				bottom: 0,
				top: 0,
				zIndex: 1001,
			}}>
			<li className="col-3 col-xl-12 p-1 pt-0" style={{ flex: "0 1 auto" }}>
				<h1
					className="text-center mt-1"
					style={{
						fontSize: "22px",
						lineHeight: 1,
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
					}}>
					{dealer.name}
				</h1>

				<ul className="mx-auto mb-0 list-unstyled d-none d-xl-block">
					<li>
						<Stars stars={dealer.stars} />
					</li>
					<li className="text-center mt-1">
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
			</li>

			<li
				className=""
				style={{
					flex: "1 1 auto",
					//backgroundColor: "#efefef",
					gap: "0.5em",
				}}>
				<ul className="list-unstyled mb-0">
					<li className="">
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
			</li>

			<li className="">
				<ul
					className="flex list-unstyled mb-0"
					style={{
						flex: "1 1 auto",
						//backgroundColor: "#efefef"
					}}>
					{icons.map(
						(block, i) =>
							dealer.icons[i] === true && (
								<li className={`d-block ${block.className}`} key={i}>
									<IconBlock block={block} />
								</li>
							)
					)}
				</ul>
			</li>
		</ul>
	);
}
