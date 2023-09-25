import ButtonMain from "@/components/Buttons/Main.js";
import IconCubDays from "./logo.js";

export default function CubDaysBlock({ className, style }) {
	return (
		<div
			className="w-100 w-xl-400 bg-black text-center rounded-bottom overflow-hidden"
			style={style}>
			<IconCubDays />
			<div className="bg-black text-lg-white py-2 px-4 w-lg-500">
				<h2 className="text-uppercase" style={{ fontSize: "22px" }}>
					Prepare For Winter
				</h2>
				<p className="" style={{ fontSize: "16px" }}>
					Don’t wait for winter to arrive, prepare for your extreme during Cub
					Cadet® Days now through October 28, 2023, take $100 off select
					single-stage, 2-stage, and 3-stage models.
				</p>
				{/* <small className="mb-0 pl-4" style={{ fontSize: "10px" }}>
								*Restrictions apply. Visit your local retailer or click to learn
								more for{" "}
								<a
									href="https://www.cubcadet.com/en_US/seasonal-offers.html"
									style={{ fontSize: "10px", color: "#fff" }}>
									complete details
								</a>
								.
							</small> */}

				<div className="mt-3 mb-1">
					<ButtonMain
						href="https://www.cubcadet.com/en_US/seasonal-offers.html"
						className="border-0 bg-secondary px-4 font-bold text-uppercase"
						title="See Details"
					/>
				</div>
			</div>
		</div>
	);
}
