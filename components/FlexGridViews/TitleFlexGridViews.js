"use client";
import { useState } from "react";

import TitleFlexGridViewsButtons from "./components/Buttons";
import IconGridView from "@/components/icons/GridView";
import FlexView from "@/components/icons/FlexView";

export default function TitleFlexGridViews({
	id = "",
	style,
	title,
	jsonData,
	className = null,
	buttons = [
		{
			icon: <FlexView style={{ width: "32px" }} />,
			className: "bg-secondary",
			whatView: "flex",
		},
		{
			icon: <IconGridView style={{ width: "32px" }} />,
			className: "",
			style: "",
			whatView: "grid",
		},
	],
	Component,
}) {
	const moveBy = 440;
	const buttonStyle = { width: "48px", height: "48px", cursor: "pointer" };
	const buttonCSS =
		"flex justify-content-center align-items-center p-1 rounded-circle bg-secondary border-0";

	const [whichView, setWhichView] = useState("flex");

	const moveIt = (whichWay) => {
		const scroller = document.querySelector(`#${id} .scroller`);
		scroller.scrollLeft += whichWay === "next" ? moveBy : -moveBy;

		scroller.scrollLeft > 0
			? scroller.parentElement
					.querySelector(".button-prev")
					.classList.add("d-md-block")
			: scroller.parentElement
					.querySelector(".button-prev")
					.classList.remove("d-md-block");

		scroller.scrollLeft + moveBy >= scroller.scrollWidth - moveBy
			? scroller.parentElement
					.querySelector(".button-next")
					.classList.remove("d-md-block")
			: scroller.parentElement
					.querySelector(".button-next")
					.classList.add("d-md-block");
	};

	const setView = (whichView) => {
		const scroller = document.querySelector(`#${id} .scroller`);

		if (whichView === "grid") {
			scroller.classList.add("flex-wrap");
			scroller.parentElement
				.querySelector(".button-prev")
				.classList.remove("d-md-block");
			scroller.parentElement
				.querySelector(".button-next")
				.classList.remove("d-md-block");
		} else {
			scroller.scrollTop = 0;
			scroller.classList.remove("flex-wrap");
			scroller.parentElement
				.querySelector(".button-next")
				.classList.add("d-md-block");
		}
	};

	return (
		<div
			className={className}
			id={id}
			style={{ ...style, scrollMarginTop: "16px" }}>
			<ul className="list-unstyled flex align-items-center">
				<li>
					<h3 className="font-weight-bold" style={{ fontSize: "22px" }}>
						{title && title}
					</h3>
				</li>
				<li className="ml-auto">
					<TitleFlexGridViewsButtons
						setWhichView={setWhichView}
						buttons={buttons}
						setView={setView}
					/>
				</li>
			</ul>

			<div className="position-relative">
				<div
					className="button-prev position-absolute d-none d-md-none"
					style={{
						zIndex: 101,
						top: "50%",
						left: 0,
						transform: "translateY(-50%)",
					}}>
					<button
						className={buttonCSS}
						style={buttonStyle}
						onClick={() => {
							moveIt("prev");
						}}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path d="m16.1 22-10-10 10-10 1.8 1.8L9.7 12l8.2 8.2-1.8 1.8z" />
						</svg>
					</button>
				</div>
				{jsonData && (
					<ul
						className="scroller list-unstyled flex"
						style={{
							overflowX: "auto",
							gap: "0.5rem",
							scrollSnapType: "x mandatory",
						}}>
						{jsonData.map(function (block, i) {
							return (
								<li
									className="scroller-item p-2 bg-white"
									style={{
										width: "calc(50% - 0.25rem)",
										minWidth: "340px",
										scrollSnapAlign: "center",
									}}
									key={i}>
									{typeof Component === "object" ? (
										Component
									) : (
										<Component block={block} className={`h-full`} />
									)}
								</li>
							);
						})}
					</ul>
				)}
				<div
					className="button-next position-absolute d-none d-md-block"
					style={{
						zIndex: 101,
						top: "50%",
						right: 0,
						transform: "translateY(-50%)",
					}}>
					<button
						className={buttonCSS}
						style={buttonStyle}
						onClick={() => {
							moveIt("next");
						}}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
							<path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
