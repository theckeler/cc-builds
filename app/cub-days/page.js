"use client";
import { useState } from "react";

// import LawnAndGardenTractors from "./LawnAndGardenTractors";
// import ZeroTurnMowers from "./ZeroTurnMowers";
import SnowBlowers from "./components/SnowBlowers";
import Single from "./components/Single";
import Two from "./components/Two";
import Three from "./components/Three";
import CubDaysCSS from "./styles/cubdays.css";

const buttons = ["Snow", "1X", "2X", "3X"];
const Components = [
	<SnowBlowers key={1} />,
	<Single key={1} />,
	<Two key={1} />,
	<Three key={1} />,
];

export default function CubDays() {
	const [change, setChange] = useState(0);

	return (
		<>
			<style dangerouslySetInnerHTML={{ __html: CubDaysCSS }} />
			<div className="position-fixed" style={{ top: "10px", right: "10px" }}>
				{buttons.map(function (title, i) {
					return (
						<button
							key={i}
							className="bg-danger border-0 mr-1"
							style={{ zIndex: 1001, right: "20px", top: "20px" }}
							onClick={() => {
								setChange(i);
							}}>
							{title}
						</button>
					);
				})}
			</div>
			{Components[change]}
		</>
	);
}
