export default function Stars({
	className,
	stars = { average: 4.6, reviews: 43 },
}) {
	return (
		<div
			className={`flex items-center justify-center list-unstyled mb-0 ${className}`}>
			<span>{stars.average}</span>
			<span className="flex">
				{[...Array(5)].map((x, i) => (
					<svg
						key={i}
						xmlns="http://www.w3.org/2000/svg"
						width={28}
						height={28}
						viewBox="0 96 960 960">
						<defs>
							<linearGradient id="starGrad">
								<stop stopColor="#ffc20f" offset="0%" />
								<stop stopColor="#ffc20f" offset={stars.average * 10 + "%"} />
								<stop stopColor="#fff" offset={stars.average * 10 + "%"} />
								<stop stopColor="#fff" offset="100%" />
							</linearGradient>
						</defs>
						<path
							d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
							style={{ fill: i < 4 ? "#ffc20f" : "url(#starGrad)" }}
						/>
					</svg>
				))}
			</span>
			<span>
				<a href="#">({stars.reviews} Google Reviews)</a>
			</span>
		</div>
	);
}
