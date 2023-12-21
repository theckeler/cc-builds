"use client";
import { useState, useEffect } from "react";

export default function Dealer({}) {
	const [dealers, setDealerInfo] = useState([
		{
			id: "lorem",
			name: "Lorem ipsum dolor sit amet, Inc.",
			address: "34200 Duis leo",
			city: "Duis",
			state: "OH",
			zip: "23434",
			miles: "22",
			checked: true,
		},
		{
			id: "aenean",
			name: "Aenean convallis nunc quis quam lobortis feugiat, Inc.",
			address: "23 pellentesque nunc pellentesque eu",
			city: "Pharetra",
			state: "OH",
			zip: "34234",
			miles: "32",
			checked: false,
		},
		{
			id: "nam",
			name: "Nam convallis, Inc.",
			address: "3 Donec nec purus",
			city: "Aliquam",
			state: "OH",
			zip: "23231",
			miles: "23",
			checked: false,
		},
	]);

	// useEffect(() => {
	// 	// Update the document title using the browser API
	// 	console.log("useEffect:", dealers);
	// });

	const changeDealer = (e) => {
		setDealerInfo(
			dealers.map((block, i) => ({
				...block,
				checked: Number(e.currentTarget.dataset.id) === i ? true : false,
			}))
		);
	};

	const editDealer = (e, whichID) => {
		document.querySelectorAll(".dealer-button").forEach(function (e) {
			e.classList.remove("bg-secondary");
		});
		e.currentTarget.classList.toggle("bg-secondary");

		document.querySelectorAll(".dealer-edit").forEach(function (e) {
			e.classList.add("d-none");
		});
		document.querySelector(`#${whichID}`).classList.remove("d-none");
	};

	return (
		<div>
			<h6 className="mb-2">You're shopping available inventory from</h6>
			<ul className="list-unstyled">
				{dealers.map((block, i) => {
					return (
						<li key={i} className="position-relative mb-1">
							<ul
								className="list-unstyled d-flex align-items-center dealer p-1"
								style={{
									backgroundColor: block.checked ? "#ffc20f" : "#ebebeb",
								}}>
								<li className="mr-2">
									<input
										type="radio"
										id={block.id}
										name="dealer"
										data-id={i}
										value="1"
										checked={block.checked}
										className="p-1"
										style={{
											appearance: "none",
											backgroundColor: block.checked ? "#000" : "#bfbfbf",
											//border: "1px solid #ddd",
										}}
										onClick={(e) => {
											changeDealer(e);
										}}
									/>
								</li>
								<li className="flex-fill">
									<ul className="list-unstyled flex align-items-center w-100">
										<li className="pr-1 flex-grow-1">
											<ul className="list-unstyled dealer-info-wrap">
												<li className="font-bold" style={{ fontSize: "1.1em" }}>
													{block.name}
												</li>
												<li style={{ fontSize: "0.8em" }}>{block.address}</li>
												<li style={{ fontSize: "0.8em" }}>
													{block.city}, {block.state} {block.zip}
												</li>
											</ul>
										</li>
										<li
											className="ml-auto flex-shrink-1"
											style={{ fontSize: "0.8em" }}>
											{block.miles} Miles
										</li>
									</ul>
								</li>
							</ul>
							<label
								htmlFor={block.id}
								className="position-absolute w-100 h-100"
								style={{
									left: 0,
									top: 0,
									cursor: "pointer",
									//backgroundColor: "#efefef",
									zIndex: 0,
								}}
							/>
						</li>
					);
				})}
			</ul>

			<ul className="list-unstyled flex align-items-center w-100 mb-1">
				<li className="col-6 px-0 border-right">
					<button
						className="w-100 btn p-1 dealer-button"
						style={{
							backgroundColor: "#e1e1e1",
							fontSize: "0.8em",
							//fontWeight: "normal",
						}}
						onClick={(e) => {
							editDealer(e, "change-dealer");
						}}>
						Change Dealers
					</button>
				</li>
				<li className="col-6 px-0">
					<button
						className="w-100 btn p-1 dealer-button"
						style={{
							backgroundColor: "#e1e1e1",
							fontSize: "0.8em",
							//fontWeight: "normal",
						}}
						onClick={(e) => {
							editDealer(e, "change-delivery");
						}}>
						Change Delivery
					</button>
				</li>
			</ul>

			<div
				className="d-none dealer-edit mb-2"
				id="change-dealer"
				style={{ backgroundColor: "#ebebeb" }}>
				<ul className="list-unstyled d-flex align-items-center p-2 mb-0">
					<li className="flex-shrink-1 mr-1 font-bold">Find a Dealer: </li>
					<li className="flex-fill">
						<div className="input-group w-100">
							<input
								type="text"
								value="44107"
								id="zip"
								className="form-control"
								placeholder="Zipcode"
								aria-label="Enter your Zipcode"
								style={{ fontSize: "13px" }}
							/>
							<span className="input-group-append">
								<button
									className="btn position-relative text-white bg-primary"
									style={{
										paddingTop: ".5em",
										paddingBottom: ".5em",
										borderTopLeftRadius: 0,
										borderBottomLeftRadius: 0,
										zIndex: 0,
										borderColor: "#d1d3d4",
									}}
									type="button"
									id="button-addon2"
									onClick={(e) => {
										e.preventDefault();
									}}>
									Change
								</button>
							</span>
						</div>
					</li>
				</ul>
			</div>

			<div
				className="d-none dealer-edit mb-2"
				id="change-delivery"
				style={{ backgroundColor: "#ebebeb" }}>
				<ul className="list-unstyled d-flex align-items-center p-2 mb-0">
					<li className="flex-shrink-1 mr-1 font-bold">Delivering to: </li>
					<li className="flex-fill">
						<div className="input-group w-100">
							<input
								type="text"
								value="44107"
								id="zip"
								className="form-control"
								placeholder="Zipcode"
								aria-label="Enter your Zipcode"
								style={{ fontSize: "13px" }}
							/>
							<span className="input-group-append">
								<button
									className="btn position-relative text-white bg-primary"
									style={{
										paddingTop: ".5em",
										paddingBottom: ".5em",
										borderTopLeftRadius: 0,
										borderBottomLeftRadius: 0,
										zIndex: 0,
										borderColor: "#d1d3d4",
									}}
									type="button"
									id="button-addon2"
									onClick={(e) => {
										e.preventDefault();
									}}>
									Change
								</button>
							</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
