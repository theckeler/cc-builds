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
		// {
		// 	icon: <DirectionsIcon style={icon.style} className={icon.class} />,
		// 	title: "Directions",
		// },
		{
			icon: <ClockIcon style={icon.style} className={icon.class} />,
			title: "Hours",
		},
		{
			icon: <ContactsIcon style={icon.style} className={icon.class} />,
			title: "Contact",
		},
	];

	return (
		<div
			className="align-self-start col-12 px-0 col-xl-4 list-unstyled w-100 flex flex-xl-column pt-xl-2"
			style={{
				position: "sticky",
				bottom: 0,
				top: 0,
				zIndex: 1001,
				// maxHeight: "50vh",
				// minHeight: "50vh",
			}}>
			<div className="p-1 border">
				<h1
					className="text-center mt-1"
					style={{ fontSize: "22px", lineHeight: 1 }}>
					{dealer.name}
				</h1>
				<Stars stars={dealer.stars} />

				<ul className="p-1 mt-2 mx-auto mb-0 list-unstyled d-flex">
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
				className="flex list-unstyled border-bottom border-right border-left mb-0"
				style={{ backgroundColor: "#efefef" }}>
				{icons.map(
					(block, i) =>
						dealer.icons[i] === true && (
							<li className="d-block" key={i}>
								<IconBlock block={block} />
							</li>
						)
				)}
			</ul>
		</div>
	);
}
