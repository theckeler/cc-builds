"use client";

export default function Image({ className, img }) {
	const imgSizes = { xl: 1366, lg: 1025, md: 768, sm: 544, xs: 0 };

	let jpgSrcSet = "";
	if (img?.jpg) {
		for (const [key, val] of Object.entries(img.jpg)) {
			jpgSrcSet += `${val} ${imgSizes[key]}w, `;
		}
	}

	let webpSrcSet = "";
	if (img?.webp) {
		for (const [key, val] of Object.entries(img.webp)) {
			webpSrcSet += `${val} ${imgSizes[key]}w, `;
		}
	}

	return (
		<picture className={className}>
			<source type="image/webp" srcSet={webpSrcSet.slice(0, -2)} />
			<source type="image/jpg" srcSet={jpgSrcSet.slice(0, -2)} />
			<img
				alt={img.alt}
				fetchPriority={img.fetchpriority ? img.fetchpriority : "low"}
				decoding={img.decoding ? img.decoding : "async"}
				loading={img.loading ? img.loading : "lazy"}
				src={img.jpg.xl}
				className={`w-100 ${img.className}`}
				style={{ height: "auto" }}
				width={img.width}
				height={img.height}
				cl
			/>
		</picture>
	);
}
