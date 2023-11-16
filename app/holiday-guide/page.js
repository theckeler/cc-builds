import ResponsiveImage from "@/components/ResponsiveImage";
import GuideBlock from "@/components/GuideBlock";

const guide = [
	{
		href: "https://www.cubcadet.com/en_US/all-snow-blowers/1x-21inch-lhp-snow-blower/31PM2T6C710.html",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/holiday-guide/Cub-Cadet-1X_21LHP_1.jpg",
			id: "LHP-Snow-Blower",
		},
		//heading: "A Group Gift They’ll Fight Over",
		title: '1X™ 21" LHP Snow Blower',
		price: "$799.00",
		copy: `Compact and powerful, the 1X 21 in. 208cc Gas Single-Stage Snow Blower with Remote Chute Control and Headlight can tackle up to 6 in.of snow†. A 13 in. intake height is designed to clear small driveways or sidewalks quickly.`,
		button: {
			title: 'Shop 1X™ 21" LHP Snow Blower',
		},
	},
	{
		href: "https://www.cubcadet.com/en_US/snow-blowers/2x-26inch-intellipower-snow-blower%C2%A0/31AM5HVSB10.html",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/holiday-guide/Cub-Cadet_2X26_IP_11.jpg",
			id: "IntelliPOWER-Blower",
		},
		//heading: "Make Leaf Cleanup a Breeze",
		title: '2X™ 26" IntelliPOWER® Snow Blower',
		price: "$1,299.00",
		copy: `Tackle winter weather with this 2X 26 in. 243cc Gas Two-Stage Snow Blower with IntelliPOWER® Engine engineered to take on up to 12 in. of snow†. IntelliPOWER® technology is designed to deliver consistent power in heavy, deep, and wet snow conditions.`,
		button: {
			title: 'Shop 2X™ 26" IntelliPOWER® Snow Blower',
		},
	},
	{
		href: "https://www.cubcadet.com/en_US/snow-blowers/2x-26inch-trac-intellipower-snow-blower/31AH7IVSB10.html",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/holiday-guide/Cub-Cadet_2X26Trac_IP_2.jpg",
			id: "TRAC-Blower",
		},
		//heading: "For Trimming Trees with Ease",
		title: '2X™ 26" TRAC IntelliPOWER® Snow Blower',
		price: "$1,999.00",
		copy: `Tackle winter weather with this 2X 26 in. TRAC 272cc Gas Two-Stage Snow Blower with IntelliPOWER® Engine and Track Drive engineered to take on up to 12 in. of snow†. Equipped with track drive designed for traction on slopes, inclines, and gravel driveways.`,
		button: {
			title: 'Shop 2X™ 26" TRAC IntelliPOWER® Snow Blower',
		},
	},
	{
		href: "https://www.cubcadet.com/en_US/snow-blowers/3x-26inch-intellipower-snow-blower%C2%A0/31AH5JVAB10.html",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/holiday-guide/Cub-Cadet_3X26IP_11.jpg",
			id: "IntelliPOWER-26-Blower",
		},
		//heading: "The Tool for Trimming and Tapering Grass",
		title: '3X™ 26" IntelliPOWER® Snow Blower',
		price: "$1,699.00",
		copy: `Take down the wall of winter with this 3X 26 in. 357cc Gas Three-Stage Snow Blower with IntelliPOWER® Engine design. IntelliPOWER® technology is engineered to deliver consistent power in heavy, deep, and wet snow conditions.`,
		button: {
			title: 'Shop 3X™ 26" IntelliPOWER® Snow Blower',
		},
	},
	{
		href: "https://www.cubcadet.com/en_US/riding-mower-accessories/fastattach-all-season-plow-blade/19A30037100.html",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/holiday-guide/19A30037100.jpg",
			id: "FastAttach-Blade",
		},
		//heading: "A Classic for the New Homeowner",
		title: "FastAttach® All-Season Plow Blade",
		price: "$459.99",
		copy: `Add versatility to your XT Enduro Series tractor with the FastAttach™ Connection System. Simply align, latch and lock. No tools required!`,
		button: {
			title: "Shop FastAttach® All-Season Plow Blade",
		},
	},
	{
		href: "https://www.cubcadet.com/en_US/self-propelled-mowers/sc300k/12AVB2KL710.html",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/holiday-guide/Cub-Cadet_SC300K_5.jpg",
			id: "Self-propelled-mower-SC300K",
		},
		//heading: "New Gardeners Will Dig It",
		title: "SC300K Self-propelled Mower",
		price: "$579.00",
		copy: `Designed to help you navigate uneven terrain with ease thanks to front-wheel drive with single lever drive contro`,
		button: {
			title: "Shop SC300K Self-propelled mower",
		},
	},
	{
		href: "https://www.cubcadet.com/en_US/self-propelled-mowers/sc500k/12AVP2KL710.html",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/holiday-guide/Cub-Cadet_SC500K_6.jpg",
			id: "Self-propelled-mower-SC500K",
		},
		//heading: "Put Branches Within Reach",
		title: "SC500K Self-propelled Mower",
		price: "$679.00",
		copy: `Rear-wheel drive with dual lever control allows you to navigate uneven terrain with either hand`,
		button: {
			title: "Shop SC500K Self-propelled mower",
		},
	},
	{
		href: "https://www.cubcadet.com/en_US/self-propelled-mowers/sc300b/12AVB2R3710.html",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/holiday-guide/Cub-Cadet_SC300B_4.jpg",
			id: "Self-propelled-mower-SC300B",
		},
		//heading: "When You Can’t Pick Just One",
		price: "$499.00",
		title: "SC300B Self-propelled Mower",
		copy: `Designed to help you navigate uneven terrain with ease thanks to front-wheel drive with single lever drive control.`,
		button: {
			title: "Shop SC300B Self-propelled mower",
		},
	},
	{
		href: "https://www.cubcadet.com/en_US/financing",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/holiday-guide/cub-cadet-credit-card.png",
			className: "py-[4.3rem]",
			id: "Cub-Cadet-Financing",
		},
		//heading: "Financing Offers Just for You",
		title: "Cub Cadet Financing",
		//price: "$219.00",
		copy: `Get special financing on online purchases of new Troy-Bilt equipment, parts and accessories with the Troy-Bilt credit card. Restrictions apply.`,
		button: {
			title: "Learn More",
		},
	},
];

export default function HolidayGuide({}) {
	return (
		<div id="sdb-container">
			<section className="overflow-hidden bg-black">
				<div className="relative h-96">
					<ResponsiveImage
						src="https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/CUBCADET/holiday-guide/3x-hero-lg.jpg"
						alt=""
						id="hero"
						hero
						//className="w-full h-full absolute top-0 left-0 object-cover"
						className="w-full h-full object-cover object-center"
					/>
				</div>
			</section>

			<section className="bg-secondary">
				<h1
					className="container text-center mb-0 text-uppercase px-2 py-4"
					style={{ fontSize: "2.125rem" }}>
					Cub Cadet<sup>®</sup> Holiday Gift Guide
				</h1>
			</section>

			<section className="container mt-4">
				<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
					{guide.map((block, i) => {
						return (
							<li className="bg-[#efefef]" key={i}>
								<GuideBlock {...block} />
							</li>
						);
					})}
				</ul>
				<p className="mt-2 text-xs font-bold text-center">
					†Results may vary depending on weather and snow conditions
				</p>
			</section>
		</div>
	);
}
