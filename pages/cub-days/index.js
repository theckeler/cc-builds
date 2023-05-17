import { useState } from "react";

import LawnAndGardenTractors from "./LawnAndGardenTractors.js";
import ZeroTurnMowers from "./ZeroTurnMowers.js";

const Tractors = () => {
	const [view, setView] = useState(LawnAndGardenTractors);
	const [change, setChange] = useState(true);

	return (
		<>
			<button
				className="position-fixed bg-danger"
				style={{ zIndex: 1001, right: "20px", top: "20px" }}
				onClick={(e) => {
					if (change === true) {
						setChange(false);
						setView(ZeroTurnMowers);
					} else {
						setChange(true);
						setView(LawnAndGardenTractors);
					}
				}}>
				Switch View
			</button>
			{view}
		</>
	);
};

export default Tractors;
