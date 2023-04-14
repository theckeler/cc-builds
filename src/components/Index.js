import React from "react";
import { Routes, Route } from "react-router-dom";
import "../scss/main.scss";

import Home from "./Home";
import SnowV2Index from "./snow-v2/Index";
import CustomerService from "./customer-service/Index";
import WeiIndex from "./wei/Index";
import ZeroTurn from "./zero-turn/Index";
import Base from "./base/Index";
import Financing from "./financing/Index";
import XTEnduro from "./xt-enduro-series/Index";
import ProductReviewGiveaway from "./product-review-giveaway/Index";
import ElectricExtras from "./electric-extras/Index";

const Index = () => {
	return (
		<Routes>
			<Route index path="/" element={<Home />} />
			<Route path="/customerservice" element={<CustomerService />} />
			<Route path="/wei/*" element={<WeiIndex />} />
			<Route path="/snowv2/*" element={<SnowV2Index />} />
			<Route path="/zero-turn/*" element={<ZeroTurn />} />
			<Route path="/base/*" element={<Base />} />
			<Route path="/financing/*" element={<Financing />} />
			<Route path="/xt-enduro-series/*" element={<XTEnduro />} />
			<Route path="/electric-extras/*" element={<ElectricExtras />} />
			<Route
				path="/product-review-giveaway/*"
				element={<ProductReviewGiveaway />}
			/>
		</Routes>
	);
};
export default Index;
