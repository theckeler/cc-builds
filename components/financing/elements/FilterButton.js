"use client";
const FilterButton = ({ copy, close = false, className }) => {
	const buttonMenuToggle = () => {
		console.log("buttonMenuToggle");
		document.querySelector("#financing-filters").classList.toggle("active");
		document
			.querySelector("#financing-filters-button")
			.classList.toggle("active");
		document.querySelector("body").classList.toggle("overflow-hidden");
		document.querySelectorAll(".icon-svg").forEach(function (e) {
			e.classList.toggle("d-block");
		});
	};

	return (
		<button
			className={`position-relative border-0 bg-dark d-flex justify-content-center align-items-center p-1 ${className}`}
			onClick={() => buttonMenuToggle()}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 48 48"
				//className="w-100 h-100"
				style={{ width: "34px", height: "34px" }}>
				<path
					d="M21.35 42V30.75h3v4.15H42v3H24.35V42ZM6 37.9v-3h12.35v3Zm9.35-8.3v-4.1H6v-3h9.35v-4.2h3v11.3Zm6-4.1v-3H42v3Zm8.3-8.25V6h3v4.1H42v3h-9.35v4.15ZM6 13.1v-3h20.65v3Z"
					fill="#fff"
					className="icon-svg icon-menu d-none d-block"
				/>
				<path
					d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
					fill="#fff"
					className="icon-svg icon-close d-none"
				/>
			</svg>
			{copy && <span className="ml-1">{copy}</span>}
		</button>
	);
};

export default FilterButton;
