import { useParams, useNavigate } from "react-router-dom";

import Invoice from "./elements/Invoice";
import Button from "@/c/Button";
import getOrder from "./utilities/getOrder";

const ViewInvoice = ({ weiData }) => {
	const navigate = useNavigate();
	let { orderID } = useParams();
	const displayOrder = getOrder(orderID);

	return (
		<div className="wrapper p-4">
			<h1 className="border-bottom pb-2 mb-1">View Invoice: #{orderID}</h1>

			<ul className="list-unstyled d-flex align-items-center my-2">
				<li className="col col-sm-12 col-lg-6 pl-0">
					<Button
						copy="Customer Support"
						addClass="w-100 text-uppercase border bg-white font-weight-normal"
					/>
				</li>
				<li className="col col-sm-12 col-lg-6 pr-0">
					<Button
						copy="View All Orders"
						addClass="w-100 text-uppercase border bg-white font-weight-normal"
						addClick={() => {
							navigate("/wei/purchase-history");
						}}
					/>
				</li>
			</ul>

			{displayOrder ? (
				<Invoice {...weiData} order={displayOrder} />
			) : (
				<p>No order with that number.</p>
			)}
		</div>
	);
};

export default ViewInvoice;
