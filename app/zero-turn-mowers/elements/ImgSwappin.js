"use client";

export default function ImgSwappin({ imgType, res, orig }) {
	let Component = orig;
	if (imgType === "res") {
		Component = res;
	}

	return Component;
}
