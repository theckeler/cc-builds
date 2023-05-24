import React from "react";
import { ReactComponent as Plus } from "../../images/icon-plus.svg";

const Pluses = ({ className, addCSS, num, svgFill }) => {
	return (
		<div className={`${className}`} style={addCSS}>
			{[...Array(Number(num))].map((e, i) => {
				return (
					<Plus
						fill={svgFill}
						key={i}
						style={{ width: "1.875rem", height: "1.875rem" }}
					/>
				);
			})}
		</div>
	);
};

export default Pluses;
