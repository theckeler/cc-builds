export default function FinancingCard({ plansData }) {
	return (
		<div className="flo">
			{plansData &&
				plansData.map((block, i) => {
					return (
						<div className="card-container" key={i}>
							<div className="card flex flex-col h-full">
								<div className="card-body flex flex-col">
									<div className="front">
										<h3 className="card-title">
											{block.term} <span>months</span>
										</h3>
									</div>
									<div className="back h-full flex flex-col">
										<h4
											className="card-title"
											dangerouslySetInnerHTML={{ __html: block.title }}
										/>
										{!!block.text && (
											<p
												className="card-text"
												dangerouslySetInnerHTML={{ __html: block.text }}
											/>
										)}
										{!!block.fee && (
											<p
												className="card-text font-bold"
												dangerouslySetInnerHTML={{ __html: block.fee }}
											/>
										)}
										<p
											className="card-text"
											dangerouslySetInnerHTML={{
												__html: block.minPurchase,
											}}
										/>
										<p className="card-text">
											Valid from:{" "}
											<span>
												{block.validFrom} - {block.validTo}
											</span>
										</p>
										<a
											className="btn-text mt-auto"
											data-target="#financing-modal"
											data-toggle="modal"
											href="#"
											title={block.detailText}>
											{block.detailText}
										</a>
										<a
											className="btn btn-primary btn-sm"
											href={block.buttonHref}
											title={block.buttonTitle}>
											{block.buttonTitle}
										</a>
									</div>
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
}
