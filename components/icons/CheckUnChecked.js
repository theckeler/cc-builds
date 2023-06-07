const Checkbox = ({ checked }) => {
	console.log(checked);
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
			<path
				fill={`${!checked ? "#fff" : "#ffc20f"}`}
				stroke="#000"
				strokeWidth="2"
				d="M13 25.5c-3.3 0-6.5-1.3-8.8-3.7C1.8 19.4.5 16.3.5 13s1.3-6.5 3.7-8.8C6.5 1.8 9.7.5 13 .5s6.5 1.3 8.8 3.7c2.4 2.4 3.7 5.5 3.7 8.8s-1.3 6.5-3.7 8.8c-2.3 2.4-5.5 3.7-8.8 3.7z"
			/>
			<g className={`${!checked ? "hidden" : ""}`}>
				<path d="M13 1C9.8 1 6.8 2.2 4.5 4.5S1 9.8 1 13s1.2 6.2 3.5 8.5S9.8 25 13 25s6.2-1.2 8.5-3.5S25 16.2 25 13s-1.2-6.2-3.5-8.5S16.2 1 13 1m0-1c7.2 0 13 5.8 13 13s-5.8 13-13 13S0 20.2 0 13 5.8 0 13 0z" />
				<path
					fill="none"
					stroke="#000"
					strokeWidth="2"
					d="m8.2 13.8 3.9 3.3 2.2-3.6 3.5-5.7"
				/>
			</g>
		</svg>
	);
};

export default Checkbox;
