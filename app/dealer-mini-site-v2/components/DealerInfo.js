"use client";
import Badges from "@/components/dealers/Badges";
import ResponsiveImage from "@/components/ResponsiveImage";

export default function DealerInfo({ dealer }) {
	const hasBadges = dealer.badges.some((x) => x === true);

	return (
		<ul className="list-unstyled mb-0">
			<li
				className="px-0 position-relative overflow-hidden"
				style={{
					overflow: "hidden",
					minHeight: "300px",
				}}>
				<ResponsiveImage
					className="position-absolute w-100 h-100"
					alt=""
					hero={true}
					src={
						dealer.img?.src
							? dealer.img.src
							: "https://www.cubcadet.com/on/demandware.static/-/Sites/default/dw14470f46/images/stores/heros/store-hero-default.png"
					}
					fill
					style={{
						objectFit: "cover",
					}}
				/>
			</li>
			<li>
				<ul className="w-100 list-unstyled mb-0 flex flex-column flex-md-row">
					<li
						className={`px-0 h-100 w-100 border flex position-relative ${
							hasBadges === true && "col-12 col-md-6"
						}`}
						style={{
							minHeight: "240px",
						}}>
						<img
							src={dealer.logo}
							className="w-100 h-100 position-absolute p-4"
							style={{
								objectFit: "contain",
							}}
							alt=""
						/>
					</li>
					{hasBadges === true && (
						<li
							className="px-0 h-100 w-100 border flex col-12 col-md-6 align-items-center"
							style={{
								minHeight: "240px",
							}}>
							<Badges badges={dealer.badges} />
						</li>
					)}
				</ul>
			</li>
		</ul>
	);
}
