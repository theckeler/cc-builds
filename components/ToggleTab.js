"use client";

export default function Hours({ className, style, component, id, title }) {
	const hoursCSS = "row col-6";

	return (
		<div className={className} style={style}>
			<h3 className="position-relative flex mb-0">
				<button
					className="position-absolute w-100 h-100 d-block d-xl-none"
					style={{ cursor: "pointer", opacity: 0 }}
					aria-label={title}
					onClick={() => {
						document.querySelector("#" + id).classList.toggle("d-none");
					}}
				/>
				{title}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 -960 960 960"
					className="d-block d-xl-none"
					style={{ width: "48px" }}>
					<path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" />
				</svg>
			</h3>
			<div className="d-none d-xl-block" id={id}>
				{component}
			</div>
			{/* <hr className="border-top d-block d-xl-none" /> */}
		</div>
	);
}
