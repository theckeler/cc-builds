import { useState } from "react";

import LawnAndGardenTractors from "./LawnAndGardenTractors.js";
import ZeroTurnMowers from "./ZeroTurnMowers.js";

const Tractors = () => {
	const [change, setChange] = useState(true);

	return (
		<>
			<button
				className="position-fixed bg-danger"
				style={{ zIndex: 1001, right: "20px", top: "20px" }}
				onClick={(e) => {
					setChange(!change);
				}}>
				Switch View
			</button>
			{change ? <LawnAndGardenTractors /> : <ZeroTurnMowers />}
		</>
	);
};

export default Tractors;
