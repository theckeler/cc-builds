"use client";

export default function ImgSwappin({ imgType, res, orig }) {
	return(imgType === "res" ?  res : orig)
}
