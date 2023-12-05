import ImgCopyBlockStacked from "../@/components/ImgCopyBlockStacked";
import CTABlock from "../@/components/CTABlock";
import Pluses from "../@/components/Pluses";

const Footer = ({ indexData }) => {
	return (
		<div className="snow-v2 snow-v2-index">
			<section className="bg-black d-flex flex-column p-3 p-md-9">
				<Pluses
					className="top d-none d-lg-block"
					num="9"
					addCSS={{
						top: "2.5rem",
						left: "2.5rem",
						position: "absolute",
						maxWidth: "6.25rem",
					}}
				/>
				<div className="wrapper p-2 p-md-9 max-width-1000 text-center">
					<CTABlock block={indexData.ctaBlock} />
				</div>
				<Pluses
					className="bottom d-none d-lg-block"
					num="6"
					addCSS={{
						bottom: "2.5rem",
						right: "2.5rem",
						position: "absolute",
						maxWidth: "6.25rem",
					}}
				/>
			</section>

			<section className="pt-6">
				<div className="wrapper">
					<h2 className="px-3">{indexData.howTo.h2}</h2>
					<div className="slick pl-3 pr-3">
						<ul className="list-unstyled row">
							{indexData.howTo.blocks.map((block, i) => {
								return (
									<li
										className="col-sm-12 col-md-4 p-1 d-flex flex-column"
										key={i}>
										<ImgCopyBlockStacked {...{ block }} />
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</section>

			<section className="pb-6">
				<div className="wrapper">
					<h2 className="px-3">{indexData.snowArticles.h2}</h2>
					<div className="slick pl-3 pr-3">
						<ul className="list-unstyled row">
							{indexData.snowArticles.blocks.map((block, i) => {
								return (
									<li
										className="col-sm-12 col-md-4 p-1 d-flex flex-column"
										key={i}>
										<ImgCopyBlockStacked {...{ block }} />
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</section>

			<section className="section-11">
				<div className="wrapper">
					<h2 className="px-3">{indexData.attAcc.h2}</h2>
					<div className="slick pl-3 pr-3">
						<ul className="list-unstyled row">
							{indexData.attAcc.blocks.map((block, i) => {
								return (
									<li
										className="col-12 col-sm-12 col-md-3 p-1 d-flex flex-column"
										key={i}>
										<a href={block.url} className="d-flex flex-column">
											<img src={block.img} alt="" />
											<div className="content d-flex flex-column p-3">
												<strong
													className="title"
													dangerouslySetInnerHTML={{
														__html: block.title,
													}}
												/>
												<p className="copy mt-2">
													<b>Item#:</b> {block.item}
												</p>
												<p className="price mt-2">{block.price}</p>
												<button className="bg-black py-2 px-5 border-0">
													View More
												</button>
											</div>
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Footer;
