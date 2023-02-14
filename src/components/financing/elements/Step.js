import React, { useState, useEffect } from "react";

import stepsData from "../data/steps.json";

const Step = () => {
	const [whichStep, setWhichStep] = useState(0);
	const [stepData, setStepData] = useState({ ...stepsData[whichStep] });

	const updateButton = (e) => {
		const whichNum = Number(e.target.getAttribute("data-pos"));
		let updateButton = { ...stepData };
		updateButton.buttons[whichNum].active = !stepData.buttons[whichNum].active;
		setStepData({ ...updateButton });
	};

	const updateAllButton = (allOn = true) => {
		console.log("updateAllButton:", allOn);

		let allOnStatus = [];
		stepData.buttons.forEach(function (button, i) {
			// if (button.allOn) {
			// 	console.log(button, i);
			// 	//button.active = !button.active;
			// }
			allOnStatus[i] = { ...button, active: allOn };
		});

		document.querySelectorAll(".help-button").forEach(function (e) {
			e.click();
		});

		setStepData({ ...stepData, buttons: [...allOnStatus] });
	};

	useEffect(() => {
		setStepData({ ...stepsData[whichStep] });
		//	console.log(whichStep);
	}, [whichStep]);

	useEffect(() => {
		console.log(stepData);
	}, [stepData]);

	return (
		<>
			<h3 className="mb-2 text-center">{stepData.title}</h3>
			<ul className="list-unstyled no-gutters d-flex flex-column flex-lg-row w-100 mb-0 border-bottom pb-2">
				{stepData.buttons.map((button, i) => {
					console.log(button);

					return (
						<li className="col p-1" key={i}>
							{button.allOn ? (
								<button
									data-pos={i}
									className="w-100 h-100 h3 p-3 text-center mb-0"
									//	htmlFor={button.for}
									//	role="button"
									onClick={(e) =>
										button.active
											? updateAllButton(false)
											: updateAllButton(true)
									}
									style={{
										borderColor: button.color,
										borderWidth: "2px",
										borderStyle: "solid",
										cursor: "pointer",
										color: button.active ? "white" : button.color,
										backgroundColor: button.active
											? button.color
											: "transparent",
									}}>
									{button.label}
								</button>
							) : (
								<label
									data-pos={i}
									className="help-button w-100 h-100 h3 p-3 text-center mb-0"
									htmlFor={button.for}
									role="button"
									onClick={(e) => updateButton(e)}
									style={{
										borderColor: button.color,
										borderWidth: "2px",
										borderStyle: "solid",
										cursor: "pointer",
										color: button.active ? "white" : button.color,
										backgroundColor: button.active
											? button.color
											: "transparent",
									}}>
									{button.label}
								</label>
							)}
						</li>
					);
				})}
			</ul>
			<ul className="list-unstyled no-gutters d-flex flex-lg-row w-100 my-2">
				<li className="col-6 p-1 text-right">
					{whichStep - 1 >= 0 && (
						<button
							className="btn bg-black text-white"
							onClick={() => {
								setWhichStep(Number(whichStep) - 1);
							}}>
							❮ Back
						</button>
					)}
				</li>
				<li className="col-6 p-1">
					{whichStep + 1 < stepsData.length && (
						<button
							className="btn bg-black text-white"
							onClick={() => {
								setWhichStep(Number(whichStep) + 1);
							}}>
							Next ❯
						</button>
					)}
				</li>
			</ul>
		</>
	);
};

export default Step;
