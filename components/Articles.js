import ImgCopyBlockStacked from "./ImgCopyBlockStacked";

const Articles = ({ articles, className, numRows, imgType = null }) => {
	return (
		<section className={className}>
			<div className="wrapper">
				<ul className="list-unstyled d-flex flex-column flex-md-row align-items-center px-3">
					<li>
						<h2 className="text-center">
							{typeof articles.h2 !== undefined && articles.h2}
						</h2>
					</li>
					<li className="ml-2">
						<a href={articles.viewAllURL} className="d-block text-center">
							<u>View All</u>
						</a>
					</li>
				</ul>

				<div className="slick pl-3 pr-3">
					<ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap">
						{articles.blocks.map((block, i) => {
							let schemea = {
								"@context": "https://schema.org",
								"@type": "NewsArticle",
								headline: block.title,
								image: [block.img],
							};

							return (
								<li
									className={`col-sm-12 col-md-${
										12 / numRows
									} p-1 d-flex flex-column`}
									key={i}>
									<ImgCopyBlockStacked
										imgType={imgType}
										{...{ block }}
										className="p-2 h-100"
										style={{ backgroundColor: "#efefef" }}
									/>
									<script
										type="application/ld+json"
										dangerouslySetInnerHTML={{
											__html: JSON.stringify(schemea),
										}}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Articles;
