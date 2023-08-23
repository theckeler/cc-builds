"use client";
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

	const buttonCSS = "w-100 h-100 p-1 p-lg-3 text-center mb-0 user-select-none";
	const buttonStyle = (button) => {
		return {
			userSelect: "none",
			fontSize: "1em",
			borderColor: "#000",
			borderWidth: "2px",
			borderStyle: "solid",
			cursor: "pointer",
			color: button.isChecked ? "#ffc20f" : "#000",
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
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 48 48"
										style={{ width: "1.6em" }}
										className="mr-1">
										<path
											d="M24 43.8c-2.7 0-5.3-.5-7.7-1.6-2.4-1-4.5-2.5-6.3-4.2s-3.1-4-4.2-6.4c-1-2.4-1.6-4.9-1.6-7.6 0-2.7.5-5.3 1.6-7.7 1-2.4 2.5-4.5 4.3-6.3s3.9-3.2 6.3-4.2 4.9-1.6 7.6-1.6c2.7 0 5.3.5 7.7 1.6 2.4 1 4.5 2.4 6.3 4.2 1.8 1.8 3.2 3.9 4.2 6.3s1.5 5 1.5 7.7-.5 5.3-1.6 7.7-2.4 4.5-4.2 6.3c-1.8 1.8-3.9 3.2-6.3 4.2-2.3 1-4.9 1.6-7.6 1.6z"
											fill={button.isChecked ? "#ffc20f" : "rgba(0,0,0,.2)"}
										/>
										{button.isChecked && (
											<path
												fill="#000"
												d="M21.1 33 35 19l-2.2-2.2-11.7 11.8-6-6-2.2 2.2z"
											/>
										)}
									</svg>

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
