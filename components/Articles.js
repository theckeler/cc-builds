import ImgCopyBlockStacked from "./ImgCopyBlockStacked";
export default function Articles({
	articles,
	className,
	numRows,
	imgType = null,
}) {
	return (
		<section className={className}>
			<div className="">
				<ul className="flex items-center">
					<li>
						<h2 className="text-center text-3xl">
							{typeof articles.h2 !== undefined && articles.h2}
						</h2>
					</li>
					<li>
						<a href={articles.viewAllURL} className="ml-2">
							<u>View All</u>
						</a>
					</li>
				</ul>

				<div className="">
					<ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
						{articles.blocks.map((block, i) => {
							let schemea = {
								"@context": "https://schema.org",
								"@type": "NewsArticle",
								headline: block.title,
								image: [block.img],
							};

							return (
								<li key={i}>
									<ImgCopyBlockStacked
										imgType={imgType}
										{...{ block }}
										className="p-1 h-100"
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
}
