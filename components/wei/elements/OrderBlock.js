"use client";
import { useNavigate } from "react-router-dom";

import Button from "../@/components/Button";

const AccountForm = ({ weiData }) => {
	const navigate = useNavigate();
	let ulClass = "list-unstyled d-flex p-2";

	return (
		<>
			{weiData.orders.map((order, i) => {
				return (
					<ul
						className={`list-unstyled d-flex flex-column border order-info mt-3 ${order.type}-order`}
						key={i}>
						<li className="d-flex flex-column bg-grey-dark-2 p-1">
							<ul className="list-unstyled d-flex align-items-center">
								<li className="col col-sm-12 col-lg-2 border-right text-center">
									Order Date
									<p className="mb-0">{order.date}</p>
								</li>
								<li className="col col-sm-12 col-lg-2 text-center">
									Total
									<p className="mb-0">${order.total}</p>
								</li>
								{order.type === "cancelled" && (
									<li className="col col-sm-12 col-lg-3 text-center">
										<strong className="h3">Cancelled Order</strong>
									</li>
								)}
								<li className="col col-sm-12 col-lg-3 text-center ml-auto">
									Order #{order.orderNum}
									<p className="mt-1 py-1 mb-0">
										<a
											href="#top"
											className="text-white bg-black d-block small border p-1 text-decoration-none"
											onClick={(e) => {
												e.preventDefault();
												navigate(`/wei/invoice/${order.orderNum}`);
											}}>
											View Invoice
										</a>
									</p>
								</li>
							</ul>
						</li>
						<li>
							<ul className="list-unstyled d-flex border">
								<li className="col col-sm-12 col-lg-9 border-right">
									{order.products.map((product, i) => {
										if (i >= 0 && i < order.products.length - 1) {
											ulClass = "list-unstyled d-flex p-2 border-bottom";
										} else {
											ulClass = "list-unstyled d-flex p-2";
										}
										return (
											<ul className={ulClass} key={i}>
												<li className="col col-sm-12 col-lg-2">
													<img
														src={product.img}
														alt=""
														className="w-100 border p-1"
													/>
												</li>
												<li className="col col-sm-12 col-lg-10">
													<p className="h3">{product.product}</p>
													<p className="small">{product.copy}</p>
													<ul className="list-unstyled d-flex align-items-center">
														{product.buttons.map((button, i) => {
															return (
																<li
																	className="col text-center text-uppercase p-1"
																	key={i}>
																	<a
																		href="#top"
																		className="small d-block border p-1 text-decoration-none">
																		{button.title}
																	</a>
																</li>
															);
														})}
													</ul>
												</li>
											</ul>
										);
									})}
								</li>
								<li className="col col-sm-12 col-lg-3 d-flex flex-column">
									{order.type === "dealer" ? (
										<>
											<ul className="row row-column list-unstyled p-1 mb-2 justify-content-center">
												<li className="text-center">Dealer Info:</li>
												<li className="text-center">{order.dealer.name}</li>
												<li className="text-center">{order.dealer.address}</li>
											</ul>
											<Button
												copy="Contact Dealer"
												className="w-100 text-uppercase border bg-white mt-auto font-weight-normal"
												onClick={() => {
													navigate(`/wei/contact-dealer/${order.orderNum}`);
												}}
											/>
											<Button
												copy="Track Order"
												className="w-100 text-uppercase border bg-white mt-1 font-weight-normal"
												onClick={() => {
													navigate(`/wei/track-order/${order.orderNum}`);
												}}
											/>
											<Button
												copy="Write Dealer Review"
												className="w-100 text-uppercase border bg-white mt-1 mb-1 font-weight-normal"
												onClick={() => {
													navigate(`/wei/dealer-review/${order.orderNum}`);
												}}
											/>
										</>
									) : (
										<>
											{order.type !== "cancelled" && (
												<Button
													copy="Track Package"
													className="w-100 text-uppercase border bg-white mb-1 mt-2 font-weight-normal"
													onClick={() => {
														navigate(`/wei/track-order/${order.orderNum}`);
													}}
												/>
											)}
										</>
									)}
									<Button
										copy="Customer Support"
										className="w-100 text-uppercase border bg-white font-weight-normal mt-auto mb-2"
									/>
								</li>
							</ul>
						</li>
					</ul>
				);
			})}
		</>
	);
};

export default AccountForm;
