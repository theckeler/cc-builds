const HeroImg = ({ hero, minHeightStyle = "", addClass = "", addCSS }) => {
	console.log(addCSS);
	return (
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
				style={{ objectFit: "cover", ...addCSS }}
			/>
		</picture>
	);
};

export default HeroImg;
