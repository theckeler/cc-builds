"use client";

export default function Image({ img }) {
	const imgSizes = { xl: 1366, lg: 1025, md: 768, sm: 544, xs: 0 };

	// let webPImgs = [];
	// if (img?.webp) {
	// 	for (const [key, val] of Object.entries(img.webp)) {
	// 		webPImgs.push(
	// 			<source
	// 				media={`(min-width: ${imgSizes[key]}px)`}
	// 				key={key}
	// 				type="image/webp"
	// 				srcSet={val}
	// 			/>
	// 		);
	// 	}
	// }
	// let jpgImgs = [];
	// for (const [key, val] of Object.entries(img.jpg)) {
	// 	jpgImgs.push(
	// 		<source
	// 			media={`(min-width: ${imgSizes[key]}px)`}
	// 			key={key}
	// 			type="image/jpg"
	// 			srcSet={val}
	// 		/>
	// 	);
	// }

	let jpgSrcSet = "";
	for (const [key, val] of Object.entries(img.jpg)) {
		// if (key === img.jpg.length - 1) {
		// 	console.log("last", img.jpg.length);
		// }
		jpgSrcSet += `${val} ${imgSizes[key]}w, `;
	}

	let webpSrcSet = "";
	for (const [key, val] of Object.entries(img.webp)) {
		webpSrcSet += `${val} ${imgSizes[key]}w, `;
	}

	// console.log("webpSrcSet: ", webpSrcSet.slice(0, -2));

	return (
		<>
			{/* <img
				alt={img.alt}
				fetchpriority="high"
				decoding="async"
				data-nimg="fill"
				//className="w-100"
				style={{
					position: "absolute",
					height: "100%",
					width: "100%",
					// maxWidth: "100%",
					left: 0,
					top: 0,
					right: 0,
					bottom: 0,
					objectFit: "cover",
					color: "transparent",
				}}
				sizes="100vw"
				src={img.xl}
				srcSet={`${img.xs} 0w, ${img.sm} 544w, ${img.md} 768w, ${img.lg} 1025w, ${img.xl} 1366w`}
			/> */}

			<picture
				style={
					{
						//position: "absolute",
						//	height: "auto",
						//	width: "100%",
						// maxWidth: "100%",
						// left: 0,
						// top: 0,
						// right: 0,
						// bottom: 0,
						// objectFit: "cover",
						//	color: "transparent",
					}
				}>
				{/* <source
					media="(min-width: 1366px)"
					type="image/webp"
					srcSet="https://www.gstatic.com/webp/gallery/1.webp"
				/>
				<source
					media="(min-width: 1025px)"
					type="image/webp"
					srcSet="https://www.gstatic.com/webp/gallery/1.webp"
				/>
				<source
					media="(min-width: 768px)"
					type="image/webp"
					srcSet="https://www.gstatic.com/webp/gallery/1.webp"
				/>
				<source
					media="(min-width: 544px)"
					type="image/webp"
					srcSet="https://www.gstatic.com/webp/gallery/1.webp"
				/>
				<source
					media="(min-width: 0)"
					type="image/webp"
					srcSet="https://www.gstatic.com/webp/gallery/1.webp"
				/> */}

				{/* {webPImgs} */}
				{/* {jpgImgs} */}

				{/* <source media="(min-width: 1366px)" type="image/webp" srcSet={img.xl} />
				<source media="(min-width: 1025px)" type="image/webp" srcSet={img.lg} />
				<source media="(min-width: 768px)" type="image/webp" srcSet={img.md} />
				<source media="(min-width: 544px)" type="image/webp" srcSet={img.sm} />
				<source media="(min-width: 0)" type="image/webp" srcSet={img.xs} /> */}
				<source type="image/webp" srcSet={webpSrcSet.slice(0, -2)} />
				<source type="image/jpg" srcSet={jpgSrcSet.slice(0, -2)} />
				<img
					alt={img.alt}
					fetchPriority={img.fetchpriority}
					decoding={img.decoding}
					loading={img.loading}
					//className="w-100"
					// style={{
					// 	//position: "absolute",
					// 	height: "auto",
					// 	width: "100%",
					// 	// maxWidth: "100%",
					// 	// left: 0,
					// 	// top: 0,
					// 	// right: 0,
					// 	// bottom: 0,
					// 	// objectFit: "cover",
					// 	color: "transparent",
					// }}
					src={img.jpg.xl}
				/>
			</picture>
		</>
	);
}
