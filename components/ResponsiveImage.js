"use client";
import { useEffect } from "react";

export default function ResponsiveImage({
	src,
	alt = "",
	className,
	style,
	id,
	hero = false,
	webp = false,
}) {
	//const breakpoints = [544, 768, 1025, 1366, 1920, 2048];
	const breakpoints = [2048, 1920, 1366, 1025, 768, 544];

	useEffect(() => {
		let srcSetJpg = "";
		let srcSetWebp = "";
		let sizes = "";
		// sizes="(min-width: 500px) 500px, (min-width: 768px) 768px, (min-width: 1024px) 1024px, 100vw"
		// let srcSetJpg = src + ", ";
		let img = document.createElement("img");
		img.src = src;
		img.onload = function () {
			breakpoints.forEach((breakpoint) => {
				if (breakpoint < img.width) {
					if (id) {
						const ratio = (breakpoint / img.width).toFixed(4);
						const width = Math.round(img.width * ratio);
						const height = Math.round(img.height * ratio);

						srcSetJpg += `${src}?resize=${width}x${height} ${breakpoint}w, `;
						srcSetWebp += `${webp}?resize=${width}x${height} ${breakpoint}w, `;
						sizes += `(min-width: ${breakpoint}px) ${breakpoint}px, `;
					} else {
						//console.error("add ID", img.width, img.height);
					}
				}
			});
			if (id) {
				sizes += `100vw`;
				document
					.querySelector("#" + id + "-jpg")
					.setAttribute("srcset", srcSetJpg.substring(0, srcSetJpg.length - 2));
				document.querySelector("#" + id + "-jpg").setAttribute("sizes", sizes);
				if (webp) {
					document
						.querySelector("#" + id + "-webp")
						.setAttribute("sizes", sizes);

					document
						.querySelector("#" + id + "-webp")
						.setAttribute(
							"srcset",
							srcSetWebp.substring(0, srcSetWebp.length - 2)
						);
				}
			}
		};
	});

	return webp ? (
		<picture>
			{webp && <source id={`${id}-webp`} type="image/webp" />}
			<img
				alt={alt}
				className={className}
				style={style}
				id={id ? `${id}-jpg` : ""}
				src={src}
				// HERO:
				rel={hero ? "preload" : "false"}
				as={hero ? "image" : "false"}
				fetchPriority={hero ? "high" : "false"}
				decoding={hero ? "async" : "false"}
				// NOT
				loading={!hero ? "lazy" : "false"}
			/>
		</picture>
	) : (
		<img
			alt={alt}
			className={className}
			style={style}
			id={id ? `${id}-jpg` : ""}
			src={src}
			// HERO:
			rel={hero ? "preload" : "false"}
			as={hero ? "image" : "false"}
			fetchPriority={hero ? "high" : "false"}
			decoding={hero ? "async" : "false"}
			// NOT
			loading={!hero && "lazy"}
		/>
	);
}
