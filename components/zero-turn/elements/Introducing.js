import Button from "../@/c/Button";

const Introducing = ({ jsonData }) => {
	return (
		<section className="py-5 px-1">
			<div className="container">
				<ul className="list-unstyled d-flex flex-column flex-lg-row">
					<li className="col-12 col-lg-5 p-0 overflow-hidden">
						<img
							src={jsonData.introZTXS.img}
							alt={jsonData.introZTXS.alt}
							className="h-100"
							style={{
								clipPath: "polygon(2rem 0, 100% 0%, 100% 100%, 0 100%, 0 2rem)",
								objectFit: "cover",
								width: "101%",
							}}
						/>
					</li>
					<li className="col-12 col-lg-7 bg-secondary">
						<div className="p-3">
							<h2
								dangerouslySetInnerHTML={{ __html: jsonData.introZTXS.h2 }}
								className="mb-2 display-2"
							/>
							<h3
								dangerouslySetInnerHTML={{ __html: jsonData.introZTXS.h3 }}
								className="mb-2 display-3"
							/>
							<p
								dangerouslySetInnerHTML={{ __html: jsonData.introZTXS.p }}
								style={{ lineHeight: "1.8" }}
								className="mb-2"
							/>
							<Button
								addClass="bg-black"
								copy={jsonData.introZTXS.button.copy}
								url={jsonData.introZTXS.button.url}
							/>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Introducing;
