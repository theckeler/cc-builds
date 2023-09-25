import CubDaysBlock from "./CubDaysBlock.js";
import XSeriesLogo from "./XSeriesLogo.js";
import Images from "./Images.js";

export default function Single() {
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
						large="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/veed3207c3f180871c2fe63844e18adc185f28147/snow-v2/Mask%20Group%2033.png"
						small="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/veed3207c3f180871c2fe63844e18adc185f28147/snow-v2/Mask%20Group%2047.png"
					/>
				</div>
				<div className="position-lg-absolute w-100 pt-4" style={{ zIndex: 11 }}>
					<div
						className="wrapper w-100 d-flex flex-column align-items-end"
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
