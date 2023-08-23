"use client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Button from "@/components/Button";

import ServiceNotification from "./elements/ServiceNotification";

const MyProducts = ({ weiData }) => {
	const [dragId, setDragId] = useState();
	const [orderBoxes, setOrderBoxes] = useState([...weiData.myProducts]);
	const navigate = useNavigate();

	useEffect(() => {
		let sortUpdate = [];
		weiData.myProducts.forEach((myProduct, i) => {
			sortUpdate.push({ ...myProduct, order: i, id: `sort-box-${i}` });
		});
		setOrderBoxes(sortUpdate);
	}, [weiData.myProducts]);

	const handleDrag = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragId(e.currentTarget.id);
	};

	const handleDrop = (e) => {
		const dragBox = orderBoxes.find((box) => box.id === dragId);
		const dropBox = orderBoxes.find((box) => box.id === e.currentTarget.id);

		const dragBoxOrder = dragBox.order;
		const dropBoxOrder = dropBox.order;

		const newBoxState = orderBoxes.map((box) => {
			if (box.id === dragId) {
				box.order = dropBoxOrder;
			}
			if (box.id === e.currentTarget.id) {
				box.order = dragBoxOrder;
			}
			return box;
		});
		newBoxState.sort((a, b) => a.order - b.order);
		setOrderBoxes(newBoxState);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	// useEffect(() => {
	//   console.log("orderBoxes: ", orderBoxes);
	// }, [orderBoxes]);

	var serviceDate = new Date();
	serviceDate.setMonth(serviceDate.getMonth() + 3);

	return (
		<div className="wrapper p-3">
			<h1 className="mb-4 border-bottom pb-2 mb-2">My Products</h1>
			<ul className="list-unstyled d-flex flex-wrap">
				{orderBoxes.map((product, i) => {
					return (
						<li
							className="col col-sm-12 col-lg-4 mb-4"
							key={i}
							id={product.id}
							onDrag={handleDrag}
							onDrop={handleDrop}
							onDragOver={handleDragOver}
							draggable="true">
							<ul className="list-unstyled d-flex flex-column border bg-white h-100">
								<li className="bg-grey-dark-2 d-flex">
									<ul className="list-unstyled d-flex align-items-center w-100 p-1">
										<li className="col col-lg-1 px-0 cursor-grab">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 48 48"
												width="100%"
												height="100%">
												<path
													d="M17.5 40q-1.45 0-2.475-1.025Q14 37.95 14 36.5q0-1.45 1.025-2.475Q16.05 33 17.5 33q1.45 0 2.475 1.025Q21 35.05 21 36.5q0 1.45-1.025 2.475Q18.95 40 17.5 40Zm13 0q-1.45 0-2.475-1.025Q27 37.95 27 36.5q0-1.45 1.025-2.475Q29.05 33 30.5 33q1.45 0 2.475 1.025Q34 35.05 34 36.5q0 1.45-1.025 2.475Q31.95 40 30.5 40Zm-13-12.5q-1.45 0-2.475-1.025Q14 25.45 14 24q0-1.45 1.025-2.475Q16.05 20.5 17.5 20.5q1.45 0 2.475 1.025Q21 22.55 21 24q0 1.45-1.025 2.475Q18.95 27.5 17.5 27.5Zm13 0q-1.45 0-2.475-1.025Q27 25.45 27 24q0-1.45 1.025-2.475Q29.05 20.5 30.5 20.5q1.45 0 2.475 1.025Q34 22.55 34 24q0 1.45-1.025 2.475Q31.95 27.5 30.5 27.5ZM17.5 15q-1.45 0-2.475-1.025Q14 12.95 14 11.5q0-1.45 1.025-2.475Q16.05 8 17.5 8q1.45 0 2.475 1.025Q21 10.05 21 11.5q0 1.45-1.025 2.475Q18.95 15 17.5 15Zm13 0q-1.45 0-2.475-1.025Q27 12.95 27 11.5q0-1.45 1.025-2.475Q29.05 8 30.5 8q1.45 0 2.475 1.025Q34 10.05 34 11.5q0 1.45-1.025 2.475Q31.95 15 30.5 15Z"
													fill="#ffc20f"
												/>
											</svg>
										</li>
										<li className="col col-lg-10 font-weight-bold text-uppercase">
											<span style={{ color: "#ffc20f" }}>
												{product.product}
											</span>
										</li>
										<li className="ml-auto col col-lg-1 px-0">
											<button className="bg-none w-100 p-0">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 48 48"
													width="100%"
													height="100%">
													<path
														d="M13.05 42q-1.25 0-2.125-.875T10.05 39V10.5H8v-3h9.4V6h13.2v1.5H40v3h-2.05V39q0 1.2-.9 2.1-.9.9-2.1.9Zm21.9-31.5h-21.9V39h21.9Zm-16.6 24.2h3V14.75h-3Zm8.3 0h3V14.75h-3Zm-13.6-24.2V39Z"
														fill="#ffc20f"
													/>
												</svg>
											</button>
										</li>
									</ul>
								</li>
								<li className="p-1">
									<ul className="list-unstyled d-flex">
										<li className="col-sm-5 p-0">
											<img
												src={product.img}
												alt=""
												className="w-100 border p-1"
											/>
										</li>
										<li className="col-sm-7 pt-0 pr-0 pb-0">
											<a
												href="#top"
												className="small d-block border p-1 text-decoration-none text-center">
												Shop Parts
											</a>
											<a
												href="#top"
												className="small d-block border p-1 text-decoration-none text-center mt-1">
												Attachments & Accessories
											</a>
											<a
												href="#top"
												className="small d-block border p-1 text-decoration-none text-center mt-1">
												Specs & Maintence
											</a>
											<a
												href="#top"
												className="small d-block border p-1 text-decoration-none text-center mt-1">
												Docs & Guides
											</a>
											<a
												href="#top"
												className="small d-block border p-1 text-decoration-none text-center mt-1">
												Find Service
											</a>
										</li>
									</ul>
								</li>
								{!!product.service && (
									<li>
										<ServiceNotification
											{...{ product }}
											title={product.product}
										/>
									</li>
								)}
								{!!product.serviceHistory && (
									<li>
										<div className="border p-1 m-1">
											<p className="text-uppercase small mb-1">
												Service records for {product.product}:
											</p>
											<button
												className="button font-weight-bold undefined small w-100 mb-1 border"
												onClick={() => {
													navigate("/wei/service-records");
												}}>
												Feb 22, 2021
											</button>
											<button
												className="button font-weight-bold undefined small w-100 border"
												onClick={() => {
													navigate("/wei/service-records");
												}}>
												Nov 2, 2019
											</button>
										</div>
									</li>
								)}
								{!!product.toubleTicket && (
									<li>
										<div className="border p-1 m-1">
											<p className="text-uppercase small mb-1">
												Trouble tickets for {product.product}:
											</p>
											<button
												className="button font-weight-bold undefined small w-100 mb-1 border"
												onClick={() => {
													navigate("/wei/service-records");
												}}>
												Dec 10, 2016
											</button>
										</div>
									</li>
								)}
								{!!product.warranty && (
									<li>
										<div className="border p-1 m-1">
											<p className="text-uppercase small mb-1 text-center">
												<img
													src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v1d5f49f5a13f1eba170bf9f8624abecd5fbcf8a0/images/ew/ew-logo.svg"
													alt=""
													className="w-25"
												/>
											</p>
											<button
												className="button font-weight-bold undefined small w-100 mb-1 border"
												onClick={() => {
													navigate("/wei/service-records");
												}}>
												Purchase Warranty
											</button>
										</div>
									</li>
								)}
							</ul>
						</li>
					);
				})}
				<li className="col col-sm-12 col-lg-4 mb-4" id="sort-box-1">
					<ul className="list-unstyled d-flex flex-column border bg-white h-100">
						<li className="bg-grey-dark-2 d-flex align-items-center">
							<ul className="list-unstyled d-flex align-items-center w-100 p-1">
								<li className="col col-lg-10">
									<strong>Add Item</strong>
								</li>
								<li className="ml-auto col col-lg-1 px-0">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 48 48"
										width="100%"
										height="100%">
										<path
											d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h19.7v3H9v30h30V19.3h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm7.05-7.85v-3H32v3Zm0-6.35v-3H32v3Zm0-6.35v-3H32v3ZM34.6 17.8v-4.4h-4.4v-3h4.4V6h3v4.4H42v3h-4.4v4.4Z"
											fill="#fff"
										/>
									</svg>
								</li>
							</ul>
						</li>
						<li className="p-1">
							<input
								className="w-100 p-1 border"
								placeholder="Search Model Number"
							/>
							<input
								type="submit"
								className="w-100 p-1 mt-1 button"
								value="Add Product"
							/>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};

export default MyProducts;
