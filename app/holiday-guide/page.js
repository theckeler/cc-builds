import ResponsiveImage from "@/components/ResponsiveImage";
import GuideBlock from "@/components/GuideBlock";

const guide = [
	{
		href: "https://www.troybilt.com/en_US/gift-guide-2023.html#:~:text=SHOP-,SQUALL,-123R",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/holiday-guide/Troy-Bilt_Squall123R_10.jpg",
		},
		heading: "A Group Gift They’ll Fight Over",
		title: "Squall 123R Snow Blower",
		price: "$399.00",
		copy: `A compact snow blower that’s easy to handle, this single-stage model can clear snow up to 6" deep and grips the ground for minimum pushing effort with maximum clearing.`,
		button: {
			title: "Shop Squall 123R Snow Blower",
		},
	},
	{
		href: "https://www.troybilt.com/en_US/leaf-blowers/tb400-leaf-blower/41BR25BL766.html",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/holiday-guide/TB_TB400_2_2000px.jpg",
		},
		heading: "Make Leaf Cleanup a Breeze",
		title: "TB400 Leaf Blower",
		price: "$109.00",
		copy: `This light yet powerful leaf blower is easy to start and comfortable to carry and use, making yard cleanup fast and fun.`,
		button: {
			title: "Shop TB400 Leaf Blower",
		},
	},
	{
		href: "https://www.troybilt.com/en_US/gift-guide-2023.html#:~:text=fast%20and%20fun.-,SHOP,-TB400",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/holiday-guide/Troy-Bilt_TB4214_2000x2000_1.jpg",
		},
		heading: "For Trimming Trees with Ease",
		title: 'TB4214 14" Gas Chainsaw',
		price: "$149.00",
		copy: `This lightweight, compact chainsaw is perfect for trimming trees and limbs up to 12" in diameter, with an anti-vibration handle and design that makes it easy to use.`,
		button: {
			title: 'Shop TB4214 14" Gas Chainsaw',
		},
	},
	{
		href: "https://www.troybilt.com/en_US/string-trimmers/tb25cb-curved-shaft-string-trimmer/41AD25CB966.html",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/holiday-guide/41AD25CB966_TB25CB_RT.jpg",
		},
		heading: "The Tool for Trimming and Tapering Grass",
		title: "TB25CB Curved Shaft String Trimmer",
		price: "$119.99",
		copy: `This lightweight string trimmer is comfortable to use, easy to start and offers a great view of tight spots, thanks to its curved shaft.`,
		button: {
			title: "Shop TB25CB Curved Shaft String Trimmer",
		},
	},
	{
		href: "https://www.troybilt.com/en_US/push-mowers/tb16r-reel-lawn-mower/15A-3000B66.html",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/holiday-guide/Troy-Bilt_TB16R_1000x1000_2.jpg",
		},
		heading: "A Classic for the New Homeowner",
		title: "TB16R Reel Lawn Mower",
		price: "$119.99",
		copy: `An excellent choice for first-time yard tenders, this classic push lawn mower features high front wheels for maneuverability and offers nine height adjustments for that perfect cut.`,
		button: {
			title: "Shop TB16R Reel Lawn Mower",
		},
	},
	{
		href: "https://www.troybilt.com/en_US/cultivators/tb225-garden-cultivator/21BK225G766.html",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/holiday-guide/TB_TB225_1_2000px.jpg",
		},
		heading: "New Gardeners Will Dig It",
		title: "TB225 Garden Cultivator",
		price: "$229.99",
		copy: `Lightweight and easy to operate, the TB225 cultivator is perfect for weeding and loosening soil in small flower and garden beds.`,
		button: {
			title: "Shop TB225 Garden Cultivator",
		},
	},
	{
		href: "https://www.troybilt.com/en_US/cultivators/tb225-garden-cultivator/21BK225G766.html",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/holiday-guide/Troy-Bilt_TB25PS_2000x2000_1.jpg",
		},
		heading: "Put Branches Within Reach",
		title: 'TB25PS 25cc 10" Gas Pole Saw',
		price: "$219.00",
		copy: `Ideal for cutting trees and limbs up to 4" in diameter, the TB25PS gas pole saw makes it easy to trim branches with a 12' reach and lightweight design.`,
		button: {
			title: 'Shop TB25PS 25cc 10" Gas Pole Saw',
		},
	},
	{
		href: "https://www.troybilt.com/en_US/trimmerplus",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/holiday-guide/PLB-TrimmerPlus_Feature1_TrimmerPlus_desktop_492x350.jpg",
			className: "py-[3.4rem]",
			//style: { minHeight: "389.66px" },
		},
		heading: "When You Can’t Pick Just One",
		title: "TrimmerPlus Attachments",
		//price: "$219.00",
		copy: `Quickly and easily turn attachment-capable Troy-Bilt® trimmers into other handy tools, like a lawn edger, leaf blower, cultivator, pole saw, hedge trimmer or brushcutter.`,
		button: {
			title: "Shop TrimmerPlus Attachments",
		},
	},
	{
		href: "https://www.troybilt.com/en_US/trimmerplus",
		img: {
			src: "https://outdoorecommassets.sbdcdn.sbd-prod.com/ASSETS/OUTDOORECOMM/TROYBILT/holiday-guide/Troy-Bilt_Card_Flat_1023.jpg",
			className: "py-[4.3rem]",
		},
		heading: "Financing Offers Just for You",
		title: "Troy-Bilt Financing",
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
					Troy-Bilt<sup>®</sup> Holiday Gift Guide
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
			</section>
		</div>
	);
}
