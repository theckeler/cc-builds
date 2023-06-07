import Button from "./Button";

const AttchmentsAccessories = ({ jsonData }) => {
	return (
		<section>
			<div className="wrapper">
				<ul className="list-unstyled d-flex flex-column flex-md-row align-items-center px-3">
					<li className="">
						<h2 className="text-center">{jsonData.attAcc.h2}</h2>
					</li>
					<li className="ml-2">
						<a
							href={jsonData.attAcc.viewAllURL}
							className="d-block text-center">
							<u>View All</u>
						</a>
					</li>
				</ul>

				<div className="slick pl-3 pr-3">
					<ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap">
						{jsonData.attAcc.blocks.map((block, i) => {
							return (
								<li className="col-12 col-md-6 col-xl-3 p-1 d-flex" key={i}>
									<div
										className="w-100 p-2 d-flex flex-column"
										style={{ backgroundColor: "#efefef" }}>
										<img src={block.img} className="w-100" alt="" />
										<div className="mt-2">
											<strong
												className="h3"
												dangerouslySetInnerHTML={{
													__html: block.title,
												}}
												style={{ fontSize: "1.6em" }}
											/>
											<p className="mt-2">
												<b>Item#:</b> {block.item}
											</p>
											<p className="mt-2">{block.price}</p>
										</div>
										<div className="mt-auto">
											<Button
												copy="View More"
												url={block.url}
												className="bg-black text-center w-100 "
											/>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default AttchmentsAccessories;
