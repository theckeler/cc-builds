const ImgCover = ({
	importData,
	className,
	addCSS,
	objectDesktopPos = "center",
	objectMobilePos = "center",
	maxWidth = "100%",
}) => {
	//console.log(addCSS);
	addCSS = { ...{ left: "0", top: "0" }, ...addCSS };
	//console.log("new", addCSS);

	return (
		<div
			className={`position-absolute w-100 h-100 ${className}`}
			style={addCSS}>
			<img
				src={importData.img}
				alt=""
				className="w-100 h-100 d-none d-md-block mx-auto"
				style={{
					objectFit: "cover",
					objectPosition: objectDesktopPos,
					maxWidth: maxWidth,
				}}
			/>
			{importData.mobile && (
				<img
					src={importData.mobile}
					alt=""
					className="w-100 h-100 d-block d-md-none"
					style={{
						objectFit: "cover",
						objectPosition: objectMobilePos,
						maxWidth: maxWidth,
					}}
				/>
			)}
		</div>
	);
};

export default ImgCover;
