import React, { useState, useEffect } from "react";

import "./scss/financing.scss";
import jsonData from "./data/financing.json";
import MainBlock from "./elements/MainBlock";
import Faqs from "../elements/Faqs";
import ImgCopyBlock from "../elements/ImgCopyBlock";
import CTABlock from "../elements/CTABlock";
import GetHelp from "./elements/GetHelp";
import Menu from "./elements/Menu";

const Financing = () => {
	const [offersData, setOffersData] = useState({
		blocks: [...jsonData.blocks],
		keys: [...jsonData.keys],
	});
	const [getHelp, setGetHelp] = useState(false);

	// useEffect(() => {
	// 	console.log("useEffect:", offersData);
	// }, [offersData]);

	const handleChange = (e) => {
		//console.log("handleChange");

		// SETUP:
		const changeWhich = e.target.getAttribute("data-which");
		const eValue = e.target.value;
		const eChecked = e.target.checked;
		const ePos = e.target.getAttribute("data-pos");
		const keysPos = e.target.getAttribute("data-keys-pos");

		let checkedInputs = [];
		let uncheckedInputs = [];
		document.querySelectorAll(".financing-input").forEach(function (e) {
			if (e.checked) {
				checkedInputs.push(e.id);
			} else {
				uncheckedInputs.push(e.id);
			}
		});

		// CHANGE CHECKBOXES:
		const updateCheckbox = [...offersData.keys];
		updateCheckbox[keysPos].inputs[ePos] = {
			...updateCheckbox[keysPos].inputs[ePos],
			label: e.target.getAttribute("data-label"),
			val: e.target.id,
			isChecked: eChecked,
		};

		// UPDATE TERMS & OFFERS:
		let updateOffers = [];
		updateOffers = [...offersData.blocks];
		jsonData.blocks.forEach(function (e) {
			switch (changeWhich) {
				case "terms":
					if (e.keywords.includes(eValue)) {
						updateOffers[ePos] = { ...e, display: eChecked };
					}
					break;
				default:
					e.offers.forEach(function (offer) {
						const result = offer.keywords.filter((keyword) =>
							uncheckedInputs.includes(keyword)
						);
						if (result.length > 0) {
							offer.display = false;
						} else {
							offer.display = true;
						}
					});
			}
		});

		// UPDATE IT ALL:
		setOffersData({
			keys: [...offersData.keys],
			blocks: [...updateOffers],
		});
	};

	const help = (toogleOn = false) => {
		//console.log("toogleOn: ", toogleOn);
		if (toogleOn) {
			toggleCheckboxes(false, true);
		} else {
			toggleCheckboxes(true, false);
		}

		// SETUP:

		const filterContainer = document.querySelector("#filter-screen");
		filterContainer.style.maxHeight = getHelp === false ? "600px" : "";
		filterContainer.style.overflow = "hidden";
		document.querySelector("#help-screen").classList.toggle("d-block");

		setGetHelp(!getHelp);
		document.querySelector("#scroll").scrollIntoView();
	};

	const toggleCheckboxes = (allOff = false, allOn = true) => {
		//console.log("allOff: ", allOff);
		//console.log("allOn: ", allOn);
		document.querySelectorAll(".financing-input").forEach(function (e) {
			if (allOff && e.checked) {
				e.click();
			} else if (allOn && !e.checked) {
				e.click();
			}
		});
	};

	return (
		<>
			<section className="pt-8 text-center mb-3 pb-6 border-bottom container">
				<img
					src="https://d1dy019watpwba.cloudfront.net/images/financing/cub-cadet-credit-card.png"
					alt=""
					className="w-100 mb-4"
					style={{ maxWidth: "400px" }}
				/>
				<h1>Shop Online Financing Plans</h1>
				<p className="mb-0">
					The offers below are available online. Additional financing offers may
					be available at your local dealer.
				</p>
			</section>

			<section
				className="pt-8 text-center mb-3 border-bottom container"
				id="scroll">
				<ul className="list-unstyled mx-auto no-gutters d-flex flex-column flex-lg-row p-0">
					<li className="col-2">
						<button
							onClick={() => {
								help();
							}}
							className="py-1 px-4 w-100 border-0 text-white h-100"
							style={{ background: "#000" }}>
							Help Me Decide?
						</button>
					</li>
					<li className="col-2 ml-auto">
						<label
							htmlFor="online"
							role="button"
							className="py-2 px-4 w-100 h-100"
							style={{ background: "red" }}>
							Online
						</label>
					</li>
					<li className="col-2">
						<label
							htmlFor="in-store"
							role="button"
							className="py-2 px-4 w-100 h-100"
							style={{ background: "orange" }}>
							In-Store
						</label>
					</li>
				</ul>
			</section>

			<section
				className="container p-0 m-0 m-lg-auto w-100 position-relative"
				id="filter-screen">
				<GetHelp {...{ toggleCheckboxes, help }} />
				<ul className="list-unstyled mx-auto no-gutters d-flex flex-column flex-lg-row p-0">
					{/* MENU */}
					<li
						className="col-lg-3 position-sticky h-100"
						style={{ top: "8px", zIndex: "101" }}>
						<Menu
							{...{
								offersData,
								handleChange,
								toggleCheckboxes,
							}}
						/>
					</li>
					{/* Output */}
					<li className="col-lg-9 mt-n5 mt-lg-0">
						<ul className="d-flex flex-wrap list-unstyled no-gutters">
							{offersData.blocks.map((block, i) => {
								let keywords = "";
								if (block.keywords) {
									for (const keyword of block.keywords) {
										keywords += `${keyword} `;
									}
								}

								let multiBlockLength = 0;
								block.offers.forEach(async (block) => {
									if (block.display) {
										multiBlockLength++;
									}
								});

								return (
									<React.Fragment key={i}>
										{block.display === true && !!multiBlockLength && (
											<MainBlock
												{...{ block, i, keywords, multiBlockLength }}
											/>
										)}
									</React.Fragment>
								);
							})}
						</ul>
					</li>
				</ul>
			</section>

			<section className="d-flex justify-content-center align-items-center my-6">
				<div className="container px-1">
					<ul className="list-unstyled d-flex flex-column flex-lg-row">
						<li className="col-lg-6 p-2" style={{ backgroundColor: "#e7e7e7" }}>
							<ImgCopyBlock
								block={jsonData.inStore}
								linkable={false}
								flushImg={true}
								addClass="h-auto"
							/>
						</li>
						<li className="col-lg-6 px-2 py-5 p-lg-6">
							<h2>FAQs</h2>
							<Faqs faqs={jsonData.faqs} addID="faqs-financing" />
						</li>
					</ul>
				</div>
			</section>

			<section className="d-flex justify-content-center align-items-center p-8 bg-secondary">
				<div className="container d-flex flex-column align-items-center">
					<CTABlock block={jsonData.cta} />
				</div>
			</section>
		</>
	);
};

export default Financing;
