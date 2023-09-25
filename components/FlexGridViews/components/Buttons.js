"use client";

export default function TitleFlexGridViewsButtons({
	setWhichView,
	setView,
	buttons,
}) {
	const resetBG = (e) => {
		e.currentTarget.parentElement.parentElement
			.querySelectorAll(".reset-views")
			.forEach((e) => {
				e.classList.remove("bg-secondary");
			});

		e.currentTarget.classList.add("bg-secondary");
	};

	return (
		<>
			{buttons.map(function (block, i) {
				return (
					<button
						className={`reset-views p-1 rounded-circle ml-1 ${block.className}`}
						style={{ backgroundColor: "#d4d4d4", border: 0, cursor: "pointer" }}
						onClick={(e) => {
							resetBG(e);
							setView(block.whatView);
							//setWhichView(block.whatView);
						}}
						key={i}
						aria-label={`View ${block.whatView}`}>
						{block.icon}
					</button>
				);
			})}
		</>
	);
}
