import { useState, useEffect } from "react";

const FinancingCard = () => {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		console.log("useEffect");
		setLoading(true);
		fetch("https://api.npoint.io/5db3a089ce8afefb4f23")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});
		//console.log("data:", data);
	}, []);

	console.log("data:", data);
	return (
		<div className="flo">
			{data &&
				data.map((block, i) => {
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
											href={block.button.href}
											title="Apply Now">
											{block.button.title}
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
