import Step1 from "./Step";

const GetHelp = ({ toggleCheckboxes, help }) => {
	return (
		<div
			id="help-screen"
			className="p-5 position-absolute top w-100 h-100 d-none"
			style={{
				zIndex: "1001",
				background: `linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,1) 100%)`,
			}}>
			<div
				className="d-flex flex-column h-100 w-100  bg-white rounded p-5 position-relative"
				style={{ border: ".4em solid #000" }}>
				<button
					//onClick={() => help()}
					onClick={() => {
						toggleCheckboxes(false, true);
						help(true);
					}}
					className="position-absolute border-0 bg-black"
					style={{ top: "1em", right: "1em", width: "2.4em", height: "2.4em" }}>
					X
				</button>
				<div className="mb-5 border-bottom w-100 text-center pb-2">
					<h2>Find the plan that's right for you.</h2>
					<p>
						Answer a few short questions and we can help match you with a
						finance plan that meets your goals.
					</p>
				</div>
				<div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
					<Step1 />
				</div>
			</div>
		</div>
	);
};

export default GetHelp;
