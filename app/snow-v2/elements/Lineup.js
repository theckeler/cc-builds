import ImgSwappin from "../elements/ImgSwappin";
import ResponsiveImage from "@/components/ResponsiveImage";

export default function Lineup({ imgType, block }) {
	function makeID(id) {
		return id.replace(/\s+/g, "-", "-").replace(/\d+/g, "").toLowerCase();
	}

	return (
		<>
			<ImgSwappin
				imgType={imgType}
				res={
					<ResponsiveImage id={makeID(block.title)} src={block.img} alt="" />
				}
				// orig={
				// 	<img
				// 		src="https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw5cb54c82/products/Equipment/Cub-Cadet_3X_30HD_3.jpg"
				// 		alt=""
				// 	/>
				// }
			/>
			<strong className="text-xl mb-1">{block.title}</strong>
			<p className="copy">{block.copy}</p>
			<div className="font-bold text-center uppercase text-base">
				Engineered for
			</div>

			<ul className="grid gap-2 grid-cols-3 h-full mt-1">
				{block.engFor.map((block, i) => (
					<li
						className="grid gap-2 grid-rows-[minmax(2rem)_1fr_minmax(2rem)] items-center"
						key={i}>
						<div
							className="text-sm font-bold text-center self-start"
							dangerouslySetInnerHTML={{
								__html: block.title,
							}}
						/>
						<div className="flex items-center justify-center px-2 pt-2">
							<ImgSwappin
								imgType={imgType}
								res={
									<ResponsiveImage
										id={makeID(block.title)}
										src={block.img}
										alt=""
									/>
								}
								// orig={
								// 	<img
								// 		src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/v939bc9acaff6adfd88f97d4f5008d7921824fb15/snow-v2/icon-snowfall-up-23.svg"
								// 		alt=""
								// 		className="icon"
								// 	/>
								// }
								className="w-full h-full"
							/>
						</div>
						<div className="mt-auto">
							<div
								className="mt-2 text-center text-xs"
								dangerouslySetInnerHTML={{
									__html: block.copy,
								}}
							/>
						</div>
					</li>
				))}
			</ul>

			<div className="mt-auto w-full">
				<a
					href="https://www.cubcadet.com/en_US/snow-blowers/three-stage-snow-blowers"
					className="text-white px-3 py-2 bg-black w-full block text-center mt-3 no-underline uppercase font-bold">
					{block.button.copy}
				</a>
			</div>
		</>
	);
}
