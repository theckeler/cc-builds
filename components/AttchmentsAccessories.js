import Button from "./Button";
import ResponsiveImage from "@/components/ResponsiveImage";

const AttchmentsAccessories = ({ attAcc }) => {
	return (
		<section>
			<div className="">
				<ul className="flex items-center">
					<li>
						<h2 className="text-center text-3xl">
							{typeof attAcc.h2 !== undefined && attAcc.h2}
						</h2>
					</li>
					<li className="ml-2">
						<a href={attAcc.viewAllURL} className="d-block text-center">
							<u>View All</u>
						</a>
					</li>
				</ul>

				<div className="">
					<ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
						{attAcc.blocks.map((block, i) => {
							return (
								<li key={i}>
									<div className="p-1" style={{ backgroundColor: "#efefef" }}>
										<div className="relative min-h-[20rem]">
											<ResponsiveImage
												src={block.img}
												className="absolute w-full h-full object-cover"
												alt=""
												id={block.title.replace(/\s+/g, "-").toLowerCase()}
											/>
										</div>
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
												className="bg-primary text-white text-center w-100 "
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
