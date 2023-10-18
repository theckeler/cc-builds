// import ResponsiveImage from "@/components/ResponsiveImage";

const ImgCopyBlockStacked = ({ block, className, style, imgType = null }) => {
	return (
		<a
			href={block.url}
			className={`d-flex flex-column text-decoration-none ${className}`}
			style={style}>
			{imgType === "res" ? block.res : block.orig}
			<div className="content d-flex flex-column p-3 h-100">
				<strong
					className="h3"
					dangerouslySetInnerHTML={{
						__html: block.title,
					}}
					style={{ fontSize: "1.6em" }}
				/>
				<p
					className="copy mt-2"
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
					className="mt-auto text-uppercase font-weight-bold"
					style={{ textDecoration: "underline" }}>
					Read more
				</span>
			</div>
		</a>
	);
};

export default ImgCopyBlockStacked;
