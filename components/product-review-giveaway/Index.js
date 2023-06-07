import React from "react";
import { Routes, Route } from "react-router-dom";

import ProductReviewGiveaway from "./Home";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<ProductReviewGiveaway />} />
		</Routes>
	);
};

export default App;
