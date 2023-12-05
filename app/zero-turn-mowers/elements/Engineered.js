import ImgCover from "../@/components/ImgCover";
import Pluses from "../@/components/Pluses";

const Engineered = ({ indexData }) => {
	return (
		<section className="d-flex flex-column">
			<div
				className="position-relative mx-auto"
				style={{
					zIndex: "1001",
					maxWidth: "600px",
				}}>
				<img src={indexData.engineeredFor.img} alt="" className="w-100" />
			</div>

			<div
				className="position-relative bg-black"
				style={{
					height: "18rem",
					marginTop: "-12rem",
				}}>
				<ImgCover
					importData={{
						img: "https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/veed3207c3f180871c2fe63844e18adc185f28147/snow-v2/ProductHighlight_1600x1000.jpg",
					}}
					objectDesktopPos="top"
					maxWidth="80rem"
				/>
				<Pluses
					className="top d-none d-lg-block"
					num="9"
					svgFill="#fff"
					addCSS={{
						top: "2.5rem",
						left: "2.5rem",
						position: "absolute",
						maxWidth: "6.25rem",
					}}
				/>
			</div>

			<div className="bg-black pb-3">
				<div className="wrapper max-width-1000 px-md-0 p-lg-7">
					<h2 className="h4 text-uppercase pb-2 mx-4 border-bottom mb-3 text-center fs-6">
						{indexData.engineeredFor.title}
					</h2>
					<ul className="row list-unstyled p-1" style={{ minHeight: "220px" }}>
						{indexData.engineeredFor.blocks.map((block, i) => {
							return (
								<li key={i} className="flex-column col col-4 text-center">
									<div>
										<strong className="text-uppercase">{block.title}</strong>
										<div
											className="d-flex justify-content-center align-items-center p-3"
											style={{ height: "120px" }}>
											<img
												src={block.img}
												alt=""
												className="w-100 h-100"
												style={{
													filter: "invert(1)",
													maxWidth: "160px",
												}}
											/>
										</div>
										<p
											dangerouslySetInnerHTML={{
												__html: block.copy,
											}}
											style={{ marginTop: "auto" }}
										/>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				<Pluses
					className="bottom d-none d-lg-block"
					num="6"
					svgFill="#fff"
					addCSS={{
						bottom: "2.5rem",
						right: "2.5rem",
						position: "absolute",
						maxWidth: "6.25rem",
					}}
				/>
			</div>
		</section>
	);
};

export default Engineered;
