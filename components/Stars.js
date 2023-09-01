export default function Stars() {
	return (
		<div className="dealer-details-website-reviews d-none d-md-block">
			<ul className="flex align-items-center list-unstyled">
				{[...Array(5)].map((x, i) => (
					<li key={i}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={28}
							height={28}
							viewBox="0 96 960 960">
							<defs>
								<linearGradient id="starGrad">
									<stop stop-color="#ffc20f" offset="0%" />
									<stop stop-color="#ffc20f" offset="40%" />
									<stop stop-color="#fff" offset="40%" />
									<stop stop-color="#fff" offset="100%" />
								</linearGradient>
							</defs>
							<path
								d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
								style={{ fill: i < 4 ? "#ffc20f" : "url(#starGrad)" }}
							/>
						</svg>
					</li>
				))}
				<li className="ml-1">
					4.4
				</li>
			</ul>
		</div>
	);
}
