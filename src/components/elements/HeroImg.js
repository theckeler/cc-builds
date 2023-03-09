const HeroImg = ({ hero }) => {
	// const srcsetBuild = hero.srcset.map((set) => `${set.img} ${set.size},`);
	// console.log(srcsetBuild);

	var srcsetBuild = "";
	//var sizesBuild = "";
	var i = 0;
	while (i < hero.srcset.length) {
		srcsetBuild += `${hero.srcset[i].img} ${hero.srcset[i].size}w,`;
		//	sizesBuild += `(max-width: ${hero.srcset[i].size}${hero.srcset[i].sizingType}) ${hero.srcset[i].size}${hero.srcset[i].sizingType},`;
		i++;
	}
	srcsetBuild = srcsetBuild.replace(/(^[,\s]+)|([,\s]+$)/g, "");

	return (
		<section
			className="position-relative"
			style={{ minHeight: hero.minHeight }}>
			<div className="position-absolute h-100 w-100">
				<img
					alt={hero.alt}
					className="w-100 h-100"
					style={{ objectFit: "cover" }}
					srcSet={srcsetBuild}
					//sizes={sizesBuild}
					src={hero.img}
				/>
			</div>
		</section>
	);
};

export default HeroImg;
