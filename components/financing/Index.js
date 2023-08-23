// import { useEffect, useState } from "react";

import "./scss/financing.scss";
import jsonData from "./data/financing-new.json";

// import MainBlock from "./elements/MainBlock";
// import ImgCopyBlock from "@/components/ImgCopyBlock";
// import GetHelp from "./elements/GetHelp";
// import Menu from "./elements/Menu";
// import NoResults from "./elements/NoResults";
// import FilterButton from "./elements/FilterButton";
import Faqs from "@/components/Faqs";
import CTABlock from "@/components/CTABlock";
import Button from "@/components/Button";

const Financing = () => {
	// const [offersData, setOffersData] = useState({
	// 	blocks: [...jsonData.blocks],
	// 	keys: [...jsonData.keys],
	// });
	// const [getHelp, setGetHelp] = useState(false);
	// const [numBlocks, setNumBlocks] = useState(offersData.blocks.length);

	// // useEffect(() => {
	// // 	console.log(numBlocks);
	// // }, [numBlocks]);

	// const handleChange = (e) => {
	// 	// SETUP:
	// 	const changeWhich = e.target.getAttribute("data-which");
	// 	const eValue = e.target.value;
	// 	const eChecked = e.target.checked;
	// 	const ePos = e.target.getAttribute("data-pos");
	// 	const keysPos = e.target.getAttribute("data-keys-pos");

	// 	let checkedInputs = [];
	// 	let uncheckedInputs = [];
	// 	document.querySelectorAll(".financing-input").forEach(function (e) {
	// 		if (e.checked) {
	// 			checkedInputs.push(e.id);
	// 		} else {
	// 			uncheckedInputs.push(e.id);
	// 		}
	// 	});

	// 	// CHANGE CHECKBOXES:
	// 	const updateCheckbox = [...offersData.keys];
	// 	updateCheckbox[keysPos].inputs[ePos] = {
	// 		...updateCheckbox[keysPos].inputs[ePos],
	// 		label: e.target.getAttribute("data-label"),
	// 		val: e.target.id,
	// 		isChecked: eChecked,
	// 	};

	// 	// UPDATE TERMS & OFFERS:
	// 	let updateOffers = [];
	// 	updateOffers = [...offersData.blocks];
	// 	jsonData.blocks.forEach(function (e) {
	// 		switch (changeWhich) {
	// 			case "terms":
	// 				if (e.keywords.includes(eValue)) {
	// 					updateOffers[ePos] = { ...e, display: eChecked };
	// 				}
	// 				break;
	// 			default:
	// 				e.offers.forEach(function (offer) {
	// 					const result = offer.keywords.filter((keyword) =>
	// 						uncheckedInputs.includes(keyword)
	// 					);
	// 					if (result.length > 0) {
	// 						offer.display = false;
	// 						e.display = false;
	// 					} else {
	// 						offer.display = true;
	// 						e.display = true;
	// 					}
	// 				});
	// 		}
	// 	});

	// 	// UPDATE IT ALL:
	// 	setOffersData({
	// 		keys: [...offersData.keys],
	// 		blocks: [...updateOffers],
	// 	});

	// 	// UPDATE Num Blocks
	// 	let numBlocksCheck = 0;
	// 	jsonData.blocks.forEach(function (e) {
	// 		e.display && numBlocksCheck++;
	// 	});
	// 	setNumBlocks(numBlocksCheck);
	// };

	// const help = (toogleOn = false) => {
	// 	//const filterContainer = document.querySelector("#filter-screen");
	// 	//filterContainer.style.maxHeight = getHelp === false ? "600px" : "";
	// 	//filterContainer.style.overflow = "hidden";
	// 	document.querySelector("#help-screen").classList.toggle("d-block");

	// 	setGetHelp(!getHelp);
	// 	document.querySelector("#scroll").scrollIntoView();
	// };

	// const toggleCheckboxes = (allOff = false, allOn = true) => {
	// 	document.querySelectorAll(".financing-input").forEach(function (e) {
	// 		if (allOff && e.checked) {
	// 			e.click();
	// 		} else if (allOn && !e.checked) {
	// 			e.click();
	// 		}
	// 	});
	// };

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

			{/* <span id="scroll"></span>
			<section className="d-lg-none text-center mb-3 pb-3 border-bottom container">
				<ul className="list-unstyled mx-auto no-gutters d-flex p-0">
					<li className="col-6 p-1">
						<button
							onClick={() => {
								help();
							}}
							className="py-2 px-4 w-100 border-0 text-primary font-bold h-100"
							style={{ background: "#ffc20f" }}>
							Help Me Decide?
						</button>
					</li>
					<li className="col-6 p-1">
						<FilterButton
							copy="Filter Options"
							className="py-2 px-4 w-100 border-0 text-primary font-bold h-100 text-white"
						/>
					</li>
				</ul>

				<div className="px-1 mt-2" style={{ fontSize: "1em" }}>
					Available number of offers: {numBlocks}
				</div>
			</section>

			<section
				className="container p-0 m-0 m-lg-auto w-100 position-relative"
				id="filter-screen">
				<GetHelp {...{ toggleCheckboxes, help, offersData, numBlocks }} />

				<ul className="list-unstyled mx-auto no-gutters d-flex flex-column flex-lg-row p-0">
					<li
						className="col-lg-3 position-sticky h-100"
						style={{ top: "8px", zIndex: "101" }}>
						<Menu
							{...{
								offersData,
								handleChange,
								toggleCheckboxes,
								numBlocks,
								help,
							}}
							//	buttonMenuToggle={buttonMenuToggle}
						/>
					</li>

					<li className="col-lg-9 mt-n5 mt-lg-0">
						<ul className="d-flex flex-wrap list-unstyled no-gutters">
							{numBlocks > 0 ? (
								offersData.blocks.map((block, i) => {
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
								})
							) : (
								<NoResults />
							)}
						</ul>
					</li>
				</ul>
			</section> */}

			<div className="container">
				<ul className="list-unstyled d-flex flex-wrap flex-column flex-lg-row">
					{jsonData.plans.blocks.map((block, i) => {
						return (
							<li key={i} className="col-12 col-lg-6 col-xl-3 p-1 text-center">
								<div className="flex flex-column border h-100">
									<div className="bg-secondary flex flex-column align-items-center px-1 py-3">
										<span className="display-1 mb-0">{block.term}</span>
										<span className="display-4">months</span>
									</div>
									<ul className="list-unstyled d-flex flex-column p-2 h-100">
										<li>
											<h2
												dangerouslySetInnerHTML={{ __html: block.title }}
												className="display-3"
											/>
										</li>
										<li
											dangerouslySetInnerHTML={{ __html: block.copy }}
											className=""
										/>
										<li className="mt-auto pt-2">
											Minimum purchase ${block.minPurchase}.
										</li>
										<li>Valid from:</li>
										<li>
											{block.promoStart} - {block.promoEnd}
										</li>
										<li className="mt-2">
											<button
												className="border-0"
												onClick={() => {
													document
														.querySelectorAll(".details-block")
														.forEach((e) => {
															e.classList.add("d-none");
														});
													document
														.querySelector(`#details-block-${i + 1}`)
														.classList.remove("d-none");
												}}>
												<small className="font-bold">
													<u>CLICK FOR DETAILS</u>
												</small>
											</button>
											<div
												className="d-none text-left details-block p-md-3 overflow-auto"
												id={`details-block-${i + 1}`}
												style={{
													top: 0,
													right: 0,
													//maxWidth: "400px",
													zIndex: 1001,
													backgroundColor: "#fff",
													//boxShadow: "0 0 10px rgba(0,0,0,0.3)",
													maxHeight: "100vh",
												}}>
												<div className="">
													<ul className="list-unstyled d-flex align-items-center mb-2">
														<li className="display-4">Details:</li>
														<li className="ml-auto">
															<button
																onClick={() => {
																	document
																		.querySelectorAll(".details-block")
																		.forEach((e) => {
																			e.classList.add("d-none");
																		});
																}}
																className="border bg-secondary"
																style={{
																	height: "48px",
																	width: "48px",
																	fontSize: "1.5em",
																}}>
																✕
															</button>
														</li>
													</ul>

													<strong
														dangerouslySetInnerHTML={{
															__html: block.terms.title,
														}}
														className="mb-2 d-block"
													/>
													<div
														dangerouslySetInnerHTML={{
															__html: block.terms.copy,
														}}
													/>
												</div>
											</div>
										</li>
									</ul>
									<div className="mt-auto pb-2 pt-2">
										<Button
											copy="Apply Now"
											className="border-0 bg-secondary font-black"
										/>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>

			<section
				className="d-flex justify-content-center align-items-center py-4 my-6"
				style={{ backgroundColor: "#e1e1e1" }}>
				<div className="container px-1">
					<ul className="list-unstyled d-flex flex-column flex-lg-row text-decoration-none h-100 h-auto">
						<li className="col-lg-6">
							<img
								src="https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dw1026a6c1/Financing/become_a_dealer_desktop_1015x765.jpg"
								alt=""
								className="w-100"
							/>
						</li>

						<li className="col-lg-6 d-flex flex-column h-100 p-3">
							<p className="font-weight-bold false mb-0 display-4">
								Finance In-Store
							</p>
							<p className="copy mt-2">
								We have multiple financing offers to fit your needs. Financing
								is available at participating independent dealers.
							</p>
							<a
								href="https://www.cubcadet.com/on/demandware.store/Sites-cubcadet-Site/en_US/Stores-Find?showMap=true&amp;horizontalView=true&amp;isForm=true&amp;rid=dealers"
								className="btn text-uppercase font-weight-bold text-decoration-none d-inline-block bg-secondary align-self-start mt-auto">
								Find a Local Dealer
							</a>
						</li>
					</ul>
				</div>
			</section>

			<section className="d-flex justify-content-center align-items-center my-6">
				<div className="container px-1">
					<h2>FAQs</h2>
					<Faqs faqs={jsonData.faqs} addID="faqs-financing" />
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
