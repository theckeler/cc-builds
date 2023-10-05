"use client";
import CubDays from "./CubDays2023";

export default function HeroPromo({}) {
	return (
		<>
			<style jsx>{`
				@media (min-width: 64em) {
					.w-xl-348 {
						max-width: 348px !important;
					}
				}
			`}</style>
			<div className="w-100 w-xl-348 bg-black text-center rounded-bottom overflow-hidden mb-2">
				<CubDays />
			</div>
		</>
	);
}
