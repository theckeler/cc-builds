import jsonData from "./data.json";
import FinancingBlock from "./FinancingBlock";

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
							<FinancingBlock block={block} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}
