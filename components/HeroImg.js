const HeroImg = ({ hero, minHeightStyle = "", addClass = "", addCSS }) => {
	return (
		<picture className="">
			{hero.srcset.map((block, i) => {
				return (
					<source
						media={`(min-width: ${block.size}${block.sizingType})`}
						srcSet={block.img}
						key={i}
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
