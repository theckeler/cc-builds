// "use client";
// import { useState, useEffect } from "react";

// import data from "../data/plans.json";

const FinancingCard = ({ plansData }) => {
	return (
		<div className="flo">
			{plansData &&
				plansData.map((block, i) => {
					const title = { __html: block.title };
					const text = { __html: block.text };
					const minPurchase = { __html: block.minPurchase };
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
											dangerouslySetInnerHTML={title}></h4>
										{/* <p className="card-text" dangerouslySetInnerHTML={text}></p> */}
										<p
											className="card-text"
											dangerouslySetInnerHTML={minPurchase}></p>
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
