import React, { useState } from "react";

import Button from "@/components/Button";
import ListBlock from "./elements/ListBlock";

const MyProducts = ({ weiData }) => {
	const resetButtons = () => {
		document.querySelectorAll(".order-info").forEach(function (el) {
			el.classList.remove("hide");
		});
		document.querySelectorAll(".filter-buttons button").forEach(function (el) {
			el.classList.remove("active");
		});
	};

	const [whichList, setWhichList] = useState(0);

	return (
		<div className="wrapper p-3 mt-4">
			<h1>My Lists</h1>

			<ul className="list-unstyled d-flex mt-3">
				<li className="col-9 p-0 border-top">
					{weiData.myLists[whichList].map((product, i) => {
						return <ListBlock {...product} key={i} />;
					})}
				</li>
				<li className="col-3 pl-2">
					<ul className="list-unstyled d-flex flex-column align-items-center filter-buttons border mt-0 pt-0">
						<li className="col p-1">
							<Button
								copy="Main List"
								className="w-100 text-uppercase border active "
								onClick={(e) => {
									resetButtons();
									e.target.classList.add("active");
									setWhichList(0);
								}}
							/>
						</li>
						<li className="col p-1">
							<Button
								copy="Second List"
								className="w-100 text-uppercase border"
								onClick={(e) => {
									resetButtons();
									e.target.classList.add("active");
									setWhichList(1);
								}}
							/>
						</li>
						<li className="col pt-0 pr-1 pb-1 pl-1">
							<Button
								copy="Create a New List"
								className="w-100 text-uppercase border mt-1"
								onClick={(e) => {
									resetButtons();
									e.target.classList.add("active");
								}}
							/>
						</li>
					</ul>
				</li>
			</ul>

			<ul className="list-unstyled d-flex"></ul>
		</div>
	);
};

export default MyProducts;
