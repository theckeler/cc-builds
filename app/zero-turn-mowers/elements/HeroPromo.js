"use client";
import CubDays from "./CubDays2023";

export default function HeroPromo({ className, style }) {
	return (
		<>
			<div
				className={`w-100 w-xl-348 bg-black text-center rounded-bottom overflow-hidden mt-lg-2 mb-lg-2 ${className}`}
				style={style}>
				<CubDays />
			</div>
		</>
	);
}
