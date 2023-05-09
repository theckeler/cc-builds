import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../@/c/Button";
import ServiceNotification from "@/c/ServiceNotification";

const Menu = ({ loggedIn, logIn, logOut, closeMenu }) => {
	const navigate = useNavigate();

	return (
		<div className="menu d-flex flex-column " style={{ minHeight: "40vh" }}>
			<ul className="list-unstyled d-flex flex-column">
				<li className="bg-black p-3 title d-flex flex-column">
					<Button
						copy="&#10005;"
						addClass="menu-close bg-yellow d-inline-block rounded-circle p-0 d-flex ml-auto font-weight-bold border-0"
						addClick={closeMenu}
					/>
				</li>
				<li className="bg-black px-2 py-1 d-flex-xxl-column d-flex align-items-center pb-3">
					{loggedIn === 1 ? (
						<>
							<h2 className="h1 pt-1">Joe Schmo</h2>
							<Button
								copy="Logout"
								addClass="ml-auto bg-yellow border-0"
								addClick={logOut}
							/>
						</>
					) : (
						<h2 className="h1 pt-1">Sign In:</h2>
					)}
				</li>
				{loggedIn === 1 && (
					<>
						<li className="px-0 py-0 d-flex flex-column">
							<Button
								copy="Manage Account &gt;"
								addClass="w-100 text-left font-weight-normal text-capitalize bg-yellow border-0"
								addClick={() => {
									closeMenu();
									navigate("/wei/manage-account");
								}}
							/>
						</li>
					</>
				)}
				<li className="my-1">
					{loggedIn === 1 ? (
						<>
							<ul className="list-unstyled d-flex flex-column">
								<li className="px-0 py-0 title d-flex flex-column">
									<Button
										copy="Purchase History"
										addClass="w-100 text-left font-weight-normal text-capitalize bg-white border-0"
										addClick={() => {
											closeMenu();
											navigate("/wei/purchase-history");
										}}
									/>
								</li>
								<li className="px-0 py-0 title d-flex flex-column">
									<Button
										copy="My Products"
										addClass="w-100 text-left font-weight-normal text-capitalize bg-white border-0"
										addClick={() => {
											closeMenu();
											navigate("/wei/my-products");
										}}
									/>
								</li>
								<li className="px-0 py-0 title d-flex flex-column">
									<Button
										copy="My Lists"
										addClass="w-100 text-left font-weight-normal text-capitalize bg-white border-0"
										addClick={() => {
											closeMenu();
											navigate("/wei/my-lists");
										}}
									/>
								</li>
								<li className="p-2">
									<ServiceNotification
										product={{
											img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw8f055b11/products/Equipment/Cub-Cadet_XT1LT46_New_2000x2000_8.jpg",
											product: "XT1 LT46",
											service: true,
											dealer: {
												name: "Worcester Sales and Service, Inc",
												address:
													"34200 LORAIN ROAD, NORTH RIDGEVILLE, OH 44039",
											},
										}}
									/>
									<ServiceNotification
										product={{
											img: "https://www.cubcadet.com/dw/image/v2/BCSH_PRD/on/demandware.static/-/Sites-mtd-master-catalog/default/dw532f8707/products/Equipment/Cub_Cadet_LB600E_wo_Battery_2000x2000_8.jpg",
											product: "LB600E",
											service: true,
										}}
									/>
								</li>
								<li className="mt-3 px-3 py-0 border-top pt-2">
									<p className="font-weight-bold mb-1">Your dealer is:</p>
									<p className="mb-1">Worcester Sales and Service, Inc</p>
									<p className="mb-2">
										34200 LORAIN ROAD, NORTH RIDGEVILLE, OH 44039
									</p>
									<ul className="list-unstyled d-flex flex-column">
										<li>
											<button
												className="btn border"
												type="button"
												onClick={() => {
													closeMenu();
													navigate("/wei/track-order/29323-32434");
												}}>
												Change Dealer
											</button>
										</li>
									</ul>
								</li>
								<li className="d-flex d-flex-lg-column mt-3 px-3 py-0 border-top pt-2">
									<strong>Track Your Order:</strong>
								</li>
								<li className="d-flex d-flex-lg-column mt-1 px-3 py-0">
									<div className="input-group">
										<input
											type="text"
											className="form-control"
											placeholder="Tracking Number"
											value="29323-32434"
											aria-label="Tracking Number"
											aria-describedby="button-addon2"
											onChange={(e) => {
												closeMenu();
												navigate("/wei/track-order/29323-32434");
											}}
										/>
										<button
											className="btn btn-outline-secondary"
											type="button"
											onClick={() => {
												closeMenu();
												navigate("/wei/track-order/29323-32434");
											}}>
											Track
										</button>
									</div>
								</li>
							</ul>
						</>
					) : (
						<div className="my-1 px-2 py-1">
							<ul className="list-unstyled d-flex flex-column">
								<li className="mt-0">
									<label>Email</label>
									<input type="email" className="form-control w-100" />
								</li>
								<li className="mt-2">
									<label>Password</label>
									<input type="password" className="form-control w-100" />
									<a href="#top">Forgot Password</a>
								</li>
								<li className="mt-2">
									<Button
										copy="Login"
										addClass="bg-yellow w-100 border-0"
										addClick={logIn}
									/>
								</li>
								<li className="mt-4">
									<Button
										copy="Create Account"
										addClass="bg-grey w-100 border-0"
										addClick={() => {
											closeMenu();
											navigate("/wei/create-account");
										}}
									/>
								</li>
							</ul>
						</div>
					)}
				</li>
			</ul>
		</div>
	);
};

export default Menu;
