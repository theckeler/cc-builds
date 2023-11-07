import ButtonMain from "@/components/Buttons/Main";

export default function Promotions({ className }) {
	const promos = [
		{
			span: true,
			title: "Equip Expo Show Product Giveaway 2023",
			subTitle: "Offer Valid at Show Only",
			valid:
				"Valid 10/18/2023, 9:00 a.m. to 5:00 p.m. – 10/19/2023, 9:00 a.m. to 4:00 p.m. EST",
			offerDetails: [
				"NO PURCHASE NECESSARY TO ENTER OR WIN.",
				"Enter between October 18, 2023, 9:00 a.m. to 5:00 p.m. and October 19, 2023, 9:00 a.m. to 4:00 p.m. Eastern Time.",
				`For Official Rules go <a href="https://www.cubcadet.com/s/cubcadet/en_US/cub-cadet-equipment-expo-2023-official-rules.html">here</a>`,
			],
			link: "TERMS & CONDITIONS",
			button: {
				title: "Shop Now",
				href: "/shop/",
				className:
					"flex justify-content-center align-items-center bg-secondary border-0 px-2 font-weight-bold mt-4 text-decoration-none text-uppercase",
				style: { fontSize: "16px" },
			},
		},
		{
			title: "Military Member Rebate",
			subTitle:
				"Current and former military members are eligible for a rebate up to $500 on the purchase of select PRO products.",
			valid: "Valid 11/01/2022 - 10/31/2023",
			offerDetails: [
				"A one-time $300 Military Appreciation Rebate may be applied to (1) PRO Z™ 100 Series, (1) PRO Z™ HW 300 Series or (1) ZTX™ purchase.",
				"A one-time $500 Military Appreciation Rebate may be applied to (1) PRO Z™ 500, 700 or 900 Series or (1) PRO X™ Series purchase.",
				`Upon verification, approved Military Appreciation Rebates will be mailed, as an American Express® gift card, to the address submitted by the consumer.`,
				`Cannot be combined with any other offer, demo or promotion.`,
			],
			link: "TERMS & CONDITIONS",
		},
		{
			title: "Fleet Discount Program",
			subTitle:
				"Professional landscape contractors are eligible for fleet discounts up to 27%.",
			valid: "Valid 11/01/2022 - 10/31/2023",
			offerDetails: [
				"Fleet pricing (25% off) is earned when a 20-point minimum value of product is purchased.",
				"Super Fleet pricing (27% off) is provided when a 50-point minimum value of product is purchased.",
				`PRO Z 972 SD Zero-Turn = 5 points; PRO Z 500 / 700 / 900 Zero-Turn = 10 points, PRO X Stand-On = 10 points, Hydro Walk-Behind Mower = 10 Points, PRO Z 100 = 5 points, ZTX6 = 5 points.`,
				`Cannot be combined with any other offer or promotion.`,
			],
			link: "TERMS & CONDITIONS",
		},
	];

	return (
		<ul
			className={`list-unstyled grid grid-cols-1 md:grid-cols-2 gap-3 ${className}`}
			style={
				{
					//display: "grid",
					//gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
					//gap: "1em",
				}
			}>
			{promos.map(function (block, i) {
				return (
					<li
						key={i}
						className={block.span ? "col-span-1 md:col-span-full" : ""}>
						<div
							className="h-100 p-4 flex flex-col items-center"
							style={{ backgroundColor: "rgb(239, 239, 239)" }}>
							<h3 className="w-100 text-center" style={{ fontSize: "24px" }}>
								{block.title}
							</h3>
							<hr
								className="border-t w-50"
								style={{ borderColor: "#ffc20f", borderWidth: "0.25em" }}
							/>
							<p className="text-center">{block.valid}</p>
							<p className="text-center">{block.subTitle}</p>

							<div className="card-body">
								<h3 style={{ fontSize: "18px" }}>Offer Details</h3>
								<ul>
									{block.offerDetails.map(function (detail, i) {
										return (
											<li
												style={{ listStyle: "inside" }}
												key={i}
												dangerouslySetInnerHTML={{
													__html: detail,
												}}
											/>
										);
									})}
								</ul>
							</div>

							<a href="#top" className="mt-auto">
								{block.link}
							</a>
							{!!block.button && (
								<ButtonMain
									title={block.button.title}
									href={block.button.href}
									className={block.button.className}
									style={block.button.style}
								/>
							)}
						</div>
					</li>
				);
			})}
		</ul>
	);
}
