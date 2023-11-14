import ResponsiveImage from "@/components/ResponsiveImage";

export default function GuideBlock({
	href,
	heading,
	img,
	title,
	price,
	copy,
	button,
}) {
	function makeID(id) {
		return id
			.replace(/\s+/g, "-", "-")
			.replace('"', "")
			.replace(/\d+/g, "")
			.toLowerCase();
	}

	return (
		<a
			href={href}
			className="no-underline hover:no-underline hover:pointer p-2 flex flex-col h-full">
			{!!heading && (
				<p className="text-center p-2 mb-0 bg-black text-white">{heading}</p>
			)}

			<div className="relative bg-white p-2">
				<ResponsiveImage
					src={img.src}
					alt=""
					id={makeID(title)}
					className={`w-full h-auto ${img?.className}`}
					style={{ ...img?.style }}
				/>
			</div>

			<p className="text-xl mt-2">{title}</p>
			<p className="">{price}</p>
			<p className="">{copy}</p>
			<div className="mt-auto">
				<button
					className="btn bg-secondary w-full mt-2"
					style={{ padding: "0.9375rem 1.5625rem" }}>
					{button.title}
				</button>
			</div>
		</a>
	);
}
