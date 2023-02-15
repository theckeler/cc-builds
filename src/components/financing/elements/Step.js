import React, { useState, useEffect } from "react";

const Step = ({ offersData, help }) => {
	const [whichStep, setWhichStep] = useState(0);
	const [stepData, setStepData] = useState({ ...offersData.keys[whichStep] });

	const updateButton = (e) => {
		const whichNum = Number(e.target.getAttribute("data-pos"));
		let updateButton = { ...stepData };
		updateButton.inputs[whichNum].isChecked =
			!stepData.inputs[whichNum].isChecked;
		setStepData({ ...updateButton });
	};

	const updateAllButton = (allOn = true) => {
		let allOnStatus = [];
		stepData.inputs.forEach(function (button, i) {
			allOnStatus[i] = { ...button, helpActive: allOn };
		});
		document.querySelectorAll(".help-button").forEach(function (e) {
			e.click();
		});
		setStepData({ ...stepData, buttons: [...allOnStatus] });
	};

	useEffect(() => {
		setStepData({ ...offersData.keys[whichStep] });
	}, [offersData.keys, whichStep]);

	const buttonCSS = "w-100 h-100 p-3 text-center mb-0 user-select-none";
	const buttonStyle = (button) => {
		return {
			userSelect: "none",
			fontSize: "1em",
			borderColor: button.color,
			borderWidth: "2px",
			borderStyle: "solid",
			cursor: "pointer",
			color: button.isChecked ? "white" : button.color,
			backgroundColor: button.isChecked ? button.color : "transparent",
		};
	};

	return (
		<>
			<h3 className="mb-2 text-center">{stepData.title}</h3>
			<ul className="list-unstyled no-gutters d-flex flex-column flex-lg-row flex-wrap align-self-start w-100 mb-0 border-bottom pb-2">
				{stepData.inputs.map((button, i) => {
					return (
						<li className="flex-fill p-1" key={i}>
							{button.allOn ? (
								<button
									data-pos={i}
									className={`all-on-button ${buttonCSS}`}
									onClick={(e) =>
										button.isChecked
											? updateAllButton(false)
											: updateAllButton(true)
									}
									style={buttonStyle(button)}>
									{button.label}
								</button>
							) : (
								<label
									data-pos={i}
									className={`help-button ${buttonCSS}`}
									htmlFor={button.val}
									role="button"
									onClick={(e) => updateButton(e)}
									style={buttonStyle(button)}>
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
					{whichStep < offersData.keys.length - 1 ? (
						<button
							className="btn bg-black text-white"
							onClick={() => {
								let error = false;
								stepData.inputs.forEach(function (button, i) {
									//console.log(button);
									error = false;
								});

								if (!error) {
									setWhichStep(Number(whichStep) + 1);
								}
							}}>
							Next ❯
						</button>
					) : (
						<button
							className="btn bg-black text-white"
							onClick={() => {
								help(false);
							}}>
							View Results ❯
						</button>
					)}
				</li>
			</ul>
		</>
	);
};

export default Step;
