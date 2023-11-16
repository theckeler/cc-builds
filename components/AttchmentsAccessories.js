import Button from "./Button";
import ResponsiveImage from "@/components/ResponsiveImage";

const AttchmentsAccessories = ({ className, attAcc }) => {
	return (
		<section className={className}>
			<ul className="flex flex-col lg:flex-row items-center">
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
									<p
										className="text-lg font-bold mb-0"
										dangerouslySetInnerHTML={{
											__html: block.title,
										}}
									/>
									<p className="mb-0">
										<strong>Item#:</strong> {block.item}
									</p>

									<div
										className=""
										itemProp="offers"
										itemScope=""
										itemType="http://schema.org/Offer">
										<div className="flex">
											<meta itemProp="priceCurrency" content="USD" />
											<span className="sales">
												<span
													className="value"
													itemProp="price"
													content="132.99"
												/>
												<span className="sr-only">From</span>
												<span className="font-bold text-lg">{block.price}</span>
											</span>
											<span className="sr-only">MSRP</span>
											<div className="ml-1 relative group">
												<div className="h-4 w-4 bg-yellow-500 rounded-full flex items-center justify-center text-xs">
													?
												</div>
												<span
													className="hidden absolute min-w-[12rem] group-hover:block bg-neutral-800 text-white p-2 bottom-full -left-2/4 shadow mb-2"
													data-toggle="tooltip"
													title="">
													<div>
														Manufacturer’s buy online price. Taxes are
														additional and vary by location. Freight, setup,
														delivery, PDI, and other dealer specific charges are
														not included in the pricing and vary by dealer.
														Prices shown are in U.S dollars and valid only in
														the United States.
													</div>
													<div className="absolute top-full text-neutral-800 -ml-6">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															viewBox="0 -960 960 960"
															className="w-12 h-12 -mt-5">
															<path d="M480-360 280-560h400L480-360Z" />
														</svg>
													</div>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="mt-auto text-center px-4">
									<Button
										copy="View More"
										url={block.url}
										className="btn btn-secondary w-full mt-4"
										addPadding={{ padding: "0.9375rem 1.5625rem" }}
									/>
									{/* <button
												class="add-to-cart-tile btn btn-secondary"
												data-pid={block.item}
												data-add-to-cart-url="/on/demandware.store/Sites-cubcadet-Site/en_US/Cart-AddProduct"
												// data-gtmdata='{"id":"31AH8DVSB10","name":"2X 30\" MAX™ Snow Blower","productType":"WholeGood"}'
											>
												Add to Cart
											</button> */}
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default AttchmentsAccessories;
