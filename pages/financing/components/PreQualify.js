const PreQualify = () => {
	return (
		<div
			className="mt-6 mb-6 p-1"
			// style={{ backgroundColor: "#e2e2e2" }}
		>
			<ul className="container mb-0 p-4 flex flex-column flex-md-row list-unstyled">
				<li className="col-md-4 p-0">
					<div
						className="flex w-100 h-100 position-relative"
						style={{ minHeight: "300px" }}>
						<img
							src="https://staging-na01-mtd.demandware.net/on/demandware.static/-/Sites-cubcadet-Library/default/v1d5f49f5a13f1eba170bf9f8624abecd5fbcf8a0/images/ew/DealerIndoor-0170.jpg"
							alt=""
							className="position-absolute w-100 h-100"
							style={{
								top: 0,
								left: 0,
								objectFit: "cover",
							}}
						/>
					</div>
				</li>
				<li className="col-md-8 p-0">
					<div
						className="text-center p-4 flex flex-column justify-content-center align-items-center"
						style={{ backgroundColor: "#ffc20f", height: "100%" }}>
						<h2 className="h2">Find Out If You Pre-Qualify</h2>
						<hr
							className="w-100"
							style={{ maxWidth: "20%", borderTop: "3px solid #000" }}
						/>
						<p className="ml-auto mr-auto" style={{ maxWidth: "60%" }}>
							Get a decision in seconds with no impact to your credit score.
							Once approved, you can use your account immediately.
						</p>
						<a href="" className="btn btn-primary">
							See If You Pre-Qualify
						</a>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default PreQualify;
