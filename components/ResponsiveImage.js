"use client";
import { useEffect } from "react";

export default function ResponsiveImage({
	src,
	alt = "",
	className,
	style,
	id,
	hero = false,
}) {
	const breakpoints = [544, 768, 1025, 1366, 1920, 2048];

	useEffect(() => {
		let srcSet = src + ", ";
		let img = document.createElement("img");
		img.src = src;
		img.onload = function () {
			breakpoints.forEach((breakpoint) => {
				if (breakpoint < img.width) {
					if (id) {
						const ratio = (breakpoint / img.width).toFixed(4);
						const width = Math.round(img.width * ratio);
						const height = Math.round(img.height * ratio);

						srcSet += `${src}?resize=${width}x${height} ${breakpoint}w, `;
						document
							.querySelector("#" + id)
							.setAttribute("srcset", srcSet.substring(0, srcSet.length - 2));
					} else {
						console.error("add ID", img.width, img.height);
					}
				}
			});
		};
	});

	return (
		<img
			src={src}
			alt={alt}
			className={className}
			style={style}
			id={id}
			// HERO:
			rel={hero && "preload"}
			as={hero && "image"}
			fetchpriority={hero && "high"}
			decoding={hero && "async"}
			// NOT
			loading={!hero && "lazy"}
		/>
	);
}
