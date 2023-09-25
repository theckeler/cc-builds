export default function Images({ small, large }) {
	return (
		<picture>
			<source media="(min-width: 768px)" srcSet={large} />
			<source media="(min-width: 1px)" srcSet={small} />
			<img
				alt=""
				className="w-100 h-100 position-absolute"
				src={large}
				loading="lazy"
				decoding="async"
				style={{ objectFit: "cover", zIndex: 0 }}
			/>
		</picture>
	);
}
