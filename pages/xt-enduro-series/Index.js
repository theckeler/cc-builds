import React from "react";
import { Routes, Route } from "react-router-dom";

import XTEnduroSeries from "./Home";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<XTEnduroSeries />} />
		</Routes>
	);
};

export default App;
