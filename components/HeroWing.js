const HeroWing = ({ left = false }) => {
	if (left) {
		return (
			<li
				className="col-md-2 d-none d-lg-flex justify-content-end"
				style={{
					background:
						"linear-gradient(to right, #ffc20f 0%, #ffc20f 70%, #000 70%, #000 100%)",
				}}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-100 w-auto"
					style={{
						enableBackground: "new 0 0 167.9 352",
						maxHeight: "24em",
					}}
					viewBox="0 0 167.9 352">
					<path d="M-1.8-.8h169.4v355.6H-1.8z" />
					<path
						d="M144.1 0 142 27.6c-.7 8.8-1.3 17.6-2 26.4-.3 4.1-.5 8.3-1 12.4s-2.4 7.3-6.2 9.3c-9.6 5.2-19.4 10.3-29.2 15.5-5.9 3.1-11.7 6.2-17.6 9.3-4.1 2.2-5.7 5.6-4.9 10.3l5.7 36c1.8 11.2 3.6 22.5 5.4 33.7 1.9 11.8 3.7 23.6 5.6 35.3 1.6 9.9 3.2 19.9 4.7 29.8 1.5 9.6 3.1 19.2 4.7 28.8 1.5 9.2 2.9 18.5 4.3 27.7.2 1.6.5 3.1.8 4.7.7 4 3.6 6.3 7.7 6.3h30.6c4.6 0 7.4 2.2 8.5 6.7 2.4 9.6 4.8 19.2 7.1 28.8.3 1.2.5 2.3.7 3.5H-1C-.8 234.6-.8 117.3-.8 0h144.9z"
						fill="#ffc20f"
					/>
				</svg>
			</li>
		);
	} else {
		return (
			<li
				className="col-md-2 d-none d-lg-block"
				style={{
					background:
						"linear-gradient(to left, #ffc20f 0%, #ffc20f 70%, #000 70%, #000 100%)",
				}}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 167.9 352"
					className="h-100 w-auto"
					style={{
						enableBackground: "new 0 0 167.9 352",
						transform: "scaleX(-1)",
						maxHeight: "24em",
					}}>
					<path d="M51.6-.8h116v355.6h-116z" />
					<path
						d="M144.1 0 142 27.6c-.7 8.8-1.3 17.6-2 26.4-.3 4.1-.5 8.3-1 12.4s-2.4 7.3-6.2 9.3c-9.6 5.2-19.4 10.3-29.2 15.5-5.9 3.1-11.7 6.2-17.6 9.3-4.1 2.2-5.7 5.6-4.9 10.3l5.7 36c1.8 11.2 3.6 22.5 5.4 33.7 1.9 11.8 3.7 23.6 5.6 35.3 1.6 9.9 3.2 19.9 4.7 29.8 1.5 9.6 3.1 19.2 4.7 28.8 1.5 9.2 2.9 18.5 4.3 27.7.2 1.6.5 3.1.8 4.7.7 4 3.6 6.3 7.7 6.3h30.6c4.6 0 7.4 2.2 8.5 6.7 2.4 9.6 4.8 19.2 7.1 28.8.3 1.2.5 2.3.7 3.5H-1C-.8 234.6-.8 117.3-.8 0h144.9z"
						fill="#ffc20f"
					/>
				</svg>
			</li>
		);
	}
};

export default HeroWing;
