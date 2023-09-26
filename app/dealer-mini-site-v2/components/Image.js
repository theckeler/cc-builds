import Image from "next/image";

export default function ImageBlock({
	dealerSRC,
	src,
	className,
	style = {
		minHeight: "200px",
	},
}) {
	return (
		<div
			className={`${className} position-relative overflow-hidden h-100`}
			style={style}>
			<Image
				src={
					dealerSRC
						? dealerSRC
						: "https://www.cubcadet.com/on/demandware.static/-/Sites/default/dw14470f46/images/stores/heros/store-hero-default.png"
				}
				style={{
					objectFit: "cover",
				}}
				fill
				alt=""
			/>
		</div>
	);
}
