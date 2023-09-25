import CubDaysBlock from "./CubDaysBlock.js";
import XSeriesLogo from "./XSeriesLogo.js";
import Images from "./Images.js";

export default function SnowBlowers() {
	return (
		<div className="mtd-page">
			<section className="section-1 hero d-flex flex-column position-relative">
				<div
					className="position-relative"
					style={{ minHeight: "600px", overflow: "hidden" }}>
					<div
						className="position-absolute w-100 d-flex flex-column align-items-end d-lg-none"
						style={{
							bottom: "20px",
						}}>
						<XSeriesLogo
							style={{
								maxWidth: "400px",
								zIndex: 1,
							}}
							className="bg-primary p-4"
						/>
					</div>
					<Images
						small="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vde16d024a27b8e0c81e1c6e963f0a6bf041c9496/snow-v2/31AM5HVSB56_2X26_Inteli_env02.jpg"
						large="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/vde16d024a27b8e0c81e1c6e963f0a6bf041c9496/snow-v2/31AM5HVSB56_2X26_Inteli_env02.jpg"
					/>
				</div>
				<div
					className="wrapper position-lg-absolute top-xl-20"
					style={{ zIndex: 11 }}>
					<div
						className=" w-100 d-flex flex-column align-items-end"
						style={{
							bottom: "20px",
						}}>
						<CubDaysBlock />

						<XSeriesLogo
							style={{
								maxWidth: "400px",
							}}
							className="bg-primary p-4 d-none d-lg-block mt-2"
						/>
					</div>
				</div>
			</section>
		</div>
	);
}
