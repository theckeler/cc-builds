"use client";
import Badges from "@/components/dealers/Badges";

export default function DealerInfo({ dealer }) {
	//const hasBadges = typeof dealer.badges !== "undefined";
	// const hasBadges = dealer.badges.map((x) => {
	// 	x === true ? true : false;
	// });
	const hasBadges = dealer.badges.some((x) => x === true);

	return (
		<ul className="list-unstyled d-flex align-items-center flex-lg-column h-100">
			<li
				className="px-0 w-100 border"
				style={{ height: hasBadges === true ? "60%" : "100%" }}>
				<div
					className="position-relative w-100 d-flex align-items-center"
					style={{
						minHeight: "120px",
						height: "100%",
						overflow: "hidden",
					}}>
					<img
						src={dealer.logo}
						className="w-100 h-100 position-absolute p-4"
						style={{
							objectFit: "contain",
						}}
						alt=""
					/>
				</div>
			</li>
			{hasBadges === true && (
				<li
					className="px-0 border border-top-0 w-100"
					style={{ height: "40%" }}>
					<Badges badges={dealer.badges} />
				</li>
			)}
		</ul>
	);
}
