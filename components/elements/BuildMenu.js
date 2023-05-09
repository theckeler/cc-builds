//langs: ["US", "CA", "CAFrench"]

const BuildMenu = ({ switchLang, setSwitchLang }) => {
	return (
		<div
			className="flex position-absolute fw-bold"
			style={{ zIndex: 10001, marginTop: "-3.8em", right: "1em" }}>
			<ul className="flex list-unstyled no-gutters p-1">
				<li className="p-1 text-uppercase text-secondary">Switch:</li>
				<li>
					{switchLang.langs.map((block, i) => {
						return (
							<button
								onClick={() => {
									document.querySelector("#loading").classList.toggle("d-none");
									setSwitchLang({ ...switchLang, active: block });
									setTimeout(() => {
										document
											.querySelector("#loading")
											.classList.toggle("d-none");
									}, "400");
								}}
								key={i}
								className={`p-1 ml-1 border text-uppercase ${
									switchLang.active === block && "active"
								}`}
								style={{
									background: switchLang.active === block ? "#ffc20f" : "#fff",
								}}>
								{block}
							</button>
						);
					})}
					<button
						onClick={() => ""}
						className="p-1 ml-4 border text-uppercase "
						style={{
							background: "#fff",
						}}>
						<s>Swap IMGs</s>
					</button>
				</li>
			</ul>
			<div
				id="loading"
				className="position-fixed p-8 w-100 h-100 flex justify-content-center align-items-center d-none"
				style={{
					zIndex: 10001,
					top: 0,
					left: 0,
					background: "rgba(0,0,0,0.6)",
				}}>
				<div className="border p-8 flex justify-content-center align-items-center bg-white">
					<h1>SWITCHING...</h1>
				</div>
			</div>
		</div>
	);
};

export default BuildMenu;
