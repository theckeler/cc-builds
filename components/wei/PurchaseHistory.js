import Button from "@/c/Button";
import OrderBlock from "./elements/OrderBlock";

const MyProducts = (weiData) => {
	const resetButtons = () => {
		document.querySelectorAll(".order-info").forEach(function (el) {
			el.classList.remove("hide");
		});
		document.querySelectorAll(".filter-buttons button").forEach(function (el) {
			el.classList.remove("active");
		});
	};

	return (
		<div className="wrapper p-3">
			<h1>Purchase History</h1>

			<ul className="list-unstyled d-flex align-items-center my-2 filter-buttons border-bottom pb-2 mb-2">
				<li className="col text-center pl-0">
					<Button
						copy="All Orders"
						className="w-100 text-uppercase border active"
						onClick={(e) => {
							resetButtons();
							e.target.classList.add("active");
						}}
					/>
				</li>
				<li className="col text-center">
					<Button
						copy="Dealer Orders"
						className="w-100 text-uppercase border"
						style={{ border: "1px solid #000" }}
						onClick={(e) => {
							resetButtons();
							document
								.querySelectorAll(".online-order, .cancelled-order")
								.forEach(function (el) {
									el.classList.add("hide");
								});
							e.target.classList.add("active");
						}}
					/>
				</li>
				<li className="col text-center pr-0">
					<Button
						copy="Cancelled Orders"
						className="w-100 text-uppercase border"
						onClick={(e) => {
							resetButtons();
							document
								.querySelectorAll(".online-order, .dealer-order")
								.forEach(function (el) {
									el.classList.add("hide");
								});
							e.target.classList.add("active");
						}}
					/>
				</li>
			</ul>

			<OrderBlock {...weiData} />
		</div>
	);
};

export default MyProducts;
