const Diagrams = () => {
	return (
		<div
			className="tab-diagrams show-tab"
			id="tab-diagrams"
			style={{ opacity: 1 }}>
			<div className="container">
				<div className="row">
					<div className="plb-group-heading col-12 col-lg-8 offset-lg-2 text-center">
						<h2>Lookup Parts By Diagram</h2>
						<p>
							Use our parts diagram tool below to find the parts you need for
							your machine. Select the model and year, then browse the parts
							diagrams to find the right part. Add to cart when you're ready to
							purchase and we'll ship it to you as soon as possible!
						</p>
					</div>
				</div>
				<div className="row">
					<h2 style={{ textAlign: "center", width: "100%" }}>Need Help?</h2>
					<nav className="buttons" style={{ width: "100%" }}>
						<ul className="list-unstyled d-flex flex-column flex-lg-row">
							<li className="col-lg-3 p-1">
								<button
									onClick="location.href='https://www.cubcadet.com/en_US/how-to-find-model-number.html'"
									title="How to Find Your Model Number"
									className="p-1"
									style={{
										width: "100%",
										background: "#ffc20f",
										color: "#000",
										fontSize: "0.875rem",
										lineHeight: "1rem",
										padding: "0.5rem 0.75rem",
										textTransform: "uppercase",
										fontWeight: 700,
										textDecoration: "none",
										border: 0,
										cursor: "pointer",
									}}>
									How to Find Your Model Number
								</button>
							</li>
							<li className="col-lg-3 p-1">
								<button
									onClick="location.href='https://support.cubcadet.com/s/article/10475-1'"
									title="How to Find Manufacture Year"
									className="p-1"
									style={{
										width: "100%",
										background: "#ffc20f",
										color: "#000",
										fontSize: "0.875rem",
										lineHeight: "1rem",
										padding: "0.5rem 0.75rem",
										textTransform: "uppercase",
										fontWeight: 700,
										textDecoration: "none",
										border: 0,
										cursor: "pointer",
									}}>
									How to Find Manufacture Year
								</button>
							</li>
							<li className="col-lg-3 p-1">
								<button
									onClick="location.href='https://www.cubcadet.com/en_US/service-and-parts'"
									title="Explore Service and Parts"
									className="p-1"
									style={{
										width: "100%",
										background: "#ffc20f",
										color: "#000",
										fontSize: "0.875rem",
										lineHeight: "1rem",
										padding: "0.5rem 0.75rem",
										textTransform: "uppercase",
										fontWeight: 700,
										textDecoration: "none",
										border: 0,
										cursor: "pointer",
									}}>
									Explore Service and Parts
								</button>
							</li>
							<li className="col-lg-3 p-1">
								<button
									onClick="openChat()"
									title="Start a Live Chat"
									className="p-1"
									style={{
										width: "100%",
										background: "#ffc20f",
										color: "#000",
										fontSize: "0.875rem",
										lineHeight: "1rem",
										padding: "0.5rem 0.75rem",
										textTransform: "uppercase",
										fontWeight: 700,
										textDecoration: "none",
										border: 0,
										cursor: "pointer",
									}}>
									Start a Live Chat
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className="wrap">
				<iframe
					data-hj-allow-iframe=""
					height="700px"
					src="https://www.cubcadet.com/en_US/ari-iframe.html?aribrand=CUT"
					width="100%"
				/>
			</div>
		</div>
	);
};

export default Diagrams;
