// import ResponsiveImage from "@/components/ResponsiveImage";

const ImgCopyBlockStacked = ({ block, className, style, imgType = null }) => {
	return (
		<a
			href={block.url}
			className={`d-flex flex-column text-decoration-none ${className}`}
			style={style}>
			<div className="relative min-h-[10rem]">
				{imgType === "res" ? block.res : block.orig}
			</div>

			<div className="content d-flex flex-column p-1 h-100">
				<strong
					className="text-lg"
					dangerouslySetInnerHTML={{
						__html: block.title,
					}}
				/>
				<p
					className="mt-1 text-sm line-clamp-5"
					style={
						block.lineClamp && {
							overflow: "hidden",
							display: "-webkit-box",
							WebkitLineClamp: block.lineClamp,
							WebkitBoxOrient: "vertical",
						}
					}
					dangerouslySetInnerHTML={{
						__html: block.copy,
					}}
				/>
				<span
					className="mt-auto uppercase font-bold"
					style={{ textDecoration: "underline" }}>
					Read more
				</span>
			</div>
		</a>
	);
};

export default ImgCopyBlockStacked;
