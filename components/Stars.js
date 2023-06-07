const Stars = ({ fill, className }) => {
	return (
		<div className={`star-rating d-flex ${className}`}>
			{[...Array(5)].map((star, i) => {
				i += 1;
				return (
					<svg
						key={i}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48"
						style={{ enableBackground: "new 0 0 48 48" }}
						className="w-100">
						<path
							style={{ fill: fill }}
							d="m11.6 43 3.2-14L4 19.5l14.4-1.2L24 5l5.6 13.2L44 19.5 33.1 29l3.2 14L24 35.5 11.6 43z"
						/>
					</svg>
				);
			})}
		</div>
	);
};

export default Stars;
