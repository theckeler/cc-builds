import jsonData from "./data.json";
// import FinancingBlock from "./FinancingBlock";

export default function DealerHomePromos() {
	//console.log(jsonData);

	return (
		<div className="container">
			<h4 className="h4 text-center mb-3" style={{ fontSize: "2.2rem" }}>
				Current Promos
			</h4>
			<ul className="list-unstyled d-lg-flex">
				{jsonData.map((block, i) => {
					return (
						<li className="col-lg-4 mb-1" key={i}>
							<div className="border h-100 bg-secondary d-flex flex-column">
								<ul
									className="list-unstyled text-center p-2"
									style={{ backgroundColor: "#efefef" }}>
									<li className="display-1" style={{ fontSize: "68px" }}>
										{block.term}
									</li>
									<li className="display-4">months</li>
								</ul>
								<ul className="list-unstyled px-2 pt-2">
									<li
										className="text-center font-bold mb-1"
										style={{ fontSize: "1.5em" }}
										dangerouslySetInnerHTML={{
											__html: block.title,
										}}
									/>
									<li className="">
										<ul className="mx-auto" style={{ fontSize: "1.1em" }}>
											{block.list.map((item, i) => {
												return (
													<li
														key={i}
														dangerouslySetInnerHTML={{
															__html: item,
														}}
													/>
												);
											})}
										</ul>
									</li>
								</ul>
								<ul className="mt-auto list-unstyled pt-1 pb-2 px-6">
									<li className="pt-1 text-center">
										<a
											class="td-payment-details btn-text"
											data-title="Details &amp; Disclosures"
											data-url="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/FinancingApplication-Disclosure"
											href="javascript:void(0)"
											tabindex="0">
											Click for Details
										</a>
									</li>
									<li className="text-center mt-1">
										<a
											class="btn btn-primary w-100 w-lg-auto"
											href="https://finance.consumercreditapp.com/cc/landing/cub_cadet"
											tabindex="0">
											Apply Now
										</a>
									</li>
								</ul>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
