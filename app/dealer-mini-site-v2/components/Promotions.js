import { Fragment } from "react";

export default function Promotions() {
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
		},
		{
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
		},
		{
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
		},
	];

	return (
		<ul className="list-unstyled flex flex-wrap">
			{promos.map(function (block, i) {
				return (
					<li key={i} className={block.span ? "border-bottom col-12" : "col-6"}>
						<div className="p-2">
							<h3>{block.title}</h3>
							<p>{block.valid}</p>
							<p>{block.subTitle}</p>

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

							<a href="#top">{block.link}</a>
						</div>
					</li>
				);
			})}
		</ul>
	);
}
