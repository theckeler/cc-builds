import Image from "next/image";

export default function ImageBlock({
	src,
	className,
	style = {
		height: "400px",
	},
}) {
	return (
		<div className={`${className} position-relative`} style={style}>
			<Image
				src={src}
				style={{
					objectFit: "cover",
				}}
				fill
				alt=""
			/>
		</div>
	);
}
