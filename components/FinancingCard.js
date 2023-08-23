// "use client";
// import { useState, useEffect } from "react";

// import data from "../data/plans.json";

const FinancingCard = ({ plansData }) => {
	return (
		<div className="flo">
			{plansData &&
				plansData.map((block, i) => {
					return (
						<div className="card-container" key={i}>
							<div className="card">
								<div className="card-body">
									<div className="front">
										<h3 className="card-title">
											{block.term} <span>months</span>
										</h3>
									</div>
									<div className="back">
										<h4
											className="card-title"
											dangerouslySetInnerHTML={{
												__html: block.title,
											}}
										/>

										<p
											className="card-text"
											dangerouslySetInnerHTML={{
												__html: block.text,
											}}
										/>
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
											className="btn-text"
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
};

export default FinancingCard;
