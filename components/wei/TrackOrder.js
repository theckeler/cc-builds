import { useParams, useNavigate } from "react-router-dom";

import TrackBlock from "./elements/TrackBlock";
import Button from "@/c/Button";
import getOrder from "./utilities/getOrder";

const TrackOrder = ({ weiData }) => {
	const navigate = useNavigate();
	let { orderID } = useParams();
	const displayOrder = getOrder(orderID);

	return (
		<div className="wrapper p-3">
			<h1 className="border-bottom pb-2 mb-1">Track Order: #{orderID}</h1>

			<ul className="list-unstyled d-flex align-items-center mb-2">
				<li className="col col-sm-12 col-lg-6">
					<Button
						copy="Customer Support"
						className="w-100 text-uppercase border bg-white font-weight-normal"
					/>
				</li>
				<li className="col col-sm-12 col-lg-6">
					<Button
						copy="View All Orders"
						className="w-100 text-uppercase border bg-white font-weight-normal"
						onClick={() => {
							navigate("/wei/purchase-history");
						}}
					/>
				</li>
			</ul>

			{displayOrder ? (
				<TrackBlock {...weiData} order={displayOrder} />
			) : (
				<p>No order with that number.</p>
			)}
		</div>
	);
};

export default TrackOrder;
