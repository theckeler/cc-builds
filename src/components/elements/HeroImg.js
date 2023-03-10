const HeroImg = ({ hero, minHeightStyle = "", addClass = "" }) => {
	// const srcsetBuild = hero.srcset.map((set) => `${set.img} ${set.size},`);
	// console.log(srcsetBuild);

	// var srcsetBuild = "";
	// //var sizesBuild = "";
	// var i = 0;
	// while (i < hero.srcset.length) {
	// 	srcsetBuild += `${hero.srcset[i].img} ${hero.srcset[i].size}w,`;
	// 	//	sizesBuild += `(max-width: ${hero.srcset[i].size}${hero.srcset[i].sizingType}) ${hero.srcset[i].size}${hero.srcset[i].sizingType},`;
	// 	i++;
	// }
	// srcsetBuild = srcsetBuild.replace(/(^[,\s]+)|([,\s]+$)/g, "");

	return (
		// <img
		// 	alt={hero.alt}
		// 	className={`w-100 h-100 ${addClass}`}
		// 	style={{ objectFit: "cover", minHeight: minHeightStyle }}
		// 	srcSet={srcsetBuild}
		// 	//sizes={sizesBuild}
		// 	src={hero.img}
		// />
		<picture className="">
			{hero.srcset.map((block, i) => {
				return (
					<source
						media={`(min-width: ${block.size}${block.sizingType})`}
						srcset={block.img}
					/>
				);
			})}
			<img
				src={hero.img}
				alt=""
				className={`w-100 h-100 ${addClass}`}
				style={{ objectFit: "cover" }}
			/>
		</picture>
	);
};

export default HeroImg;
