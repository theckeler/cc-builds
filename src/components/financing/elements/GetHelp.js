import Step from "./Step";

const GetHelp = ({ toggleCheckboxes, help, offersData, numBlocks }) => {
	return (
		<div
			id="help-screen"
			className="p-5 position-absolute top w-100 h-100 d-none"
			style={{
				zIndex: "1001",
				background: `rgba(255,255,255,0.75)`,
			}}>
			<div
				className="d-flex flex-column w-100  bg-white rounded p-5 position-relative"
				style={{ border: ".4em solid #000" }}>
				<button
					onClick={() => {
						//toggleCheckboxes(false, true);
						help(true);
					}}
					className="position-absolute border-0 bg-black rounded-circle d-flex justify-content-center align-items-center"
					style={{
						top: ".2em",
						right: ".2em",
						width: "42px",
						height: "42px",
						fontSize: "2em",
						lineHeight: "-2px",
					}}>
					×
				</button>
				<div className="mb-5 border-bottom w-100 text-center pb-2">
					<h2>Find the plan that's right for you.</h2>
					<p>
						If you unselect the options that don't apply to you, we can assist
						you in finding a finance plan that aligns with your goals.
					</p>
					<p>Number of offers available: {numBlocks}</p>
				</div>
				<div className="w-100 h-100 d-flex flex-column justify-content-start align-items-center">
					<Step {...{ offersData, help }} />
				</div>
			</div>
		</div>
	);
};

export default GetHelp;
