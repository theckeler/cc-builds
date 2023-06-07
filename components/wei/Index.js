import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Menu from "./elements/Menu";
import Home from "./Home";
import MyProducts from "./MyProducts";
import PurchaseHistory from "./PurchaseHistory";
import TrackOrder from "./TrackOrder";
import ManageAccount from "./ManageAccount";
import CreateAccount from "./CreateAccount";
import MyLists from "./MyLists";
import ContactDealer from "./ContactDealer";
import DealerReview from "./DealerReview";
import Button from "../../components/elements/Button";
import ViewInvoice from "./ViewInvoice";

import "./scss/wei.scss";

import weiData from "./data/wei.json";

const Index = () => {
	const navigate = useNavigate();

	useEffect(() => {
		document.querySelector("header").classList.add("wei-button");
		return () => {
			document.body.classList.remove("wei-button");
		};
	});

	const logIn = () => {
		setLoggedIn(1);
	};

	const logOut = () => {
		setLoggedIn(0);
		navigate("/wei/");
		closeMenu();
	};

	const [loggedIn, setLoggedIn] = useState(0);
	useEffect(() => {}, [loggedIn, navigate]);

	const openMenu = () => {
		document.querySelector(".menu").classList.toggle("active");
		document.querySelector(".overlay").classList.toggle("active");
		document.querySelector(".overlay").onClick = function () {
			closeMenu();
		};
		document.querySelector("body").classList.toggle("active");
	};

	const closeMenu = () => {
		document.querySelector(".menu").classList.remove("active");
		document.querySelector(".overlay").classList.remove("active");
		document.querySelector("body").classList.remove("active");
	};

	const goHome = () => {
		document.location.href = "/wei/";
	};

	return (
		<div className="wei">
			<div className="wrapper d-flex my-1">
				<Button
					copy="Wei Home"
					className="btn bg-dark text-white ml-auto mr-1"
					onClick={goHome}
				/>
				<Button
					copy="Wei Menu"
					className="btn bg-yellow xxl-hide"
					onClick={openMenu}
				/>
			</div>
			<Menu
				loggedIn={loggedIn}
				logIn={logIn}
				logOut={logOut}
				closeMenu={closeMenu}
			/>
			<Routes>
				<Route path="/" element={<Home openMenu={openMenu} />} />
				<Route path="my-products" element={<MyProducts weiData={weiData} />} />
				<Route
					path="purchase-history"
					element={<PurchaseHistory weiData={weiData} />}
				/>
				<Route
					path="track-order/:orderID"
					element={<TrackOrder weiData={weiData} />}
				/>
				<Route
					path="manage-account"
					element={<ManageAccount setLoggedIn={setLoggedIn} />}
				/>
				<Route
					path="create-account"
					element={<CreateAccount setLoggedIn={setLoggedIn} />}
				/>
				<Route path="my-lists" element={<MyLists weiData={weiData} />} />
				<Route path="contact-dealer/:orderID" element={<ContactDealer />} />
				<Route path="dealer-review/:orderID" element={<DealerReview />} />
				<Route path="invoice/:orderID" element={<ViewInvoice />} />
			</Routes>
			<div className="overlay" />
		</div>
	);
};

export default Index;
